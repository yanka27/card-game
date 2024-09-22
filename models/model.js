const pool = require('../db.js');

class Model {
    constructor(tableName="users", attributes = {}) {
        this.tableName = tableName;
        this.attributes = attributes;
    }

    async findByCredentials(login, password) {
        console.log("Login: ", login);
        console.log("Password: ", password);
        const [rows] = await pool.query(
            `SELECT * FROM ${this.tableName} WHERE login = ? AND password = ?`, 
            [login, password]
        );
        
        if (rows.length === 0) {
            throw new Error(`${this.tableName} with user not found`);
        }
        console.log("Found user: ", rows[0]);
        return rows[0];
    }

    // Find a record by its ID
    async find(id) {
        const [rows] = await pool.query(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
        if (rows.length === 0) {
            throw new Error(`${this.tableName} with id ${id} not found`);
        }
        // Set attributes from the database row
        this.attributes = rows[0];
    }

    // Delete the record from the database
    async delete() {
        const { id } = this.attributes;
        if (!id) {
            throw new Error(`No ID provided. Cannot delete.`);
        }
        await pool.query(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
        console.log(`${this.tableName} with id ${id} has been deleted.`);
    }

    // Save (Insert or Update) the record in the database
    async save() {
        const { id } = this.attributes;
        const fields = Object.keys(this.attributes);
        const values = Object.values(this.attributes);

        if (id) {
            // Update existing record
            const updates = fields.map(field => `${field} = ?`).join(', ');
            await pool.query(`UPDATE ${this.tableName} SET ${updates} WHERE id = ?`, [...values, id]);
            console.log(`${this.tableName} with id ${id} has been updated.`);
        } else {
            // Insert new record
            const placeholders = fields.map(() => '?').join(', ');
            const [result] = await pool.query(`INSERT INTO ${this.tableName} (${fields.join(', ')}) VALUES (${placeholders})`, values);
            this.attributes.id = result.insertId;
            console.log(`New ${this.tableName} record inserted with id ${this.attributes.id}.`);
        }
    }
}

module.exports = Model;
