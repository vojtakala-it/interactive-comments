import Comment from "./comment/Comment.jsx";
import TransitionComponent from "../utils/TransitionComponent.jsx";
import juliusomo from '@/assets/images/avatars/image-juliusomo.png';
import maxblagun from '@/assets/images/avatars/image-maxblagun.png';


export default function CommentsSection() {
    const julContent = `
                        Impressive! Though it seems the drag feature could be improved. 
                        But overall it looks incredible. You've nailed the design and the responsiveness
                        at various breakpoints works really well.
    `;

    const maxContent = `
                        Woah, your project looks awesome! How long have you been coding for? 
                        I'm still new, but think I want to dive into React as well soon. 
                        Perhaps you can give me an insight on where I can learn React? Thanks!
    `;

    return (
            <TransitionComponent>
                <div className='comments-section'>
                    <Comment
                            avatar={ juliusomo }
                            userName='juliusomo'
                            content={ julContent }
                            createdAt='1 month ago'
                            score='12'/>
                    <Comment
                            avatar={ maxblagun }
                            userName='maxblagun'
                            content={ maxContent }
                            createdAt='2 weeks ago'
                            score='5'/>
                </div>
            </TransitionComponent>
    );
}
