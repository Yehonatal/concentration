import "./App.css";

function App() {
    const emoji_array = [
        "😀",
        "😀",
        "😁",
        "😁",
        "😂",
        "😂",
        "🤣",
        "🤣",
        "😃",
        "😃",
        "😄",
        "😄",
    ];
    return (
        <>
            <div className="box">
                {emoji_array.map((emo, key) => (
                    <div className="card" key={key}>
                        <h2>{emo}</h2>
                    </div>
                ))}
            </div>
            <h1>CONCENTRATION</h1>
        </>
    );
}

export default App;
