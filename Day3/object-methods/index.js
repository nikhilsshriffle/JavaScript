const company = {
  developers :100,
  front_developers: null,
  backend_developers:30,
  set developers_stregth(strenght) {
    this.front_developers = strenght    
  }
}

console.log('comapny_keys',Object.keys(company))
console.log('comapny_values',Object.values(company))
console.log('comapny_enteries',Object.entries(company))

console.log('front_developers_before',company.front_developers)
company.developers_stregth = 20
console.log('front_developers_after',company.front_developers)

// hasownProperty
console.log('hasownProperty')
console.log(company.hasOwnProperty('developers' ))

let secondobj = Object.create({id:5,first_name:"Ronak"});
console.log('secondobj',secondobj)
