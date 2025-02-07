import './AddBtn.css'

function AddBtn(props){
    return(
        <div>
            <input 
            type="text"
            value={props.text}
            onChange={(e) => {
                props.change(e.target.value)
            }}/>
            <button onClick={props.addTodo}>add</button>
        </div>
    )
}

export default AddBtn
