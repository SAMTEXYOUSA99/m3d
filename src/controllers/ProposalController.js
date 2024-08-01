const Proposal = require('../models/Proposal');
const UserM3D = require('../models/UserM3D');

module.exports = {
    async store(req, res){
        const {project_name, 
            client_name, client_phone, 
            project_model, project_price, client_source, 
            project_services} = req.body;
        const {user_id} = req.headers;

        const user = await UserM3D.findById(user_id);

        if(!user) {
            return res.status(400).json({error: 'user does not exist'});
        }

        const proposal = await Proposal.create({
            user: user_id,
            project_name,
            client_name,
            client_phone,
            project_model,
            project_price,
            client_source,
            //company,
            project_services: project_services.split(',').map(tech => tech.trim()),
        })

        return res.json(proposal);
    }
}