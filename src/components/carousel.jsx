import React, { Component } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  

const items = [
  {
    src: 'https://awsimages.detik.net.id/community/media/visual/2018/09/13/3b2423d1-e04c-4e3d-a42b-b1b8c04e6ca7.png?a=1',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://cdn2.tstatic.net/tribunnews/foto/bank/images/kuliner-ekstrem-tiongkok_20150513_152601.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://steemitimages.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMwMH2EeFSWJ1dwCPG5Mx?format=match&mode=fit&width=640',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class slide extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default slide;

