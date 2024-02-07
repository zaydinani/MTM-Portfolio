import react from 'react'
import "../scss/Article.scss";
import { BiSolidHomeSmile } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import AuthorPic from '../assets/images/author.png'
const Article = () => {
    return (
        <div className="article-container">
            <div className="nv-2">
                <ul>
                    <li>
                        <a href="#">
                            <BiSolidHomeSmile />
                            Home
                            &gt;
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Articles
                            &gt;
                        </a>
                    </li>
                    <li>
                        <a href="#" className='art-name'>
                            Lorem ipsum dolor sit.
                        </a>
                    </li>
                </ul>
            </div>

            <div className="art-title">
                <div className="big-box">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <div className="author">
                        <img src={AuthorPic} alt="author" />
                        <p>Mohamed Marsou</p>
                        <span>4min read</span>
                    </div>
                </div>
                <div className="small-box">
                    <p>
                        share :
                    </p>
                        <FaFacebook/>
                        <BsTwitterX/>
                        <RiInstagramFill/>
                </div>
            </div>

            <div className="art-body">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quod voluptate atque eum beatae! Consectetur a maiores praesentium commodi exercitationem incidunt libero nisi sed dolores nulla tenetur aut, ea fugiat labore debitis corrupti sint accusamus eligendi nostrum? Et quaerat esse, voluptatum pariatur saepe dolore beatae expedita distinctio consequuntur illum facilis nulla sint placeat, velit incidunt culpa corrupti ab dicta ex! Architecto, rem! Atque culpa necessitatibus iure mollitia asperiores esse veritatis nesciunt consectetur autem. Sint!
                </p>
                <img src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/single/img.jpg" alt="" />
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo in deleniti voluptatem atque id.</li>
                </ul>

                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam ipsam ipsum dolores molestiae pariatur quisquam eveniet, molestias esse odio autem, debitis ducimus voluptates quas dolor assumenda sint consectetur maiores! Iusto eaque, enim consequuntur rerum possimus aut exercitationem itaque saepe illum quasi nostrum eligendi incidunt laudantium laboriosam illo eveniet dolore ullam? A vel mollitia et corporis obcaecati tempore aliquid, animi rem at reiciendis harum magnam eum. Tempore sequi sint modi deleniti. Omnis laudantium pariatur fugiat ex dolorem amet totam, at, magni vel quam facilis molestiae debitis quo dicta perferendis unde explicabo voluptate blanditiis voluptates, ratione praesentium vero. Veritatis ullam obcaecati numquam molestiae eum accusamus maxime. Sed atque maxime, aliquam tempore sapiente provident laborum debitis accusantium quos placeat reiciendis explicabo dolore illum iusto similique tempora aperiam ea praesentium culpa ratione? Tempora rerum consequatur adipisci ea, at rem cum, tempore perspiciatis amet hic ab corrupti perferendis <span>odio voluptates fugit!</span></p>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores ratione explicabo iusto officiis quo praesentium est? Dolores quas cupiditate fugit reprehenderit qui minus totam amet. Voluptatibus delectus, debitis, tempore perspiciatis eligendi fuga nam, consectetur qui voluptas esse iusto! Nam ad rerum sed saepe.</p>
                <img src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/single/img.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam dicta quia obcaecati eveniet consectetur. Autem natus consequatur aut labore vitae impedit veritatis. Non aperiam reprehenderit alias rem nulla neque enim sunt ea architecto eligendi voluptate reiciendis dolore error dignissimos, tenetur optio pariatur sit maxime vel! Voluptate repellendus ducimus eveniet aliquam odio necessitatibus impedit, adipisci, eius expedita itaque unde id non? Vitae provident ducimus aliquam, magnam, atque, incidunt ullam minima quas dolor omnis delectus corporis eos illo expedita? Suscipit, optio repudiandae ab enim fugiat esse?</p>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/single/img.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia perferendis alias! Mollitia rem voluptates, eveniet voluptas dolorem doloremque sint nam tenetur ullam? Beatae, eum? Veniam, harum modi dolor ratione laborum maiores accusamus. Voluptate eius sed, animi rem dicta officia laborum nihil laudantium dolorem iusto! Iure atque iusto illo dicta quasi nostrum incidunt optio, quas aspernatur, harum laudantium fugit quae officiis unde recusandae temporibus totam nisi aut eveniet reprehenderit porro, consectetur perferendis? Voluptatibus, fugit doloribus! Magni maiores, neque distinctio quam cum quis error non perferendis minus nesciunt? Doloribus ipsam deserunt, laborum iste, consectetur expedita aliquam ad voluptatibus odit tenetur beatae maxime eveniet minima. Accusamus distinctio quae id praesentium aut iure, dolorum consequatur hic quis! Sit, voluptas necessitatibus. Expedita obcaecati esse nesciunt ex architecto, blanditiis itaque. Sunt esse ea eligendi accusantium odit quasi voluptate! Culpa quam maiores ipsam ut reprehenderit, suscipit, necessitatibus, corrupti laudantium autem impedit recusandae error sapiente ex tenetur!</p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quod voluptate atque eum beatae! Consectetur a maiores praesentium commodi exercitationem incidunt libero nisi sed dolores nulla tenetur aut, ea fugiat labore debitis corrupti sint accusamus eligendi nostrum? Et quaerat esse, voluptatum pariatur saepe dolore beatae expedita distinctio consequuntur illum facilis nulla sint placeat, velit incidunt culpa corrupti ab dicta ex! Architecto, rem! Atque culpa necessitatibus iure mollitia asperiores esse veritatis nesciunt consectetur autem. Sint!
                </p>
                <img src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/single/img.jpg" alt="" />
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo in deleniti voluptatem atque id.</li>
                </ul>

                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam ipsam ipsum dolores molestiae pariatur quisquam eveniet, molestias esse odio autem, debitis ducimus voluptates quas dolor assumenda sint consectetur maiores! Iusto eaque, enim consequuntur rerum possimus aut exercitationem itaque saepe illum quasi nostrum eligendi incidunt laudantium laboriosam illo eveniet dolore ullam? A vel mollitia et corporis obcaecati tempore aliquid, animi rem at reiciendis harum magnam eum. Tempore sequi sint modi deleniti. Omnis laudantium pariatur fugiat ex dolorem amet totam, at, magni vel quam facilis molestiae debitis quo dicta perferendis unde explicabo voluptate blanditiis voluptates, ratione praesentium vero. Veritatis ullam obcaecati numquam molestiae eum accusamus maxime. Sed atque maxime, aliquam tempore sapiente provident laborum debitis accusantium quos placeat reiciendis explicabo dolore illum iusto similique tempora aperiam ea praesentium culpa ratione? Tempora rerum consequatur adipisci ea, at rem cum, tempore perspiciatis amet hic ab corrupti perferendis <span>odio voluptates fugit!</span></p>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores ratione explicabo iusto officiis quo praesentium est? Dolores quas cupiditate fugit reprehenderit qui minus totam amet. Voluptatibus delectus, debitis, tempore perspiciatis eligendi fuga nam, consectetur qui voluptas esse iusto! Nam ad rerum sed saepe.</p>
                <img src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/single/img.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam dicta quia obcaecati eveniet consectetur. Autem natus consequatur aut labore vitae impedit veritatis. Non aperiam reprehenderit alias rem nulla neque enim sunt ea architecto eligendi voluptate reiciendis dolore error dignissimos, tenetur optio pariatur sit maxime vel! Voluptate repellendus ducimus eveniet aliquam odio necessitatibus impedit, adipisci, eius expedita itaque unde id non? Vitae provident ducimus aliquam, magnam, atque, incidunt ullam minima quas dolor omnis delectus corporis eos illo expedita? Suscipit, optio repudiandae ab enim fugiat esse?</p>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/single/img.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia perferendis alias! Mollitia rem voluptates, eveniet voluptas dolorem doloremque sint nam tenetur ullam? Beatae, eum? Veniam, harum modi dolor ratione laborum maiores accusamus. Voluptate eius sed, animi rem dicta officia laborum nihil laudantium dolorem iusto! Iure atque iusto illo dicta quasi nostrum incidunt optio, quas aspernatur, harum laudantium fugit quae officiis unde recusandae temporibus totam nisi aut eveniet reprehenderit porro, consectetur perferendis? Voluptatibus, fugit doloribus! Magni maiores, neque distinctio quam cum quis error non perferendis minus nesciunt? Doloribus ipsam deserunt, laborum iste, consectetur expedita aliquam ad voluptatibus odit tenetur beatae maxime eveniet minima. Accusamus distinctio quae id praesentium aut iure, dolorum consequatur hic quis! Sit, voluptas necessitatibus. Expedita obcaecati esse nesciunt ex architecto, blanditiis itaque. Sunt esse ea eligendi accusantium odit quasi voluptate! Culpa quam maiores ipsam ut reprehenderit, suscipit, necessitatibus, corrupti laudantium autem impedit recusandae error sapiente ex tenetur!</p>
            </div>
        </div>
    )
}

export default Article