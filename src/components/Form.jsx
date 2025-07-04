import { useState } from 'react';
import { isValidPhoneNumber } from 'libphonenumber-js';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('');
  const [descError, setDescError] = useState('');

  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setNameError('');
    setPhoneError('');
    setEmailError('');
    setDescError('');

    const nameValue = event.target.name.value.trim();
    const descValue = event.target.message.value.trim();

    if (!nameValue) {
      setNameError('Name is required');
      return;
    }

    // validate email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // validate phone
    if (!isValidPhoneNumber(phone)) {
      setPhoneError('Please enter a valid phone number in international format (e.g., +14155552671)');
      return;
    }

    if (!descValue) {
      setDescError('Description is required');
      return;
    }


    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', '177aae0b-7642-4d06-a396-01dd18f8d8e6');
    formData.set('phone', phone);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
      setPhone('');
      setEmail('');
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };


  return (
    <div>

      <input type="hidden" name="from_name" value="Sammy England" />
      <input type="hidden" name="subject" value="New Contact Message from Sammy England" />

      <div className="isolate bg-white px-6 py-24 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg text-[#818080] font-bold">
            We&apos;re here to help and answer any questions you might have. We look forward to hearing from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-8 font- ">
          <input type="hidden" name="from_name" value="Sammy England" />
          <input type="hidden" name="subject" value="New Contact Message from Sammy England" />
          <div className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/* Name Field */}
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 block w-full rounded-md border border-black px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {nameError && <p className="text-sm text-red-500 mt-1">{nameError}</p>}
            </div>

            {/* Email Field */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                // type="email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 block w-full rounded-md border border-black px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
            </div>

            {/* Phone Number Field */}
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                Contact Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+94771234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-2 block w-full rounded-md border border-black px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {phoneError && <p className="text-sm text-red-500 mt-1">{phoneError}</p>}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                Description
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 block w-full rounded-md border border-black px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {descError && <p className="text-sm text-red-500 mt-1">{descError}</p>}
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#D1A249] px-3.5 py-2.5 text-sm font-semibold text-black hover:bg-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <span>{result}</span>
    </div>
  );
}
