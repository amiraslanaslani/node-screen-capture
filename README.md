# Node Screen Capture
Part of [Presentation Remote](https://github.com/amiraslanaslani/presentation-remote) project.
This module uses [Java Screen Capture](https://github.com/amiraslanaslani/java-screen-capture) to capture screenshots.

### Note
This module is currently under heavy development and very unstable.

## Usage
After loading module you can do this actions:
- Capture a screenshot and save as file with `.captureAndSave(width, height, format, file)`
- Capture a screenshot and get image as base64 string with `.captureAndGetBase64(width, height, format)`.
- Capture a screenshot and get file with standard output stream with `.captureAndGetStream(width, height, format)`. (screenshot in the shape of string thet given from standard output stream).

You can use this values as `format` parameter in above methods.
- `IMAGE_FORMAT_PNG` as PNG format
- `IMAGE_FORMAT_JPG` as JPG format
- `IMAGE_FORMAT_GIF` as GIF format

## Changes (V 0.3.0)
- Callback is removed from parameters of `captureAndGetBase64` function
- Empty output bux is fixed
