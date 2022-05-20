import { useState, forwardRef } from 'react';
import classNames from 'classnames'

import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt,fallback : backupImg = images.noImage,className, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleErrorImage = ()=>{
        setFallback(backupImg)
    }
    return (
        <img ref={ref} 
            className={classNames(styles.wrapper,className)}
            src={fallback || src} 
            alt={alt} {...props} 
            onError={handleErrorImage}
        />
    )
}

export default forwardRef(Image);
