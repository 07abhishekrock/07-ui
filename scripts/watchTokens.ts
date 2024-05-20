import {execSync} from 'child_process';
import {watch} from 'chokidar'

const watcher = watch("./src/theming/tokens.ts", {
     interval: 500
})

watcher.on('all', ()=>{
     try{
          execSync(`npx ts-node ${__dirname}/createVariablesScssFile.ts`)
     }
     catch(e){
          console.error('some error occurred while reading file changes')
     }
})