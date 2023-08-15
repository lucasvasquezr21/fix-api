const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const mongoose = require('mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
  branding: {
    companyName: 'Mi Empresa',
    logo: '/path/to/your/logo.png',
  },
  resources: [
    {
      resource: mongoose.model('User'),
      options: {
        parent: {
          name: 'Admin Section',
          icon: 'Accessibility',
        },
      },
    },
    {
      resource: mongoose.model('Categoria'),
      options: {
        parent: 'Admin Section',
      },
    },
  ],
  locale: {
    translations: {
      labels: {
        User: 'Usuario',
        Categoria: 'Categoría',
      },
    },
  },
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@example.com',
  password: process.env.ADMIN_PASSWORD || 'admin',
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
  cookiePassword: process.env.COOKIE_PASSWORD || 'cookie-password',
});

module.exports = router;