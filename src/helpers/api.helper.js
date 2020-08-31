import { APIURL } from './environment';
import { getToken } from '../helpers/authentication';

function SecurePost(url, body){
    const opt = {
        headers: { 'Content-Type': 'application/json', 'Authorization':'Bearer '+getToken() },
        method:'POST',
        mode:'cors',
        body:JSON.stringify(body)
    }
   return fetch(APIURL+url,opt).then(r => { return r.json() } ).then((res)=> {
        return res;
    }).catch(err => {
       if(err){
        return err;
       }
    })
}

function Post(url, body){
    const opt = {
        headers: { 'Content-Type': 'application/json' },
        method:'POST',
        mode:'cors',
        body:JSON.stringify(body)
    }
   return fetch(APIURL+url,opt).then(r => { return r.json() } ).then((res)=> {
        return res;
    }).catch(err => {
       if(err){
        return err;
       }
    })
}

function PostImage(url, body){
    const opt = {
        headers: {'Authorization':'Bearer '+getToken() },
        method:'POST',
        mode:'cors',
        body:body
    }
   return fetch(APIURL+url,opt).then(r => r.json()).then((res)=> {
     
       if(res && res.status === 1){
        return res;
       }
    }).catch(err => {
       if(err){
        return err;
       }
    })
}

function SecureGet(url){
    const opt = {
        headers: { 'Content-Type': 'application/json', 'Authorization':'Bearer '+getToken() },
        method:'GET',
        mode:'cors',
    }
   return fetch(APIURL+url,opt).then(r => r.json()).then((res)=> {
       if(res){
        return res;
       }
    }).catch(err => {
       if(err){
        return err;
       }
    })
}
function Get(url){
    const opt = {
        headers: { 'Content-Type': 'application/json' },
        method:'GET',
        mode:'cors',
    }
   return fetch(APIURL+url,opt).then(r => r.json()).then((res)=> {
       if(res){
        return res;
       }
    }).catch(err => {
       if(err){
        return err;
       }
    })
}
export {
    SecurePost,
    SecureGet,
    PostImage,
    Get,
    Post
}