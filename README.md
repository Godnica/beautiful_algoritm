# beautiful_algoritm
Various utility script


**flatobject!**

Function that recive a json tree and edit him like a flat json:

``` json
{
    "a": {
        "b": {
            "c": "d",
            "f": "g"
        },
        "h":"i",
    },
    "l":"m"
}
```

become 

``` json
{
  "a.b.c": "d",
  "a.b.f": "g",
  "a.h": "i",
  "l": "m"
}
```
