<script setup lang="ts">
import { reactive, ref } from "vue";

const state = reactive({
  name: "",
  lastName: "",
  email: "",
  message: "",
});

const isLoading = ref(false);
const isSuccess = ref(false);
const isError = ref(false);

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  isLoading.value = true;

  try {
    const response = await fetch("https://formspree.io/f/xzzvlerq", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Message sent successfully");
      isSuccess.value = true;
    } else {
      console.error("Failed to send message");
      isError.value = true;
    }
  } catch (error) {
    console.error(error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  } 
};

const props = defineProps<{
  id?: string;
  namePlaceholder?: string;
  lastNamePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  sendLabel?: string;
  sendingLabel?: string;
  successText?: string;
  errorText?: string;
}>();

</script>

<template>
  <form 
    class="space-y-8 w-full max-w-175" 
    @submit="handleSubmit"
  >
    <div class="flex gap-8 w-full">
      <input
        type="text"
        name="name"
        :disabled="isLoading || isSuccess"
        required
        :placeholder="props.namePlaceholder ?? 'Name'"
        v-model="state.name"
        class="flex-1 px-4 py-3 font-serif bg-white rounded-lg border min-h-10.5 border-black/50 placeholder:text-black/50 focus:outline-dark disabled:opacity-60"
      />
      
      <input
        type="text"
        name="last-name"
        :disabled="isLoading || isSuccess"
        required
        :placeholder="props.lastNamePlaceholder ?? 'Last Name'"
        v-model="state.lastName"
        class="flex-1 px-4 py-3 font-serif bg-white rounded-lg border min-h-10.5 border-black/50 placeholder:text-black/50 focus:outline-dark disabled:opacity-60"
      />
    </div>

    <input
      type="email"
      name="email"
      :disabled="isLoading || isSuccess"
      required
      :placeholder="props.emailPlaceholder ?? 'E-Mail'"
      v-model="state.email"
      class="px-4 py-3 w-full font-serif bg-white rounded-lg border min-h-10.5 border-black/50 placeholder:text-black/50 focus:outline-dark disabled:opacity-60"
    />

    <textarea
      name="message"
      :disabled="isLoading || isSuccess"
      :placeholder="props.messagePlaceholder ?? 'Message'"
      v-model="state.message"
      class="px-4 py-3 mb-12 w-full font-serif bg-white rounded-lg border resize-none border-black/50 placeholder:text-black/50 focus:outline-dark disabled:opacity-60"
      rows="5"></textarea>

    <button
      :disabled="isLoading"
      v-if="!isSuccess"
      type="submit"
      class="float-right px-6 h-10 font-bold uppercase rounded bg-yellow disabled:opacity-60"
    >
      {{ isLoading ? (props.sendingLabel ?? "Sending...") : (props.sendLabel ?? "Send") }}
    </button>

    <div v-if="isSuccess" class="bg-dark p-4 font-bold rounded-md text-white">
      <p>{{ props.successText ?? "Message sent successfully" }}</p>
    </div>

    <div v-if="isError" class="bg-red p-4 font-bold rounded-md text-white">
      <p>{{ props.errorText ?? "Failed to send message" }}</p>
    </div>
  </form>
</template>