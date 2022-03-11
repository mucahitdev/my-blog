import React from 'react'
import Project from './Project'

function Projects() {
  const projectsData = [
    {
      name: "Nöbetçi Eczane",
      description: "Türkiyedeki Nöbetçi Eczaneleri İl ve İlçe bazlı bulabilceğiniz Uygulama.",
      demo: "https://nobetci-eczaneniz.netlify.app",
      code: "https://github.com/mucahitkok/nobetci-eczane",
      image: "https://serving.photos.photobox.com/10561426f7732549d3d1a2fb67c4e2ed564eb01ac71800fea91f20bbaedcc0002a51da91.jpg",
      tags: [
        {
          tagName: '#react'
        },
        {
          tagName: '#bootstrap'
        },
        {
          tagName: '#api'
        }
      ]
    },
    {
      name: "Blog",
      description: "Kişisel blog sayfam.",
      demo: "https://mucahitkok.netlify.app",
      code: "https://github.com/mucahitkok/my-blog",
      image: "https://serving.photos.photobox.com/026185021cf06a0725c119ae2b3cf6348d528fc149fad009bb2d7936c3818e14f010389e.jpg",
      tags: [
        {
          tagName: '#react'
        },
        {
          tagName: '#bootstrap'
        },
      ]
    },
    {
      name: "Colour palette",
      description: "Renk paletleri üretip yayınlayabilir,Başkalarının paletlerinide görebilirsiniz.",
      demo: "https://color-palet.vercel.app",
      code: "https://github.com/mucahitkok/color-flipper-react",
      image: "https://serving.photos.photobox.com/587576862d1e852132899a7e65b7feb3f40a0a4c73177d8b98841fae62e8b602d1f47ccc.jpg",
      tags: [
        {
          tagName: '#react'
        },
        {
          tagName: '#tailwind'
        },
        {
          tagName: '#firebase'
        }
      ]
    }
  ]
return (
  <div className='flex flex-wrap justify-around  mt-28' >
    {
      projectsData.map((item, id) => (<Project key={id} {...item} />))
    }

  </div>
)
}

export default Projects