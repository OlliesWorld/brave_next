import Image from 'next/image'
export default function Card({ card }) {
    // console.log(card)
    return (
        <div className="bg-[#013220]">
          
        <div className="container m-auto text-white border-4 rounded-lg  p-4">
          <h2 className="text-6xl text-center underline">{card.name}</h2>
          <p className="text-center">{card.reign}</p>
        <div className="flex justify-center text-xl m-2">
          <p className="pr-4">Alias: {card.alias}</p>
          <p>Origin: {card.origin}</p>
        </div>
        <div className="w-full m-auto text-center text-gray-900 bg-purple-900 p-8">
          <div className="font-bold text-2xl ">My reason Why {card.name} is an inspiration!</div>
          <p className="text-xl">{card.theWhy}</p>
        </div>
        <h3 className="text-center text-4xl mt-12">Favorite Quotes:</h3>
            <div className="flex justify-center">
            
                <p className="text-xl text-center w-64 ">{card.quote2}</p>
                <p className="text-xl text-center w-64">{card.quote3}</p>
            
            </div>
            <div className="flex justify-center m-auto w-3/4">
              <div className="m-auto pt-4" >
                  <Image className="rounded-lg" src={`http://localhost:1337${card.images[0].url}`}  alt={card.name} width={300} height={300} />
              </div>
              <div className="m-auto pt-4" >
                  <Image className="rounded-lg" src={`http://localhost:1337${card.images[1].url}`}  alt={card.alias} width={300} height={300} />
                      </div>
            </div>
        
       </div>
        </div>
    )
}

// tell next.js how many pages there are
export async function getStaticPaths() {
    const res = await fetch("http://localhost:1337/cards");
    const cards = await res.json();
  
    const paths = cards.map((card) => ({
      params: { slug: card.Slug },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  // for each individual page: get the data for that page
  export async function getStaticProps({ params }) {
    const { slug } = params;
  
    const res = await fetch(`http://localhost:1337/cards?Slug=${slug}`);
    const data = await res.json();
    const card = data[0];
  
    return {
      props: { card },
    };
  }