import React from "react";
import "../scss/Skills.scss";
// * stack icons
import htmlIcon from "../assets/images/icons/icons8-html-48.png";
import cssIcon from "../assets/images/icons/icons8-css-48.png";
import jsIcon from "../assets/images/icons/icons8-javascript-48.png";
import ReactIcon from "../assets/images/icons/icons8-react-native-48.png";
import NodeIcon from "../assets/images/icons/icons8-nodejs-48.png";
import expressIcon from "../assets/images/icons/icons8-express-js-40.png";
import MongoDBIcon from "../assets/images/icons/icons8-mongodb-48.png";
import mySqlIcon from "../assets/images/icons/icons8-mysql-48.png";
import PostgreSQLIcon from "../assets/images/icons/icons8-postgresql-48.png";
import PHPIcon from "../assets/images/icons/icons8-php-48.png";
import laravelIcon from "../assets/images/icons/icons8-laravel-48.png";
import symfonyIcon from "../assets/images/icons/icons8-symfony-64.png";
import VueIcon from "../assets/images/icons/icons8-vue-js-48.png";
import shopifyIcon from "../assets/images/icons/icons8-shopify-48.png";
import wordpressIcon from "../assets/images/icons/icons8-wordpress-48.png";
import woocommerceIcon from "../assets/images/icons/icons8-woocommerce-logo-48.png";
import apiIcon from "../assets/images/icons/icons8-api-48.png";
import LearningIcon from "../assets/images/icons/icons8-more-94.png";
import bootstrapIcon from "../assets/images/icons/icons8-bootstrap-48.png";

const skillsList = [
  { name: "HTML", imgSrc: htmlIcon },
  { name: "SCSS", imgSrc: cssIcon },
  { name: "JavaScript", imgSrc: jsIcon },
  { name: "Bootstrap", imgSrc: bootstrapIcon },
  { name: "React.js", imgSrc: ReactIcon },
  { name: "Node.js", imgSrc: NodeIcon },
  { name: "Express.js", imgSrc: expressIcon },
  { name: "MongoDB", imgSrc: MongoDBIcon },
  { name: "MySQL", imgSrc: mySqlIcon },
  { name: "PostgreSQL", imgSrc: PostgreSQLIcon },
  { name: "PHP", imgSrc: PHPIcon },
  { name: "Laravel", imgSrc: laravelIcon },
  { name: "Symfony", imgSrc: symfonyIcon },
  { name: "Vue.js", imgSrc: VueIcon },
  { name: "REST API", imgSrc: apiIcon },
  { name: "Shopify", imgSrc: shopifyIcon },
  { name: "WordPress", imgSrc: wordpressIcon },
  { name: "WooCommerce", imgSrc: woocommerceIcon },
  { name: "Learning", imgSrc: LearningIcon },
];

const Skills = () => {
  return (
    <div id="my_skills">
      <h2>My Tech Toolbox</h2>
      <div className="bg-box">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.imgSrc} className={skill.name} alt={skill.name} />
            <p className={'p-'+skill.name }>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
