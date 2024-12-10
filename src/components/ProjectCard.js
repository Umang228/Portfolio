import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , demoLink}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{ height: '280px', objectFit: 'cover' }} alt="projects"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Demo</button>
          </a>
        </div>
      </div>
    </Col>
  )
}
