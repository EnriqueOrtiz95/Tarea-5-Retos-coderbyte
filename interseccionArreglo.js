function FindIntersection(strArr) {
  
    const [a,b] = strArr.map(x => x.split(',').map(x => parseInt(x)));
    const s = new Set(b);
    
    return a.filter(x => s.has(x)).join(',') || 'false';
  }

  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));