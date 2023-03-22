import { appError } from "../controller/appError.js"

export const errorHandler = (error, req, res, next) => {
	const statusCode = error.statusCode || 500

	if(error instanceof appError){

		return res.status(statusCode).send({
			error : true,
			message : error.message,
			stack : error.stack
			
		})

	}

	return res.status(statusCode).send({
		error : true,
		message : error.message,
		// stack : error.stack
		
	})
}