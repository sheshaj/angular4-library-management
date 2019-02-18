import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterData' })
export class FilterDataPipe implements PipeTransform {
    transform(books: any, value: any[]): any {
        let filteredBooks = [];
        const filterOption = value[0];
        const searchBox = value[1];

        if (filterOption !== 'Select') {
            books.map(data => {
                if (data.genre === filterOption) {
                    filteredBooks.push(data);
                }
            });
        } else {
            filteredBooks = books;
        }

        if (searchBox !== '') {
            const arrayIndex = [];
            filteredBooks = filteredBooks.filter((data, index) => {
                if (data.author && searchBox && !data.author.toUpperCase().match(searchBox.toUpperCase())
                    && data.title && !data.title.toUpperCase().match(searchBox.toUpperCase())) {
                    arrayIndex.push(index);
                } else {
                    return data;
                }
            });
        }
        return filteredBooks;
    }
}
