import { PLATFORM_ID, CAUTH_API_SECRET, CAUTH_API_URL } from '$env/static/private';
import { env } from '$env/dynamic/private';

class CAuthAPI {
    async checkToken() {
        if(env.CAUTH_TOKEN && env.CAUTH_TOKEN_EXPIRES && new Date(env.CAUTH_TOKEN_EXPIRES) > new Date()) return;
        let result = await (await fetch(`${CAUTH_API_URL}/token/new`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                platform: PLATFORM_ID,
                secret: CAUTH_API_SECRET
            })
        })).json();
        env.CAUTH_TOKEN = result.token;
        env.CAUTH_TOKEN_EXPIRES = new Date(result.expires).toDateString();
    }
    async api(endpoint: string, data = {}): Promise<Response> {
        await this.checkToken();
        return await fetch(`${CAUTH_API_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${env.CAUTH_TOKEN}`
            },
            body: JSON.stringify(data)
        });
    }
    async verifyLogin(session: string): Promise<boolean> {
        let response;
        try {
            response = await this.api('session/verify', { session });
        } catch(err) {
            return false;
        }
        if(response?.status === 200) {
            const result = await response.json();
            if(result.status !== 200)
                return false;
            return true;
        }
        return false;
    }
    async getUserData(session: string): Promise<any> {
        let response;
        try{
            response = await this.api('session/user', { session });
        } catch(err) {
            return false;
        }
        if(response?.status === 200) {
            const result = await response.json();
            if(result.status !== 200)
                return false;
            return result.user;
        }
        return false;
    
    }
}

export const CAuth = new CAuthAPI();