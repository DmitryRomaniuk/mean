import express from 'express';
// import validate from 'express-validation';
// import paramValidation from '../config/param-validation';
import courseCtrl from '../controllers/course.controller';
// import paramValidation from "../config/param-validation";
// import validate from "express-validation";

const router = express.Router();

// router.route('/')
// /** GET /api/posts - Get list of posts */
//   .get(courseCtrl.list)
//
//   /** POST /api/posts - Create new post */
//   .post(validate(paramValidation.createPost), courseCtrl.create);

router.route('/:courseId')
  /** GET /api/post/:postId - Get post */
  .get(courseCtrl.get)
//
//   /** PUT /api/posts/:postId - Update post */
//   .put(validate(paramValidation.updatePost), courseCtrl.update)
//
//   /** DELETE /api/posts/:postId - Delete post */
//   .delete(courseCtrl.remove);

/** Load post when API with courseId route parameter is hit */
router.param('courseId', courseCtrl.load);

export default router;
