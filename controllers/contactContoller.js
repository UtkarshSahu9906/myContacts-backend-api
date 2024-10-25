const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts =asyncHandler(async(req,res)=>{
   const contacts =await Contact.find();
    res.status(200).json(contacts);
});


//@desc Create all contacts
//@route POST /api/contacts
//@access public
//201 for a resource created

const createContact =asyncHandler(async(req,res)=>{
    console.log(req.body);
    const{name,email,phone}=req.body;
    if(!name ||!email||!phone){
        res.status(400);
        throw new Error("All fields are mandatory");

    }
    const contact =await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});



//@desc Get  contacts
//@route GET /api/contacts/:id
//@access public

const getContact =asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});




//@desc update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact =asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
});




//@desc Delete  contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
    // Step 1: Find the contact by its ID

    
    const contact = await Contact.findByIdAndDelete(req.params.id);

    // Step 2: Check if the contact exists
    if (!contact) {
        res.status(404); // Set status to 404 (Not Found)
        throw new Error("Contact not found"); // Throw an error if the contact is not found
    }

    // Step 3: Delete the contact

    // Step 4: Send a response with the deleted contact
    res.status(200).json(contact);
});



module.exports ={getContacts,createContact,getContact,updateContact,deleteContact};