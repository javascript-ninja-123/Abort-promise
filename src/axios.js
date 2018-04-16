import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
var cancel;

const textInput = document.querySelector('#searchNumber');
const button = document.querySelector('#button');
const list = document.querySelector('.list');

const requestId = 'my_sample_request';
 const fetchCall =  url => async textInput => {
  try{
    const {data} = await axios(`${url}${textInput}`,{
      cancelToken: source.token
    })
    return data;
  }
  catch(err){
    if (axios.isCancel(err)) {
      console.log('request cancelled');
      return err;
    } else {
      console.log('some other reason');
      return err;
    }
  }
}

const placeholerFetchCall = fetchCall('https://jsonplaceholder.typicode.com/posts/');





textInput.addEventListener('keyup', async () => {
    if(textInput.value !== ''){
      setTimeout(async() => {
        const [result1,result2] = await Promise.all([
          placeholerFetchCall(textInput.value),
          placeholerFetchCall(textInput.value+ 1)
        ])
        console.log(result1)
        console.log(result2)
      },2000)

    }
    else return console.log('nothing to fetch')
})


button.addEventListener('click', (e) => {
  console.log('it is called')
  e.preventDefault();
  source.cancel();
})
