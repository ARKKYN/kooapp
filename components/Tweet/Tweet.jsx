

function Tweet({project}) {
 return (<div style={{
   width : "35vw",
      margin: "5px auto",
      border: "1px solid rgb(207, 217, 222)",
      borderRadius: "3px",
      padding: "1px 5px",

 }}>
    <p style={{borderBottom: "1px solid rgb(207, 217, 222)",   cursor:"pointer",}}> {project.title} <span style={{fontStyle: "italic", textDecoration: "underline"}}>@{project.title}</span></p>
    <p style={{marginBottom: "4px"}}>   &nbsp;&nbsp; {project.body}</p>
  </div>);
}


export default Tweet;
