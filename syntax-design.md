# WebAround Syntax design
webaroung uses the `walkthrough` syntax
## Syntax Rule

1. Action
    - the steps that should be interpreted
    - must be stated using `[step: <action>]` followed by its statement.
    - have properties and properties as value, each property must be stated with corresponsing value seperated by a colon `<property>: <value>`.
2. Configuration
    - this set global commands for all actions and can be modified within any action's scope
    - configuration can be set by starting the line with `config`, with it metadata tab indented, seperated by a clone
    ```
        config:
            <key>: <value>
            <key2>: <value2>
    ```

## Adding Reading Text
```walkthrogh
[step: speak]
text: <welcome to webaround syntax design page>
```
## Properties support

|propperties| type|
|------|-------|
| - text|  string |

## Showing a text on the screen
```walkthrogh
[step: highlight]
target: <target id>
message: <display message>
duration: <waiting time to disappear>
```
|propperty|type|description|
|-------|------|---------|
| target |string| targeted element to highlight specify using id selector|
| message| string|text to show on highlight|
|duration| number| the time it should take for the highlited text to disappear.|

## Clicking an element
```walkthrogh
[step: click]
target: <element id>
delay: <waiting time before click>
```
## Typing on screen
```walkthrogh
[step: input]
target: "#search-input"
value: "Revenue Report"
speed: 70
```

## Concurrent actions
current action can be stated using the `parallel` this enable you to add multiple action, for parallel executing.
```walkthrogh
[step: parallel]
- [action: input, target: "#search-input", value: "Q4 Revenue Report Analysis"]
- [action: speak, text: "Simultaneously querying our reporting pipelines for Q4 performance."]

```

# Todo
## Config
    - showError
    - skipOnError

## Step
    - click,
    - paste
    - cut
    - copy(allow text filtering using regex)
    - drag
    - drop
    - hover
    - draw(on whiteboard)
    - scroll(on time interval)

## Property
- introduce name on step for reusability... the parser build reference by index which would be refered to.

## Smoke Test
### step
    - assert
    - inspect
    - resize