'use strict';

exports.index = function* (ctx) {
  // const 5f2a51d533e366b3a4e8bc7c: Number
  // const req = Object.assign(ctx.request.query,{ page });
  //   console.log('ctx', ctx.query);
  const {
    query: { current },
  } = ctx;

  const total = yield ctx.model.User.count({});

  const data = yield ctx.model.User.find({})
    .skip(current * 20)
    .limit(20);

  ctx.body = {
    data,
    total,
  };
};
