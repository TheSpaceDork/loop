const Billdetails = (props) => {
    const defaultURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9e_CSt6ZCOsnFAyaxof0bHKuxGYFc9QAyA&usqp=CAU"
    const value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    return (
        <div className="bg-[#f4f4f4] text-black px-2 lg:px-4 py-6 rounded-xl lg:rounded-[30px] w-full flex items-center justify-between">
            <div className="flex items-center space-x-3 w-[350px]  lg:w-[350px]">
                <div>
                    <img src={props.image || defaultURL} alt="bearer pic" className="rounded-full w-8 md:w-12 h-8 md:h-12" />
                </div>
                <div className="flex flex-col space-y-0 whitespace-nowrap "> <h1 className="font-semibold text-xs lg:text-lg"> {props.details}</h1>
            <h1 className="text-xs lg:text-md">{props.date} </h1></div>
            </div>
            <div className="w-[50px] lg:w-[200px] hidden md:flex  justify-between items-center text-xs lg:text-lg font-semibold">
                <p>
                    {props.time || value}
                </p>
                <p>
                   - $ {props.bill}
                </p>
            </div>
            <div className="w-[80px] lg:w-[200px]">
                {props.complete === true ?<h1 className="text-[#1ce783] text-xs lg:text-lg font-semibold">Completed</h1> : <h1 className="text-gray-500 text-xs lg:text-lg font-semibold">Pending</h1> }
           </div>
        </div>
    )
}

export default Billdetails