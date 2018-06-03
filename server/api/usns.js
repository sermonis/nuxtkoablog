import Usns from '../models/Usns'
import NoteCates from '../models/NoteCates'
import Cates from '../models/Cates'
import Posts from '../models/Posts'
import Notes from '../models/Notes'
import { getTen } from '../../util/tools'

const { tables, tableids, usnstates } = require('../config/state')

const router = require('koa-router')()
const db = require('../../util/db')
const _ = require('lodash')

let usnsModel = new Usns()
let notecatesModel = new NoteCates()
let catesModel = new Cates()
let postsModel = new Posts()
let notesModel = new Notes()

router.post('/init', async (ctx, next) => {
  var body = ctx.request.body
  let tag = body.tag
  let table = body.table

  var res = await usnsModel.ids(table)
  if (!res.error) {
    var ids = res.result.map(item => item.id)
    var result_error = 0
    var result_success = 0
    for (let i in ids) {
      let params = {
        tag: parseInt(tag),
        tagid: ids[i],
        usn: 1,
        state: 1
      }
      let addresult = await usnsModel.create(params)
      if (addresult.error) {
        result_error++
      } else {
        result_success++
      }
    }
    ctx.status = 200
    ctx.body = {
      code: 200,
      message: `表格：${table}，添加成功：${result_success}，添加失败：${result_error}`
    }
  } else {
    ctx.status = 200
    ctx.body = { code: 404, message: `查询${body.table}ids失败` }
  }
})

// 同步状态，获取
router.get('/sync/state', async (ctx, next) => {
  let usn = ctx.query.usn
  let res = await usnsModel.getState(usn)
  let usns = []
  if (!res.error) {
    usns = res.result
  }
  // 笔记分类
  let notecateids = usns.filter(item => item.tag === tableids['notecates'] && item.state > 0).map(item => item.tagid)
  let notecatesRes = await notecatesModel.findids(notecateids)
  let notecates = []
  if (!notecatesRes.err) {
    notecates = notecatesRes.result
  }
  // 分类
  let cateids = usns.filter(item => item.tag === tableids['cates'] && item.state > 0).map(item => item.tagid)
  let catesRes = await catesModel.findids(cateids)
  let cates = []
  if (!catesRes.err) {
    cates = catesRes.result
  }

  ctx.status = 200
  ctx.body = {
    notecates,
    cates,
    usns
  }
})

router.get('/sync/post', async (ctx, next) => {
  let ids = ctx.query.ids
  let res = await postsModel.findByIds(ids)
  if (!res.err) {
    ctx.status = 200
    ctx.body = {
      code: 200,
      list: res.result
    }
  } else {
    ctx.state = 200
    ctx.body = { code: 404, message: `查询post_ids_${ids}失败` }
  }
})

router.get('/sync/note', async (ctx, next) => {
  let ids = ctx.query.ids
  let res = await notesModel.findByIds(ids)
  if (!res.err) {
    ctx.status = 200
    ctx.body = {
      code: 200,
      list: res.result
    }
  } else {
    ctx.state = 200
    ctx.body = { code: 404, message: `查询note_ids_${ids}失败` }
  }
})

module.exports = router
