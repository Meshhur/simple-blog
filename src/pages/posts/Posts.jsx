import { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from '../../components/';
import { Alert, AlertTitle, Collapse } from '@mui/material';
import "./Posts.css"

export const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3000/posts"
        }).then(res => {
            setPosts(res.data)
        }).catch(() => {
            setOpen(true)
        })
    }, [])

    return (
        <div>
            <Collapse in={open}>
                <Alert
                    severity="error"
                    action={
                        <button class="close-btn" onClick={() => { setOpen(false) }}>
                            <span class="text">Close</span>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" widt="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                </svg>
                            </span>
                        </button>}
                >
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                </Alert>
            </Collapse>
            {posts && posts.map((post, index) => (
                <Card
                    key={index}
                    id={post.id}
                    title={post.title}
                    date={post.createdDate}
                    text={post.text}
                    image={post.image}
                />
            ))}
        </div>
    );
};
