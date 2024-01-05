import { useParams } from 'react-router-dom'; 

const User = () => {
    const { id } = useParams();
    return (
        <div className="user">
            Hello User {id}!
        </div>
    );
};

export default User;