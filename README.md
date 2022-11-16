# encodeUriComponent action

use `encodeUriComponent` in Github Action

## Inputs

### `string`

**Required** string Default `""`.

## Outputs

### `string`

`encodeUriComponent(string)`

## Example usage

SET

```yaml
uses: Ablestor/encode-uri-component-action@v1.1
id: encode-uri-component
with:
  string: ""
```

GET

```yaml
name: C-7) 🏗 Get android id
run: echo "${{ steps.encode-uri-component.outputs.string }}"
```
