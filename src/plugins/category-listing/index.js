module.exports = async function myPlugin(context, options) {
    return {
      name: 'category-listing',
      async allContentLoaded({actions, allContent}) {
        const {setGlobalData} = actions;
        const allVersions = allContent['docusaurus-plugin-content-docs']['default']['loadedVersions'];
        allVersions.forEach(version => {
            const docs = version.docs;
			
			function onlyUnique(value, index, array) {
 				return array.indexOf(value) === index;
			}

            // build the mapping of tags to docs
            const tagToDocMap = {};
            docs.forEach(doc => {
                const tagNames = doc.tags.map(t => t.label);
                
                // Support gemara format
                const gemaraMitigates = (doc.frontMatter.gemara?.mitigates ?? []).map(t => t['reference-id'])
                const gemaraMitigatedBy = (doc.frontMatter.gemara?.['mitigated-by'] ?? []).map(t => t['reference-id'])
                
                const title = doc.frontMatter.title
                
                const allTags = [
                    ...tagNames, 
                    ...gemaraMitigates, 
                    ...gemaraMitigatedBy,
                ].filter(onlyUnique)
                
                const isThreat = allTags.includes("Threat")
                const isControl = allTags.includes("Control")
                
                allTags.forEach(tn => {
                    const collection = tagToDocMap[tn] ?? [];

                    const shortForm = {
                        title: doc.title,
                        permalink: doc.permalink,
                        description: doc.description,
                        order: doc.sidebarPosition ?? 0,
                        tags: doc.tags,
                        isThreat,
                        isControl,
                        listImage: doc.frontMatter.list_image,
                        frontMatter: doc.frontMatter,
                    }

                    collection.push(shortForm);
                    tagToDocMap[tn]=collection;
                })    
            });

            // add the mapping to global data
            setGlobalData(tagToDocMap)
        })
      },
    };
  };
