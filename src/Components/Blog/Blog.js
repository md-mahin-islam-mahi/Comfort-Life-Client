import React from 'react';

const Blog = () => {
    return (
        <div className='px-10 py-20'>
            <div className='text-start my-10'>
                <h2 className="text-3xl text-primary font-semibold">1) What are the different ways to manage a state in a React application?</h2>
                <p className="text-xl text-black">Ans) There are Four ways to manageReact State Manage. They are: <br />
                    (1) Local state. <br />
                    (2)Global state. <br /> 
                    (2) Server state. <br />
                    (4) URL state.</p>
            </div>
            <div className='text-start my-10'>
                <h2 className="text-3xl text-primary font-semibold">2) How does prototypical inheritance work?</h2>
                <p className="text-xl text-black">Ans) The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. <span className='text-primary font-semibold'> Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</span></p>
            </div>
            <div className='text-start my-10'>
                <h2 className="text-3xl text-primary font-semibold">3) What is a unit test? Why should we write unit tests?</h2>
                <p className="text-xl text-black">Ans) The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='text-start my-10'>
                <h2 className="text-3xl text-primary font-semibold">4) React vs. Angular vs. Vue?</h2>
                <p className="text-xl text-black">Ans) <br /> <span className='font-semibold'>Angular,</span> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. <br />
                <span className='font-semibold'>Vue</span> was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. <br />
                <span className='font-semibold'>React,</span> developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). It is similar to Vue Js.</p>
            </div>
        </div>
    );
};

export default Blog;