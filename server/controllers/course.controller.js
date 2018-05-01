// import Post from '../models/post.model';


// function load(params) {
//   return Post.get(params.id);
// }

function get(req, res) {
  return res.json(items);
}

let items = [
  {
    type: 'checkbox',
    title: 'Check correct checkboxes',
    tasks: [{
      name: 'Task1 true',
      answer: true,
    },{
      name: 'Task2 false',
      answer: false,
    },{
      name: 'Task3 false',
      answer: false,
    }]
  },
  {
    type: 'radio',
    title: 'Check correct radio',
    tasks: [{
      name: 'Task1 false',
      answer: false,
    },{
      name: 'Task2 true',
      answer: true,
    },{
      name: 'Task3 false',
      answer: false,
    }]
  },
  {type: 'video', title: 'First lesson', src: 'https://www.youtube.com/embed/t3KH5LXHi0s'}
];

// function create(params) {
//   const post = new Post({
//     title: params.data.title,
//     content: params.data.content
//   });
//   return post.save();
// }
//
// function update(params) {
//   return load(params).then(post => {
//     const tmp = post;
//     post.title = params.data.title;
//     post.content = params.data.content;
//     return post.save()
//   });
// }
//
// function list(params) {
//   const { limit = 50, skip = 0 } = params;
//   return Post.list({ limit, skip })
// }
//
// function remove(params) {
//   return load(params).then(post => post.remove());
// }

export default {
  // load,
  get,
  // create,
  // update,
  // list,
  // remove
};
