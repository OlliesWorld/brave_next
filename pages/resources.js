import Emoji from "../Components/Emoji"
 
 export default function Resources() {
     return (
         <div className="text-center">
         <h2 className="text-4xl mb-8">Here are a list of Resources that I always reference and learn from:</h2>
        <div className="text-2xl mb-4">
            <div className="mb-4"> 
                <Emoji symbol="\u{1F31F}" label="star" />
                <a href="https://real-life-heroes-and-good-guys.fandom.com/wiki/Female_Heroes" target="_blank" rel="noreferrer">Real Life Heroes and Good Guys Wiki</a>
            </div>
            <div className="mb-4">
                <Emoji symbol="\u{1F499}" label="heart" />
                <a href="https://www.heroicgirls.com/" target="_blank" rel="noreferrer">Heroic Girls</a>
            </div>
            <div className="mb-4">
                <Emoji symbol="\u{1F499}" label="heart" />
                <a href="https://www.unfpa.org/news/league-extraordinary-women-real-life-super-heroes" target="_blank" rel="noreferrer">A league of extraordinary women: Real life super heroes</a>
            </div>
            <div className="mb-4">
                <Emoji symbol="\u{1F31F}" label="star" />
                <a href="https://www.amightygirl.com/blog?p=2515" target="_blank" rel="noreferrer">A Mighty Girl</a>
            </div>
            <div className="mb-4">
                <Emoji symbol="\u{1F31F}" label="star" />
                <a href="https://myhero.com/women" target="_blank" rel="noreferrer">My Hero</a>
            </div>
            <div className="mb-4">
                <Emoji symbol="\u{1F499}" label="heart" />
                <a href="https://www.rebelgirls.com/" target="_blank" rel="noreferrer" >Rebel Girls</a>
            </div>
        </div>
         <h2>This list will always be changing and lengthing!</h2>
         </div>
     )
 }