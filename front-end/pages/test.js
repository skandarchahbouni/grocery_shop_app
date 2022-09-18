import React from 'react';
import ReactStars from 'react-stars'

export default function SkeletonLoading(){
    const testing = (e) => {
        alert(e)
    }
return (
	<div>
	<h2>NextJs Star Ratings - GeeksforGeeks</h2>
	<ReactStars
		count={5}
        half={false}
		size={24}
		color2={'#ffd700'} 
        onChange={testing}
    />
	</div>
)
}
