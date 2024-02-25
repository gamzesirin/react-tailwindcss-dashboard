import { AiOutlineArrowDown } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import React from 'react'
import image from '../../assets/images/images.jpg'

const Section = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col gap-5  py-3">
				<div className="flex gap-2 ">
					<img src={image} alt="" className="w-12 h-12 rounded-lg" />
					<div>
						<h1 className="font-semibold text-start text-2xl">Spend Elon Musk Money</h1>
						<p className="text-gray-400 text-sm">Project Id: 23xdcfvgb-456bn-mö987-654-dfnbvc</p>
					</div>
				</div>
				<div className="border rounded-lg p-3  bg-gray-50 border-solid border-gray-200 flex justify-between">
					<div className="p-1 flex items-center justify-center">
						<p className="font-bold text-start text-2xl ">
							Insıghts <span className="rounded-full text-sm bg-gray-300 px-2 py-1">0</span>
						</p>
					</div>

					<div className="flex gap-3 items-center justify-center">
						<IoIosArrowBack size={20} color={'gray'} />
						<IoIosArrowForward size={20} color={'gray'} />
						<p className="font-bold text-start ">View past insights</p>
					</div>
				</div>
				<div className="flex gap-6 flex-wrap ">
					<div className="border rounded-lg p-3 border-solid border-gray-200 bg-gray-50 flex flex-col items-start justify-center gap-3 text-start w-[330px] ">
						<p className="text-gray-500 font-semibold flex items-center justify-center gap-1">
							Est. ad revenue today
							<AiOutlineInfoCircle />
						</p>
						<p className="text-4xl font-bold">$0</p>
						<div className="flex items-center justify-center gap-1">
							<span className="bg-red-300 rounded-md text-black flex items-center justify-center">
								<AiOutlineArrowDown />
								100%
							</span>
							<p className="text-gray-400">vervus previous day</p>
						</div>
					</div>
					<div className="border rounded-lg p-3  bg-gray-50 border-solid border-gray-200 flex flex-col  items-start justify-center gap-3 text-start w-[330px]">
						<p className="text-gray-500 font-semibold flex items-center justify-center gap-1">
							eCPM
							<AiOutlineInfoCircle />
						</p>
						<p className="text-4xl font-bold">$0.00</p>
						<div className="flex items-center justify-center gap-1">
							<span className="bg-red-300 rounded-md text-black flex items-center justify-center">
								<AiOutlineArrowDown />
								100%
							</span>
							<p className="text-gray-400">vervus previous 7 day</p>
						</div>
					</div>
					<div className="border rounded-lg p-3  bg-gray-50 border-solid border-gray-200 flex flex-col  items-start justify-center gap-3 text-start w-[330px] ">
						<p className="text-gray-500 font-semibold flex items-center justify-center gap-1">
							DAU
							<AiOutlineInfoCircle />
						</p>
						<p className="text-4xl font-bold">$0</p>
						<div className="flex items-center justify-center gap-1">
							<span className="bg-red-300 rounded-md text-black flex items-center justify-center">
								<AiOutlineArrowDown />
								100%
							</span>
							<p className="text-gray-400">vervus previous day</p>
						</div>
					</div>
					<div className="border rounded-lg p-3  bg-gray-50 border-solid border-gray-200 flex flex-col  items-start justify-center  gap-3 text-start w-[330px]">
						<p className="text-gray-500 font-semibold flex items-center justify-center gap-1">
							ads ARPDAU
							<AiOutlineInfoCircle />
						</p>
						<p className="text-4xl font-bold">$0.00</p>
						<div className="flex items-center justify-center gap-1">
							<span className="bg-red-300 rounded-md text-black flex items-center justify-center">
								<AiOutlineArrowDown />
								100%
							</span>
							<p className="text-gray-400">vervus previous 7 day</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Section
