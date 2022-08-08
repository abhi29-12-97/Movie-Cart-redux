
import React,{Component} from 'react'
import {data} from '../data';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { addMovies, setShowFavourite } from '../actions';
class App extends Component {
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log('Updated');
      this.forceUpdate();
    })
    //makeApiCall
    //Dispatch Action
    store.dispatch(addMovies(data))
  }
  isFavourite=(movie)=>{
    const{movies}=this.props.store.getState();
    const{favourites}=movies;
    const index=favourites.indexOf(movie);
    if(index !==-1){
      return true;
    }
    return false;
  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourite(val))
  }
  render(){
    const {movies}=this.props.store.getState();
    const {list,favourites,showFavourites}=movies;
    const displayMovies=showFavourites?favourites:list;
    console.log(this.props.store.getState());
    return (
    
      <div className="App">
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className='list'>
              {displayMovies.map((movie,index) =>{
                return <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isFavourite(movie)}/>
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
