const InputText = () => {
    return (
        <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-2xl text-[rgba(0,0,0,0.6)] bg-transparent border-0 border-b-2 border-[#ccc] appearance-none focus:outline-none focus:ring-0 focus:border-primary peer text-center" placeholder=" " required />
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-[#ccc] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 w-full text-center">Prénom</label>
        </div>
    )
}

export default InputText;
