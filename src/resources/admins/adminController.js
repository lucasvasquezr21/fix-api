import Admin from './adminModel.js';

// Obtener todos los admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener los admins' });
  }
};

// Obtener un admin por ID
export const getAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin no encontrado' });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener el admin' });
  }
};

// Crear un admin
export const createAdmin = async (req, res) => {
  const { name, email, password, country, comuna, city, phone, rol, data } = req.body;
  try {
    const admin = new Admin({
      name,
      email,
      password,
      country,
      comuna,
      city,
      phone,
      rol,
      data,
    });
    const nuevoAdmin = await admin.save();
    res.status(201).json(nuevoAdmin);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el admin' });
  }
};

// Modificar un admin
export const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, country, comuna, city, phone, rol, data } = req.body;
  try {
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin no encontrado' });
    }
    if (name) admin.name = name;
    if (email) admin.email = email;
    if (password) admin.password = await bcryptjs.hash(password, 10);
    if (country) admin.country = country;
    if (comuna) admin.comuna = comuna;
    if (city) admin.city = city;
    if (phone) admin.phone = phone;
    if (rol) admin.rol = rol;
    if (data) admin.data = data;
    
    const adminActualizado = await admin.save();
    res.status(200).json(adminActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar el admin' });
  }
};

// Eliminar un admin
export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin no encontrado' });
    }
    res.json({ message: 'Admin eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el admin' });
  }
};
