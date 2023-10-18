import axios, { type AxiosResponse } from 'axios';
import { type PersonaTypeResponse } from '../domain';

export const findAll = async (): Promise<PersonaTypeResponse[]> => {
	/*
    const response: PersonaTypeResponse[]  = await fetch('https://localhost:7047/api/Persona')
    .then(async res => await res.json())
    .then((res: PersonaTypeResponse[]) => res)
    
    return response;
    */

	const response: AxiosResponse<PersonaTypeResponse[]> = await axios.get<PersonaTypeResponse[]>(
		'https://localhost:7047/api/Persona',
	);
	return response.data;
};
