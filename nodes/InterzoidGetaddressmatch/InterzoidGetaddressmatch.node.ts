import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { streetAddressSimilarityKeyDescription } from './resources/street-address-similarity-key';

export class InterzoidGetaddressmatch implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Interzoid Getaddressmatch',
		name: 'N8nDevInterzoidGetaddressmatch',
		icon: { light: 'file:./interzoid-getaddressmatch.png', dark: 'file:./interzoid-getaddressmatch.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API generates similarity keys for address deduplication, fuzzy matching, and dataset merging.',
		defaults: { name: 'Interzoid Getaddressmatch' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevInterzoidGetaddressmatchApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Street Address Similarity Key",
					"value": "Street Address Similarity Key",
					"description": ""
				}
			],
			"default": ""
		},
		...streetAddressSimilarityKeyDescription
		],
	};
}
