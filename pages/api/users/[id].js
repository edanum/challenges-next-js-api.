import {getUserById} from '../../../services/userService';
import {deleteUser} from '../../../services/userService';

export default async function handler(request, response) {
  const {id} = request.query;

  if (request.method === 'GET') {
    const data = await getUserById(id);
    return response.status(200).json(data);
  }

  if (request.method === 'DELETE') {
    const data = await deleteUser(id);
    return response.status(200).json(data);
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}
