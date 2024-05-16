// urlFetcher.ts

import { readFileSync } from 'fs';

interface UrlEntry {
    environnement: string;
    id: string;
    url: string;
}

export interface Credentials {
    environnement: string;
    id: string;
    username: string;
    password: string;
}

export async function getUrlFromJson(env: string, id: string): Promise<string> {
    try {
        const data = readFileSync('fixtures/application.json', 'utf8');
        const urls: UrlEntry[] = JSON.parse(data);

        const result = urls.find(item => item.environnement === env && item.id === id);

        if (result) {
            return result.url;
        } else {
            throw new Error('Aucune URL correspondante trouvée');
        }
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier JSON ou de la recherche de l\'URL:', error);
        throw error;
    }
}


export  function getCredentialsFromFile(env: string, id: string, application: string): Credentials | null {
    try {
        const data = readFileSync('fixtures/'+application+'/login.json', 'utf8');
        const credentials: Credentials[] = JSON.parse(data);

        const credential = credentials.find(cred => cred.environnement === env && cred.id === id);
        if (!credential) {
            console.error('Aucun identifiant correspondant trouvé');
            return null;
        }
        return credential;
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier JSON:', error);
        return null;
    }
}
