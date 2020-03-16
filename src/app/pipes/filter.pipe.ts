import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) { return []; }
        if (!searchText) { return items; }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            let match = false;
            Object.keys(it).forEach((k) => {
                // dont look at id/guid
                if (!match && k !== 'id') {
                    match = it[k].toLowerCase().includes(searchText);
                    // return it.toLowerCase().includes(searchText);
                }
            });
            return match;
        });
    }
}
