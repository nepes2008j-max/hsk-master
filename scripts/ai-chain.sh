#!/bin/bash
# Keeps the local AI busy: as each batch job finishes, start its follow-up check job. Results go to ~/hsk-ai-work.
W=~/hsk-ai-work; export OLLAMA_URL=http://127.0.0.1:11435; cd "$(dirname "$0")/.."
R="node --no-warnings --experimental-strip-types"
running() { pgrep -f "node.*$1" >/dev/null; }
( while running local-ai-exercises.mjs; do sleep 30; done
  node -e "const fs=require('fs');const W=process.env.HOME+'/hsk-ai-work';const a=Object.assign({},...[0,1].map(i=>JSON.parse(fs.readFileSync(W+'/ex-more-s'+i+'.json','utf8'))));fs.writeFileSync(W+'/ex-more.json',JSON.stringify(a))"
  $R scripts/local-ai-verify.mjs qwen3:30b $W/ex-more.json $W/ex-more-verified.json > $W/ex-more-verify.log 2>&1 ) &
( while running local-ai-words-ru.mjs; do sleep 30; done
  $R scripts/local-ai-backcheck.mjs words $W/words-ru.json $W/words-ru-check.json > $W/words-ru-check.log 2>&1 ) &
( while running local-ai-exercise-ru.mjs; do sleep 30; done
  $R scripts/local-ai-backcheck.mjs ex $W/ex-ru.json $W/ex-ru-check.json > $W/ex-ru-check.log 2>&1 ) &
wait
echo "chain finished"
