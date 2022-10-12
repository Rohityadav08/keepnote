import React from "react";

const Header = ()=>{
    const addNewKeep = (e)=>{
        let keepnote = JSON.parse(localStorage.getItem("keepnote"));
        let id = keepnote.length;
        if(id !== 0){
            let newid = keepnote[id-1].id+1;
            let newkeep = {
                id: newid,
                note: ""
            }
            localStorage.setItem("keepnote",JSON.stringify([...keepnote,newkeep]));
        }else{
            let newkeep = [{
                id: 1,
                note:""
            }];
            localStorage.setItem("keepnote",JSON.stringify(newkeep));
        }
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Keep Notes</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">                        
                    </ul>
                    <div className="d-flex">
                        <button onClick={(e)=>addNewKeep(e)} className="btn btn-success">Add New Keep</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;