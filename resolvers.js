import db from "./_db.js";


export const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        game(_, args) {
            return db.games.find(game => game.id === args.id);
        },
        authors() {
            return db.authors;
        },
        author(_, args) {
            return db.authors.find(author => author.id === args.id);
        },
        reviews() {
            return db.reviews;
        },
        review(_, args) {
            return db.reviews.find(review => review.id === args.id);
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter(review => review.game_id === parent.id);
        }
    },
    Review: {
        game(parent) {
            return db.games.find(game => game.id === parent.game_id);
        },
        author(parent) {
            return db.authors.find(author => author.id === parent.author_id);
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(review => review.author_id === parent.id);
        }
    },
    Mutation: {
        addGame(_, args) {
            const game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000)
            };
            db.games.push(game);
            return game;
        },
        updateGame(_, args) {
            let result;
            db.games = db.games.map(game => {
                if (game.id === args.id) {
                    result = { ...game, ...args.game };
                    return result;
                }   
                return game;
            });
            return result;
        },
        deleteGame(_, args) {
            db.games = db.games.filter(game => game.id !== args.id);
            return db.games;
        }
    }
};