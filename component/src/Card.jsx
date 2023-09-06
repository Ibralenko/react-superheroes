function Card (props){
    return(
        <div className="card">
        <h1 className="card__title">{props.name}</h1>
        <h3 className="card__info">Вселенная: {props.universe}</h3>
        <h3 className="card__info">Альтер эго: {props.alterego}</h3>
        <h3 className="card__info">Род деятельности: {props.occupation}</h3>
        <h3 className="card__info">Друзья: {props.friends}</h3>
        <h3 className="card__info">Суперсила: {props.superpowers}</h3>
        <img className="card__image" src={props.url} alt={props.name}></img>
        <p className="card__text">{props.info}</p>
      </div>
    )
}
export default Card;