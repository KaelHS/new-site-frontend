"use client" //usando apenas pelo carousel de depoimentos
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import Image from 'next/image'

import starIcon from '../../public/icons/star.svg'
import blueprintIcon from '../../public/icons/blueprint.svg'
import receiptCheckIcon from '../../public/icons/receipt_check.svg'
import monitorIcon from '../../public/icons/monitor.svg'
import { MarqueeItem } from '@/components/MarqueeItem'
import { Icon } from '@iconify/react';

import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import { VideoCard } from '@/components/VideoCard'
import Marquee from 'react-fast-marquee'


export default function Home() {

  const CardData = [
    {
      id:1,
      title: "Projeto Digital",
      description: "Garanta qualidade e evite erros e incompatibilidades ao centralizar tudo em um só lugar.",
      iconPath: blueprintIcon
    },
    {
      id:2,
      title: "100% digital",
      description: "Praticamente para o seu dia, economize tempo e elimine a necessidade de deslocamentos.",
      iconPath: monitorIcon
    },    {
      id:3,
      title: "Projeto aprovado na sua prefeitura",
      description: "Auxiliamos na aprovação do projeto junto à prefeitura.",
      iconPath: receiptCheckIcon
    },
    {
      id:4,
      title: "Qualidade incomparável",
      description: "Utilizamos metodologia própria e tecnologia BIM para garantir os melhores projetos.",
      iconPath: starIcon
    }
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
      <section
        className="bg-[url('../../public/defaultHeroImage.svg')] h-screen w-screen flex flex-col justify-center items-center"
        // style={{
        //   backgroundImage: "url(../../public/defaultHeroImage.svg)",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: 'cover'
        // }}
      >
      <Header />
        <div className='max-w-lg text-center flex flex-col items-center text-white'>
          <h1 className='text-7xl font-semibold'>Descubra seu projeto ideal</h1>
          <p className='mt-4 w-3/4 font-light'>Faça o teste e confira o projeto que atende as suas necessidades</p>
          <p className='mt-4 w-3/4'>Para começar, digite o <strong>tamanho do seu terreno</strong> e depois clique em <strong>Iniciar teste</strong>.</p>
        </div>
      </section>
      <section className='flex w-screen gap-2 p-8 items-center justify-center bg-primary-100'>
        {CardData.map(item => (
          <Card 
            key={item.id}
            title={item.title}
            description={item.description}
            icon={
              <Image 
                alt={`Icone para ${item.title}`}
                width={36}
                height={36}
                src={item.iconPath}
              />
            }
          />
        ))}

      </section>

      <section className='w-screen h-auto relative flex flex-col items-center py-20 bg-grays-100'>
        <h2 className='text-3xl font-bold mb-2'>Conheça as etapas de cada modalidade</h2>
        <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
        <div className='flex gap-8 items-center mt-8'>
          <button type="button" className="rounded-full text-gray-900 bg-transparent hover:bg-gray-100 border border-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-600 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center">
            <p>Personalizado</p>
          </button>
          <button type="button" className="rounded-full text-gray-900 bg-transparent hover:bg-gray-100 border border-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-600 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center">
          <Icon icon="lucide:home" width={20} height={20}/>
            <p className='ml-2'>Pronto</p>
          </button>
          <button type="button" className="rounded-full text-gray-900 bg-transparent hover:bg-gray-100 border border-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-600 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center">
            <Icon icon="akar-icons:thunder" width={20} height={20} />
            <p className='ml-2'>Express</p>
          </button>
          <button type="button" className="rounded-full text-gray-900 bg-transparent hover:bg-gray-100 border border-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-600 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center">
            <Icon icon="uil:bag" width={20} height={20} />
            <p className='ml-2'>Business</p>
          </button>
        </div>
        <div className='mt-8 max-w-[calc(100vw-(100vw-1160px)/2)]'>
          <ol className="border-l border-primary-500 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">

            <li>
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div
                  className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary-500 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-lg text-primary-500 dark:text-neutral-300">
                  Fase 1
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  scelerisque diam non nisi semper, et elementum lorem ornare.
                  Maecenas placerat facilisis mollis. Duis sagittis ligula in
                  sodales vehicula.
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div
                  className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary-500 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-lg text-primary-500 dark:text-neutral-300">
                  Fase 2
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Libero expedita explicabo eius fugiat quia aspernatur autem
                  laudantium error architecto recusandae natus sapiente sit nam
                  eaque, consectetur porro molestiae ipsam an deleniti.
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div
                  className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary-500 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-sm text-primary-500 dark:text-neutral-300">
                  Fase 3
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                  natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                  natus libero sit doloremque, laborum molestias rerum pariatur quam
                  ipsam necessitatibus incidunt, explicabo.
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div
                  className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary-500 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-sm text-primary-500 dark:text-neutral-300">
                  Fase 4
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">Title of section 4</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                  natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                  natus libero sit doloremque, laborum molestias rerum pariatur quam
                  ipsam necessitatibus incidunt, explicabo.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <button type="button" className="mt-12 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none">
          Agende uma reunião de planejamento
        </button>
      </section>


      <section className='w-screen h-auto relative flex flex-col items-center py-20'>
        <h2 className='text-3xl font-bold mb-2'>Pra quem é a 123Projetei?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
        <div className='flex max-w-6xl mt-14 gap-8 text-white px-4'>
          <div className="w-1/2 px-20 text-center rounded-3xl flex flex-col items-center justify-center bg-[url('../../public/civil-eng.png')] aspect-square bg-no-repeat bg-cover">
            <h1 className='font-bold text-3xl mb-4'>Para proprietários</h1>
            <p className='font-thin'>Que já tem um terreno, mas ainda não sabe por onde começar. E que não pode errar na hora de construir a casa dos sonhos.</p>
          </div>
          <div className="w-1/2 px-20 text-center rounded-3xl flex flex-col items-center justify-center bg-[url('../../public/couple.png')] aspect-square bg-no-repeat bg-cover">
            <h1 className='font-bold text-3xl mb-4'>Para construtoras e incorporadoras</h1>
            <p className='font-thin'>Ganhe tempo sem perder qualidade nas entregas. Deixe nossas equipes de engenheiros e arquitetos cuidarem a criação dos projetos.</p>
          </div>

        </div>
        <div className='max-w-6xl flex flex-col text-center mt-14'>
          <h2 className='text-3xl font-bold mb-2'>Veja a opnião de quem é cliente 123</h2>
          <div className='mt-8'>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
              <VideoCard link="#" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' />
            </Carousel>
          </div>
        </div>
            {/* <MarqueeItem 
              style={{ 
                backgroundColor: '#e54', 
                padding: '0.5rem 0',
                transform: 'rotate(7deg)',
              }}
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            />
            <MarqueeItem 
              style={{ 
                backgroundColor: '#4a44ffed', 
                marginBottom: '-9rem',
                padding: '0.5rem 0',
                display: 'flex'
                // position: "absolute",
                // top: '50%'
              }}
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            />
            <MarqueeItem 
              style={{ 
                backgroundColor: '#b8c', 
                padding: '0.5rem 0',
                marginBottoom: '3rem',
                transform: 'rotate(-7deg)',
                position: 'absolute',
                top: '50%'
              }}
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            /> */}
      </section>

      <section className='bg-grays-100 py-8'>
        <h2 className="mt-5 mb-14 text-center text-3xl font-bold tracking-tight md:text-5xl">Somos destaques</h2>
        <Marquee 
            style={{ 
                padding: '0.5rem 0'
            }}
            >
            <div className='flex gap-24 items-center py-4'>
              <Image height={110} width={180} src="/logos/veja.svg" alt="" />
              <Image height={110} width={180} src="/logos/uol.svg" alt="" />
              <Image height={110} width={180} src="/logos/estadao_imoveis.svg" alt="" />
              <Image height={110} width={180} src="/logos/startups.svg" alt="" />
              <Image height={110} width={180} src="/logos/startupi.svg" alt="" />
            </div>
        </Marquee>
      </section>
      
      <section className='w-screen flex justify-center'>
        <div
          className="relative bg-white px-6 pt-10 pb-8 mt-8 max-w-7xl">
          <div className="px-5 w-full">
              <div className="flex flex-col items-center">
                  <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">Ficou alguma dúvida?</h2>
              </div>
              <div className="mx-auto mt-8 grid divide-y divide-neutral-200">
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> How does the billing work?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                              billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                              pricing for certain services. Payment is typically made through a credit card or other
                              secure online payment method.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Can I get a refund for my subscription?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
                              guarantee for most of its subscription plans. If you are not satisfied with your
                              subscription within the first 30 days, you can request a full refund. Refunds for
                              subscriptions that have been active for longer than 30 days may be considered on a
                              case-by-case basis.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> How do I cancel my subscription?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">To cancel your subscription, you can
                              log in to your account and navigate to the subscription management page. From there, you
                              should be able to cancel your subscription and stop future billing.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Is there a free trial?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a free trial of our software
                              for a limited time. During the trial period, you will have access to a limited set of
                              features and functionality, but you will not be charged.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> How do I contact support?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
                              have any other questions, you can contact the support team by submitting a support
                              request through the website or by emailing support@ourwebsite.com.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Do you offer any discounts or promotions?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                              from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                              up for the newsletter or follow it on social media.
                          </p>
                      </details>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
