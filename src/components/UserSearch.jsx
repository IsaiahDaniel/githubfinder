import { AlertContext } from 'context/alert/alertContext';
import { GithubContext } from 'context/github/githubContext';
import React, { useContext, useState } from 'react'

const UserSearch = () => {

    const { users, searchUsers, clearUsers } = useContext(GithubContext);
    const { showAlert} = useContext(AlertContext);
    const [text,setText] = useState("");

    const onChangeTextHandler = (e) => {
      setText(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(text === ""){
            showAlert("Please Enter a search Term", "danger")
        }else {
            searchUsers(text);
            setText("");
        }

    }

  return (
    <div className='grid gap-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-10'>
        <div>
            <form action="#" method="post" onSubmit={onSubmitHandler}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" value={text} onChange={(e) => onChangeTextHandler(e) } />
                        <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                            Go
                        </button>
                    </div>
                </div>
            </form>
        </div>
        { users?.length > 0 && (
            <div onClick={() => clearUsers()}>
                <button className='btn btn-ghost btn-lg'>
                    Clear
                </button>
            </div>
        ) }
    </div>
  )
}

export default UserSearch;