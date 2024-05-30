import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateVolunteer = () => {
const update = useLoaderData();
const { user, } = useContext(AuthContext);

const {_id, post, location, date, image, description, category,} = update;


const handleUpdate = event => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.text.value;
    const post = form.title.value;
    const date = form.date.value;
    const email = form.email.value;

    const UpdateVolunteers = { post, location, date, image, description, category, email,  }
    console.log(UpdateVolunteers);



   //send data to the server
   fetch(`https://assignment-11-server-side-gamma-steel.vercel.app/volunteer/${_id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(UpdateVolunteers)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'success!',
          text: 'Upadeted Successfuly',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })

}






    return (
        <div className="gadgetContainer pt-10 container px-4 mx-auto mb-4">
        <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
            {/* Heading */}
            <div className="mt-5 mb-8">
                <p className="text-center text-3xl font-semibold">
                    <span className="mr-3 text-[#FF497C]">
                        <i className="bx bxs-alarm-add"></i>
                    </span>
                    <span className="dark:text-white font-bold ">
                    Update Page
                    </span>
                </p>
            </div>
            {/* form */}
            <form onSubmit={handleUpdate}>
                <div className="flex gap-8 ">
                    <div className="flex-1">
                        <label className="block mb-2 dark:text-white" htmlFor="image">
                            Image
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            defaultValue={image}
                            placeholder="Enter Image URL"
                            id="image"
                            name="image"
                        />

                        <label className='text-gray-700 ' htmlFor='description'>
                            Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                            defaultValue={description}
                        ></textarea>

                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor=" Location"
                        >
                            Location
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder=" Location "
                            id="text "
                            name="text"
                            defaultValue={location}
                        />
                        <label className='text-gray-700 ' htmlFor='emailAddress'>
                            Email Address
                        </label>
                        <input
                            id='emailAddress'
                            type='email'
                            name='email'
                            disabled
                            defaultValue={user?.email}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>
                    {/* Right side */}
                    <div className="flex-1">
                        <label className="block mb-2 dark:text-white" htmlFor="image">
                            Post Title
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="title"
                            placeholder=" Post Title "
                            id="title"
                            name="title"
                            defaultValue={post}
                        />
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                defaultValue={category}
                                className='border p-2 rounded-md'
                            >
                                <option value='healthcare'>healthcare</option>
                                <option value='Geducation'>Geducation</option>
                                <option value='social service'>social service</option>
                                <option value='animal welfare'>animal welfare</option>
                            </select>
                        </div>

                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="cost"
                        >
                            Deadline
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="date"
                            placeholder="Deadline  "

                            id="date"
                            name="date"
                            defaultValue={date}
                        />
                    </div>
                </div>

                <input
                    className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-black duration-200 text-white cursor-pointer font-semibold"
                    type="submit"
                    value="Update Post Button "
                />
            </form>
        </div>
    </div>
    );
};

export default UpdateVolunteer;