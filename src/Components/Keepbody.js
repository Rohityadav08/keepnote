import React, {useEffect, useState} from "react";
import keepdata from "./containers/keepdata";
import { Container, Button } from "react-bootstrap";

const Keepbody = (props)=>{
    const [note, addNotes] = useState([]);
    let borderStyle = {
        "border":"1px solid red",
        "height":"90vh",
        "width": "98vw",
        "margin":"auto",
        "overflow":"hidden"
    };
    const save = (e)=>{
        let noteid = e.target.value;
        let text = document.getElementById(noteid).innerText;
        noteid = noteid.split("-");
        noteid=noteid[1];
        let newnote = note.map((item, index)=>{
            if(item.id == noteid){
                return {
                    id: noteid,
                    note: text
                };
            }else{
                return item;
            }
        });
        addNotes(newnote);
        localStorage.setItem("keepnote",JSON.stringify(newnote));
    }
    const deleteNote = (e)=>{
        let noteid = e.target.value.split("-");
        noteid=parseInt(noteid[1]);
        let filteredkeepnote = note.filter((item, index)=>{
            if(item.id != noteid){
                return item;
            }
        });
        console.log(filteredkeepnote);
        addNotes(filteredkeepnote);
        localStorage.setItem("keepnote", JSON.stringify(filteredkeepnote));
    }
    useEffect(()=>{
        addNotes(JSON.parse(localStorage.getItem("keepnote")));
    });
    return(
        <Container fluid style={borderStyle}>            
            {note.map((item, index)=>{
                console.log("Calling...");
                return <DisplayKeepData note={item.note} key={index} handlerSave={(e)=>save(e)} ele={item.id} handlerDelete={(e)=>deleteNote(e)} />
            })}
        </Container>
    );
}

const DisplayKeepData = (props)=>{
    let keep_data = {
        "border":"1px solid black",
        "width":"24%",
        "height":"auto",
        "float":"left",
        "padding":"2px",
        "margin":"2px",
    }    
    return(<React.Fragment>
        <div style={keep_data}>
            <div className="text-center">
                <Button value={"note-"+(props.ele)} onClick={(e)=>props.handlerSave(e)} className="m-2" variant="outline-success">Save</Button>
                <Button value={"note-"+(props.ele)} onClick={(e)=>props.handlerDelete(e)} className="m-2" variant="outline-danger">Delete</Button>
            </div>
            <div id={"note-"+(props.ele)} contentEditable suppressContentEditableWarning={true} outline="none">
                {props.note}
            </div>    
        </div>
    </React.Fragment>);
}

export default Keepbody;