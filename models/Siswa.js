const mongoose = require('mongoose')

const SiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Isikan nama'],
    },
    jurusan: {
        type: String,
        required: [true, 'Isikan jurusan'],
    },
    kelas: {
        type: Number,
        required: [true, 'masukan kelas'],
    },
    nis: {
        type: Number,
        required: [true, 'masukan nis'],
    },
    email: {
        type: String,
        required: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isikan valid!']
    }
})

module.exports = mongoose.model('Siswa', SiswaSchema)