import { Pets } from "../interfaces";

/** Dummy pet data. */
export const samplePetData: Pets[] = [
  {
      "id": 75326170,
      "organization_id": "NC161",
      "url": "https://www.petfinder.com/dog/jeffy-75326170/nc/newport/carteret-county-humane-society-nc161/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Labrador Retriever",
          "secondary": null,
          "mixed": true,
          "unknown": false
      },
      "colors": {
          "primary": "Yellow / Tan / Blond / Fawn",
          "secondary": "White / Cream",
          "tertiary": null
      },
      "age": "Young",
      "gender": "Male",
      "size": "Large",
      "coat": "Short",
      "attributes": {
          "spayed_neutered": false,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [
          "Affectionate",
          "Friendly",
          "Funny",
          "Curious",
          "Loves",
          "Playful",
          "Adorable"
      ],
      "name": "Jeffy",
      "description": "Jeffy is a young, male dog with a fun-loving personality.He and his brother Johnny came into the shelter February 13,...",
      "organization_animal_id": "A57846158",
      "photos": [
          {
              "small": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/6a81438a-f0b6-4ca8-a5fc-a86177d29522.jpg?versionId=U85R2kRXYbBp9BZQ2sZxG6Z.FkcMEvFz&bust=1740573568&width=100",
              "medium": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/6a81438a-f0b6-4ca8-a5fc-a86177d29522.jpg?versionId=U85R2kRXYbBp9BZQ2sZxG6Z.FkcMEvFz&bust=1740573568&width=300",
              "large": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/6a81438a-f0b6-4ca8-a5fc-a86177d29522.jpg?versionId=U85R2kRXYbBp9BZQ2sZxG6Z.FkcMEvFz&bust=1740573568&width=600",
              "full": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/6a81438a-f0b6-4ca8-a5fc-a86177d29522.jpg?versionId=U85R2kRXYbBp9BZQ2sZxG6Z.FkcMEvFz&bust=1740573568"
          },
          {
              "small": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/4b5c8007-b435-44a4-b70d-c1980d0ddb89.jpg?versionId=XXrat2AH6F8VKm9w9hVlM1jDyT67uL6a&bust=1740573568&width=100",
              "medium": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/4b5c8007-b435-44a4-b70d-c1980d0ddb89.jpg?versionId=XXrat2AH6F8VKm9w9hVlM1jDyT67uL6a&bust=1740573568&width=300",
              "large": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/4b5c8007-b435-44a4-b70d-c1980d0ddb89.jpg?versionId=XXrat2AH6F8VKm9w9hVlM1jDyT67uL6a&bust=1740573568&width=600",
              "full": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/4b5c8007-b435-44a4-b70d-c1980d0ddb89.jpg?versionId=XXrat2AH6F8VKm9w9hVlM1jDyT67uL6a&bust=1740573568"
          },
          {
              "small": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/b02e1326-05bc-49fb-b46a-e8aa30c42b5f.jpg?versionId=okrmFAjuFPQnP4cpZ3Tus5OzJetBNisx&bust=1740573562&width=100",
              "medium": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/b02e1326-05bc-49fb-b46a-e8aa30c42b5f.jpg?versionId=okrmFAjuFPQnP4cpZ3Tus5OzJetBNisx&bust=1740573562&width=300",
              "large": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/b02e1326-05bc-49fb-b46a-e8aa30c42b5f.jpg?versionId=okrmFAjuFPQnP4cpZ3Tus5OzJetBNisx&bust=1740573562&width=600",
              "full": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/b02e1326-05bc-49fb-b46a-e8aa30c42b5f.jpg?versionId=okrmFAjuFPQnP4cpZ3Tus5OzJetBNisx&bust=1740573562"
          },
          {
              "small": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/5c6f54be-712e-4636-8296-4a2ea41193e1.jpg?versionId=bRamO1oN18wdJSvCH1rdn4NNB2LYeU2_&bust=1740573563&width=100",
              "medium": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/5c6f54be-712e-4636-8296-4a2ea41193e1.jpg?versionId=bRamO1oN18wdJSvCH1rdn4NNB2LYeU2_&bust=1740573563&width=300",
              "large": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/5c6f54be-712e-4636-8296-4a2ea41193e1.jpg?versionId=bRamO1oN18wdJSvCH1rdn4NNB2LYeU2_&bust=1740573563&width=600",
              "full": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/5c6f54be-712e-4636-8296-4a2ea41193e1.jpg?versionId=bRamO1oN18wdJSvCH1rdn4NNB2LYeU2_&bust=1740573563"
          },
          {
              "small": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/aead4f12-06ce-440c-9789-66f32571c21a.jpg?versionId=.DBj6fh2d.L5fHTzSLb.SaCtIlUTIlHk&bust=1740573564&width=100",
              "medium": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/aead4f12-06ce-440c-9789-66f32571c21a.jpg?versionId=.DBj6fh2d.L5fHTzSLb.SaCtIlUTIlHk&bust=1740573564&width=300",
              "large": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/aead4f12-06ce-440c-9789-66f32571c21a.jpg?versionId=.DBj6fh2d.L5fHTzSLb.SaCtIlUTIlHk&bust=1740573564&width=600",
              "full": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/aead4f12-06ce-440c-9789-66f32571c21a.jpg?versionId=.DBj6fh2d.L5fHTzSLb.SaCtIlUTIlHk&bust=1740573564"
          },
          {
              "small": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/43c4d7fa-98f0-4391-a677-69ac66eaa5a1.jpg?versionId=lVlp.KaExaNL7q4z9eUfapOdX3BNBwcF&bust=1740573564&width=100",
              "medium": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/43c4d7fa-98f0-4391-a677-69ac66eaa5a1.jpg?versionId=lVlp.KaExaNL7q4z9eUfapOdX3BNBwcF&bust=1740573564&width=300",
              "large": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/43c4d7fa-98f0-4391-a677-69ac66eaa5a1.jpg?versionId=lVlp.KaExaNL7q4z9eUfapOdX3BNBwcF&bust=1740573564&width=600",
              "full": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/43c4d7fa-98f0-4391-a677-69ac66eaa5a1.jpg?versionId=lVlp.KaExaNL7q4z9eUfapOdX3BNBwcF&bust=1740573564"
          }
      ],
      "primary_photo_cropped": {
          "small": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/6a81438a-f0b6-4ca8-a5fc-a86177d29522.jpg?versionId=U85R2kRXYbBp9BZQ2sZxG6Z.FkcMEvFz&bust=1740573568&width=300",
          "medium": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/6a81438a-f0b6-4ca8-a5fc-a86177d29522.jpg?versionId=U85R2kRXYbBp9BZQ2sZxG6Z.FkcMEvFz&bust=1740573568&width=450",
          "large": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/6a81438a-f0b6-4ca8-a5fc-a86177d29522.jpg?versionId=U85R2kRXYbBp9BZQ2sZxG6Z.FkcMEvFz&bust=1740573568&width=600",
          "full": "https://dbw3zep4prcju.cloudfront.net/animal/bba2fde1-fc8c-46a1-9237-c1e81aa03605/image/6a81438a-f0b6-4ca8-a5fc-a86177d29522.jpg?versionId=U85R2kRXYbBp9BZQ2sZxG6Z.FkcMEvFz&bust=1740573568"
      },
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:51:20+0000",
      "published_at": "2025-02-26T12:51:19+0000",
      "distance": null,
      "contact": {
          "email": "cchsshelter@embarqmail.com",
          "phone": "(252) 247-7744",
          "address": {
              "address1": "853 Hibbs Road",
              "address2": "PO Box 357",
              "city": "Newport",
              "state": "NC",
              "postcode": "28570",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326170"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/nc161"
          }
      }
  },
  {
      "id": 75326300,
      "organization_id": "IL195",
      "url": "https://www.petfinder.com/dog/elyse-75326300/il/wheeling/heartland-animal-shelter-il195/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Labrador Retriever",
          "secondary": null,
          "mixed": true,
          "unknown": false
      },
      "colors": {
          "primary": "Yellow / Tan / Blond / Fawn",
          "secondary": null,
          "tertiary": null
      },
      "age": "Young",
      "gender": "Female",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [
          "Dog Friendly Can probably live with other dogs"
      ],
      "name": "Elyse",
      "description": "Elyse is at our shelter. Please submit an application from our website or just come in to meet her during...",
      "organization_animal_id": "HLIL-A-131538",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:51:11+0000",
      "published_at": "2025-02-26T12:51:10+0000",
      "distance": null,
      "contact": {
          "email": "info@heartlandanimalshelter.org",
          "phone": "(847) 296-6400",
          "address": {
              "address1": null,
              "address2": null,
              "city": "Wheeling",
              "state": "IL",
              "postcode": "60090",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326300"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/il195"
          }
      }
  },
  {
      "id": 75326301,
      "organization_id": "IL195",
      "url": "https://www.petfinder.com/cat/latte-75326301/il/wheeling/heartland-animal-shelter-il195/",
      "type": "Cat",
      "species": "Cat",
      "breeds": {
          "primary": "Domestic Short Hair",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Brown / Chocolate",
          "secondary": null,
          "tertiary": null
      },
      "age": "Adult",
      "gender": "Female",
      "size": "Medium",
      "coat": null,
      "attributes": {
          "spayed_neutered": false,
          "house_trained": false,
          "declawed": false,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [],
      "name": "Latte",
      "description": "Late is a calm and sweet girl who can normally be found napping in a cozy bed. She can&amp;#39;t wait...",
      "organization_animal_id": "HLIL-A-131497",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:51:11+0000",
      "published_at": "2025-02-26T12:51:10+0000",
      "distance": null,
      "contact": {
          "email": "info@heartlandanimalshelter.org",
          "phone": "(847) 296-6400",
          "address": {
              "address1": null,
              "address2": null,
              "city": "Wheeling",
              "state": "IL",
              "postcode": "60090",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326301"
          },
          "type": {
              "href": "/v2/types/cat"
          },
          "organization": {
              "href": "/v2/organizations/il195"
          }
      }
  },
  {
      "id": 75326302,
      "organization_id": "IL195",
      "url": "https://www.petfinder.com/dog/cash-money-75326302/il/wheeling/heartland-animal-shelter-il195/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Mixed Breed",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Gray / Blue / Silver",
          "secondary": null,
          "tertiary": null
      },
      "age": "Adult",
      "gender": "Male",
      "size": "Medium",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [
          "Dog Friendly Can probably live with other dogs"
      ],
      "name": "Cash Money",
      "description": "Cash Money is at our shelter. Please submit an application from our website or just come in to meet him...",
      "organization_animal_id": "HLIL-A-131504",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:51:11+0000",
      "published_at": "2025-02-26T12:51:10+0000",
      "distance": null,
      "contact": {
          "email": "info@heartlandanimalshelter.org",
          "phone": "(847) 296-6400",
          "address": {
              "address1": null,
              "address2": null,
              "city": "Wheeling",
              "state": "IL",
              "postcode": "60090",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326302"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/il195"
          }
      }
  },
  {
      "id": 75326303,
      "organization_id": "IL195",
      "url": "https://www.petfinder.com/dog/eden-75326303/il/wheeling/heartland-animal-shelter-il195/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Labrador Retriever",
          "secondary": null,
          "mixed": true,
          "unknown": false
      },
      "colors": {
          "primary": "Yellow / Tan / Blond / Fawn",
          "secondary": null,
          "tertiary": null
      },
      "age": "Young",
      "gender": "Female",
      "size": "Medium",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [],
      "name": "Eden",
      "description": "Eden is at our shelter. Please submit an application from our website or just come in to meet her during...",
      "organization_animal_id": "HLIL-A-131539",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:51:11+0000",
      "published_at": "2025-02-26T12:51:10+0000",
      "distance": null,
      "contact": {
          "email": "info@heartlandanimalshelter.org",
          "phone": "(847) 296-6400",
          "address": {
              "address1": null,
              "address2": null,
              "city": "Wheeling",
              "state": "IL",
              "postcode": "60090",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326303"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/il195"
          }
      }
  },
  {
      "id": 75326304,
      "organization_id": "IL195",
      "url": "https://www.petfinder.com/cat/mack-75326304/il/wheeling/heartland-animal-shelter-il195/",
      "type": "Cat",
      "species": "Cat",
      "breeds": {
          "primary": "Domestic Short Hair",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Black",
          "secondary": null,
          "tertiary": null
      },
      "age": "Adult",
      "gender": "Male",
      "size": "Large",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": false,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [],
      "name": "Mack",
      "description": "Mack came to us when a good samaritan called us that they had found a cat outside who was badly...",
      "organization_animal_id": "HLIL-A-131444",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:51:11+0000",
      "published_at": "2025-02-26T12:51:10+0000",
      "distance": null,
      "contact": {
          "email": "info@heartlandanimalshelter.org",
          "phone": "(847) 296-6400",
          "address": {
              "address1": null,
              "address2": null,
              "city": "Wheeling",
              "state": "IL",
              "postcode": "60090",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326304"
          },
          "type": {
              "href": "/v2/types/cat"
          },
          "organization": {
              "href": "/v2/organizations/il195"
          }
      }
  },
  {
      "id": 75326305,
      "organization_id": "IL195",
      "url": "https://www.petfinder.com/dog/guy-fieri-75326305/il/wheeling/heartland-animal-shelter-il195/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Husky",
          "secondary": null,
          "mixed": true,
          "unknown": false
      },
      "colors": {
          "primary": "White / Cream",
          "secondary": null,
          "tertiary": null
      },
      "age": "Young",
      "gender": "Male",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [],
      "name": "Guy Fieri",
      "description": "Guy Fieri is at our shelter. Please submit an application from our website or just come in to meet him...",
      "organization_animal_id": "HLIL-A-131541",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:51:11+0000",
      "published_at": "2025-02-26T12:51:10+0000",
      "distance": null,
      "contact": {
          "email": "info@heartlandanimalshelter.org",
          "phone": "(847) 296-6400",
          "address": {
              "address1": null,
              "address2": null,
              "city": "Wheeling",
              "state": "IL",
              "postcode": "60090",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326305"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/il195"
          }
      }
  },
  {
      "id": 75326299,
      "organization_id": "TX1950",
      "url": "https://www.petfinder.com/cat/lisa-75326299/tx/houston/houston-pets-alive-tx1950/",
      "type": "Cat",
      "species": "Cat",
      "breeds": {
          "primary": "Domestic Short Hair",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Gray / Blue / Silver",
          "secondary": null,
          "tertiary": null
      },
      "age": "Young",
      "gender": "Female",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": false,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [],
      "name": "Lisa",
      "description": "Hi, I&amp;#39;m Lisa! My days are filled with chasing shadows and batting at invisible foes. My silliness will keep you...",
      "organization_animal_id": "HPA-A-17080",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:51:06+0000",
      "published_at": "2025-02-26T12:51:05+0000",
      "distance": null,
      "contact": {
          "email": "adopt@houstonpetsalive.org",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77092",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326299"
          },
          "type": {
              "href": "/v2/types/cat"
          },
          "organization": {
              "href": "/v2/organizations/tx1950"
          }
      }
  },
  {
      "id": 75326298,
      "organization_id": "TX1950",
      "url": "https://www.petfinder.com/cat/mario-75326298/tx/houston/houston-pets-alive-tx1950/",
      "type": "Cat",
      "species": "Cat",
      "breeds": {
          "primary": "Domestic Short Hair",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Gray / Blue / Silver",
          "secondary": null,
          "tertiary": null
      },
      "age": "Young",
      "gender": "Male",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": false,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [],
      "name": "Mario",
      "description": "Hi there, I&amp;#39;m Mario! I&amp;#39;m just a little kitten, but I&amp;#39;ve got a big personality. I love to make my...",
      "organization_animal_id": "HPA-A-17081",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:51:05+0000",
      "published_at": "2025-02-26T12:51:04+0000",
      "distance": null,
      "contact": {
          "email": "adopt@houstonpetsalive.org",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77092",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326298"
          },
          "type": {
              "href": "/v2/types/cat"
          },
          "organization": {
              "href": "/v2/organizations/tx1950"
          }
      }
  },
  {
      "id": 75326296,
      "organization_id": "VA599",
      "url": "https://www.petfinder.com/dog/yogi-beara-75326296/va/lyndhurst/shenandoah-valley-animal-services-center-va599/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Coonhound",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Brindle",
          "secondary": null,
          "tertiary": null
      },
      "age": "Adult",
      "gender": "Male",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": false,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [],
      "name": "Yogi Beara",
      "description": "-MALE, Intact\n-FOUND: 2/24/25, Cole Road, Near Sherando Lake, 22952\n-W/ID (Skinny leather brown collar, NO microchip)\n-MUST BE RECLAIMED...",
      "organization_animal_id": "SVAS-A-36835",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:49:35+0000",
      "published_at": "2025-02-26T12:49:34+0000",
      "distance": null,
      "contact": {
          "email": "svasc@co.augusta.va.us",
          "phone": "(540) 943-5142",
          "address": {
              "address1": null,
              "address2": null,
              "city": "Lyndhurst",
              "state": "VA",
              "postcode": "22952",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326296"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/va599"
          }
      }
  },
  {
      "id": 75326294,
      "organization_id": "KS313",
      "url": "https://www.petfinder.com/cat/logan-75326294/ks/shawnee/melissas-menageries-second-chances-ks313/",
      "type": "Cat",
      "species": "Cat",
      "breeds": {
          "primary": "Domestic Short Hair",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Gray / Blue / Silver",
          "secondary": "Brown / Chocolate",
          "tertiary": null
      },
      "age": "Adult",
      "gender": "Male",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": false,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": null,
          "cats": null
      },
      "tags": [],
      "name": "Logan",
      "description": null,
      "organization_animal_id": "MSC-A-14922",
      "photos": [
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326294/1/?bust=1740574227&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326294/1/?bust=1740574227&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326294/1/?bust=1740574227&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326294/1/?bust=1740574227"
          }
      ],
      "primary_photo_cropped": {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326294/1/?bust=1740574227&width=300",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326294/1/?bust=1740574227&width=450",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326294/1/?bust=1740574227&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326294/1/?bust=1740574227"
      },
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:48:05+0000",
      "published_at": "2025-02-26T12:48:03+0000",
      "distance": null,
      "contact": {
          "email": "adopt@mscrescue.org",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Shawnee",
              "state": "KS",
              "postcode": "66214",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326294"
          },
          "type": {
              "href": "/v2/types/cat"
          },
          "organization": {
              "href": "/v2/organizations/ks313"
          }
      }
  },
  {
      "id": 75326291,
      "organization_id": "TX2004",
      "url": "https://www.petfinder.com/dog/abigayle-75326291/tx/houston/camo-rescue-tx2004/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Chihuahua",
          "secondary": "Mixed Breed",
          "mixed": true,
          "unknown": false
      },
      "colors": {
          "primary": "Black",
          "secondary": null,
          "tertiary": null
      },
      "age": "Young",
      "gender": "Female",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": true,
          "cats": null
      },
      "tags": [
          "Good with Dogs"
      ],
      "name": "Abigayle",
      "description": "Abigayle is a sweet and playful 1-year-old Terrier mix weighing 16 pounds, and she&amp;#39;s ready to find her forever family!...",
      "organization_animal_id": "CAMO-A-188992",
      "photos": [
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/1/?bust=1740574232&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/1/?bust=1740574232&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/1/?bust=1740574232&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/1/?bust=1740574232"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/2/?bust=1740574230&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/2/?bust=1740574230&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/2/?bust=1740574230&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/2/?bust=1740574230"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/3/?bust=1740574233&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/3/?bust=1740574233&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/3/?bust=1740574233&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/3/?bust=1740574233"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/4/?bust=1740574233&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/4/?bust=1740574233&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/4/?bust=1740574233&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/4/?bust=1740574233"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/5/?bust=1740574231&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/5/?bust=1740574231&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/5/?bust=1740574231&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/5/?bust=1740574231"
          }
      ],
      "primary_photo_cropped": {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/1/?bust=1740574232&width=300",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/1/?bust=1740574232&width=450",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/1/?bust=1740574232&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326291/1/?bust=1740574232"
      },
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:47:40+0000",
      "published_at": "2025-02-26T12:47:38+0000",
      "distance": null,
      "contact": {
          "email": "camokennel@gmail.com",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77006",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326291"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/tx2004"
          }
      }
  },
  {
      "id": 75326287,
      "organization_id": "TX2004",
      "url": "https://www.petfinder.com/dog/joseph-75326287/tx/houston/camo-rescue-tx2004/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Maltese",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "White / Cream",
          "secondary": null,
          "tertiary": null
      },
      "age": "Senior",
      "gender": "Male",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": true,
          "cats": true
      },
      "tags": [
          "Good with Cats",
          "Good with Dogs"
      ],
      "name": "Joseph",
      "description": "Meet Joseph! This adorable 5 lb Maltese is 9 years old and ready to find a loving home. He and...",
      "organization_animal_id": "CAMO-A-188969",
      "photos": [
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/1/?bust=1740574244&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/1/?bust=1740574244&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/1/?bust=1740574244&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/1/?bust=1740574244"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/3/?bust=1740574245&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/3/?bust=1740574245&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/3/?bust=1740574245&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/3/?bust=1740574245"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/4/?bust=1740574244&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/4/?bust=1740574244&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/4/?bust=1740574244&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/4/?bust=1740574244"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/5/?bust=1740574247&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/5/?bust=1740574247&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/5/?bust=1740574247&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/5/?bust=1740574247"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/6/?bust=1740574240&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/6/?bust=1740574240&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/6/?bust=1740574240&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/6/?bust=1740574240"
          }
      ],
      "primary_photo_cropped": {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/1/?bust=1740574244&width=300",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/1/?bust=1740574244&width=450",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/1/?bust=1740574244&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326287/1/?bust=1740574244"
      },
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:47:40+0000",
      "published_at": "2025-02-26T12:47:38+0000",
      "distance": null,
      "contact": {
          "email": "camokennel@gmail.com",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77006",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326287"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/tx2004"
          }
      }
  },
  {
      "id": 75326288,
      "organization_id": "TX2004",
      "url": "https://www.petfinder.com/dog/jack-black-75326288/tx/houston/camo-rescue-tx2004/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Standard Poodle",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Black",
          "secondary": null,
          "tertiary": null
      },
      "age": "Senior",
      "gender": "Male",
      "size": "Large",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": true,
          "dogs": true,
          "cats": null
      },
      "tags": [
          "Good with Kids",
          "Good with Dogs"
      ],
      "name": "Jack Black",
      "description": "Meet Jack Black!\n\nJack Black is a handsome 7-year-old Standard Poodle weighing 45 pounds, and he&amp;#39;s ready to find his...",
      "organization_animal_id": "CAMO-A-188961",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:47:39+0000",
      "published_at": "2025-02-26T12:47:38+0000",
      "distance": null,
      "contact": {
          "email": "camokennel@gmail.com",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77006",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326288"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/tx2004"
          }
      }
  },
  {
      "id": 75326290,
      "organization_id": "TX2004",
      "url": "https://www.petfinder.com/dog/cyndi-75326290/tx/houston/camo-rescue-tx2004/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Poodle",
          "secondary": "Labrador Retriever",
          "mixed": true,
          "unknown": false
      },
      "colors": {
          "primary": "White / Cream",
          "secondary": null,
          "tertiary": null
      },
      "age": "Adult",
      "gender": "Female",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": true,
          "dogs": true,
          "cats": true
      },
      "tags": [
          "Good with Dogs",
          "Good with Cats",
          "Good with Kids"
      ],
      "name": "Cyndi",
      "description": "Meet Cyndi! \n\nCyndi is a beautiful 2-year-old, 43-pound Labradoodle who is as sweet as can be! She came to us...",
      "organization_animal_id": "CAMO-A-189030",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:47:39+0000",
      "published_at": "2025-02-26T12:47:38+0000",
      "distance": null,
      "contact": {
          "email": "camokennel@gmail.com",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77006",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326290"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/tx2004"
          }
      }
  },
  {
      "id": 75326292,
      "organization_id": "TX2004",
      "url": "https://www.petfinder.com/dog/gene-75326292/tx/houston/camo-rescue-tx2004/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Dachshund",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Red / Chestnut / Orange",
          "secondary": null,
          "tertiary": null
      },
      "age": "Senior",
      "gender": "Male",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": true,
          "cats": null
      },
      "tags": [
          "Good with Dogs"
      ],
      "name": "Gene",
      "description": "Meet Gene! This super cute senior is very very friendly! He is a male piebald, 9-10 years old. He is...",
      "organization_animal_id": "CAMO-A-188841",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:47:39+0000",
      "published_at": "2025-02-26T12:47:38+0000",
      "distance": null,
      "contact": {
          "email": "camokennel@gmail.com",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77006",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326292"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/tx2004"
          }
      }
  },
  {
      "id": 75326293,
      "organization_id": "TX2004",
      "url": "https://www.petfinder.com/dog/cupid-75326293/tx/houston/camo-rescue-tx2004/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Poodle",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Black",
          "secondary": null,
          "tertiary": null
      },
      "age": "Adult",
      "gender": "Male",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": true,
          "cats": true
      },
      "tags": [
          "Good with Dogs",
          "Good with Cats"
      ],
      "name": "Cupid",
      "description": "Meet Cupid! \n\nCupid is a 1 -year-old, 11-pound Poodle who is as sweet as his name suggests! This hypoallergenic boy...",
      "organization_animal_id": "CAMO-A-189001",
      "photos": [],
      "primary_photo_cropped": null,
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:47:39+0000",
      "published_at": "2025-02-26T12:47:38+0000",
      "distance": null,
      "contact": {
          "email": "camokennel@gmail.com",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77006",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326293"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/tx2004"
          }
      }
  },
  {
      "id": 75326286,
      "organization_id": "TX2004",
      "url": "https://www.petfinder.com/dog/charlie-walker-75326286/tx/houston/camo-rescue-tx2004/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Standard Poodle",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Black",
          "secondary": null,
          "tertiary": null
      },
      "age": "Young",
      "gender": "Male",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": false,
          "house_trained": true,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": true,
          "dogs": true,
          "cats": null
      },
      "tags": [
          "Good with Kids",
          "Housetrained",
          "Good with Dogs"
      ],
      "name": "Charlie Walker",
      "description": "Charlie is a beautiful 10 month old black and silver phantom Poodle. Born 4/4/24\nHe is a wonderful dog. Housetrained,...",
      "organization_animal_id": "CAMO-A-189039",
      "photos": [
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/1/?bust=1740574219&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/1/?bust=1740574219&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/1/?bust=1740574219&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/1/?bust=1740574219"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/2/?bust=1740574220&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/2/?bust=1740574220&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/2/?bust=1740574220&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/2/?bust=1740574220"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/3/?bust=1740574220&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/3/?bust=1740574220&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/3/?bust=1740574220&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/3/?bust=1740574220"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/4/?bust=1740574217&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/4/?bust=1740574217&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/4/?bust=1740574217&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/4/?bust=1740574217"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/5/?bust=1740574218&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/5/?bust=1740574218&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/5/?bust=1740574218&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/5/?bust=1740574218"
          }
      ],
      "primary_photo_cropped": {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/1/?bust=1740574219&width=300",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/1/?bust=1740574219&width=450",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/1/?bust=1740574219&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326286/1/?bust=1740574219"
      },
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:47:40+0000",
      "published_at": "2025-02-26T12:47:38+0000",
      "distance": null,
      "contact": {
          "email": "camokennel@gmail.com",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77006",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326286"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/tx2004"
          }
      }
  },
  {
      "id": 75326285,
      "organization_id": "TX2004",
      "url": "https://www.petfinder.com/dog/chuy-lee-75326285/tx/houston/camo-rescue-tx2004/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Yorkshire Terrier",
          "secondary": null,
          "mixed": false,
          "unknown": false
      },
      "colors": {
          "primary": "Gray / Blue / Silver",
          "secondary": null,
          "tertiary": null
      },
      "age": "Young",
      "gender": "Male",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": null,
          "dogs": true,
          "cats": null
      },
      "tags": [
          "Good with Dogs"
      ],
      "name": "Chuy Lee",
      "description": "Chuy is a super cute Yorkie mix. He is a year old. He is good with other dogs, neutered, up...",
      "organization_animal_id": "CAMO-A-189021",
      "photos": [
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/1/?bust=1740574213&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/1/?bust=1740574213&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/1/?bust=1740574213&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/1/?bust=1740574213"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/2/?bust=1740574214&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/2/?bust=1740574214&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/2/?bust=1740574214&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/2/?bust=1740574214"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/3/?bust=1740574214&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/3/?bust=1740574214&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/3/?bust=1740574214&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/3/?bust=1740574214"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/4/?bust=1740574214&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/4/?bust=1740574214&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/4/?bust=1740574214&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/4/?bust=1740574214"
          }
      ],
      "primary_photo_cropped": {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/1/?bust=1740574213&width=300",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/1/?bust=1740574213&width=450",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/1/?bust=1740574213&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326285/1/?bust=1740574213"
      },
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:47:40+0000",
      "published_at": "2025-02-26T12:47:38+0000",
      "distance": null,
      "contact": {
          "email": "camokennel@gmail.com",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77006",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326285"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/tx2004"
          }
      }
  },
  {
      "id": 75326284,
      "organization_id": "TX2004",
      "url": "https://www.petfinder.com/dog/sally-mae-75326284/tx/houston/camo-rescue-tx2004/",
      "type": "Dog",
      "species": "Dog",
      "breeds": {
          "primary": "Terrier",
          "secondary": "Mixed Breed",
          "mixed": true,
          "unknown": false
      },
      "colors": {
          "primary": "Gray / Blue / Silver",
          "secondary": null,
          "tertiary": null
      },
      "age": "Senior",
      "gender": "Female",
      "size": "Small",
      "coat": null,
      "attributes": {
          "spayed_neutered": true,
          "house_trained": false,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
      },
      "environment": {
          "children": true,
          "dogs": true,
          "cats": true
      },
      "tags": [
          "Good with Cats",
          "Good with Dogs",
          "Good with Kids"
      ],
      "name": "Sally Mae",
      "description": "Meet Sally Mae! \n\nSally Mae is an 8-year-old, 9-pound terrier mix with a heart full of love! She came to...",
      "organization_animal_id": "CAMO-A-188953",
      "photos": [
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/1/?bust=1740574189&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/1/?bust=1740574189&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/1/?bust=1740574189&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/1/?bust=1740574189"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/3/?bust=1740574192&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/3/?bust=1740574192&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/3/?bust=1740574192&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/3/?bust=1740574192"
          },
          {
              "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/4/?bust=1740574193&width=100",
              "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/4/?bust=1740574193&width=300",
              "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/4/?bust=1740574193&width=600",
              "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/4/?bust=1740574193"
          }
      ],
      "primary_photo_cropped": {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/1/?bust=1740574189&width=300",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/1/?bust=1740574189&width=450",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/1/?bust=1740574189&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75326284/1/?bust=1740574189"
      },
      "videos": [],
      "status": "adoptable",
      "status_changed_at": "2025-02-26T12:47:40+0000",
      "published_at": "2025-02-26T12:47:38+0000",
      "distance": null,
      "contact": {
          "email": "camokennel@gmail.com",
          "phone": null,
          "address": {
              "address1": null,
              "address2": null,
              "city": "Houston",
              "state": "TX",
              "postcode": "77006",
              "country": "US"
          }
      },
      "_links": {
          "self": {
              "href": "/v2/animals/75326284"
          },
          "type": {
              "href": "/v2/types/dog"
          },
          "organization": {
              "href": "/v2/organizations/tx2004"
          }
      }
  }
];