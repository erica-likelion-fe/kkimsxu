export const Nav = () => {
    const list = ["html", "css", "js"];
    return (
        <nav>
        <ol>
            {list.map((value, index) => {
            return <li key={index}>{value}</li>;
            })}
        </ol>
        </nav>
    );
    };