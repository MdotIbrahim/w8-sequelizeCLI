# sequelizeCLI

## Guide to running

```bash
npm init -y
npm i yargs dotenv sequelize mysql2
```

## Commands

You will need to add your own MONGO_URI to the dotenv file in order to create an instance in a database for the commands to work.

## Movie Commands

### Add a title
 
 ```bash
 node src/app.js --movie --add --title "Movie" --actor "Actor name (optional parameter)" --rating "Integer between 1 and 10 (optional parameter)" --director "director ID (optional parameter"
 ```

### List all titles
 
```bash
node src/app.js --movie --list
```

### Update a title by name or actor

```bash
node src/app.js --movie --update --title "Movie" --actor "actor" --newtitle "New Movie (optional parameter)" --newactor "New Actor (optional parameter)"
```

### Delete a title

```bash
node src/app.js --movie --delete --title "Movie"
```
## TV and Director commands

The TV and Director commands are the same as the examples above except replace:

```bash
--movie
```
with
```bash
--tv
```
or
```bash
--director
```

The director has only one paramter which is fullname which is also what is required to delete a director from the table instead of the title.