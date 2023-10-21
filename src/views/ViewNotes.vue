<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new note"
    >
      <template #buttons>
        <button
          :disabled="!newNote"
          @click="addNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-success"
      max="100"
    />
    <template v-else="!storeNotes.notesLoaded">
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

      <div
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
        v-if="!storeNotes.notes.length"
      >
        No notes here yet...
      </div>
    </template>
  </div>
</template>

<script setup>
/* imports */
import { ref } from "vue";
import { usestoreNotes } from "@/stores/storeNotes";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useWatchCharacters } from "@/use/useWatchCharacters";

/* store */
const storeNotes = usestoreNotes();

/* notes */
const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

/* watch characters */
useWatchCharacters(newNote);
</script>
