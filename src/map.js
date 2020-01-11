import StylesControl from "mapbox-gl-controls/lib/styles";

// with default styles:
// with custom styles:
map.addControl(
  new StylesControl({
    styles: [
      {
        label: "Streets",
        styleName: "Mapbox Streets",
        styleUrl: "mapbox://styles/mapbox/streets-v9"
      },
      {
        label: "Satellite",
        styleName: "Satellite",
        styleUrl: "mapbox://styles/mapbox/satellite-v9"
      }
    ],
    onChange: style => console.log(style)
  }),
  "top-left"
);
