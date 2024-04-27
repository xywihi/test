export default function CardTow({cardInfo}:{cardInfo: any}) {
    return (
        <div className="relative">
            <svg className="transform scale-[0.99]" width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.0001 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.359 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9999 278C14.3268 278 -4.21268e-05 263.673 -1.08311e-05 246L0.000176529 149.369C0.000207326 143.011 2.07842 136.828 5.91821 131.761C13.5454 121.696 13.8253 107.865 6.61172 97.5L5.64303 96.1081C1.96942 90.8295 0.0002099 84.5527 0.000179666 78.1216L2.91086e-05 32.0001C-3.11484e-05 14.3269 14.3269 0 32.0001 0Z" fill="url(#paint0_linear_2_488)"/>
            <defs>
            <linearGradient id="paint0_linear_2_488" x1="208" y1="278" x2="208" y2="-7.12466e-06" gradientUnits="userSpaceOnUse">
            <stop stopColor="#719BFF"/>
            <stop offset="0.770833" stopColor="#DA8AFF"/>
            </linearGradient>
            </defs>
            </svg>

            <div className="w-full h-full absolute top-0 hover:translate-x-[5px] hover:translate-y-[-5px]">
                <div className="w-full h-full relative">
                    <svg width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.9997 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.358 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9995 278C14.3264 278 -0.000438855 263.673 -0.00040756 246L-0.0002202 149.369C-0.000189402 143.011 2.07803 136.828 5.91781 131.761C13.545 121.696 13.8249 107.865 6.61132 97.5L5.64263 96.1081C1.96902 90.8295 -0.000186828 84.5527 -0.000217063 78.1216L-0.00036762 32.0001C-0.000427877 14.3269 14.3265 0 31.9997 0Z" fill="#131313"/>
                    </svg>
                    <div className="h-full w-full flex flex-col justify-between px-10 py-8 pb-4 absolute top-0 left-0 ">
                        <div>
                        <p className="font-[700] text-[16px] text-[#EDEDED]">{cardInfo.title}</p>
                        <div className="flex items-center space-x-4 mt-2">
                            {
                                cardInfo.tags.map((item: any, index: any) => {
                                    return <span key={item} className="block py-[4px] px-[8px] text-center rounded-[20px] text-textwhite border border-[#676767] text-test111 font-[400] text-[9px]">{item}</span>
                                })
                            }
                        </div>
                        </div>
                        <div className="font-neuemachina mb-2 flex flex-col items-center justify-between mt-8 divide-y divide-[#282828] space-y-2 *:w-full *:pt-2 *:flex *:items-center *:justify-between">
                        {
                            cardInfo.funcs.map((item: any, index: any) => {
                                return (
                                    <div key={item.name}>
                                        <span className="text-textgray font-[400] text-[12px]">{item.name}</span>
                                        <span className="text-textwhite font-[300] text-[14px]">{item.date}</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}