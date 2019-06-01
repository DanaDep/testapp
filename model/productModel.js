const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId: String,
    name: String,
    description: String,
    service:{
        serviceId: String,
        serviceName: String,
        serviceType: String
    }
});

module.exports = mongoose.model('Product', productSchema);
