import React from 'react'
import RISliderComponent from './RISliderComponent'

// const allCategories = ["All", "Family Home","Apartments","Villas", "TownHousses"]

const allCategories = [
  {id:1,cat:"All", active:true},
  {id:2,cat:"Family Home", active:false},
  {id:3,cat:"Apartments", active:false},
  {id:4,cat:"Villas", active:false},
  {id:5,cat:"TownHousses", active:false},
  
]

const propertyCards = [
  {
    name:"Property 01",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Family Home"
  },
  {
    name:"Property 02",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:""
  },
  {
    name:"Property 03",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Apartments"
  },
  {
    name:"Property 04",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 05",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 06",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Family Home"
  },
  {
    name:"Property 07",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:""
  },
  {
    name:"Property 08",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Apartments"
  },
  {
    name:"Property 09",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 10",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 11",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Family Home"
  },
  {
    name:"Property 12",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:""
  },
  {
    name:"Property 13",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Apartments"
  },
  {
    name:"Property 14",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 15",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 16",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 17",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 18",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Family Home"
  },
  {
    name:"Property 19",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:""
  },
  {
    name:"Property 20",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Apartments"
  },
  {
    name:"Property 21",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 22",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 23",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 24",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 25",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Family Home"
  },
  {
    name:"Property 26",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:""
  },
  {
    name:"Property 27",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Apartments"
  },
  {
    name:"Property 28",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 29",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 30",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 31",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 32",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Family Home"
  },
  {
    name:"Property 33",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:""
  },
  {
    name:"Property 34",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Apartments"
  },
  {
    name:"Property 35",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 36",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 37",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Villas"
  },
  { 
    name:"Property 38",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"TownHousses"
  },
  {
    name:"Property 39",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:"Family Home"
  },
  {
    name:"Property 40",
    image:"https://s3-alpha-sig.figma.com/img/e55b/f5ff/4f733e3bdd4d4d82fb92d230d1d53669?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKlWdJQTQzM3xHqRrr~cqJbSNSkgLaQXqMN70zlCbwIisGn8tY5rakAKrK3ao8utBgNLVvVm~BvbhVHyTRObbrvC8OyeOLyaLeTnXFEMwc8nbr8C2jru2hw78lQZHjaOVaFBOdalCeYnZaSgLklTP-YI87RZYHiFA-NQ6EmXvNXqRkTZyZYLHAhmLe0cqi5wCyiS7IIyvFTpg523z7LftUo6eboREF5gqXX8TBLdR6zIbPUyKVZxsB8T4hFwtYHXxKToEmCHl8GwFYurV7QdpgWekxTIcfUm6QQzPiY9OPs-7PQBTgWpJjeghmpn8u~cbri6omgCdWg1CSMxHxmRA__",
    rating:4.5,
    price:"AED 900k",
    loc:"Dubai",
    category:""
  },
]

const RegisterInterestTab = () => {
  return (
    <>
      <RISliderComponent
       headingWhite="Discover Your"
        headingBlack="Dream Property"
        cards={propertyCards}
        categories={allCategories}
       />
    </>
  )
}

export default RegisterInterestTab
