<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/gunSkins" exact class="item">
            <i class="bomb icon"></i>Gun Skins
          </router-link>
          <router-link to="/gunSkins/new" class="item">
            <i class="plus square icon"></i>Add New Gun Skins
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <flash-message class="myFlash"></flash-message>
      <div class="ui one column grid">
        <div class="column">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style>
body, #app {
  background-color: #2c2f33; /* Discord-like Dark Background */
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}


#app > div.navbar {
  margin-bottom: 1.5em;
  background-color: #23272a;
  padding: 1em;
}

.ui.inverted.segment.navbar .item {
  color: #ffffff;
}

.ui.inverted.segment.navbar .item.active {
  background-color: #7289da;
  color: #ffffff;
}


.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50px;
  right: 0;
}

input {
  width: 100%;
  max-width: 500px;
  background-color: #40444b;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
}

div.label {
  width: 100%;
  max-width: 150px;
  background-color: #23272a;
  color: #ffffff;
  border-radius: 4px 0 0 4px;
  padding: 10px;
  box-sizing: border-box;
}

div.input {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

button.ui.button {
  width: 100%;
  max-width: 200px;
  margin-top: 15px;
  display: block;
  background-color: #7289da;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;
}

button.ui.button:hover {
  background-color: #677bc4;
}


.ui.text.container {
  background-color: #36393f;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 2em;
  text-align: center;
  align-items: center;
}


.ui.celled.table {
  background-color: #40444b;
  color: #ffffff;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
}

.ui.celled.table thead th {
  background-color: #23272a;
  color: #ffffff;
  padding: 10px;
}

.ui.celled.table tbody tr:nth-child(odd) {
  background-color: #2c2f33;
}

.ui.celled.table tbody tr:nth-child(even) {
  background-color: #3a3e44;
}

.ui.celled.table tbody td {
  padding: 10px;
  border-top: 1px solid #23272a;
}


.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
  color: #7289da;
  transition: color 0.3s ease-in-out;
}

.actions a:hover {
  color: #ffffff;
}


.ui.segment {
  background-color: #36393f;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 2em;
}

.ui.inverted.segment {
  background-color: #36393f;
  border: none;
}

footer {
  background-color: #23272a;
  padding: 20px;
  text-align: center;
  color: #ffffff;
  margin-top: 2em;
}

.ui.segment,
.ui.form,
.ui.table,
.ui.container,
footer {
  background-color: #36393f;
  color: #ffffff;
  align-items: center;
}


@media (max-width: 768px) {
  div.input {
    flex-direction: column;
    align-items: flex-start;
  }

  div.label {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
  }

  button.ui.button {
    width: 100%;
  }

  .actions {
    text-align: center;
  }

  .myFlash {
    width: 90%;
    top: 20px;
    right: 5%;
  }
}

</style>
