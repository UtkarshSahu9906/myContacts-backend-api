//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts =(req,res)=>{
    res.status(200).json({message:"Get All contacts"});
}


//@desc Create all contacts
//@route POST /api/contacts
//@access public
//201 for a resource created

const createContact =(req,res)=>{
    res.status(201).json({message:"create contact"});
}



//@desc Get  contacts
//@route GET /api/contacts/:id
//@access public

const getContact =(req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`});
}




//@desc update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact =(req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`});
}




//@desc Delete  contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact =(req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`});
}
module.exports ={getContacts,createContact,getContact,updateContact,deleteContact};