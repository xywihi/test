
export default function CardFour({cardInfo}:{cardInfo: any}) {
    
    return (
        cardInfo &&
        <div className="relative">
            <svg className="transform scale-[0.99]" width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.57233e-07 238.001L9.35541e-07 40.0001C1.02238e-06 17.9087 17.9086 5.94695e-05 40 5.75382e-05L229.45 4.0976e-05C238.544 4.0181e-05 247.367 3.09913 254.464 8.78632L283.573 32.1139C290.67 37.8011 299.493 40.9002 308.587 40.9002L376 40.9002C398.091 40.9002 416 58.8088 416 80.9002L416 238.001C416 260.092 398.091 278.001 376 278.001L40 278.001C17.9086 278.001 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="url(#paint0_linear_2_522)"/>
            <defs>
            <linearGradient id="paint0_linear_2_522" x1="208" y1="278.001" x2="208" y2="4.28512e-05" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9E313"/>
            <stop offset="1" stopColor="#3CBC34"/>
            </linearGradient>
            </defs>
            </svg>


            <div className="w-full h-full absolute top-0 hover:translate-x-[5px] hover:translate-y-[-5px]">
                <div className="w-full h-full relative">
                <svg width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="#131313"/>
                </svg>
                    <div className="h-full flex flex-col justify-between px-10 py-8 pb-4 absolute top-0 left-0">
                        <div className="w-[46px] h-[4px] bg-test111 rounded-full"></div>
                        <div>
                        <p className="font-[700] text-[16px] text-[#EDEDED]">{cardInfo.title}</p>
                            {
                                cardInfo.tags && cardInfo.tags.map((tag: any, index: number) => {
                                    return <span key={tag} className="inline-block mt-2 py-[4px] px-[8px] text-center rounded-[20px] text-textwhite border border-[#676767] text-test111 font-[400] text-[9px]">{tag}</span>
                                })
                            }
                        <p className="font-[400]] text-[12px] text-textgray mt-4">
                        {cardInfo.description}
                        </p>
                        </div>
                        <div className="mt-8 flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <div className="text-textwhite">
                            <span className="text-[12px] font-[400]">{cardInfo.duration}</span>
                            </div>
                            <div className="text-textwhite">
                            <span className="text-[12px] font-[400]">{cardInfo.courseNum}</span>
                            </div>
                        </div>
                        <div className="w-[140px] h-[36px] py-[8px] px-[16px]  bg-[#2A2A2A] rounded-[40px] ">
                            <span className="block text-[#9EFA13] text-[10px] font-[400] leading-[20px] text-center" >{cardInfo.progress}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}