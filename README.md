# virtual-trades

## Installing
```
git clone https://github.com/Reverto3/virtual-trades.git
cd visual-trades
npm install && npm start
```

After it's done, go to: http://localhost:8080/

## what's done
 Line graph that updates randomly.
 
 Technologies I used:
 - react
 - d3.js
 - webpack
 
 I created layot who control the data that pass to lineChart component and manage it (add and update data by interval),
 at lineChart the component calculat the white line path and his points and make area under it,
 additionally added circle at the last point of the white line.
 
 I used react to mange my data and pass and update him, the d3 get the data and pass back to the react the calculated data.
 
