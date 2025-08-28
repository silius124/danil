export default function Header(){

    return (<>
    <div className="w-full h-[25.6rem] flex flex-col justify-between mb-10">
        <div className="w-full h-full md:h-[19.2rem] bg-cover bg-center" style={{backgroundImage: 'url("./src/assets/photos/bg-header.jpg")'}}></div>
        <HeaderContent />
    </div>
    </>)
}
function HeaderContent(){
    return(<div className="flex px-[20rem] items-end justify-between">
        <div className="size-[12.8rem] absolute left-[2rem] xl:left-1/4 border-4 border-white rounded-full flex items-center justify-center overflow-hidden"><img src="./src/assets/photos/548681d2611ac2f8afaf2b0aaef4da3fa36f380d.jpg" alt="" /></div>
       <div className="flex flex-col md:flex-row w-full">
        <div className="text-[2.4rem] font-bold leading-[3.2rem] w-full text-center ">Ricardo Cooper</div>
        <div className="flex gap-5">
            <button className="rounded-md bg-white px-5 py-3 text-[1.4rem] leading-[2rem] hover:bg-gray-300 cursor-pointer flex items-center gap-2">
                <div className="size-[2rem] items-center justify-center"><img src="./src/assets/icons/mail.svg" alt="" className="w-full h-full"/></div><div>Message</div></button>
            <button className="rounded-md bg-white px-5 py-3 text-[1.4rem] leading-[2rem] hover:bg-gray-300 cursor-pointer flex items-center gap-2"><div className="size-[2rem] items-center justify-center"><img src="./src/assets/icons/phone-left.svg" alt="" className="w-full h-full"/></div><div>Call</div></button>
        </div>
       </div>
       
    </div>)
}