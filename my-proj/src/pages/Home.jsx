import { useEffect, useState } from "react";
import { getBigImage , getImageList } from "../api/axios";
import Header from "../components/Header";
import ModalImage from "../components/ModalImage";

export default function Home(){
    const [images,setImages] = useState([])
    const [isOpenImage, setIsOpenImage] = useState(false)
    const [activeImage, setActiveImage] = useState()
    async function getImageListApi(){
        const res = await getImageList()
        setImages(res)
    }
    async function handleClickImage(id){
        const imageBig = await getBigImage(id)
        setActiveImage(imageBig)
        setIsOpenImage(true);
        document.querySelector('body').style.overflow = 'hidden'
    }
    useEffect(()=>{
        getImageListApi()
    },[])
    return (<div className="max-w-[135.8rem] mx-auto p-2">
        <Header />
        <ul className="flex flex-wrap w-full gap-11 justify-center items-center">
            {images.map((image)=> <li key={image.id} className="w-[43rem] h-[21.5rem] mb-5" onClick={() => handleClickImage(image.id)}>
                <div className={`rounded-2xl w-full h-full bg-cover bg-center cursor-pointer duration-200 hover:scale-95`} style={{backgroundImage: `url(${image.image})`}}></div>
                <div className="text-[1.4rem]">id: {image.id}</div>
            </li>)}
        </ul>
        {isOpenImage && <ModalImage closeModel={()=> {
            setIsOpenImage(false)
            document.querySelector('body').style.overflow = 'auto'
        }} image={activeImage}/>}
    </div>)
}