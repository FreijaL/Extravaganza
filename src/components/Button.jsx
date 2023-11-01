import style from './Button.scss';

function Button({action, title}) {
    <>
        <button className='default-button' onClick={(e) => {action(e)}}>{title}</button>
    </>
};

export default Button;