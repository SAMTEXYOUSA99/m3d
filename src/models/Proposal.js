const mongoose = require('mongoose');


const ProposalSchema = new mongoose.Schema({
    //thumbnail: String,
    project_name: String,
    client_name: String,
    client_phone: String,
    project_model: String,
    project_price: Number,
    client_source: String,
    project_services: [String],
    //company: String,
    //price: Number,
    //uf: String,
    //techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserM3D'
    }

  });





module.exports = mongoose.model('Proposal', ProposalSchema);