export const WRITE_ICON = {
    imgSrc: '/resources/images/write-button.png',
    imgAlt: 'Write Icon',
    link: '/board/edit'
}

export const HOME_ICON = {
    imgSrc: '/resources/images/home-button.png',
    imgAlt: 'Home Icon',
    link: '/'
}

export const EDIT_ICON = {
    imgSrc: '/resources/images/edit-button.png',
    imgAlt: 'Edit Icon',
    link: '/board/edit'
}

export const DELETE_ICON = {
    imgSrc: '/resources/images/delete-button.png',
    imgAlt: 'Delete Icon',
    link: '/board',
    functions: {
        onClick: function (e) {
            e.preventDefault();
        }
    }
}

export const CANCEL_ICON = {
    imgSrc: '/resources/images/cancel-button.png',
    imgAlt: 'Cancel Icon',
    link: '/board'
}

export const REFRESH_ICON = {
    imgSrc: '/resources/images/refresh-button.png',
    imgAlt: 'Refresh Icon',
    link: '',
    functions: {
        onClick: function (e) {
            e.preventDefault();
        }
    }
}

export const LIST_ICON = {
    imgSrc: '/resources/images/list-button.png',
    imgAlt: 'List Icon',
    link: '/board'
}

export const SAVE_ICON = {
    imgSrc: '/resources/images/save-button.png',
    imgAlt: 'Save Icon',
    link: '/board',
    functions: {
        onClick: function (e) {
            e.preventDefault();
        }
    }
}

export const BOARD_ICON = {
    imgSrc: '/resources/images/board-button.png',
    imgAlt: 'Board Icon',
    link: '/board'
}

export const GUEST_USER_ICON = {
    imgSrc: '/resources/images/guest-user.png',
    imgAlt: 'Guest User Icon',
    link: '/user'
}