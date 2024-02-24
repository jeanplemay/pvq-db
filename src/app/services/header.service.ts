import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    private links: any[] = [];
    private tabs: {name: string, id: string, callback: any}[] = [];
    private activeTabId: string = "";

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.fragment.subscribe(fragment => {
            this.setActiveTabId(fragment?fragment:'');
        });
    }

    public updateHeader(links: any[]): void {
        this.links = links;
    }

    public updateTabs(tabs: {name: string, id: string, callback: any}[]): void {
        this.tabs = tabs;
        if (this.activeTabId == ""){
            this.setActiveTabId(tabs[0].id);
            
            location.replace(location.toString() + "#" + tabs[0].id);
        }
        this.updateActiveTab();
    }

    public clearTabs(): void {
        this.tabs = [];
    }

    public createTabs(items: any[], nameKey: string, idKey: string, callback: any): void {
        var tabs:{name: string, id: string, callback: any}[] = [];
        for(let item of items) {
            tabs.push({name: item[nameKey].toUpperCase(), id: item[idKey].toLowerCase(), callback: callback});
        }
        this.updateTabs(tabs);
    }

    public updateActiveTab(): void {
        this.tabs?.forEach( tab => {
            if(tab.id == this.activeTabId) {
                tab.callback(this.activeTabId);
            }
        });
    }

    public selectActiveTab(id: string): void {
        this.setActiveTabId(id);
        this.updateActiveTab();
    }

    public getLinks(): any[] {
        return this.links;
    }

    public getTabs(): {name: string, id: string}[] {
        return this.tabs;
    }

    public getActiveTabId(): string {
        return this.activeTabId;
    }

    public setActiveTabId(activeTabId: string): void {
        this.activeTabId = activeTabId;
    }
}
