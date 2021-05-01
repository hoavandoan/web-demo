<template>
  <div class="w-full bg-gray-50">
    <div>
      <div class="inline-flex">
        <div class="p-2 bg-green-600 rounded-full cursor-pointer text-white mb-12">Reset data</div>

      </div>
    </div>
    <div class="container px-4 mx-auto">
      <ul class="w-full inline-flex justify-end">
        <li class="text-green-700 mx-2 border-b-2 border-transparent hover:border-green-700">Mon Compete</li>
        <li class="text-green-700 mx-2 border-b-2 border-transparent hover:border-green-700">Mon Compete</li>
        <li class="text-green-700 mx-2 border-b-2 border-transparent hover:border-green-700">Mon Compete</li>
      </ul>

      <div class="mt-4">
        <div class="text-red-500">Votro conseller</div>
        <div class="flex mt-2 items-center">
          <img class="w-14 h-14 rounded-full" src="https://phunugioi.com/wp-content/uploads/2020/01/avatar-doi-cho-nam-deo-khau-trang.jpg" alt="">
          <div class="ml-2">
            <div>Christophe CREMER</div>
            <div>0656 6465  656</div>
            <div class="underline cursor-pointer">hoavandoan@gmail.com</div>
          </div>
        </div>
      </div>

      <div class="my-8">
        <h2 class="text-center text-xl font-bold text-green-800">Demande en Electric</h2>
      </div>

      <div class="inline-flex">
        <div class="inline-flex pr-4 pb-4 border-r-2 border-green-700 mr-2">
          <img class="w-14 h-14 rounded-full" src="https://phunugioi.com/wp-content/uploads/2020/01/avatar-doi-cho-nam-deo-khau-trang.jpg" alt="">
        </div>
        <div>
          <div class="text-green-600 uppercase">Detail de votro </div>
          <div>Lorem ipsum dolor sit amet,</div>
        </div>

      </div>

<!--      Form-->
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <div>
          <label class="block">
            <span class="text-green-700">Votre green:</span>
            <select class="form-select block w-full mt-1 border p-2 focus:outline-none">
              <option class="text-gray-700 uppercase">Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
        </div>
        <div class="flex flex-col">
          <span class="text-green-700">Mon Fournisseur:</span>
          <input type="text" placeholder="ahihi" class="mt-1 border p-2 focus:outline-none">
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <div class="flex flex-col">
          <span class="text-green-700">Mon Fournisseur:</span>
          <input type="text" placeholder="ahihi" class="mt-1 border p-2 focus:outline-none">
        </div>
        <div class="flex flex-col">
          <span class="text-green-700">Mon Fournisseur:</span>
          <input type="text" placeholder="ahihi" class="mt-1 border p-2 focus:outline-none">
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <div class="flex flex-col relative">
          <span class="text-green-700">Mon Fournisseur:</span>
          <input type="text" placeholder="ahihi" class="mt-1 border p-2 focus:outline-none">
          <button class="absolute bottom-0 right-0 bg-green-700 p-2 border">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <input type="file" class="absolute h-full w-full bg-blue-300 right-0 top-0 opacity-0">
          </button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <div class="flex flex-col">
          <span class="text-green-700">Status dela demande:</span>
          <input type="text" placeholder="ahihi" disabled class="mt-1 border p-2 focus:outline-none">
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <div class="col-span-2 flex flex-col">
          <span class="text-green-700">Commendaires:</span>
          <textarea placeholder="ahuhu" class="mt-1 border p-2 focus:outline-none"/>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <div class="col-span-2 flex flex-col">
          <span class="text-green-700">Commendaires:</span>
          <textarea placeholder="ahuhu" class="mt-1 border p-2 focus:outline-none" disabled/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

