<template>
  <form class="flex flex-col font-body mb-8">
    <label for="name">Name</label>
    <input id="name" type="text" name="name" placeholder="Your name..." />

    <label for="email">Email</label>
    <input id="email" type="text" name="email" placeholder="joebob@mchen.dev" />

    <label for="subject">Subject</label>
    <textarea
      id="subject"
      name="subject"
      placeholder="Write something.."
      style="height: 200px"
    ></textarea>

    <input type="submit" value="Submit" />
  </form>
</template>
