import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ProfileGithub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cliendId: '04b96d631730408b563f',
      clientSecret: 'eaa7e419ea95db5ff9764cad8e7d35ba51047f25',
      count: 5,
      sort: 'created: asc',
      repos: []
    }
  }

  componentDidMount() {
    const { username } = this.props
    const { count, sort, cliendId, clientSecret } = this.state

    fetch(
      `http://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${cliendId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    const { repos } = this.state
    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <Link to={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </Link>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <div className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </div>
            <div className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </div>
            <div className="badge badge-success mr-1">
              Forks: {repo.forks_count}
            </div>
          </div>
        </div>
      </div>
    ))

    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    )
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
}

export default ProfileGithub
