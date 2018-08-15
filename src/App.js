import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    avatar:
      "data:image/png;base64,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",
    userName: "Onestockhome",

    followers: [],
    fols: [],
    followers_info: {},
    res_names: [],
    res_name: {},
    bio: "-"
  };

  handlerInput = uname => {
    this.setState({
      avatar: "",
      userName: "Onestockhome",

      followers: [],
      fols: [],
      followers_info: {},
      res_names: [],
      res_name: {},
      bio: "-"
    });

    const gitUrl = "https://api.github.com/users/";
    const user = uname;

    fetch(gitUrl + user)
      .then(response => response.json())
      .then(data => {
        this.setState({
          avatar: data.avatar_url,
          userName: data.login,
          bio: data.bio
        });

        fetch(data.followers_url)
          .then(response => response.json())
          .then(data => {
            try {
              this.setState({ followers: data.slice(0, 3) });
            } catch (error) {
              console.log(error);
            }

            //if condition
            if (this.state.followers.length > 0) {
              var i = 0;
              do {
                var repos_url = this.state.followers[i].repos_url;
                var login = this.state.followers[i].login;
                var img = this.state.followers[i].avatar_url;

                this.setState({
                  followers_info: {
                    fol_name: login,
                    fol_img: img
                  }
                });

                fetch(repos_url)
                  .then(response => response.json())
                  .then(data => {
                    try {
                      this.setState({
                        res_name: {
                          fol_res: data[0].name
                        }
                      });

                      this.state.res_names.push(this.state.res_name);
                    } catch (e) {
                      console.log(e);
                    }

                    console.log("6666");
                  });

                console.log("5555");

                this.state.fols.push(this.state.followers_info);

                i++;
              } while (i < this.state.followers.length);
            }

            console.log(this.state.res_names);
            console.log(this.state.fols);
          });
      });
  };

  render() {
    return (
      <div>
        <section class="margin">
          <input
            class="block"
            placeholder="Input Github username"
            type="text"
            ref="name"
          />
          <button
            class="button"
            onClick={() => this.handlerInput(this.refs.name.value)}
          >
            OK
          </button>
        </section>

        <div class="position2">
          <img src={this.state.avatar} width="100" height="100" />
        </div>

        <div class="position">
          <h3>{this.state.userName}</h3>
          <span>Bio: {this.state.bio} </span>
          <h4>Followers: </h4>

          {this.state.fols.map(fol => (
            <li key={fol.fol_img.toString()}>
              <img src={fol.fol_img} width="50" height="50" />
            </li>
          ))}
        </div>

        <section class="position5">
          {this.state.fols.map(fol => (
            <h4 onClick={() => this.handlerInput(fol.fol_name)}>
              {fol.fol_name}
            </h4>
          ))}
        </section>

        <div class="position3">
          <h4>Repository: </h4>
        </div>
        <div class="position4">
          {this.state.res_names.map(res => (
            <h4 key={res.fol_res.toString()}>{res.fol_res} </h4>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
