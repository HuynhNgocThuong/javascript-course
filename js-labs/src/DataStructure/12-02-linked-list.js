const tail = { data: 20, next: null };
const item2 = { data: 15, next: tail };
const item1 = { data: 10, next: item2 };
const head = { data: 5, next: item1 };
const linkedList = {
  data: 5,
  next: {
    data: 10,
    next: {
      data: 15,
      next: {
        data: 20,
        next: null,
      },
    },
  },
};

// Refer: https://towardsdatascience.com/linked-lists-vs-arrays-78746f983267
// https://stackoverflow.com/questions/322715/when-to-use-linkedlist-over-arraylist-in-java
// https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/
