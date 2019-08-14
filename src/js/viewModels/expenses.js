define(['ojs/ojmodel'], function(){
  console.log(oj.Model);

  var user = new oj.Model({
    name: 'Anoop',
    age: 28,
  });

  console.log(user.toJSON());
  console.log(user.has('age1'));
  return {};
});