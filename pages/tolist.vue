<template>

    <h2 style="display: flex; align-items: center; justify-content: center; font-size: 50px;"> To-List</h2>
    
    <table style="display: flex; align-items: center; justify-content: center; ">
        <tr>
            <td>
                <img src="/img/To-List.png" alt="MCES10 Software Logo" width="512" height="512" />
            </td>  
            <td>
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Features</h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" style="padding: 2rem">
                    <li>On Board Storage</li>
                    <li>Categorise your to-dos</li>
                   
                </ul>
            </td>
         
        </tr>

    </table>
    <center>
        <h2>
            <p>
              RickyAI will be integrated into this app soon to help with your tasks!
            </p>
            <a class="gradient-button" @mouseover="toggleHover" @mouseout="toggleHover"> 
                Try Now 
            </a> 
        </h2>
    </center>

</template>
<style>
h1{
    padding-bottom: 2rem;
}
.gradient-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.gradient-button::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border: 2px solid #ffffff; /* Default border color */
  border-radius: 5px;
  transition: border-width 0.3s ease-in-out;
}

.gradient-button:hover::before {
  border-width: 10px;
  border-image: linear-gradient(45deg, #ff5f6d, #ffc371);
  border-image-slice: 1;
  border-radius: 5px;
}
</style>
  

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    toggleHover() {
      this.isHovered = !this.isHovered;
    },
  },
};
</script>
  