module.exports.session = {
    SID: '',
    setSid(){
      let str = (Math.random() * 10).toString();
      let hash = '', bytes = [], i = j = k = a =  0, dict = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','1','2','3','4','5','6','7','8','9'];

      for (i =  0; i < str.length; i++ ) {
          ch = str.charCodeAt(i);
          bytes[j++] = (ch < 127) ? ch & 0xFF : 127;
      }

      let chunk_len = Math.ceil(bytes.length / 32);

      for (i = 0; i < bytes.length; i++) {
          j += bytes[i];
          k++;
          if ((k == chunk_len) || (i == bytes.length-1)) {
              a = Math.floor( j / k );
              if (a < 32)
                  hash += '0';
              else if (a > 126)
                  hash += 'z';
              else
                  hash += dict[ Math.floor( (a-32) / 2.76) ];
              j = k =  0;
          }
      }
      return this.SID = hash;
    },
    getSid(){
      return this.SID;
    },
};