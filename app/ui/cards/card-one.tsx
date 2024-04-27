export default function CardOne({cardInfo}:{cardInfo: any}) {
    
    return (
        cardInfo &&
        <div className="relative">
                <svg width="416" className="transform scale-[0.99]" height="279" viewBox="0 0 416 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.9999 0.000284459L384 -0.000409899C401.673 -0.000444761 416 14.3265 416 31.9996L416 163.026C416 168.42 414.637 173.725 412.037 178.451L410.141 181.897C404.655 191.868 404.879 204.003 410.727 213.766L411.451 214.975C414.428 219.944 416 225.627 416 231.419L416 246.365C416 264.038 401.673 278.365 384 278.365L32 278.365C14.327 278.365 7.9993e-05 264.038 5.02492e-05 246.365L2.03859e-05 231.419C-9.87808e-06 225.627 1.5721 219.944 4.54867 214.975L5.27282 213.766C11.1213 204.003 11.3444 191.868 5.8587 181.897L3.96279 178.451C1.36312 173.725 -7.3735e-06 168.419 -7.13738e-06 163.026L-1.40101e-06 32.0003C-6.27273e-07 14.3272 14.3268 0.000319321 31.9999 0.000284459Z" fill="url(#paint0_linear_1_266)"/>
                <defs>
                <linearGradient id="paint0_linear_1_266" x1="416.051" y1="130.105" x2="0.050602" y2="130.105" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38C1A5"/>
                <stop offset="1" stopColor="#0891D5"/>
                </linearGradient>
                </defs>
                </svg>

            <div className="w-full h-full absolute top-0 hover:translate-x-[5px] hover:translate-y-[-5px]">
                <div className="w-full h-full  relative">
                    <svg className="absolute z-0 top-0" width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.9999 0.000756464L384 6.30388e-05C401.673 2.82235e-05 416 14.3269 416 32.0001L416 162.792C416 168.192 414.634 173.503 412.028 178.232L410.162 181.621C404.664 191.601 404.888 203.751 410.749 213.522L411.442 214.677C414.424 219.649 416 225.339 416 231.137L416 246C416 263.673 401.673 278 384 278L32 278C14.3269 278 4.94914e-05 263.673 1.97476e-05 246L-1.01193e-05 231.137C-4.0383e-05 225.339 1.57549 219.649 4.55816 214.677L5.25124 213.521C11.1121 203.751 11.3356 191.6 5.83807 181.621L3.97134 178.232C1.36614 173.503 -3.78811e-05 168.191 -3.76447e-05 162.792L-3.19186e-05 32.0008C-3.11449e-05 14.3277 14.3268 0.00079128 31.9999 0.000756464Z" fill="#131313"/>
                    </svg>
                    <div className="h-full flex flex-col justify-between px-10 py-8 pb-4 absolute top-0 left-0">
                        {/* <div className="w-[46px] h-[4px] bg-test111 rounded-full"></div> */}
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