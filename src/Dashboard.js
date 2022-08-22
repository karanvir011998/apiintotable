import React from "react";
import {useLocation} from "react-router-dom";

function Dashboard (){
    const location = useLocation();
    return(
        <div> Hello
        {/* {id} */}
        <p>
        </p>
            

            <table>

                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>

                </tr>
                <tr>
                    <td>{location.state.a[0].id}</td>
                    <td>{location.state.a[0].title}</td>
                    <td>{location.state.a[0].body}</td>

                </tr>
                
            </table>
        </div>
    )

}
export default Dashboard;