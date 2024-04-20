import React from 'react';

const posts = [
    {
      id: 1,
      title: 'I Must Say Thank You Liwonde',
      description:
        'After Moving around the hospitals in malawi, looking for neck cancer chemo i came accross this website of liwonde. i booke an appointment right at the website and the i visited the hospita.',
      date: 'Mar 16, 2024',
      datetime: '2020-03-16',
      category: { title: 'Karonga' },
      author: {
        name: 'Jeremial Kamanga',
        role: 'Cancer Patient',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 1,
        title: 'Working at Liwonde Private Hospital',
      
        description:
          'Working at Liwonde Private Hospital has been a fulfilling experience. The hospitals commitment to excellence in patient care is evident in everything we do. am honored to be part of such a dedicated team of healthcare professionals.',
        date: 'jan 09-, 2020',
        datetime: '2020-03-16',
        category: { title: 'Liwonde' },
        author: {
          name: 'Dr. James Phiri"',
          role: 'Surgeon',
        
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 1,
        title: 'Feeling so grateful',
     
        description:
        'I recently received treatment at Liwonde Private Hospital, and I must say that I was impressed by the professionalism and compassion of the staff. From the moment I walked in, I felt welcomed and cared for. Thank you to the entire team for your exceptional service! ',
        date: 'Sep 14-, 2016',
        datetime: '2020-03-16',
        category: { title: 'Blantyre' },
        author: {
          name: 'Grace Phiri',
          role: 'Patient',
        
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      
    
  ]
  
  export default function ConnectSection() {
    return (
      <div className=''>
            <div className="py-24 sm:py-32">
        <div className="bg-green  mx-auto max-w-7xl px-6 lg:px-8"
          style={{
            // backgroundColor:'green'
          }}
        
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Testmonies</h2>
            <p className="  text-2xl mt-2 text-lg leading-8 text-gray-600">
              Here is what our satisfied patients are Saying.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 ">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      </div>
    
    )
  }
  