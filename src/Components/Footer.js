export default function Footer() {
    return (
        <div className="bg-blue-900 text-center text-white">
            <h2 className="text-2xl">Thanks for visiting!</h2>
        <div className="py-2  ">
             <p>Created with 💙 by <a href="https://roni.rocks/" target="_blank" rel="noreferrer"  className="text-regal-green font-bold">Roni</a> </p>
            <p>&copy; {new Date().getFullYear()}  Brave_Cards</p>
        </div>
        </div>
    )
}
