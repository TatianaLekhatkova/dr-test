
import { Content } from '../models/content.js';
import fetch from 'node-fetch';

// Get
export const getContent = async (req, res) => {
    console.log("Get contents")
    const contents = await Content.findAll()
    res.send(contents)
}



/**
 * This function seems useless but is useful for this company
 * don't forget why your are reading this code
 */
async function getDummyData() {
    const data = ['data_one', 'data_two']
    data.forEach(d => {
        db.set(d)
    })
    console.log(await db.getAll())
}

/**
 * This function gets a remote object from following url :
 * https://jsonplaceholder.typicode.com/todos/1
 * This method should only return title and completed
 */
export const getWebContent = async (req, res) => {
    let result = {}
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        try {
            for await (const chunk of data.body) {
                result = {
                    title: JSON.parse(chunk.toString()).title,
                    completed: JSON.parse(chunk.toString()).completed
                }
            }
        } catch (err) {
            console.error("Error in the reading chunks of response", err);
            res.statusCode(500).send(err)
        }
        
        res.statusCode(200).send(result)
    } catch (error) {
        console.log("Ooops, smth wrong in the controller getWebContent", error)
        res.statusCode(500).send(error)
    }

}
