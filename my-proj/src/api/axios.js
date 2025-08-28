import axios from 'axios';

export async function getImageList(){
    try{
        const res = await axios.get('http://test-backend.itdelta.agency/api/images')

        return res.data
    }catch(e){
        console.log(e)
    }
}
export async function getBigImage(imageId){
    try{
        const res = await axios.get(`http://test-backend.itdelta.agency/api/image/${imageId}`)
        return res.data
    }catch(e){
        console.log(e)
    }
}
export async function addComment(imageId, comment){
    try{
        const res =await axios.post(`http://test-backend.itdelta.agency/api/image/${imageId}/comments`,{comment: comment}, {
            headers: {
                'Content-type': 'application/json',
            }
        })
        return res.data
    }catch(e){
        console.log(e)
        return e
    }
}