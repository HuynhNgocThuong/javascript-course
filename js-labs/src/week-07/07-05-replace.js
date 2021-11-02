'easy frontend'.replace(' ', '-'); // easy-frontend
'easy frontend'.replace(' ', ''); // easyfrontend
'easy frontend'.replace('easy', 'Easy'); // Easy frontend
'easy frontend'.replace('easy', ''); // ' frontend'
// replace the first match only
'easy easy frontend'.replace('easy', ''); // ' easy frontend'

'learn easy frontend'.replaceAll(' ', '-'); // 'learn-easy-frontend'
'learn easy frontend easy'.replaceAll('easy', ''); // 'learn frontend '

// replace with regexp (Regular Expression)
'super 123 cool'.replaceAll(/[0-9]/gi, '');

// Refer: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String
