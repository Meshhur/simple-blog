import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from '../../components/';

export const Posts = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <Card />
        </div>
    );
};
