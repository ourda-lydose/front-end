// pages/items.js

import React from 'react';

const ItemsPage = ({ items }) => {
    return (
        <div>
            <h1>Items List</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export async function getStaticProps() {
    // Fetch item data from an API or database asynchronously
    const res = await fetch('https://lalala/items');
    const items = await res.json();

    return {
        props: {
            items,
        },
    };
}

export default ItemsPage;
