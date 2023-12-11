const express = require('express')
const router = express.Router()

const Siswacontroller = require('../controller/siswa')

router.get('/siswas', Siswacontroller.index)

router.get('/siswa/:id', Siswacontroller.show)

router.post('/siswa', Siswacontroller.store)

router.put('/siswa/:id', Siswacontroller.update)

router.delete('/siswa/:id', Siswacontroller.delete)

module.exports = router