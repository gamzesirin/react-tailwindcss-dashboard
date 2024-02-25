import { BsArrowsFullscreen } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { FiTable } from 'react-icons/fi'
import { GiBackwardTime } from 'react-icons/gi'
import { GoQuestion } from 'react-icons/go'
import { GrShieldSecurity } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineGridView } from 'react-icons/md'
import { VscComment } from 'react-icons/vsc'
import image from '../../assets/images/images.jpg'

const Topbar = () => {
	return (
		<div className="flex justify-between  bg-gray-50 p-5 border border-solid border-gray-200 border-t-0 border-l-0 border-r-0">
			<div className="flex gap-3 justify-center items-center">
				<FiTable size={25} color={'gray'} />
				<img src={image} alt="" className="rounded-lg w-8 h-8" />
				<h1 className="font-semibold">Spend Elon Musk Money</h1>
				<IoIosArrowDown size={16} color={'gray'} />
			</div>
			<div className="flex gap-3 justify-center items-center">
				<GrShieldSecurity size={20} color={'gray'} />
				<GiBackwardTime size={20} color={'gray'} />
				<GoQuestion size={20} color={'gray'} />
				<VscComment size={20} color={'gray'} />

				<BsArrowsFullscreen size={20} color={'gray'} />
				<MdOutlineGridView size={20} color={'gray'} />

				<FaRegBell size={20} color={'gray'} />
				<h1 className="font-semibold">melihbahri</h1>
				<img src={image} alt="" className="rounded-full  w-8 h-8" />
			</div>
		</div>
	)
}

export default Topbar
