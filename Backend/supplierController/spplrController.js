const Supplier =require('../supplierModel/spplrModels')

const getAllSupplier = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSupplier = async (req, res) => {
  const suppliers = new Supplier({
    supplierName : req.body.supplierName ,
    supplierAddress : req.body.supplierAddress ,
    supplierTaxno : req.body.supplierTaxno ,
    supplierCountry : req.body.supplierCountry ,
    supplierPhone : req.body.supplierPhone ,
    supplierEmail : req.body.supplierEmail ,
    supplierStatus : req.body.supplierStatus ,

  });

  try {
    const newsuppliers = await suppliers.save();
    res.status(201).json(newsuppliers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
    getAllSupplier,
    createSupplier,
};