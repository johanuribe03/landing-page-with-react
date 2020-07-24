import Navbar from "./Navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer.js";



export default function Home () {


    let cards = [

{   
    image: "https://via.placeholder.com/300", 
    title: "My Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ", 
    buttonText: "View", 
    url: "#" 
}

{   
    image: "https://via.placeholder.com/300", 
    title: "My Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ", 
    buttonText: "View", 
    url: "#" 
}
{   
    image: "https://via.placeholder.com/300", 
    title: "My Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ", 
    buttonText: "View", 
    url: "#" 
}
{   
    image: "https://via.placeholder.com/300", 
    title: "My Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ", 
    buttonText: "View", 
    url: "#" 
}
{   
    image: "https://via.placeholder.com/300", 
    title: "My Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ", 
    buttonText: "View", 
    url: "#" 
}



    return (
        <div className="container-fluid">
        <Navbar />
        <Jumbotron />
        <div className="row">
        {   card.map((card,index)) => 
            <div className="col-3" key={index}>
                <Card tittle={card.title} body={card.body} buttonText={card.buttonText} url={card.url}, image={card.image}
}
            </div>

        }
        </div>

        </div>
    )