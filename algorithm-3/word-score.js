function getWordScore(str) {
    const letterScore = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    }
    let max = -Infinity,
    maxWord = ''
  str = str.toLowerCase()
  let strArray = str.split(' ')
  for (let index = 0; index < strArray.length; index++) {
      let scoreDummy  = 0
      for (let indexc = 0; indexc < strArray[index].length; indexc++) {
         scoreDummy += letterScore[strArray[index][indexc]]
      }
      if(scoreDummy > max){
          max = scoreDummy
          maxWord = strArray[index]
      }
      
  }

}


