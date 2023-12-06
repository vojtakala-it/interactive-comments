import Comment from "./comment/Comment.jsx";
import TransitionComponent from "../utils/TransitionComponent.jsx";
import juliusomo from '@/assets/images/avatars/image-juliusomo.png';
import ramsesmiron from '@/assets/images/avatars/image-ramsesmiron.png';
import maxblagun from '@/assets/images/avatars/image-maxblagun.png';
import amyrobson from '@/assets/images/avatars/image-amyrobson.png';
import AddComment from "./comment/AddComment.jsx";
import { useState } from "react";


export default function CommentsSection() {
    const amyContent = `
                        Impressive! Though it seems the drag feature could be improved. 
                        But overall it looks incredible. You've nailed the design and the responsiveness
                        at various breakpoints works really well.
    `;

    const maxContent = `
                        Woah, your project looks awesome! How long have you been coding for? 
                        I'm still new, but think I want to dive into React as well soon. 
                        Perhaps you can give me an insight on where I can learn React? Thanks!
    `;

    const julContent = `
                        I couldn't agree more with this. 
                        Everything moves so fast and it always seems 
                        like everyone knows the newest library/framework. 
                        But the fundamentals are what stay constant.
    `;

    const ramContent = `
                        If you're still new, I'd recommend focusing on the fundamentals of HTML,
                        CSS, and JS before considering React. 
                        It's very tempting to jump ahead but lay a solid foundation first."
    `;

    const [comments, setComments] = useState([
        {
            avatar: amyrobson,
            userName: 'amyrobson',
            content: amyContent,
            createdAt: '1 month ago',
            activeUser: false,
            isReply: false,
            replyingTo: null,
            score: 12,
        },
        {
            avatar: maxblagun,
            userName: 'maxblagun',
            content: maxContent,
            createdAt: '2 weeks ago',
            activeUser: false,
            isReply: false,
            replyingTo: null,
            score: 12,
        },
        {
            avatar: ramsesmiron,
            userName: 'ramsesmiron',
            content: ramContent,
            createdAt: '1 weeks ago',
            activeUser: false,
            isReply: true,
            replyingTo: 'maxblagun',
            score: 4,
        },
        {
            avatar: juliusomo,
            userName: 'juliusomo',
            content: julContent,
            createdAt: '2 days ago',
            activeUser: true,
            isReply: true,
            replyingTo: 'ramsesmiron',
            score: 2,
        },
    ]);

    const handleAddComment = newComment => {
        setComments([newComment, ...comments]);
    };

    return (
        <TransitionComponent>
            <div className='comments-section'>
                { comments.map((comment, index) => (
                    <Comment { ...comment } />
                )) }
                <AddComment
                    avatar={ juliusomo }
                    onAddComment={ handleAddComment }/>
            </div>
        </TransitionComponent>
    );
}

// {/*<Comment*/ }
// {/*    avatar={ amyrobson }*/ }
// {/*    userName='amyrobson'*/ }
// {/*    content={ amyContent }*/ }
// {/*    createdAt='1 month ago'*/ }
// {/*    activeUser={ false }*/ }
// {/*    score='12'/>*/ }
// {/*<Comment*/ }
// {/*    avatar={ maxblagun }*/ }
// {/*    userName='maxblagun'*/ }
// {/*    content={ maxContent }*/ }
// {/*    createdAt='2 weeks ago'*/ }
// {/*    activeUser={ false }*/ }
// {/*    score='5'/>*/ }
// {/*<Comment*/ }
// {/*    avatar={ ramsesmiron }*/ }
// {/*    userName='ramsesmiron'*/ }
// {/*    content={ ramContent }*/ }
// {/*    createdAt='1 weeks ago'*/ }
// {/*    activeUser={ false }*/ }
// {/*    isReply={ true }*/ }
// {/*    replyingTo='maxblagun'*/ }
// {/*    score='4'/>*/ }
// {/*<Comment*/ }
// {/*    avatar={ juliusomo }*/ }
// {/*    userName='juliusomo'*/ }
// {/*    content={ julContent }*/ }
// {/*    createdAt='2 days ago'*/ }
// {/*    activeUser={ true }*/ }
// {/*    isReply={ true }*/ }
// {/*    replyingTo='ramsesmiron'*/ }
// {/*    score='2'/>*/ }
