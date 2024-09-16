import React from 'react';
import type { SVGProps } from 'react';

const ExternalLinkOut = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="55px" height="55px" viewBox="0 0 50 50" {...props}><path fill="currentColor" d="m38.288 10.297l1.414 1.415l-14.99 14.99l-1.414-1.414z"></path><path fill="currentColor" d="M40 20h-2v-8h-8v-2h10zm-5 18H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3"></path></svg>
    )
}

export default ExternalLinkOut;