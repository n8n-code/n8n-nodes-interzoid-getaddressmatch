import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class InterzoidGetaddressmatchApi implements ICredentialType {
        name = 'N8nDevInterzoidGetaddressmatchApi';

        displayName = 'Interzoid Getaddressmatch API';

        icon: Icon = { light: 'file:../nodes/InterzoidGetaddressmatch/interzoid-getaddressmatch.png', dark: 'file:../nodes/InterzoidGetaddressmatch/interzoid-getaddressmatch.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.interzoid.com',
                        required: true,
                        placeholder: 'https://api.interzoid.com',
                        description: 'The base URL of your Interzoid Getaddressmatch API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
