import axios from "axios";
import prisma from "../../client"; 
export const getProducts = async() => {
	try {
		const products = await prisma.product.findMany();
		return products;
	} catch (error) {	
		throw error;
	}
};

export const getProductById = async(id:number) => {
	try {
		const product = await prisma.product.findUnique({
			where: {
				id: id,
			},
		})

		return product;
	} catch (error) {	
		throw error;
	}
};

export const createProduct = async(name:string, price:number) => {
	try {
		const product = await prisma.product.create({
			data: {
				name: name,
				price: price,
			},
		})
		return product;
	} catch (error) {	
		throw error;
	}
};

export const updateProduct = async(id:number, name:string, price:number) => {
	try {
		const product = await prisma.product.update({
			where: {
				id:id,
			},
			data: {
				name: name,
				price: price,
			},
		})
		return product;
	} catch (error) {	
		throw error;
	}
};

export const deleteProduct = async(id:number) => {
	try {
		const product = await prisma.product.delete({
			where: {
				id: id,
			},
		})
		return product;
	} catch (error) {	
		throw error;
	}
};
export const getTodosList = async() => {
	try {
		let todos:any = await axios.get('https://jsonplaceholder.typicode.com/todos');
		return todos.data;
	} catch (error) {
		console.log(error)
		throw error;
	}
};
