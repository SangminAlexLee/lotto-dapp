// contracts/Note.sol 솔리디티 코드를 불러와
// Note.sol이 있는 경로를 만든다.
// 해당 경로를 통해 fs로 파일을 불러온다
// solc를 통해 compile을 한다.


const solc = require('solc'); // .js 파일을 불러
const path = require('path'); // file path resolution. 
const fs = require('fs'); 

const filePath = path.resolve(__dirname, 'contracts','Lottery.sol'); 

const src = fs.readFileSync(filePath, 'utf8'); 

// console.log(solc.compile(src, 1).contracts[':Note']);
// console.log(solc.compile(src, 1));

module.exports = solc.compile(src, 1).contracts[':Lottery']; 