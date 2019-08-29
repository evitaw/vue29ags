<template>
  <div>
    <table class="table">
        <thead>
            <tr>
                <td style="color:#ff007f"><strong>#</strong></td>
                <td style="color:#ff007f"><strong>Nama</strong></td>
                <td style="color:#ff007f"><strong>Harga</strong></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td>{{ ++index }}</td>
                <td>{{ item.name }}</td>
                <td>Rp {{ item.price }}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td>Total</td>
                <td>Rp {{ total }}</td>
            </tr>
        </tfoot>
    </table>
  </div>
</template>

<script>

export default {
  data() {
      return {
          items: [
              {id: 1, name: 'Jeruk', price: 5000},
              {id: 2, name: 'Apel', price: 10000}
          ]
      }
  },

  computed: {
      total() {
          return this.items.map(item => Number(item.price)).reduce((prev, current) => prev+current,0)
      }
  }
};
</script>