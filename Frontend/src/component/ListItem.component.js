import React from 'react'
import './ListItem.style.css'
import Table from 'react-bootstrap/Table';
function ListItem() {
    return (
        <Table className="table_container" striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Drinks</th>
                    <th>Type</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Tea</td>
                    <td>Sugar</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tea</td>
                    <td>Sugar</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tea</td>
                    <td>Sugar</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tea</td>
                    <td>Sugar</td>
                    <td>1</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ListItem