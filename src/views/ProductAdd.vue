<template>
  <div class="card">
    <div class="card-header">Add New Product</div>
    <form @submit.prevent="add">
      <div class="card-body">
        <Inputan label="Nama" :value="name" />
        <Inputan label="Harga" type="number" :value="price" />
        <Tombol label="Save" />
      </div>
    </form>
  </div>
</template>

<script>
import Inputan from "@/components/Inputan";
import Tombol from "@/components/Tombol";

export default {
  components: {
    Inputan,
    Tombol
  },

  data() {
    return {
      name: "",
      price: 0
    };
  },
  add() {
    this.errors = {};

    if (this.name.trim() === "") {
      this.errors.name = "Nama harus diisi";
    }
    if (this.price < 1) {
      this.errors.price = "Harga harus lebih dari 0";
    }

    if (Object.values(this.errors).length > 0) {
      return;
    }

    this.items.push({
      id: Date.now(),
      name: this.name,
      price: this.price
    });
    (this.name = ""), (this.price = "");
  }
};
</script>