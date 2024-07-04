import { Link } from "react-router-dom"

export const Home = ()=>{

    return(
        <div id="home">

            <div id="fyf">
                <h2>For You</h2>
                <h2>Following</h2>
            </div>

            <div id="tweets">
                <div className="tweet">
                    <div className="identity">
                     <div className="p_img">1</div>
                     <p>@kitsoMogale</p>
                    </div>
                    <p>random tweet1</p>
                    <div className="icons" >
                        <Link to='/1/replies'>replies</Link>
                    </div>
                </div>
                <div className="tweet">
                    <div className="identity">
                     <div className="p_img">1</div>
                     <p>@kitsoMogale</p>
                    </div>
                    <p>random tweet1</p>
                </div>
                <div className="tweet">
                    <div className="identity">
                     <div className="p_img">1</div>
                     <p>@kitsoMogale</p>
                    </div>
                    <p>random tweet1</p>
                </div>
                <div className="tweet">
                    <div className="identity">
                     <div className="p_img">1</div>
                     <p>@kitsoMogale</p>
                    </div>
                    <p>random tweet1</p>
                </div>
                <div className="tweet">
                    <div className="identity">
                     <div className="p_img">1</div>
                     <p>@kitsoMogale</p>
                    </div>
                    <p>random tweet1</p>
                </div>
                <div className="tweet">
                    <div className="identity">
                     <div className="p_img">1</div>
                     <p>@kitsoMogale</p>
                    </div>
                    <p>random tweet1</p>
                </div>
            </div>
            
          
        </div>
    )


}

