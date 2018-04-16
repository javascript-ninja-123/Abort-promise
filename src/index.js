// import AbortController from "abort-controller"

// const controller = new AbortController();
// const signal = controller.signal;
import './axios';
// import { AbortController, abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
// import _fetch from 'node-fetch';
// const { fetch } = abortableFetch(_fetch);
// //DOM
// const textInput = document.querySelector('#searchNumber');
// const button = document.querySelector('#button');
// const list = document.querySelector('.list');
//
//
// //abort
// const controller = new AbortController();
// const signal = controller.signal;
//
// //fetch
// const fetchCall =  url => async textInput => {
//   try{
//     const res = await fetch(`${url}${textInput}`,{signal})
//     return res.json();
//   }
//   catch(err){
//     if (err.name === 'AbortError') {
//          console.log('aborted');
//      }
//   }
// }
// const placeholerFetchCall = fetchCall('https://jsonplaceholder.typicode.com/posts/');
//
//
// //fetch help function
// const placeholerFetchCallHelper = async (textInput) => {
//   if(textInput !== ''){
//     const res = await placeholerFetchCall(textInput);
//     const li = `
//       <li>
//         ${res.title}
//       </li>
//     `
//     list.insertAdjacentHTML('beforeend',li)
//   }
//   else return console.log("nothing here")
// }
//
// const abortFetching = () => {
//     console.log('Now aborting');
//     controller.abort()
// }
//
//
//
// textInput.addEventListener('keyup', async () => {
//   await placeholerFetchCallHelper(textInput.value)
//   const listArray = Array.from(list.children)
//   if(listArray.length > 5){
//     abortFetching();
//     console.log('no more serach for you. Please buy premium')
//   }
// })
