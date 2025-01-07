import Table from "../Components/Explore/Table"
import BarChart from "../Components/Explore/Chart"
import SeriesChart from "../Components/Explore/SeriesChart"

export default function Explore () {
  return(
    <>
      <div className="w-full bg-[#131313]">
        <div className="max-w-[1120px] w-full pl-10 pr-6 m-auto ">
          <div className="flex gap-3">
            <div className="w-[50%]">
              <SeriesChart />
            </div>
            <div className="w-[50%]">
              <BarChart />
            </div>
          </div>
          <Table />
        </div>
      </div>
    </>
  )
}