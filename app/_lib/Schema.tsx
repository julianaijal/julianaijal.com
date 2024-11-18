const Schema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `[{
          "@context":"https://schema.org",
          "@graph":[
             {
                "@type":[
                   "ProfilePage"
                ],
                "@id":"#Webpage",
                "name":"Julian Aijal",
                "mainEntity":{
                   "@id":"#Person"
                },
                "breadcrumb":{
                   "@type":"BreadcrumbList",
                   "@id":"#Breadcrumb"
                },
                "publisher":{
                   "@id":"#Person"
                }
             },
             {
                "@type":"Person",
                "@id":"#Person",
                "name":"Julian Aijal",
                "givenName":"Julian",
                "familyName":"Aijal",
                "url":"https://julianaijal.com/",
                "jobTitle":"Senior SEO Specialist",
                "birthDate":"1989-11-17",
                "birthPlace":{
                   "@type":"Place",
                   "name":"Apeldoorn"
                },
                "nationality":"NL",
                "email":"julian.aijal@dpgmedia.nl",
                "sameAs":[
                   "https://g.co/kgs/GRJheuw",
                   "https://amsterdamcentrum.pvda.nl/wieiswie/julian-aijal/",
                   "https://thenextweb.com/author/julianaijal",
                   "https://www.linkedin.com/in/jaijal/",
                   "https://x.com/Jaijal",
                   "https://www.threads.net/@julian.aijal",
                   "https://yourambassadrice.com/author/julian-aijal/",
                   "https://www.bitsoffreedom.nl/mensen/julian-aijal/",
                   "https://www.instagram.com/julian.aijal/",
                   "https://github.com/julianaijal",
                   "https://www.crunchbase.com/person/julian-aijal",
                   "https://substack.com/@julianaijal",
                   "https://www.credential.net/profile/julianaijal489646/wallet"
                   "https://bsky.app/profile/julianaijal.bsky.social"
                ],
                  "hasCredential": [
                     {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Certification",
                        "educationalLevel": "Bachelor's degree",
                        "name": "Bachelor of Business Administration",
                        "recognizedBy": {
                           "@type": "Organization",
                           "name": "Saxion University of Applied Sciences"
                        }
                     },
                     {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Certification",
                        "name": "AWS Certified Cloud Practitioner",
                        "url": "https://www.credly.com/badges/5d779f22-14d2-4f09-a8e7-cb22a0b91570",
                        "recognizedBy": {
                        "@type": "Organization",
                        "name": "Amazon Web Services"
                        }
                     },
                      {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Certification",
                        "name": "Datavisualisatie & Storytelling",
                        "url": "https://www.credential.net/56b85fb5-f822-488c-827a-f92e44a4f914",
                        "recognizedBy": {
                        "@type": "Organization",
                        "name": "Beeckestijn Business School"
                        }
                     },
                     {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Certification",
                        "name": "Kritisch kijken naar data",
                        "url": "https://www.credential.net/caebe40b-33c2-4a62-99f6-53e6e7ee4714",
                        "recognizedBy": {
                        "@type": "Organization",
                        "name": "Beeckestijn Business School"
                        }
                     }
                  ],
                "knowsAbout":[
                   {
                      "@type":"Service",
                      "name":"SEO",
                      "alternateName":"Search Engine Optimization",
                      "sameAs":"https://www.wikidata.org/wiki/Q180711"
                   },
                   {
                      "@type":"Service",
                      "name":"Front-End Development",
                      "sameAs":"https://www.wikidata.org/wiki/Q4130556"
                   },
                   {
                      "@type":"Service",
                      "name":"Web Development",
                      "sameAs":"https://www.wikidata.org/wiki/Q386275"
                   },
                   {
                      "@type":"Service",
                      "name":"programming",
                      "alternateName":"computer programming",
                      "sameAs":"https://www.wikidata.org/wiki/Q80006"
                   },
                   {
                      "@type":"Service",
                      "name":"Digital Marketing",
                      "alternateName":"Online Marketing",
                      "sameAs":"https://www.wikidata.org/wiki/Q1323528"
                   },
                   {
                      "@type":"Service",
                      "name":"Web Analytics",
                      "sameAs":"https://www.wikidata.org/wiki/Q10719477",
                      "isRelatedTo":[
                         {
                            "@id":"#google-analytics"
                         },
                         {
                            "@id":"#google-tag-manager"
                         }
                      ]
                   }
                ],
                "gender":{
                   "@type":"GenderType",
                   "name":"male"
                },
                "image":{
                   "@type":"ImageObject",
                   "name":"A profile picture of Julian Aijal",
                   "@id":"#image",
                   "author":{
                      "@id":"#Person"
                   },
                   "url":"https://julianaijal.com/_next/static/media/julian.6deab842.svg",
                   "width":{
                      "@type":"QuantitativeValue",
                      "value":564,
                      "unitCode":"E37"
                   },
                   "height":{
                      "@type":"QuantitativeValue",
                      "value":516,
                      "unitCode":"E37"
                   }
                },
                "worksFor":{
                   "@id":"https://www.dpgmediagroup.com/nl-NL/#DPG"
                },
                "homeLocation":{
                   "@type":"City",
                   "name":"Amsterdam",
                   "sameAs":"https://g.co/kgs/mJw8Moy"
                },
                "knowsLanguage":[
                   "en",
                   "nl"
                ],
                "mainEntityOfPage":{
                   "@type":"WebPage",
                   "@id":"https://julianaijal.com/",
                   "name":"Julian Aijal",
                   "publisher":{
                      "@id":"#Person"
                   },
                   "inLanguage":"EN",
                   "isPartOf":{
                      "@type":"WebSite",
                      "@id":"#Site",
                      "url":"https://julianaijal.com/",
                      "name":"julianaijal.com",
                      "author":{
                         "@id":"#Person"
                      },
                      "publisher":{
                         "@id":"#Person"
                      },
                      "creator":{
                         "@id":"#Person"
                      },
                      "sdPublisher":{
                         "@id":"#Person"
                      }
                   },
                   "breadcrumb":{
                      "@id":"#Breadcrumb"
                   }
                }
             },
             {
                "@type":"BreadcrumbList",
                "@id":"#Breadcrumb",
                "itemListElement":[
                   {
                      "@type":"ListItem",
                      "position":1,
                      "item":{
                         "@type":"WebPage",
                         "@id":"https://julianaijal.com/",
                         "name":"Home"
                      }
                   },
                   {
                      "@type":"ListItem",
                      "position":2,
                      "item":{
                         "name":"Julian Aijal"
                      }
                   }
                ]
             },
            {
               "@type": "CreativeWork",
               "@id": "#KnowledgeGraphArticle",
               "headline": "What is a knowledge graph and how does one work?",
               "author": {
                  "@id": "#Person"
               },
               "datePublished": "2019-06-11",
               "url": "https://thenextweb.com/news/what-is-a-knowledge-graph-and-how-does-one-work"
            },
            {
               "@type": "CreativeWork",
               "@id": "#SchemaOrgArticle",
               "headline": "Supporting Schema.org",
               "author": {
                  "@id": "#Person"
               },
               "datePublished": "2016-07-06",
               "url": "https://thenextweb.com/news/marketing-tnw-way-13-supporting-schema-org"
            },
            {
               "@type": "CreativeWork",
               "@id": "#GoogleCloudArticle",
               "headline": "Running Screaming Frog in the Google Cloud",
               "author": {
                  "@id": "#Person"
               },
               "datePublished": "2015-12-18",
               "url": "https://thenextweb.com/news/marketing-the-tnw-way-5-seo-running-screaming-frog-in-the-google-cloud"
            }
          ]
       }]`,
      }}
    />
  );
};

export default Schema;
