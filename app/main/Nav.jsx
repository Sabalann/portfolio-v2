'use client'

export default function Nav() {
    return (
        <div className="nav-container fixed flex flex-col ml-12 ">
            <button onClick={() => {
                document.getElementById('whoAmI').scrollIntoView({ behavior: 'smooth' })}}> Home
            </button>
            <button onClick={() => {
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}}> Work
            </button>
            <button onClick={() => {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}}> About
            </button>
            <button onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}}> Contact
            </button>
        </div>
    );
}