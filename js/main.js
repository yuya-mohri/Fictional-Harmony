$('.introduction-contents').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeIn');
      
      this.destroy();
    }
  },
  offset: '70%'
});

$('.activity-content1').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__rotateInDownLeft');
      
      this.destroy();
    }
  },
  offset: '85%'
});

$('.activity-content2').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__rotateInDownRight');
      
      this.destroy();
    }
  },
  offset: '85%'
});

$('.activity-content3').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__rotateInDownLeft');
      
      this.destroy();
    }
  },
  offset: '85%'
});

$('.greeting-contents').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeIn');
      
      this.destroy();
    }
  },
  offset: '80%'
});

$('.day-time-place-contents').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeIn');
      
      this.destroy();
    }
  },
  offset: '80%'
});
