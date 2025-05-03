import React, { useState } from 'react'

const Board = () => {

    const [clickedSquare,setClickedSquare] = useState([])
    const [historyArray,setHistoryArray] = useState([])
    const [redoArray,setRedoArray] = useState([])
    const [value,setValue] = useState('8')

    const Squares = () => {
        const squares = []
        for (let col = 1; col <= value; col++) {
            for(let row = 1;row <= value; row++){
                squares.push(row+col)
            }
        }
        return squares
    }
    
    const handleClick = (index) => {
        setHistoryArray([...historyArray , clickedSquare])
        setRedoArray([])
        setClickedSquare((previousArray) => {
            if(previousArray.includes(index)){
                return previousArray.filter((item) => item !== index)
            }else{
                return [...previousArray , index]
            }
        })
    }

    const onResetClick = () => {
        setClickedSquare([])
        setHistoryArray([])
        setRedoArray([])
    }
    
    const onUndoClick = () => {
        if (historyArray.length > 0) {
            setRedoArray([clickedSquare, ...redoArray]) // Setting Redo Array for Redoing
            setClickedSquare(historyArray[historyArray.length - 1]) //Retrieving Last item of History Array and setting it in Clicked Array
            setHistoryArray(historyArray.slice(0, -1)) //Updating History array after Undoing
        }          
    }

    const onRedoClick = () => {
        if (redoArray.length > 0) {
            setHistoryArray([...historyArray, clickedSquare]) //Setting History Array for Redoing
            setClickedSquare(redoArray[0]) //Restoring Recent Undo Move and setting it in Clicked Array
            setRedoArray(redoArray.slice(1)) //Setting Redo Array After Redoing One Move
        }   
    }

    // const onInputChange = (e) => {
    //     let newValue = e.target.value
    //     if(newValue < 8){
    //         newValue = 8
    //     }
    //     else if(newValue > 20){
    //         newValue = 20
    //     }
    //     setValue(e.target.value)
    // }

  return (
    <div className='items-center flex justify-center h-screen'>
        <div className={`bg-[#936c39] p-1 overflow-hidden grid grid-cols-${value} grid-rows-${value} justify-center items-center`}
        style={{
            gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${value}, minmax(0, 1fr))`,
          }}
        >
            {
                Squares().map((item,index) => (
                    <div onClick={()=>handleClick(index)} key={index} className={`h-10 w-10 m-1 cursor-pointer text-center ${clickedSquare.includes(index) ? 'bg-red-600' : ( item % 2===0 ? 'bg-black':'bg-white' ) }`}>
                    </div>
                ))  
            }
        </div>
        <div className='flex flex-col'>
            <p className='px-2 py-1 ml-24 mb-5'>Box Number : <input min={8} max={20} className='border-2 border-black rounded' type="number" value={value} onChange={(e)=>{
                let newValue = e.target.value
                if(newValue > 20) newValue = 20
                if(newValue < 8) newValue = 8
                setValue(newValue)
            }} /></p>
            <button onClick={onResetClick} className='px-2 py-1 ml-10 bg-lime-500 rounded'>RESET</button>
            <button onClick={onUndoClick} disabled={historyArray.length === 0} className='px-2 py-1 ml-10 bg-lime-500 mt-10 rounded'>UNDO</button>
            <button onClick={onRedoClick} disabled={redoArray.length === 0} className='px-2 py-1 ml-10 bg-lime-500 mt-10 rounded'>REDO</button>
        </div>
    </div>
  )
}

export default Board