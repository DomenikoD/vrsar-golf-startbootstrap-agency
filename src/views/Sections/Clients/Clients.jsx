import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Client from "components/Client";

const Clients = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, clients } = frontmatter;

  return (
    <div></div>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Clients.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Clients;
