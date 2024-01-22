console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(()=> {
      resolve('ticket');
    },1000);
  });

  const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
  const getCandy = new Promise((resolve,reject) => resolve(`candy`));
  const getButter = new Promise((resolve,reject) => resolve(`butter`));
  const getColdDrinks = new Promise((resolve,reject) => resolve(`coldDrinks`));


  let ticket = await promiseWifeBringingTicks;


  let [popcorn,candy,butter,coldDrinks]= await Promise.all([getPopcorn,getCandy,getButter,getColdDrinks]);
  
  console.log(`${popcorn} , ${candy} , ${butter} , ${coldDrinks}`);
  return ticket;  
}


preMovie().then((m) => console.log(`person3 shows ${m}`));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');