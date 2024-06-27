
import { decrement, increment, incrementByValue } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch()

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-5xl m-10'>React with redux</h1>

      <div className='flex border border-purple-300 rounded-md bg-slate-50 p-10 font-semibold '>
        <button onClick={() => dispatch(decrement())} className='px-3 py-2 rounded-md bg-yellow-500 text-xl font-semibold text-white'>Decrement</button>
         <h1 className='text-3xl mx-10'>{count}</h1>
        <button onClick={() => dispatch(increment())} className='px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white'>Increment</button>
        <button onClick={() => dispatch(incrementByValue(5))} className='px-3 py-2 mx-2 rounded-md bg-green-500 text-xl font-semibold text-white'>Increment by 5</button>
      </div>
    </div>
  )
}

export default App
