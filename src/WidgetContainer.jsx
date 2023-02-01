import { useState, useEffect, useMemo } from "react";
import Widget  from "./Widget";


function WidgetContainer(props) {
    const { id, slug, text} = props 

    return <Widget major={id} slug={slug} text={text}/>

};

export default WidgetContainer;

