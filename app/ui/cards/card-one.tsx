export default function CardOne({cardInfo}:{cardInfo: any}) {
    
    return (
        cardInfo &&
        <div className="m-auto relative max-w-max smallPhone:w-[calc(100vw-2rem)]">
                <svg width="416" max={'100%'} className="max-w-full transform scale-[0.99] h-auto" height="279" viewBox="0 0 416 279" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <svg className="max-w-full absolute z-0 top-0  h-auto" width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.9999 0.000756464L384 6.30388e-05C401.673 2.82235e-05 416 14.3269 416 32.0001L416 162.792C416 168.192 414.634 173.503 412.028 178.232L410.162 181.621C404.664 191.601 404.888 203.751 410.749 213.522L411.442 214.677C414.424 219.649 416 225.339 416 231.137L416 246C416 263.673 401.673 278 384 278L32 278C14.3269 278 4.94914e-05 263.673 1.97476e-05 246L-1.01193e-05 231.137C-4.0383e-05 225.339 1.57549 219.649 4.55816 214.677L5.25124 213.521C11.1121 203.751 11.3356 191.6 5.83807 181.621L3.97134 178.232C1.36614 173.503 -3.78811e-05 168.191 -3.76447e-05 162.792L-3.19186e-05 32.0008C-3.11449e-05 14.3277 14.3268 0.00079128 31.9999 0.000756464Z" fill="#131313"/>
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
                            <div className="flex items-center space-x-6 smallPhone:space-x-3 *:flex *:items-center *:space-x-2">
                                <div className="text-textwhite">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14C5.14346 14 3.36303 13.2625 2.05029 11.9497C0.737494 10.637 0 8.85649 0 7C0 5.14351 0.737494 3.36303 2.05029 2.05029C3.36298 0.737495 5.14351 0 7 0C8.85649 0 10.637 0.737495 11.9497 2.05029C13.2625 3.36298 14 5.14351 14 7C14 8.85649 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85649 14 7 14ZM7 0.583346C5.29826 0.583346 3.66602 1.25942 2.46278 2.46273C1.25947 3.66615 0.583396 5.29821 0.583396 6.99995C0.583396 8.70169 1.25947 10.3339 2.46278 11.5372C3.6662 12.7405 5.29826 13.4166 7 13.4166C8.70174 13.4166 10.334 12.7405 11.5372 11.5372C12.7405 10.3337 13.4166 8.70169 13.4166 6.99995C13.4166 5.29821 12.7405 3.66597 11.5372 2.46273C10.3338 1.25942 8.70174 0.583346 7 0.583346Z" fill="#F2F2F2"/>
                                    <path d="M11.3756 7.58381H6.70883C6.5478 7.58381 6.41724 7.45325 6.41724 7.29222V2.6255C6.41724 2.46447 6.5478 2.3338 6.70883 2.3338C6.86997 2.3338 7.00053 2.46447 7.00053 2.6255V7.00047H11.3755C11.5365 7.00047 11.6672 7.13103 11.6672 7.29217C11.6672 7.4532 11.5366 7.58381 11.3756 7.58381Z" fill="#F2F2F2"/>
                                    </svg>

                                    <span className="text-[12px] font-[400]">{cardInfo.duration}</span>
                                </div>
                                <div className="text-textwhite">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.57865 12.8638V2.04656C7.19858 0.856661 4.21409 0.919762 2.76935 1.10005V11.8186C6.08177 11.2105 7.35572 12.2621 7.57865 12.8638Z" stroke="#F2F2F2" strokeWidth="0.6"/>
                                    <path d="M7.57785 12.8638V2.04656C7.95791 0.856661 10.9424 0.919762 12.3871 1.10005V11.8186C9.07472 11.2105 7.80077 12.2621 7.57785 12.8638Z" stroke="#F2F2F2" strokeWidth="0.6"/>
                                    <path d="M2.75602 2.42984H1V13.6857L14.0904 13.9999V2.42984H12.3343" stroke="#F2F2F2" strokeWidth="0.6"/>
                                    <path d="M7.56689 13.8968V12.6798" stroke="#F2F2F2" strokeWidth="0.6"/>
                                    </svg>

                                    <span className="text-[12px] font-[400]">{cardInfo.courseNum}</span>
                                </div>
                            </div>
                            <div className="h-[36px] py-[8px] px-[16px] bg-[#2A2A2A] rounded-[40px] flex items-center space-x-2">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5287 6.82777L16.9374 5.26978C17.5284 5.1261 17.9277 5.85807 17.4871 6.27727L12.8109 10.7257C12.7251 10.8074 12.6656 10.9128 12.6402 11.0285L11.3676 16.8181C11.2267 17.459 10.3038 17.4318 10.2008 16.7838L9.23218 10.6862C9.20918 10.5414 9.13346 10.4102 9.01958 10.3179L4.01681 6.26294C3.51572 5.85678 3.93024 5.05538 4.55128 5.22964L10.2279 6.8225C10.3261 6.85004 10.4297 6.85185 10.5287 6.82777Z" fill="#9EFA13"/>
                                    <path d="M6.908 11.6469C6.97335 11.6964 7.0153 11.7707 7.02392 11.8523L7.4785 16.1502C7.51224 16.4692 7.08635 16.6077 6.92597 16.3299L2.86686 9.29936C2.70486 9.01876 3.04527 8.71847 3.30347 8.91421L6.908 11.6469Z" fill="#9EFA13"/>
                                </svg>
                                <span className="inline-block text-[#9EFA13] text-[10px] font-[400] leading-[20px] text-center" >{cardInfo.progress}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}