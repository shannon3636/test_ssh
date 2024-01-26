import React from 'react';

const Test = () => {
    const handleClick = () => {
        var url = 'https://play.joun88.casino/';
        // var anchor = document.createElement('a');
        // anchor.setAttribute('href', url);
        // anchor.setAttribute('target', '_blank');

        // var event = new MouseEvent('click', {
        //     bubbles: true,
        //     cancelable: true,
        //     view: window
        // });
        // anchor.dispatchEvent(event);
        // window.location.href = 'safari://' + url;
        var iframe = document.createElement('iframe');

        iframe.src = url;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';

        document.body.appendChild(iframe);
        document.documentElement.style.overflow = 'hidden';
        document.body.style.margin = '0';

        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.documentElement.style.width = '100%';
        document.documentElement.style.height = '100%';

    };

    return (
        <div>
            <button onClick={handleClick} className='btn btn-primary'>CLICK ME</button>
        </div>
    );
};

export default Test;