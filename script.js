const scriptURL =
    'https://script.google.com/macros/s/AKfycbym9HBUrY8_hRS4_0paaNuMfx0FGmo232wHtjH9n7UcMpZ4NGIhexRf7SQEhI42HqRD-g/exec'
const form = document.forms['dzaky-contact-form']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    // Ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // Tampilkan Alert
            myAlert.classList.toggle('d-none')
            // Reset form
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
})