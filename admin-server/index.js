const mongoose = require('mongoose')
const app = require('./routes')
const port = 3000



app.listen(port, () => {
  console.info(`server is running in ${port}端口`)
})
mongoose.connect('mongodb://localhost:27017/pcc', {useNewUrlParser: true})
const con = mongoose.connection
con.on('error', () => {
  console.error('数据库连接失败')
})
con.once('open',()=>{
    //成功连接
    console.info('数据库连接成功')
})
