const os = require('os')
const amount =9

if (amount<10){
    console.log('small number');
} else{
    console.log('large number');
}

console.log(`hey it's my first node app!`)

const user = os.userInfo()
console.log(user);

console.log(`The System Uptime is ${os.uptime()/60/60} hours`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)