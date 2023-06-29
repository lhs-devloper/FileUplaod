# 사용법

```html
<script src="your src"></script>
<script>
    // 1. input[type=file]대상태그의 ID
    // 2. 표현할 위치의 태그ID
    // 3. 표현할 태그 선택(div, p, etc...) => 일단은 다 허용하게 설정되어있음
    const fileUplaod = new FileUpload(inputElementId, expressionTargetElement, createTag)
</script>
```

[예시는 요기로 클릭](./example/example1.html)

<table>
    <thead>
        <h1>Constructor</h1>
    </thead>
    <tbody>
        <tr>
            <td><strong>targetTagId</strong></td>
            <td>Input 태그의 아이디(id식별자)를 작성해주세요</td>
        </tr>
        <tr>
            <td><strong>expressionTag</strong></td>
            <td>파일업로드된 대상 이름들을 표현하고 싶은 태그의 아이디(id식별자)를 작성해주세요</td>
        </tr>
        <tr>
            <td><strong>createTag</strong></td>
            <td>각 파일이름마다 어떠한 태그를 적용할건지에 대해 설정</td>
        </tr>
    </tbody>
</table>

--- 옵션은 아직 계획중
<!-- <table>
<tr>
    <td><h1>options</h1></td>
</tr>
</table> -->