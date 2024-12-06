import chefImg from '../img/cheff.png'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className='not-found-container' >
      <h1 className='not-found-title'>404</h1>
      <p className='Oops' >Oops... page not found!</p>
      <img className="chef" src={chefImg} height={200} width={200}/>
    </div>
  );
}

export default NotFoundPage;
