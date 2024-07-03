import Categories from "./Categories";
import Content from "./Content";

function SiteContent(){
    return (
        <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
            <Categories/>
            <Content/>
        </div>
    )
}

// function LeftSideBar(){
//     return (
//         <div style={{width:"20%",margin:"0 10px", border:"1px solid silver"}}>
//             <h2>Left Side Bar</h2>
//             <p>Left Side Bar</p>
//         </div>
//     )
// }
// function Content(){
//     return (
//         <div style={{width:"80%",margin:"0 10px", border:"1px solid silver"}}>
//             <h2>Content</h2>
//             <p>Content</p>
//         </div>
//     )
// }

export default SiteContent;