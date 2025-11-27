$(document).ready(function() {
  initializeNavigation();
  initializeScrollEffect();
  initializeSlideshow();
  initializeCourseModal();
  initializeContactForm();
  initializeLightbox();
});

function initializeNavigation() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop() || 'index.html';

  $('.desktop-nav a').each(function() {
    const href = $(this).attr('href');
    $(this).removeClass('active');
    
    if (href === pageName) {
      $(this).addClass('active');
    }
  });
}

function initializeScrollEffect() {
  const $header = $('#main-header');
  
  $(window).on('scroll', function() {
    const scrollTop = $(this).scrollTop();
    
    if (!$header.hasClass('header-solid')) {
      if (scrollTop > 50) {
        $header.addClass('scrolled');
      } else {
        $header.removeClass('scrolled');
      }
    }
  });
}

function initializeSlideshow() {
  const $slideshowContainer = $('#slideshow-container');
  
  if ($slideshowContainer.length === 0) {
    return;
  }

  const $slides = $slideshowContainer.find('.slide');
  
  if ($slides.length === 0) {
    return;
  }

  let currentSlideIndex = 0;
  const slideIntervalTime = 5000;

  function displaySlide(index) {
    $slides.each(function(i) {
      if (i === index) {
        $(this).addClass('slide-active').removeClass('slide-inactive');
      } else {
        $(this).removeClass('slide-active').addClass('slide-inactive');
      }
    });
    currentSlideIndex = index;
  }

  function moveToNextSlide() {
    const nextIndex = (currentSlideIndex + 1) % $slides.length;
    displaySlide(nextIndex);
  }

  setInterval(moveToNextSlide, slideIntervalTime);
}

function initializeCourseModal() {
  if ($('#course-modal').length === 0) {
    const modalTemplate = `
      <div id="course-modal" class="course-modal" aria-hidden="true">
        <div class="course-modal-backdrop"></div>
        <div class="course-modal-dialog">
          <button class="course-modal-close" aria-label="Close course modal">
            <span class="material-symbols-outlined">close</span>
          </button>
          <div class="course-modal-media">
            <img id="course-modal-image" src="" alt="Course illustration" />
          </div>
          <div class="course-modal-content">
            <span class="course-pill" id="course-modal-level"></span>
            <h3 id="course-modal-title" style="margin-bottom: 0.25rem;"></h3>
            <div class="course-modal-meta">
              <div class="course-modal-meta-item">
                <span class="material-symbols-outlined" style="font-size: 18px;">schedule</span>
                <span id="course-modal-duration"></span>
              </div>
              <div class="course-modal-meta-item">
                <span class="material-symbols-outlined" style="font-size: 18px;">bar_chart</span>
                <span id="course-modal-level-text"></span>
              </div>
            </div>
            <p id="course-modal-description" style="line-height: 1.6;"></p>
            <div class="course-modal-actions">
              <a href="enroll.html" class="btn btn-primary">Đăng Ký Ngay</a>
              <a href="contact.html" class="btn btn-secondary">Liên Hệ</a>
            </div>
          </div>
        </div>
      </div>
    `;
    $('body').append(modalTemplate);
  }

  const $modal = $('#course-modal');
  const $image = $('#course-modal-image');
  const $title = $('#course-modal-title');
  const $description = $('#course-modal-description');
  const $levelPill = $('#course-modal-level');
  const $levelText = $('#course-modal-level-text');
  const $duration = $('#course-modal-duration');

  window.openCourseModal = function(data) {
    $title.text(data.title || '');
    $description.text(data.description || '');
    $levelPill.text(data.level || '');
    $levelText.text(data.level || '');
    $duration.text(data.duration || '');

    if (data.image) {
      $image.attr('src', data.image).attr('alt', data.title || 'Course');
    }

    $modal.addClass('active');
    $('body').addClass('modal-open');
    $modal.attr('aria-hidden', 'false');
  };

  window.closeCourseModal = function() {
    $modal.removeClass('active');
    $('body').removeClass('modal-open');
    $modal.attr('aria-hidden', 'true');
  };

  $(document).off('click', '.course-card');
  $(document).on('click', '.course-card', function(e) {
    if ($(e.target).closest('a, button').length) {
      return;
    }

    const $card = $(this);
    
    const courseData = {
      title: $card.data('title'),
      description: $card.data('description'),
      level: $card.data('level'),
      duration: $card.data('duration'),
      image: $card.data('image')
    };
    
    window.openCourseModal(courseData);
  });

  $(document).on('click', '.course-modal-close, .course-modal-backdrop', function() {
    window.closeCourseModal();
  });
  
  $(document).on('keyup', function(e) {
    if (e.key === 'Escape') {
      window.closeCourseModal();
    }
  });
}

function initializeLightbox() {
  if ($('#lightbox-overlay').length === 0) {
    const lightboxTemplate = `
      <div id="lightbox-overlay" class="lightbox-overlay" aria-hidden="true">
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Close image">
            <span class="material-symbols-outlined">close</span>
          </button>
          <img id="lightbox-image" src="" alt="Gallery preview" />
        </div>
      </div>
    `;
    $('body').append(lightboxTemplate);
  }

  const $overlay = $('#lightbox-overlay');
  const $image = $('#lightbox-image');
  const $close = $overlay.find('.lightbox-close');

  $(document).on('click', '.lightbox-trigger', function(e) {
    e.preventDefault();
    const fullSrc = $(this).data('full') || $(this).attr('src');
    if (!fullSrc) return;

    $image.attr('src', fullSrc);
    $overlay.addClass('active');
    $('body').addClass('modal-open');
    $overlay.attr('aria-hidden', 'false');
  });

  function closeLightbox() {
    $overlay.removeClass('active');
    $('body').removeClass('modal-open');
    $overlay.attr('aria-hidden', 'true');
  }

  $close.on('click', closeLightbox);
  $overlay.on('click', function(e) {
    if ($(e.target).is('#lightbox-overlay')) {
      closeLightbox();
    }
  });
  $(document).on('keyup', function(e) {
    if (e.key === 'Escape' && $overlay.hasClass('active')) {
      closeLightbox();
    }
  });
}

function initializeContactForm() {
  $(document).on('submit', '#contact-form', function(e) {
    e.preventDefault();
    const $form = $(this);
    let valid = true;

    const name = $('#contact-name').val() ? $('#contact-name').val().trim() : '';
    const email = $('#contact-email').val() ? $('#contact-email').val().trim() : '';
    const message = $('#contact-message').val() ? $('#contact-message').val().trim() : '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert('Vui lòng nhập họ tên.');
      valid = false;
    } else if (!email) {
      alert('Vui lòng nhập email.');
      valid = false;
    } else if (!emailRegex.test(email)) {
      alert('Email không hợp lệ.');
      valid = false;
    } else if (!message) {
      alert('Vui lòng nhập tin nhắn.');
      valid = false;
    }

    if (valid) {
      alert('Cảm ơn! Tin nhắn của bạn đã được gửi. Chúng tôi sẽ liên hệ lại sớm.');
      $form[0].reset();
    }
  });

  $(document).on('submit', '#enrollment-form', function(e) {
    e.preventDefault();
    const $form = $(this);
    let valid = true;

    const fullname = $('#fullname').val() ? $('#fullname').val().trim() : '';
    const email = $('#email-enroll').val() ? $('#email-enroll').val().trim() : '';
    const phone = $('#phone-enroll').val() ? $('#phone-enroll').val().trim() : '';
    const course = $('#course-select').val();
    const terms = $('input[name="terms"]').is(':checked');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullname) {
      alert('Vui lòng nhập họ tên.');
      valid = false;
    } else if (!email) {
      alert('Vui lòng nhập email.');
      valid = false;
    } else if (!emailRegex.test(email)) {
      alert('Email không hợp lệ.');
      valid = false;
    } else if (!phone) {
      alert('Vui lòng nhập số điện thoại.');
      valid = false;
    } else if (!course) {
      alert('Vui lòng chọn khóa học.');
      valid = false;
    } else if (!terms) {
      alert('Vui lòng đồng ý với điều khoản và điều kiện.');
      valid = false;
    }

    if (valid) {
      alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại trong vòng 24h.');
      $form[0].reset();
    }
  });
}
