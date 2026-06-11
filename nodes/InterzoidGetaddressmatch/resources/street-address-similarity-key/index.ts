import type { INodeProperties } from 'n8n-workflow';

export const streetAddressSimilarityKeyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Street Address Similarity Key"
					]
				}
			},
			"options": [
				{
					"name": "Getaddressmatch",
					"value": "Getaddressmatch",
					"action": "Gets a similarity key for matching purposes for address data",
					"description": "Gets a similarity key for matching purposes for street address data\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getaddressmatch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getaddressmatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Street Address Similarity Key"
					],
					"operation": [
						"Getaddressmatch"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"required": true,
			"description": "Your Interzoid license API key. Register at www.interzoid.com/register",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Street Address Similarity Key"
					],
					"operation": [
						"Getaddressmatch"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"description": "Address from which to generate similarity key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Street Address Similarity Key"
					],
					"operation": [
						"Getaddressmatch"
					]
				}
			}
		},
];
