## Passengers-Boarding

This Project is all about building a transport management system that takes people to 5 locations[“A", "B", "C", "D", "E"].
The Project will send equal number of people to this locations irrespective of the number of passengers. The project is can't send more than 50 passengers in total (our transport service can only take 50 people per trip to the 5 locations available). If the passengers available exceeds 50, then the remaining passengers are taken into the reservation list, pending if there is a shuffle count available which indicates how many extra trips the transport service can make per day.

Providing we have passengers < 50, then we would have to assign equal number of passengers to this locations and upon having remianing passengers, they would be taking into reservation list.

Also, providing we have passengers < 5 (length/number of location), then we would have an empty boarding list, with reservation containing the passengers available).

For every extra trip taken shuffle count is decremented while for every trip count is incremented.

# example of expexted output is:

1. taskOne(10, 4);
   output:

```
    {
        boarded:[
           {name:"passenger1", location:"Abuja"},
           {name:"passenger2", location:"Benue"},
           {name:"passenger3", location:"Lagos"},
           {name:"passenger4", location:"Katsina"},
           {name:"passenger5", location:"Sambisa"},
           {name:"passenger6", location:"Abuja"},
           {name:"passenger7", location:"Benue"},
           {name:"passenger8", location:"Lagos"},
           {name:"passenger9", location:"Katsina"},
           {name:"passenger10", location:"Sambisa"},
        ],
        reservation:[],
        count:1
    }
```

2. taskOne(14, 4);
   output:

```
    {
        boarded:[
           {name:"passenger1", location:"Abuja"},
           {name:"passenger2", location:"Benue"},
           {name:"passenger3", location:"Lagos"},
           {name:"passenger4", location:"Katsina"},
           {name:"passenger5", location:"Sambisa"},
           {name:"passenger6", location:"Abuja"},
           {name:"passenger7", location:"Benue"},
           {name:"passenger8", location:"Lagos"},
           {name:"passenger9", location:"Katsina"},
           {name:"passenger10", location:"Sambisa"},
        ],
        reservation:[
            {name:"passenger11", location:"Abuja"},
           {name:"passenger12", location:"Benue"},
           {name:"passenger13", location:"Lagos"},
           {name:"passenger14", location:"Katsina"},
        ],
        count:1
    }
```

3. taskOne(55, 4);
   output:

```
    {
        boarded:[
           {name:"passenger51", location:"Abuja"},
           {name:"passenger52", location:"Benue"},
           {name:"passenger53", location:"Lagos"},
           {name:"passenger54", location:"Katsina"},
           {name:"passenger55", location:"Sambisa"},
        ],
        reservation:[],
        count:2
    }
```

4. taskOne(4, 4);
   output:

```
    {
        boarded:[],
        reservation:[
             {name:"passenger1", location:"Abuja"},
           {name:"passenger2", location:"Benue"},
           {name:"passenger3", location:"Lagos"},
           {name:"passenger4", location:"Katsina"},
        ],
        count:0
    }
```

5. taskOne(50, 0);
   output:

```
    {
        boarded:[
           {name:"passenger1", location:"Abuja"},
           {name:"passenger2", location:"Benue"},
           {name:"passenger3", location:"Lagos"},
           {name:"passenger4", location:"Katsina"},
           {name:"passenger5", location:"Sambisa"},
           .... * 45
        ],
        reservation:[],
        count:1
    }
```

### Note:

- Use typescript.
- You are not expected to use `type any`
