import {
	AiOutlineArrowDown,
	AiOutlineArrowUp,
	AiOutlineDown,
	AiOutlineExport,
	AiOutlineInfoCircle
} from 'react-icons/ai'
import {
	ArcElement,
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
import React from 'react'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement)

const Table = () => {
	// Example data for the charts
	const barData = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Dataset 1',
				data: [65, 59, 80, 81, 56, 55, 40],
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			}
		]
	}

	return (
		<React.Fragment>
			<div className="flex flex-col gap-3  py-3 items-start justify-between">
				<div className="flex gap-3">
					<p className="border  rounded-lg bg-gray-50 border-solid border-gray-200 flex gap-1 items-center justify-center p-1">
						Date Range : Last 7 Days <AiOutlineDown />
					</p>
					<p className="border rounded-lg bg-gray-50border-solid border-gray-200 flex gap-1 items-center justify-center p-1">
						Platform <AiOutlineDown />
					</p>
				</div>

				<div
					className="chart-container p-1 flex gap-3"
					style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}
				>
					<div style={{ width: 685 }} className="border rounded-lg border-solid border-gray-200  ">
						<div className="flex flex-col items-start bg-gray-50 border p-3 ">
							<p className="font-bold">Total Estumated Revenue</p>
							<p className="text-gray-400 text-sm"> Feb- 13 Feb - 19</p>{' '}
						</div>

						<Bar
							data={barData}
							options={{ plugins: { legend: { display: true } }, responsive: true }}
							className="p-5"
						/>
					</div>
					<div style={{ width: 685 }} className=" border rounded-lg  border-solid border-gray-200 bg-gray-50 ">
						<div className="flex justify-between items-center bg-gray-50 border p-3 ">
							<div className="flex flex-col items-start ">
								<p className="font-bold">Ads Performance</p>
								<p className="text-gray-400 text-sm"> Feb- 13 Feb - 19</p>{' '}
							</div>
							<p className="font-bold">View More</p>
						</div>
						<div className=" bg-gray-50 flex flex-col gap-5 p-5 ">
							<div className="flex gap-1 p-1">
								<div className=" flex flex-col items-start justify-center gap-2 text-start w-[285px] ">
									<p className="text-gray-500 font-semibold flex items-center justify-center gap-1">Est. ad revenue</p>
									<p className="text-4xl font-bold">$0.04</p>
									<div className="flex items-center justify-center gap-1">
										<span className="bg-green-300 rounded-md text-black flex items-center justify-center">
											<AiOutlineArrowUp />
											100%
										</span>
										<p className="text-gray-400">vervus previous 7 day</p>
									</div>
								</div>
								<div className=" flex flex-col items-start justify-center gap-2 text-start w-[285px] ">
									<p className="text-gray-500 font-semibold flex items-center justify-center gap-1">
										eCPM
										<AiOutlineInfoCircle />
									</p>
									<p className="text-4xl font-bold">$0.00</p>
									<div className="flex items-center justify-center gap-1">
										<span className="bg-gray-300 rounded-md text-black flex items-center justify-center">0%</span>
										<p className="text-gray-400">vervus previous 7 day</p>
									</div>
								</div>
							</div>
							<div className="flex gap-1 p-1">
								<div className="flex flex-col items-start justify-center gap-2 text-start w-[285px] ">
									<p className="text-gray-500 font-semibold flex items-center justify-center gap-1">
										Impressions
										<AiOutlineInfoCircle />
									</p>
									<p className="text-4xl font-bold">59</p>
									<div className="flex items-center justify-center gap-1">
										<span className="bg-red-300 rounded-md text-black flex items-center justify-center">
											<AiOutlineArrowDown />
											6.3%
										</span>
										<p className="text-gray-400">vervus previous 7 day</p>
									</div>
								</div>
								<div className="flex flex-col items-start justify-center gap-2 text-start w-[285px] ">
									<p className="text-gray-500 font-semibold flex items-center justify-center gap-1">
										Fill Rate
										<AiOutlineInfoCircle />
									</p>
									<p className="text-4xl font-bold">100%</p>
									<div className="flex items-center justify-center gap-1">
										<span className="bg-gray-300 rounded-md text-black flex items-center justify-center">0%</span>
										<p className="text-gray-400">vervus previous 7 day</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className="chart-container flex justify-start "
					style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}
				>
					<div style={{ width: 695 }} className="border rounded-lg border-solid border-gray-200 ">
						<div className="flex flex-col items-start bg-gray-50 border p-3 ">
							<p className="font-bold flex items-center justify-center gap-1">
								Unity Ads SDK Version Breakdown <AiOutlineInfoCircle />
							</p>
							<p className="text-gray-400 text-sm"> Feb- 13 Feb - 19</p>{' '}
						</div>

						<Bar
							data={barData}
							options={{ plugins: { legend: { display: true } }, responsive: true }}
							className="p-5"
						/>
					</div>
				</div>
				<div className="py-5">
					<ul className="flex gap-5">
						<li className="flex justify-center items-center gap-1">
							<a href="#">Legal</a>

							<AiOutlineExport />
						</li>
						<li className="flex justify-center items-center gap-1">
							<a href="#">Privacy Policy</a>

							<AiOutlineExport />
						</li>
						<li className="flex justify-center items-center gap-1">
							<a href="#">Cookies</a>

							<AiOutlineExport />
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Table
