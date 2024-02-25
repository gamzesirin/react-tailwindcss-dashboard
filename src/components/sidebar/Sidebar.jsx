import { AiOutlineCaretRight } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineTool } from 'react-icons/ai'
import { FaTableCellsLarge } from 'react-icons/fa6'
import { FiSettings } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import { GoPlus } from 'react-icons/go'
import { GrBook } from 'react-icons/gr'
import { HiOutlineDocumentMinus } from 'react-icons/hi2'
import { ImCodepen } from 'react-icons/im'
import { PiBuildingsBold } from 'react-icons/pi'
import { PiTelevision } from 'react-icons/pi'
import React from 'react'
import { TbChecklist } from 'react-icons/tb'
import { VscSettings } from 'react-icons/vsc'

const Sidebar = () => {
	return (
		<React.Fragment>
			<div className="flex bg-gray-50 gap-5">
				<div className="p-2 w-[200px] ">
					<div className="py-2">
						<h1 className="font-bold text-3xl text-start">Cloud</h1>
						<ul className="flex flex-col items-start gap-3 py-5">
							<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
								<GoHome size={25} color={'gray'} />
								<a href="/dashbord">Dashboard</a>
							</li>
							<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
								<ImCodepen size={25} color={'gray'} />
								<a href="/projects">Projects</a>
							</li>
							<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
								<FaTableCellsLarge size={25} color={'gray'} />
								<a href="/products">Products</a>
							</li>
							<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
								<FiSettings size={25} color={'gray'} />
								<a href="/administration">Administration</a>
							</li>
						</ul>
					</div>
					<div>
						<div className="flex justify-between items-center py-3">
							<p className="text-sm text-gray-400 text-left font-bold ">Shortcuts</p>
							<GoPlus size={16} color={'gray'} />
						</div>

						<ul className="flex flex-col items-start gap-3">
							<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
								<AiOutlineHeart size={25} color={'gray'} />
								<a href="/analytics">Analytics</a>
							</li>
							<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
								<AiOutlineHeart size={25} color={'gray'} />
								<a href="/unity" className="text-start">
									Unity Ads <br /> Monetizations
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="border border-solid border-gray-200 border-b-0 border-t-0  w-[250px]">
					<div className="p-2">
						<div className="flex gap-2 items-center justify-center">
							<AiOutlineHeart size={25} color={'gray'} />
							<div className="flex flex-col items-start">
								<p className="text-xs text-gray-500">GROW</p>
								<p className="font-bold">Unity Grow Monetization</p>
							</div>
						</div>
						<div className="py-2">
							<p className="text-sm text-gray-400 text-left font-bold py-3">Current project</p>
							<ul className="flex flex-col items-start gap-3">
								<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<ImCodepen size={25} color={'gray'} />
									<a href="/project">Project overview</a>
								</li>
								<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<HiOutlineDocumentMinus size={25} color={'gray'} />
									<a href="/project">Ad units</a>
								</li>
								<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<PiTelevision size={25} color={'gray'} />
									<a href="/project">Unity ads reporting</a>
								</li>
								<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<VscSettings size={25} color={'gray'} />
									<a href="/project">Ads controls</a>
								</li>
								<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<TbChecklist size={25} color={'gray'} />
									<a href="/project">Testing</a>
								</li>
								<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<GrBook size={25} color={'gray'} />
									<a href="/project">Setup Guide</a>
								</li>
								<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<FiSettings size={25} color={'gray'} />
									<a href="/project">Settings</a>
								</li>
							</ul>
						</div>
						<div className="py-2">
							<p className="text-sm text-gray-400 text-left font-bold py-3">Organization</p>
							<ul className="flex flex-col items-start gap-3">
								<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<PiBuildingsBold size={25} color={'gray'} />
									<a href="/organization">Organization overview</a>
								</li>
								<li className="flex gap-1 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<PiTelevision size={25} color={'gray'} />
									<a href="/reporting">Reporting</a>
									<AiOutlineCaretRight color={'gray'} />
								</li>
								<li className="flex gap-2 justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<VscSettings size={25} color={'gray'} />
									<a href="/ad">Ad controls</a>
								</li>
								<li className="flex gap-1justify-start w-full items-center hover:rounded hover:bg-gray-200 p-1">
									<AiOutlineTool size={25} color={'gray'} />
									<a href="/setup">Setup</a>
									<AiOutlineCaretRight color={'gray'} />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Sidebar
