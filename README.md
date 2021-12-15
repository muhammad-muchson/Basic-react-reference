base 64 resource : https://github.com/dankogai/js-base64
react cookie : https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie

pemasangan cookie :
import Cookies from 'universal-cookie';
const cookies = new Cookies();
cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat')); // Pacman
