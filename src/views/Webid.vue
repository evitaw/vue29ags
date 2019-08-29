<template>
  <div>
    <table class="table">
      <tbody>
        <tr>
          <td>{{ artikel.content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    this.$route.params.id;
    const response = await axios.get("http://localhost:8000/api/blog/"+this.$route.params.id);
    this.artikel = response.data;
  },
  data() {
    return {
      artikel: {}
    };
  }
};
</script>