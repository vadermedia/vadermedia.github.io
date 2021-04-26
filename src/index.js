const NOW = new Date().toDateString()

const DATABASE = {
    /* 
        CLASSES
        - Document
        - Collection
    */
    Collection : (name, url, description) => {
        return {
            head : {
                name : name,
                url : url,
                description : description,
                date_created : NOW
            },
            body : {

            }
        }
    },
    Document : (title, subtitle, keywords, url, description) => {
        return {
            head : {
                url : url,
                description : description,
                title : title,
                subtitle : subtitle,
                keywords : keywords,
                date_created : NOW
            },
            body : {

            }
        }
    }
}

const API = {
    music : DATABASE.Collection('music','./music/','😅'),
    production : DATABASE.Collection(),
}

console.log(API);
