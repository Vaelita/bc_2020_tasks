import express from 'express';

const router = express.Router();

// GET /comments/:taskId
router.get('/:taskId', (req, res) => {
    res.send('Getting comments for task ' + req.params.taskId);
});

// POST /comments
// {
//     "comment": "foo bar baz",
//     "taskId": "123"
// }
router.post('/', (req, res) => {
    res.send('creates a new comment');
});

// DELETE /comments/:commentId
router.delete('/:commentId', (req, res) => {
    res.send('deleting comment with id: ' + req.params.commentId);
});


export default router;