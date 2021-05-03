<template>
  <div class="w-full bg-gray-50">
    <div>
      <div class="inline-flex">
        <div class="p-2 bg-green-600 rounded-full cursor-pointer text-white mb-12">Reset data</div>

      </div>
    </div>
    <div class="container px-4 mx-auto">
      <ul class="w-full inline-flex justify-end">
        <li class="text-green-700 font-semibold mx-2 border-b-2 cursor-pointer uppercase border-transparent hover:border-green-700">Mon Compete</li>
        <li class="text-green-700 font-semibold mx-2 border-b-2 cursor-pointer uppercase border-transparent hover:border-green-700">Mon Tableu de bord</li>
        <li class="text-green-700 font-semibold mx-2 border-b-2 cursor-pointer uppercase border-green-700 hover:border-green-700">Demande</li>
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
        <h2 class="text-center text-2xl uppercase font-bold text-green-800">Demande en Electric</h2>
      </div>

      <div class="inline-flex">
        <div class="inline-flex pr-4 pb-4 border-r-2 border-green-700 mr-2">
          <img class="w-14 h-14 rounded-full" src="https://phunugioi.com/wp-content/uploads/2020/01/avatar-doi-cho-nam-deo-khau-trang.jpg" alt="">
        </div>
        <div>
          <div class="text-green-700 font-semibold uppercase">Detail de votro </div>
          <div>Lorem ipsum dolor sit amet,</div>
        </div>
      </div>

<!--      Form-->
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-select label="Votre green:" />
        <base-input label="Mon fournisseur actuel:"/>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-input label="Address pour ce  demand"/>
        <base-input label="Mes dependses annuelles"/>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <div class="flex flex-col relative">
          <span class="text-green-700 font-semibold">Mon Fournisseur:</span>
          <base-input read-only />
          <button class="absolute bottom-0 right-0 bg-green-700 p-2 border">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <input type="file" class="absolute h-full w-full bg-blue-300 right-0 top-0 opacity-0 cursor-pointer">
          </button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-select label="Status de la demande" />
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-text-area col-span="2" label="Commendaires du client sur la demande:"/>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <label class="inline-flex items-center">
          <input type="radio" class="form-radio" name="accountType" value="personal">
          <span class="ml-2 text-green-700 font-bold">Choisir ce Fournisseur 1</span>
        </label>
        <label class="inline-flex items-center">
          <input type="radio" class="form-radio" name="accountType" value="busines">
          <span class="ml-2 text-green-700 font-bold">Choisir ce Fournisseur 2</span>
        </label>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <span class="text-green-700 font-bold">Fournissieur propose 1</span>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-input label="Fournissieur propose 1:" placeholder="ahhuhu" disabled/>
        <base-input label="Remarque propose 1:" disabled/>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-input placeholder="Offre propose:" disabled/>
        <base-text-area placeholder="Remarque offre:" disabled/>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-input label="Depense annuelle:" disabled />
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <span class="text-green-700 font-bold">Fournissieur propose 2</span>
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-input label="Nom de fournisseur propose 2:" disabled />
        <base-input label="Remarque fournisseur 2:" disabled />
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-input label="Offre propose:" disabled />
        <base-input label="Remarque Offre:" disabled />
      </div>
      <div class="grid grid-cols-3 gap-4 py-5 px-24">
        <base-input label="Depense annuelle:" disabled />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

