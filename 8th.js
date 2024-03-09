var roi = 
    /* color: #00ffff */
    /* displayProperties: [
      {
        "type": "polygon"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "marker"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[91.77346577061371, 22.706400830536605],
                  [91.77346845282273, 22.7062845372437],
                  [91.77372326267914, 22.706306806179775],
                  [91.77368839396195, 22.70644041972015],
                  [91.77347113503174, 22.706418150805806]]]),
            {
              "name": "my house",
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[91.77354891909317, 22.70653691830712],
                  [91.77354891909317, 22.706457739984366],
                  [91.77372326267914, 22.706457739984366],
                  [91.77372326267914, 22.70653691830712]]], null, false),
            {
              "name": "my house",
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([91.7734100966668, 22.70621093495994]),
            {
              "name": "my house",
              "system:index": "2"
            })]);