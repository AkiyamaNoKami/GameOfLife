module.exports = {
  async up(db) {
    await db.collection('tasks').updateMany(
        {},
        {
          $set: { is_done: false, is_dropped: false}
        }
    );
  },

  async down(db) {
    await db.collection('tasks').updateMany(
        {},
        {
          $unset: { is_done: "", is_dropped: "" },
        }
    );
  },
};
