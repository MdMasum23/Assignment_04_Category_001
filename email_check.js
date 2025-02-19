function validEmail(email) {
  
    if (typeof email !== "string") {
        return "Invalid";
    }

    if (/^[\.\-\_\+\@]/.test(email)) {
        return false;
    }

    if (!email.includes("@")) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }

    return true;
}

console.log(validEmail("ferdous@gmail.com"));
console.log(validEmail("1zihad@gmail.com")); 
console.log(validEmail("-king@yahoo.com")); 
console.log(validEmail(["jhankar@hero.com"]));
console.log(validEmail("Mewo@cat.com"));   
console.log(validEmail("programming-hero.com"));
console.log(validEmail("chat420@gpt.net"));  
console.log(validEmail(true)); 
console.log(validEmail("he ro@alom.com")); 
