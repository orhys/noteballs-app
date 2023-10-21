<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit note"
      label="Edit note"
    >
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light mr-2">
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/* imports */
import { ref } from "vue";
import { usestoreNotes } from "@/stores/storeNotes";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";

/* router */
const route = useRoute();
const router = useRouter();

/* store */
const storeNotes = usestoreNotes();

/* note */
const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

/* save clicked */
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
