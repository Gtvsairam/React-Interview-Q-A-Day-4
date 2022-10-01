import React,{useRef,useEffect,useState} from 'react'

function UseRefhook() {
    const [name,setName] = useState()
    const hookref = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        setName(hookref.current.value)
        
    }
    useEffect(() =>{
      hookref.current.focus()
    },[])
   
  return (
    <div>
        <h2>1.What is UseRef Hook ?(Implementation)</h2>
        <p>useState will re-render when the content change and update in UI.</p>
        <p>UseRef doesnot notify you when its content changes.Mutating the(current) property doesn't cause a re-render.</p>
        <h3>Example:-</h3>
        <form onSubmit={handleSubmit}>
        <h1>
       
        <input ref={hookref} type='text' placeholder='Enter your Name' required/><br/>
            <button className='btn1' type='submit'>Submit</button><br/>
             Name: {name}
        </h1>
           
        </form>

    </div>
  )
}

export default UseRefhook