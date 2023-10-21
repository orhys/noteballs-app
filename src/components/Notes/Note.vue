<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ dateFormatted }}</small>
          <small class="column has-text-right">{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        @click.prevent="modals.deleteNote = true"
        href="#"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote
      v-model="modals.deleteNote"
      v-if="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
/* imports*/
import { computed, reactive } from "vue";
import { usestoreNotes } from "@/stores/storeNotes";
import { useDateFormat } from "@vueuse/core";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";

/* date formatted */
const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));
  let formattedDate = useDateFormat(date, "MM-DD-YYYY @ hh:mm A");
  return formattedDate.value;
});

/* store */
const storeNotes = usestoreNotes();

/* props */
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/* character length */
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

/* modals */
const modals = reactive({
  deleteNote: false,
});
</script>
