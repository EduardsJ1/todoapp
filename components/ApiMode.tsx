"use client"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"
export default function apiMode({TestMode}:{TestMode:boolean}){
    return(
        <div className="flex gap-2">
            <Label>API Test Data</Label>
            <Switch checked={TestMode}/>
        </div>
    )
        
}