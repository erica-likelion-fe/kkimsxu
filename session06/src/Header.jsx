

export const Header = ({props}) => {
    return (
        <header>
            <button onClick={(e) => {console.log('클릭했습니다.')}}>CLICK!</button>
            <input type="text" placeholder="event"/> 
        </header>
    )
}