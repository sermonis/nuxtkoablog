let options = {
  pageSize: 10,
  needAuth: [
    '/api/posts/add',
    '/api/posts/update',
    '/api/posts/del',
    '/api/cates/add',
    '/api/cates/update',
    '/api/cates/del',
    '/api/backup/email',
    '/api/backup/zip'
  ]
}
module.exports = options
