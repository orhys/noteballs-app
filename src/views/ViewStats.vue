<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteballs"
      v-autofocus
      class="input"
      type="text"
      placeholder="Do you love noteballs?"
    />
  </div>
</template>

<script setup>
/* imports */
import { ref } from "vue";
import { usestoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

/* store */
const storeNotes = usestoreNotes();

/* love notebals */
const loveNoteballs = ref("");

/* watch characters */
useWatchCharacters(loveNoteballs, 50);
</script>
