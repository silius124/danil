import {  useState } from "react";
import { addComment } from "../api/axios";

export default function ModalImage({closeModel, image}){
    const [comment, setComment] = useState('')
    const [isFail, setIsFail] = useState('idle')
    
    async function addCommentApi(){
        if(comment.length===0) return
            const res = await addComment(image.id, comment)
            if(res.status === 404){
                setIsFail('fail')
            }else {
                setIsFail('successed')
                setTimeout(()=>{
                    setIsFail('idle')
                },1000)
            }
    }
    return(<div className="fixed w-full z-50 inset-0 flex items-center justify-center bg-[#6B7280BF] text-white" onClick={()=>{closeModel()}} >
        <div className="xl:w-[69.3rem] xl:h-[85.2rem] flex flex-col items-center bg-white rounded-2xl w-[90%] px-10 py-5" onClick={(e)=>{e.stopPropagation()}}>
            <img src={image.largeImage} alt="" className="rounded-4xl w-[40.5rem] mb-20"/>
            <div className="text-[#374151] w-full mb-10"> 
                <label className="text-[1.4rem] font-medium leading-[1.4rem]">Comment</label>
                <textarea className="w-full h-[10.5rem] outline-none border-2 border-gray-500/50 rounded-xl text-[1.4rem]" name="comment-textarea" id="comment-textarea" value={comment} onChange={(e)=> setComment(e.target.value)}></textarea>
                <label htmlFor="" className="text-[1.4rem] leading-[2rem]">Write a few sentences about the photo.</label>
            </div>
            {isFail==='fail' && <p className="text-[1.4rem] text-red-500">Извините комментарий не сохранился</p>}
            {isFail==='successed' && <p className="text-[1.4rem] text-green-500">Отправлено</p>}
            <button onClick={addCommentApi} className="p-1 text-[1.4rem] mb-5 bg-indigo-600 w-[6.7rem] h-[3.8rem] rounded-xl hover:bg-indigo-900 cursor-pointer">Save</button>
            <div className="text-black flex flex-col items-start w-full">
                <div className="mb-5 text-[1.4rem] leading-[2rem]">Comments</div>
                <ul>
                    {image.comments.map((comment) => <li key={comment.id} className="mb-2 text-[1.4rem] leading-[2rem]">#{comment.id} {comment.author} {comment.text}</li>)}
                </ul>
            </div>
            
        </div>
        
    </div>)
}