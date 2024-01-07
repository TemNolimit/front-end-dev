export default function InSummary({ color, icon, head, score }) {
    console.log(color)
    let headOutput,backGroundOutput
    if(color==='red'){
        headOutput = 'text-red-600 font-bold ml-1'
        backGroundOutput = 'bg-red-50 p-3 rounded-lg'
    } else if (color==='teal'){
        headOutput = 'text-cyan-600 font-bold ml-1'
        backGroundOutput = 'bg-cyan-50 p-3 rounded-lg'
    } else if (color==='yellow'){
        headOutput = 'text-yellow-600 font-bold ml-1'
        backGroundOutput = 'bg-yellow-50 p-3 rounded-lg'
    } else if (color==='blue'){
        headOutput = 'text-blue-600 font-bold ml-1'
        backGroundOutput = 'bg-blue-50 p-3 rounded-lg'
    }
  return (
    <div className="m-4">
      <div className={backGroundOutput}>
        <div className="flex justify-between">
          <div className="flex">
            <img src={icon} alt="" />
            <p className={headOutput}>{head}</p>
          </div>
          <div className="flex">
            <p className="mx-1 font-bold">{score}</p>
            <p className="text-gray-500">/ 100</p>
          </div>
        </div>
      </div>
    </div>
  );
}
