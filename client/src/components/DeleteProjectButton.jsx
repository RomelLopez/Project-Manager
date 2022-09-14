import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../mutations/projectMutations';

export default function DeleteProjectButton({ projectId }) {

    const navigate = useNavigate();
    //nagivate lets you go back to homepage or anywhere from the use of a button in this usecase
    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }],
    });


    return (
        <div className='d-flex mt-5 ms-auto'>
            <button className="btn btn-danger m-2" onClick={deleteProject}>
                <FaTrash className='icon' /> Delete Project
            </button>
        </div>
    )
}
