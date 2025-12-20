'use client'
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';  // Import the BlogCard component
import { ApiService } from '@/services/apiservice';

const blogPosts = [
    {
        image: 'images/resource/blog-1.jpg',
        date: 'April 20, 2023',
        author: 'Ali Tufan',
        title: 'This Long-Awaited Technology May Finally Change the World',
        link: 'blog-single.html'
    },
    {
        image: 'images/resource/blog-2.jpg',
        date: 'March 15, 2023',
        author: 'John Doe',
        title: 'The Future of AI: What You Need to Know',
        link: 'blog-single.html'
    },
    {
        image: 'images/resource/blog-3.jpg',
        date: 'February 10, 2023',
        author: 'Jane Smith',
        title: 'Why Sustainable Cars Are the Future',
        link: 'blog-single.html'
    }
];


const BlogsSection = ({ blogsPage }) => {
    const [blogs, setBlogs] = useState([]);
    const getBlogs = async () => {
        const apiQuery = `items/blogs?sort[]=-date_created${!blogsPage ? '&limit=3' : ''}`;
        const response = await ApiService(apiQuery, 'get');
        setBlogs(response.data);
    }
    useEffect(() => {
        getBlogs();
    }, [])
    return (
        <section className={`blog-section ${blogsPage && 'pt-0'} `}>
            <div className="boxcar-container">
                {!blogsPage && <div className="boxcar-title wow fadeInUp">
                    <h2>Latest Blog Posts</h2>
                </div>}

                <div className="row">
                    {blogs?.map((post, index) => (
                        <BlogCard key={index} data={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogsSection;
