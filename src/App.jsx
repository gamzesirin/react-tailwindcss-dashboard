import Section from './components/section/Section'
import Sidebar from './components/sidebar/Sidebar'
import Table from './components/table/Table'
import Topbar from './components/topbar/Topbar'

function App() {
	return (
		<div className="flex  ">
			<Sidebar />
			<div className="flex flex-col w-full">
				<Topbar />
				<div className="p-5">
					<Section />
					<Table />
				</div>
			</div>
		</div>
	)
}

export default App
