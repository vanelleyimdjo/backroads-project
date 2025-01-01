import Title from "./Title";
import { services } from "../Data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          <Title title="Our" subTitle="service" />
        </h2>
      </div>
      <div className="section-center services-center">
        {services.map((link) => {
          return (
            <article className="service" key={link.id}>
              <span className="service-icon">
                <i className={link.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{link.title}</h4>
                <p className="service-text">{link.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
