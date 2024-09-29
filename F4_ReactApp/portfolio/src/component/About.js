import "../style/About.css";


const About= ()=>{
 

    const socialIcons=[
        { links:"https://www.google.com/" ,iconName:"menu"},
        { links:"https://www.facebook.com/" ,iconName:"home"}
    ]



    return <div className="left-container">
        <div>
            <h1>Saurabh Anand</h1>
            <p className="label">Frontend Engineer</p>
            <p className="description">I am Frontend engineer</p>
            <div>
                <a href="#about">about</a>
                <a href="#project">project</a>
                <a href = "#Experience">Experience</a>
            </div>
        </div>

        <div className="social-media">
      {
        socialIcons.map( (item) => {
            return <a href={item.links}>
                <span className="material-icons">{item.iconName}</span>
            </a>
        })
    }
          {/* <a href="#" className="material-icons"></a> */}
        </div>
    </div>
}

export default About