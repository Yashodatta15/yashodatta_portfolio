import React from 'react';
import './Blog.css';

import Image1 from '../../assets/art1.svg';
import Image2 from '../../assets/art2.svg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Article</h2>

            <div className="blog__container">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@patilyashodatta/transforming-mechanical-engineering-a-revolution-fueled-by-machine-learning-and-deep-learning-4ef5cb208bbf">
                            <img src={Image1} alt="" className="blog__img" />
                        </a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Transforming Mechanical Engineering: A Revolution Fueled by Machine Learning and Deep Learning Mastery</h3>
                        <div className="blog__meta">
                            <span className="blog__dot">.</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@patilyashodatta/create-err-diagram-in-mysql-workbench-fb999efa1916">
                            <img src={Image2} alt="" className="blog__img" />
                        </a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Create ERR diagram in MYSQL workbench</h3>
                        <div className="blog__meta">
                            <span className="blog__dot">.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
