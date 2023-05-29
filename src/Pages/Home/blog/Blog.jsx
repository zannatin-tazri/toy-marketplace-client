

const Blog = () => {
    return (
        <div className="m-16">

            <h1 className="font-bold m-8">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p>An access token is a short-lived credential used to access resources, while a refresh token is a long-lived credential used to obtain a new access token when the original one expires. Access tokens are typically stored on the client-side,
                 while refresh tokens require secure storage to prevent unauthorized access.</p>
            <h1 className="font-bold m-8">2. Compare SQL and NoSQL databases?</h1>

            <p>SQL (Structured Query Language) and NoSQL (Not only SQL) are two types of
                database management systems that differ in their data models, querying languages, and use cases.</p>
            <p><>SQL Databases:</></p>
            <div>
                <li>Use a structured schema with tables and predefined schemas.</li>
                <li> Use SQL as the standard querying language for defining and manipulating data. </li>
                <li>Provide strong data consistency, ACID (Atomicity, Consistency, Isolation, Durability) properties, and support for complex transactions. </li>
                <li>Ideal for applications with structured and well-defined data, such as financial systems or traditional relational data models.</li>
                <li>Examples include MySQL, PostgreSQL, Oracle, and SQL Server.</li>  <br></br>
            </div>

            <p><>NoSQL Databases:</></p>
            <li>Use a flexible schema or schemaless design, allowing for dynamic and unstructured data.
            </li>
            <li>Use various querying languages or APIs, such as MongoDB query language or Cassandra CQL (Cassandra Query Language).</li>
            <li>Offer high scalability, availability, and partition tolerance, known as the CAP theorem.
            </li>
            <li>Suitable for handling large amounts of rapidly changing, unstructured or semi-structured data, such as social media feeds or real-time analytics.</li>
            <li>Examples include MongoDB, Cassandra, Redis, and Elasticsearch.</li>

            <h1 className="font-bold m-8">3. What is express js? What is Nest JS?</h1>
            <p>Express.js is a minimalist and flexible web framework for Node.js, providing a simple and lightweight way to build web applications and APIs. <br />

                Nest.js is a powerful, opinionated web framework for Node.js, based on TypeScript and built with a modular and scalable architecture. It emphasizes structured development and includes features like dependency injection, decorators, and modules for building robust and maintainable applications.</p>

            <h1 className="font-bold m-8">4. What is MongoDB aggregate and how does it work ?</h1>
            <p> MongoDB aggregation framework is a powerful tool for processing and analyzing data.
                It uses a pipeline of stages to filter, group, sort, and transform documents in a collection.
                Each stage takes input from the previous stage and produces output, allowing you to
                perform complex operations on your data. The stages include matching, projecting, grouping,
                sorting, limiting, skipping, and unwinding.</p>
        </div>
    );
};

export default Blog;