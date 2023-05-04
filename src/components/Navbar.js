import React from 'react'; 


export function Navbar() { 
    return ( 
        <div id = "container">
            <div id = "navbar">
                <div id = "title-navbar">
                    <h1>Refer+</h1>
                </div>
            </div>  
            <div id = "banner">
                <img id = "banner-image" href = " " alt = "placeholder"></img>

            </div> 
            <div id = "api-div"> 
                <div id = "inner-api-div">
                    <div className= "adjusted-api-div">
                        <div className = "example-api-div"> {/*  */}
                            <span className="example-api">
                                <button>Sample Button</button>
                            </span>
                        </div>
                    </div> {/* end of adjusted-api-div */}
                    <div className= "adjusted-api-div">
                        <div className = "example-api-div"> {/*  */}
                            <span className="example-api">
                                <button>Sample Button</button>
                            </span>
                        </div>
                    </div> {/* end of adjusted-api-div */}
                </div>

            </div>
            <div id = "main-content">
                <div className= "reviews">
                    <span> Review </span>
                </div>
            </div>
        </div> 
    )
}