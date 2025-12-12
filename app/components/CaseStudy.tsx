import Image from 'next/image'

const CaseStudy = () => {
    return (
        <div className="grid justify-center items-center relative p-5 2xl:pt-20">
            <div className="relative w-full grid gap-8 justify-center items-center">
                <Image
                    src="/cases1.png"
                    alt="case1 preview"
                    width={1080}
                    height={1920}
                    className="rounded-xl object-contain w-full max-w-7xl mx-auto"
                    quality={100}
                    priority
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-start w-full max-w-6xl mx-auto'>
                    {/* Card 1 */}
                    <div className="bg-linear-to-t from-[#B2D631] via-[#B2D631] via-1% to-black rounded-xl shadow-lg p-1 flex items-center gap-4 w-full">
                        <div className="shrink-0">
                            <Image
                                src="/case1Components/totalsale.png"
                                alt="Total sales chart"
                                width={180}
                                height={140}
                                className="rounded-lg object-contain shadow-xl"
                                quality={100}
                            />
                        </div>
                        <div className="flex-1 text-white">
                            <h3 className="font-bold text-lg">This is total sales card</h3>
                            <p className="text-sm font-normal mt-2 text-gray-200">it'll show the current live sales in real time</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-linear-to-t from-[#3f3f3f] via-[#3f3f3f] via-1% to-black rounded-xl shadow-lg p-1 flex items-center gap-4 w-full">
                        <div className="shrink-0">
                            <Image
                                src="/case1Components/topselling.png"
                                alt="Top selling chart"
                                width={180}
                                height={140}
                                className="rounded-lg object-contain shadow-xl"
                                quality={100}
                            />
                        </div>
                        <div className="flex-1 text-white">
                            <h3 className="font-bold text-lg">This is top selling chart card</h3>
                            <p className="text-sm font-normal mt-2 text-gray-200">it'll show today's top selling products</p>
                        </div>
                    </div>

                    {/* Nested Grid for Ads + Group */}
                    <div className="grid grid-cols-1 gap-3 w-full">
                        {/* Ads Card */}
                        <div className="bg-linear-to-t from-[#01ccff] via-[#01ccff] via-1% to-black rounded-xl shadow-lg p-1 flex items-center gap-1 w-full">
                            <div className="shrink-0">
                                <Image
                                    src="/case1Components/ads.png"
                                    alt="Ads chart"
                                    width={200}
                                    height={160}
                                    className="rounded-lg object-contain shadow-xl"
                                    quality={100}
                                />
                            </div>
                            <div className="flex-1 text-white">
                                <h3 className="font-bold text-lg">This is ads chart card</h3>
                                <p className="text-sm font-normal mt-2 text-gray-200">it'll show today's top selling products</p>
                            </div>
                        </div>
                        
                        {/* Group Card */}
                        <div className="bg-linear-to-t from-[#ffd902] via-[#ffd902] via-1% to-black rounded-xl shadow-lg p-1 flex items-center gap-1 w-full">
                            <Image
                                src="/case1Components/group.png"
                                alt="Group analytics"
                                width={200}
                                height={100}
                                className="rounded-lg object-contain"
                                quality={100}
                            />
                            <div className="flex-1 text-white p-1">
                                <h3 className="font-bold text-lg">Group Analytics</h3>
                            </div>
                        </div>
                    </div>

                    {/* Analytics Card */}
                    <div className="bg-linear-to-t from-[#3f3f3f] via-[#3f3f3f] via-1% to-black rounded-xl shadow-lg p-1 flex flex-row items-center gap-4 w-full">
                        <Image
                            src="/case1Components/analytics.png"
                            alt="Analytics preview"
                            width={190}
                            height={140}
                            className="rounded-lg object-contain"
                            quality={100}
                        />
                        <div className="text-white text-start">
                            <h3 className="font-bold text-lg">Analytics Chart</h3>
                            <p className="text-sm font-normal mt-2 text-gray-200">Performance analytics overview</p>
                        </div>
                    </div>

                    {/* Weekly Analytics Card */}
                    <div className="bg-linear-to-t from-[#ff5100] via-[#ff5100] via-1% to-black rounded-xl shadow-lg p-1 flex items-center gap-4 w-full">
                        <Image
                            src="/case1Components/weeklyanalytics.png"
                            alt="Weekly analytics"
                            width={200}
                            height={140}
                            className="rounded-lg object-contain"
                            quality={100}
                        />
                        <div className="flex-1 text-white">
                            <h3 className="font-bold text-lg">Weekly Analytics</h3>
                            <p className="text-sm font-normal mt-2 text-gray-200">Weekly performance metrics</p>
                        </div>
                    </div>
                    <div className=" w-full hidden md:block">
                        <Image
                            src="/case1Components/explore.png"
                            alt="Weekly analytics"
                            width={190}
                            height={140}
                            className="rounded-lg object-contain"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy