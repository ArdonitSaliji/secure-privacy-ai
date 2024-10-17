# Binary String Analyzer

`BinaryStringAnalyzer` is a C# class that checks if a binary string is "good" based on two conditions:

1. **Prefix Condition**: At no point can the number of `0`s exceed the number of `1`s.
2. **Equal Count**: The string must contain an equal number of `0`s and `1`s.

## Method

### `BinaryStringMeetsGoodCondition(string bString)`

- **Input**: A binary string (`0` and `1` only).
- **Output**: `true` if the string meets both conditions; `false` otherwise.
- **Throws**: `ArgumentException` if the string contains invalid characters.


# .NET/C# Web Application with Angular Front-End and MongoDB Integration

This project implements a small .NET/C# web application that utilizes a basic Angular front-end, integrated with MongoDB for data storage, and includes basic GDPR compliance measures.

## Features

1. **Entity Definition**:
   - A `Product` entity with attributes:
     - `Id`: Unique identifier for each product.
     - `Name`: The product's name (required).
     - `Price`: The product's price (required).
     - `Description`: Optional description of the product.
     - `CreatedAt`: Timestamp indicating when the product was created.
     - `IsAvailable`: Indicates if the product is available for purchase.
     - `DeletedAt`: Optional timestamp for soft deletion.

2. **CRUD Functionality**:
   - **Create**: Add new products to the system.
   - **Read**: Display a list of all products.

3. **Angular Front-End**:
   - Minimal interface for creating new products and displaying the list of products.
   - Implements state management principles inspired by Redux.

4. **MongoDB Integration**:
   - Uses MongoDB for data storage and retrieval.
   - Employs compound indexes for efficient data querying.

5. **GDPR Compliance**:
   - Implements user data privacy measures (e.g., allowing users to request deletion of their data).
   - UI includes a privacy notice regarding data collection and usage.

## Project Structure

- **Backend**: A .NET/C# Web API utilizing MongoDB for data management.
- **Frontend**: An Angular application facilitating interactions with the backend.

## Requirements

- **MongoDB**: For data persistence.
- **Angular**: For the user interface.
- **.NET 6+**: For the web API.


## Running the Project

### 1. Start the Backend
Open a terminal in the backend project directory and run:

```bash
dotnet run
```

### 2. Start the Angular Frontend
Open a terminal in the Angular project directory and run:

```bash
ng serve
```


