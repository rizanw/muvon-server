module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    name: String,
    description: String,
    size: Number,
    allergens: String,
    price: Number,
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("product", schema);
};
