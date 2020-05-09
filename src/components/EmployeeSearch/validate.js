export default function validate(input) {
    if(input.length > 10)
        return 0;
    else if(!/^[a-zA-Z]*$/g.test(input))
        return 0;
    else 
        return 1;
} 