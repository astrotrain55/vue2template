<template>
  <script type="text/html" title="box">
    <ul
      id="<%=id%>"
      class="box <%=cross%>"
      title="<%=address%>"
      style="transform: rotate(<%=azimuth%>deg) translate(-50%,-50%);"
    >
      <li></li>
      <li><%=number%></li>
      <li></li>
    </ul>
  </script>
</template>

<style>
.box {
  cursor: pointer;
  margin: 0;
  padding: 0;
  display: inline-flex;
  font-family: sans-serif;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
}
.box li {
  padding: 3px;
  border: 1px solid;
  list-style-type: none;
  color: #ffffff;
  border-color: #000000;
  background-color: #167244;
}
.box.no-cross li {
  color: #167244;
  border-color: #167244;
  background-color: #ffffff;
}
.box li:empty {
  padding: 0;
  border-right: 0;
}
.box li:first-child {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
}
.box li:nth-child(even) {
  text-transform: none;
  white-space: nowrap;
  border-left: none;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 35px;
}
.box li:last-child {
  border-left: none;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
</style>
