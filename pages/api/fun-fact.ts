// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    fact: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let funFactResponse = '';

    await fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
        method: 'get',
        headers: new Headers({
            'X-Api-Key': 'omwaNdte1OVkdytByN6nRQ==CLASBp0NdUJMMTTb',
            'content-type': 'application/json'
        })
    }).then( async (response) => {
        const res = await response.json() as [{[key: string]: string}];
        funFactResponse = res[0]['fact'];
    }, (rejection) => {
        funFactResponse = 'I was unable to fetch a fun fact :(';
    });

    res.status(200).json({'fact': funFactResponse});
}
