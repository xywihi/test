
export default function CardFour({cardInfo}:{cardInfo: any}) {
    
    return (
        cardInfo &&
        <div className="m-auto relative max-w-max smallPhone:w-[calc(100vw-2rem)]">
            <svg className="max-w-full transform scale-[0.99] h-auto" width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="max-w-full h-auto" width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="#131313"/>
                </svg>
                    <div className="h-full flex flex-col justify-between px-10 py-8 pb-4 absolute top-0 left-0 smallPhone:px-5 smallPhone:py-4">
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
                        <div className="mt-8 flex items-center justify-between smallPhone:mt-4">
                        <div className="flex items-center space-x-6 smallPhone:space-x-3">
                            <div className="text-textwhite flex items-center space-x-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C5.14346 14 3.36303 13.2625 2.05029 11.9497C0.737494 10.637 0 8.85649 0 7C0 5.14351 0.737494 3.36303 2.05029 2.05029C3.36298 0.737495 5.14351 0 7 0C8.85649 0 10.637 0.737495 11.9497 2.05029C13.2625 3.36298 14 5.14351 14 7C14 8.85649 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85649 14 7 14ZM7 0.583346C5.29826 0.583346 3.66602 1.25942 2.46278 2.46273C1.25947 3.66615 0.583396 5.29821 0.583396 6.99995C0.583396 8.70169 1.25947 10.3339 2.46278 11.5372C3.6662 12.7405 5.29826 13.4166 7 13.4166C8.70174 13.4166 10.334 12.7405 11.5372 11.5372C12.7405 10.3337 13.4166 8.70169 13.4166 6.99995C13.4166 5.29821 12.7405 3.66597 11.5372 2.46273C10.3338 1.25942 8.70174 0.583346 7 0.583346Z" fill="#F2F2F2"/>
                                <path d="M11.3756 7.58381H6.70883C6.5478 7.58381 6.41724 7.45325 6.41724 7.29222V2.6255C6.41724 2.46447 6.5478 2.3338 6.70883 2.3338C6.86997 2.3338 7.00053 2.46447 7.00053 2.6255V7.00047H11.3755C11.5365 7.00047 11.6672 7.13103 11.6672 7.29217C11.6672 7.4532 11.5366 7.58381 11.3756 7.58381Z" fill="#F2F2F2"/>
                                </svg>
                                <span className="text-[12px] font-[400]">{cardInfo.duration}</span>
                            </div>
                            <div className="text-textwhite flex items-center space-x-2">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.57865 12.8638V2.04656C7.19858 0.856661 4.21409 0.919762 2.76935 1.10005V11.8186C6.08177 11.2105 7.35572 12.2621 7.57865 12.8638Z" stroke="#F2F2F2" strokeWidth="0.6"/>
                                <path d="M7.57785 12.8638V2.04656C7.95791 0.856661 10.9424 0.919762 12.3871 1.10005V11.8186C9.07472 11.2105 7.80077 12.2621 7.57785 12.8638Z" stroke="#F2F2F2" strokeWidth="0.6"/>
                                <path d="M2.75602 2.42984H1V13.6857L14.0904 13.9999V2.42984H12.3343" stroke="#F2F2F2" strokeWidth="0.6"/>
                                <path d="M7.56689 13.8968V12.6798" stroke="#F2F2F2" strokeWidth="0.6"/>
                                </svg>
                                <span className="text-[12px] font-[400]">{cardInfo.courseNum}</span>
                            </div>
                        </div>
                        {
                            cardInfo.progress && 
                            <div className="w-[140px] h-[36px] py-[8px] px-[16px]  bg-[#2A2A2A] rounded-[40px] ">
                                <span className="block text-[#9EFA13] text-[10px] font-[400] leading-[20px] text-center" >{cardInfo.progress}</span>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}