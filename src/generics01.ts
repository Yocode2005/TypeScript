function wrapInArray<T>(item : T) : T[]{ // means jis bhi type ka data denege retun me ussi datatype ka array milega
    return [item];
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavor : "Ginger"});

