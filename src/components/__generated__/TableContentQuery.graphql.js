/**
 * @generated SignedSource<<cc0fe24e43454190189242d31c2a494e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TableContentQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "countries",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CountryFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CountryDetailsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TableContentQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "countries",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "emoji",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          },
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Language",
            "kind": "LinkedField",
            "name": "languages",
            "plural": true,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Continent",
            "kind": "LinkedField",
            "name": "continent",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currency",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c99580a1bcdc6fa9e8b2282e394714d7",
    "id": null,
    "metadata": {},
    "name": "TableContentQuery",
    "operationKind": "query",
    "text": "query TableContentQuery {\n  countries {\n    ...CountryFragment\n    ...CountryDetailsFragment\n  }\n}\n\nfragment CountryDetailsFragment on Country {\n  languages {\n    name\n  }\n  continent {\n    name\n  }\n  currency\n  phone\n}\n\nfragment CountryFragment on Country {\n  emoji\n  code\n  name\n}\n"
  }
};
})();

node.hash = "bcfa6df4787372ae2d63588fd3b799a2";

export default node;
