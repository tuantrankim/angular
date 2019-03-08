import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert('Global error handler. An unexpected error occurred.');
        console.log(error);
    }
}
