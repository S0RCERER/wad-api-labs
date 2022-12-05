import genreModel from '../api/genres/genreModel';
import genres from './genres';
import dotenv from 'dotenv';

dotenv.config();

// deletes all genre documents in collection and inserts test data
async function loadGenres() {
  console.log('load genre Data');
  try {
    await genreModel.deleteMany();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genre Data: ${err}`);
  }
}

if (process.env.SEED_DB) {
  loadGenres();
}