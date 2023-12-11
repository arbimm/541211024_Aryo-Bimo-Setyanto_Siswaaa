const Siswa = require('../models/Siswa')

module.exports = {
    // get all Spps
    index: async (req, res) => {
        try {
            const siswas = await Siswa.find()
            res.json(siswas)
            // if (Spps.length > 0) {
            //     res.status(200).json({
            //         status: true,
            //         data: Spps,
            //         method: req.method,
            //         url: req.url
            //     })
            // } else {
            //     res.json({
            //         status: false,
            //         message: "Data Masih Kosong"
            //     })
            // }
        } catch (error) {
            res.status(400).json({ success: false })
        }
    },

    // get a Spp
    show: async (req, res) => {
        try {
            const siswa = await Siswa.findById(req.params.id)
            res.json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }

    },

    store: async (req, res) => {
        try {
            const siswa = await Siswa.create(req.body)
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambah"
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    },

    update: async (req, res) => {
        try {
            const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }

    },

    delete: async (req, res) => {
        try {
            await Siswa.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    }
}