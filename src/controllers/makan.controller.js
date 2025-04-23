// daftar 
const makan = [
    {
      id: 1,
      nama: 'Pizza',
      restoran: 'Premium Local Pizza',
      rating: 90
    },
    {
      id: 2,
      nama: 'Burger',
      restoran: 'Burger Bangor',
      rating: 92
    },
    {
      id: 3,
      nama: 'Spaghetti Bolognese',
      restoran: 'Leng Coffee',
      rating: 87
    }
  ]

const getAllMakan = (req, res) => {
    res.json(makan)
}

const getMakanById = (req, res) => {
  const id = req.params.id;
  const makanById = makan.find((makan) => makan.id === parseInt(id));
  if (makanById) {
    res.json(makanById);
  } else {
    res.status(404).json({ message: 'makanan tidak ditemukan' });
  } 
  // ambil id dari params
}

const createMakan = (req, res) => {
  const { nama, restoran, rating } = req.body;
  const newMakan = {
    id: makan.length + 1,
    nama,
    restoran,
    rating
  };
  makan.push(newMakan);
  res.status(201).json(newMakan);

    
}

const updateMakan = (req, res) => {
  const id = parseInt(req.params.id);
  const { nama, restoran, rating } = req.body;
  const makanIndex = makan.findIndex((b) => b.id === id);

  if (makanIndex !== -1) {
    makan[makanIndex] = {
      ...makan[makanIndex],
      nama,
      restoran,
      rating
    };
    res.json({
      status: 200,
      message: 'Makanan berhasil diperbarui',
      data: makan[makanIndex]
    });
  } else {
    res.status(404).json({ message: 'Makanan tidak ditemukan' });
  }
}

const deleteMakan = (req, res) => {
  const id = parseInt(req.params.id);
  const makanIndex = makan.findIndex((b) => b.id === id);
  
  if (makanIndex !== -1) {
    const deletedMakan = makan[makanIndex];
    makan.splice(makanIndex, 1);
    res.json({
      status: 200,
      message: 'Makanan berhasil dihapus',
      data: deletedMakan
    });
  } else {
    res.status(404).json({ message: 'Makanan tidak ditemukan' });
  }
}

module.exports = {
    getAllMakan,
    getMakanById,
    createMakan,
    updateMakan,
    deleteMakan
}
