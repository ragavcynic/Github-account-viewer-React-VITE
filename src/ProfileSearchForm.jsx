import { useState } from "react";
function ProfileSearchForm({search}){
    const [term,setTerm] = useState("");
    function handleChange(evt){
        setTerm(evt.target.value)
    }
    function handleSubmit(evt){
        evt.preventDefault();
        search(term);
        setTerm("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={term} onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}
export default ProfileSearchForm;