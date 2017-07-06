exports.findAllUser = (ctx) => {
  return new Promise((resolve, reject) => {
    ctx.app.pool.getConnection(function (err, connection) {
      if (connection) {
        connection.query('SELECT * FROM user', function (error, results, fields) {
          connection.release()
          if (results) {
            resolve(results)
          } else {
            reject(error)
          }
        })
      } else {
        reject(err)
      }
    })
  })
}
