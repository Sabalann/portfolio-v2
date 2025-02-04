'use client'

export default function About() {
    const openCV = () => { window.open('/cv.pdf', '_blank'); };
    return(
        <div className="about">
            <button onClick={openCV}>CV</button>
            <p className="mb-10"> 
                Naast mijn studie, computer science, werk ik als freelance web developer. <br/>
                Ik ontwerp en ontwikkel websites voor particulieren en bedrijven die klanten aan willen trekken,
                hun eigen werk willen laten zien of kortom, hun 'online presence' willen verbeteren
            </p>
            <p>
                Momenteel ben ik ook student-assistent aan de 
                Universiteit Utrecht, waar ik anderen help bij het vak Databases.
            </p>
        </div>
    );
}