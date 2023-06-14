<template>
  <form @submit.prevent="submitForm" class="content">
    <div class="form-control" :class="{ invalid: !title.isValid }">
      <label for="title">Title:</label>
      <input
        type="text"
        id="title"
        v-model.trim="title.val"
        @blur="clearValidity('title')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !priority.isValid }">
      <h3>Priority</h3>
      <div class="form-control container-priority">
        <div class="container-priority_item">
          <input
            class="radio"
            type="radio"
            id="high"
            value="high"
            v-model="priority.val"
            @blur="clearValidity('priority')"
          />
          <label for="high">High</label>
        </div>
        <div class="container-priority_item">
          <input
            class="radio"
            type="radio"
            id="medium"
            value="medium"
            v-model="priority.val"
            @blur="clearValidity('priority')"
          />
          <label for="medium">Medium</label>
        </div>
        <div class="container-priority_item">
          <input
            class="radio"
            type="radio"
            id="light"
            value="light"
            v-model="priority.val"
            @blur="clearValidity('priority')"
          />
          <label for="light">Light</label>
        </div>
      </div>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        v-model.trim="description.val"
        cols="30"
        rows="5"
        @blur="clearValidity('description')"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="">The task for how long?</label>
      <select id="frequency" name="frequency" v-model="frequency">
        <option value="everyday">everyday</option>
        <option value="every week">every week</option>
      </select>
    </div>
    <base-button>Add Task</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      title: {
        val: '',
        isValid: true,
      },
      priority: {
        val: null,
        isValid: true,
      },
      frequency: 'everyday',
      description: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  //TODO: исправить баг при отсутствии кэша
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.title.val.length < 3) {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val.length < 10) {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.priority.val === null) {
        this.priority.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }

      const taskData = {
        title: this.title.val,
        priority: this.priority.val,
        description: this.description.val,
        frequency: this.frequency,
      };
      this.$emit('save-data', taskData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.container-priority {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
.container-priority_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
.container-priority_item input,
.container-priority_item label {
  margin: 0;
}
</style>
