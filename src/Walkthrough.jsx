import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const notFound = (pageNum) => {
  return `Walkthrough page '${pageNum}' not found.`;
};

const WalkthroughIndex = () => {
  const [pageNum, setPage] = useState(1);
  const [pageData, setData] = useState('');
  const [loading, setLoading] = useState(true);
  let location = useLocation();

  useEffect(() => {
    const fetchDoc = async () => {
      setLoading(true);
      let pageMatch = location.pathname.match(/\/(\d+)/);
      let page = pageMatch ? parseInt(pageMatch[1]) : 1;
      setPage(page);
      try {
        const response = await fetch(`/walkthrough/page-${page}.md`);
        const text = await response.text();
        if (text.startsWith('<!DOCTYPE html>')) {
          setData(notFound(page));
        } else {
          setData(text);
        }
      } catch (e) {
        console.log(e);
        setData(notFound(page));
      }
      setLoading(false);
    };
    fetchDoc();
  }, [location.pathname]);

  if (loading) {
    return <p>Loading markdown...</p>;
  }

  return <ReactMarkdown children={pageData} />;
};

export default WalkthroughIndex;
