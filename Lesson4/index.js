const mysql = require('mysql');

// ko viet dc await o ngoai
// self invoke function

(
  async () => {

    var mysql = require('mysql');
    // var connection = mysql.createConnection({
    //   host: '0.0.0.0:4306', // localhost 127.0.0.1 -- 0.0.0.0
    //   user: 'root',
    //   password: '1',
    //   database: 'fresher',
    // });

    const username = 'root';
    const password = '1';
    const host = 'localhost';
    const port = '4306';
    const database = 'fresher'

    // var connection = mysql.createConnection(`mysql://${username}:${password}@${host}:${port}/${database}`);

    // connection.connect();

    // connection.query('SELECT 1', (err, data) => {
    //   if (err) console.log(err)
    //   console.log(data)

    //   connection.destroy();
    //   // connection.end()
    // });

    // 

    var pool = mysql.createPool({
      database: 'fresher',
      user: 'root',
      password: '1',
      port: 4306,
      host: '0.0.0.0'
    });

    pool.getConnection((err, conn) => {
      if (err) console.log(err)
      conn.query('SELECT 1 + 1 as two', (err, data) => {
        console.log('data', data)
        pool.query('SELECT 2 + 2 as bon', (err, data) => {
        })
      })
    })



    const asyncGetConnection = async () => {
      console.log('inside function')
      return new Promise((resolve, reject) => {
        console.log('inside promise')
        pool.getConnection((err, conn) => {
          console.log('inside callback')
          if (err) reject(err)
          resolve(conn)
        })
      })
    }

    console.log('before get connection')
    const connection = await asyncGetConnection();
    console.log('after get connection')

    connection.query('SELECT 1 + 2 as ba', (err, data) => {
      console.log(data)
    })

  }
)().then().catch()

// `
// SELECT * FROM user INNER JOIN class ON user.id = class.id WHERE class.id > 4 AND user.diem = 9
// `

// `
//   SELECT * FROM users
//   WHERE user.id IN
//   (
//     SELECT history.user_id FROM history WHERE history.time > '15/04/1998'
//   )
// `

// userRepo
//   .createQueryBuiler('user')
//   .select('*')
//   .innerJoin('class', 'class', 'user.id = class.id')
//   .where('class.id > :param1', { param1: 4 })
//   .andWhere('user.diem = :diem ', { diem: 9 })
//   .execute()

// // n - 1
// // log5(n) - 2
