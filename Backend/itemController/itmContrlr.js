const Item =require('../itemModels/itmModels')

const getAllItem = async (req, res) => {
  try {
    const item = await Item.find();
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createItem = async (req, res) => {
  const item = new Item({
    itemName : req.body.itemName ,
    itemLocation : req.body.itemLocation ,
    itemBrand : req.body.itemBrand ,
    itemCategory : req.body.itemCategory ,
    supplierSelection : req.body.supplierSelection ,
    itemStockUnit : req.body.itemStockUnit ,
    itemUnitPrice : req.body.itemUnitPrice ,
    itemStatus : req.body.itemStatus ,

  });

  try {
    const newitem= await item.save();
    res.status(201).json(newitem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
    getAllItem,
    createItem,
};