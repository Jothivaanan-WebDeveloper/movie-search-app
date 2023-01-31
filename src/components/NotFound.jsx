import image from './images/404.png';
export default function NotFound() {

    return (
        <>
            <img src={image}
                alt="Not Found"
            />
            <h4 class="lead text-light">Ooops! can't find any movies. Please try again with some other keywords.</h4>
        </> 
    )
}