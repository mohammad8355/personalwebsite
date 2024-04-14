const ProfileContentBody = (props) => {
    let content = props.content;
    return (
       <div className="contentbody col-lg-6 col-md-8 col-sm-12 mt-4">
              <h1>{content.Title}</h1> 
              <p dangerouslySetInnerHTML={{__html:content.Description}} />       
       </div>
    );
}
export default ProfileContentBody;