'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // const conn = app.mongooseDB.get('zc');

  const UserSchema = new Schema({
    _id: { type: mongoose.ObjectId },
    content: { type: String },
    pubtime: { type: String },
    tagno: { type: String },
    title: { type: String },
    url: { type: String },
  });

  return mongoose.model('zc', UserSchema, 'zc');
};

