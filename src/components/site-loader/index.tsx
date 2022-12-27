import "@components/site-loader/index.scss";
import { ReactElement, useEffect, useState } from "react";


export default (
    props: {
        load: () => Promise<{
            default: () => ReactElement
        }>
    }
) => {
    const [component, setComponent] = useState(null);
    const [loaderHidden, setLoaderHidden] = useState(false);
    useEffect(() => {
        if(component) setTimeout(() => setLoaderHidden(true), 2000);
    }, [component]);
    useEffect(() => {
        props.load().then(({default: _default}) => setComponent(_default() as any))
    }, []);
    return (
        <>
        {!loaderHidden && <div className={`site-loader ${component?'fade':''}`}/>}
        {component}
        </>
    )
}