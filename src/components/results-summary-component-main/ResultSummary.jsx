import iconMemory from './results-summary-component-main/images/icon-memory.svg'
import iconReact from './results-summary-component-main/images/icon-reaction.svg'
import iconVerbal from './results-summary-component-main/images/icon-verbal.svg'
import iconVisual from './results-summary-component-main/images/icon-visual.svg'
import InSummary from './InSummary'
export default function ResultSummary (){
    return (
        <div className="w-screen h-screen grid content-center justify-center font-sans">
            <div className="grid grid-cols-7">
            <div className="flex col-start-3 shadow-2xl rounded-2xl col-span-3 grid grid-cols-7">
                <div className="bg-indigo-500 text-white rounded-2xl col-start-1 col-span-4">
                    <div className="py-8">
                        <p className="text-xl text-center text-gray-100 py-4">Your Result</p>
                        <div className="  text-center grid justify-center">
                            <div className="bg-gradient-to-b from-indigo-700 to-idigo-500 rounded-full px-10 py-8" >
                                <h2 className="text-4xl font-bold">76</h2>
                                <p className="text-gray-100 text-sm">of 100</p>             
                            </div>
                        </div>
                        <div className="grid justify-center">
                            <h2 className="text-2xl text-center p-4 font-bold">Great</h2>
                            <p className="text-center px-16 text-gray-100">You scored higher than 65% of the people who have taken these tests.</p>
                        </div>
                    </div>

                    
                </div>
                <div className='col-start-5 col-span-3 m-4'>
                    <h1 className="text-2xl m-2 font-bold">Summary</h1>          
                    <InSummary color={'red'} icon={iconReact} head={'Reaction'} score={'80'} />
                    <InSummary color={'yellow'} icon={iconMemory} head={'Memory'} score={'92'} />
                    <InSummary color={'teal'} icon={iconVerbal} head={'Verbal'} score={'61'} />
                    <InSummary color={'blue'} icon={iconVisual} head={'Visual'} score={'72'} />
                    <div className='flex justify-center'>
                        <button className='bg-slate-700 text-white rounded-full py-2 px-16 hover:bg-slate-900 '>Continue</button>
                    </div>
                </div>


            </div>
            </div>


        </div>
    )
}