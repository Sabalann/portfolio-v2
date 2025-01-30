'use client'

export default function Nav() {
    return (
        <div className="nav-container fixed flex flex-col ml-12 ">
            <button onClick={() => {
                document.getElementById('whoAmI').scrollIntoView({ behavior: 'smooth' })}}> Home
            </button>
            <button onClick={() => {
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}}> Projecten
            </button>
            <button onClick={() => {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}}> Over mij
            </button>
            <button onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}}> Contact
            </button>
        </div>
    );
}