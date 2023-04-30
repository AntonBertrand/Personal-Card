import portrait from "./portrait.jpg";

export default function Info() {
    return (
        <div className="info-header">
            <img src={portrait}></img>
            <h2>Anton Bertrand</h2>
            <p>Software Engineer</p>
            <p className="grey-text">Antonbertrand@hotmail.com</p>
            <div className="buttons">
                <button className="email">
                    <i class="fa-solid fa-envelope"></i>
                Email</button>
                <button className="linkedin">
                <i class="fa-brands fa-linkedin"></i>
                    LinkedIn</button>
            </div>
        </div>
    )
}