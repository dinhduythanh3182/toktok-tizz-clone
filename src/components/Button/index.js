import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    text,
    size = 'small',
    disabled = false,
    rounded = false,
    primary = false,
    outline = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    const classes = cx('wrapper',className,size, {
        primary,
        outline,
        text,
        rounded,
        disabled,
    });
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
// REMOVE EVENTS WHEN BUTTON DISABLED
    if(disabled) {
        Object.keys(props).forEach((key)=>{
            if(key.startsWith("on") &&typeof props[key]==='function'){
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
