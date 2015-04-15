export default c => ({
  self: {
    fontSize: '16px',
    padding: '10px',
    margin: '5px 0',
    flexFlow: 'row',
    WebkitFlexFlow: 'row',
    alignItems: 'center',
    background: c.chatItemBG,
    color: c.chatItemColor,
    borderRadius: '15px',
    width: '80%',
    position: 'relative'
  },

  inner: {
    overflow: 'hidden'
  },

  own: {
    backgroundColor: c.chatItemOwnBG,
    alignSelf: 'flex-end',
    WebkitAlignSelf: 'flex-end'
  },

  arrow: {
    position: 'absolute',
    zIndex: 1,
    bottom: '1px',
    left: '-6px',
    borderRadius: '10px / 5px',
    border: '8px solid transparent',
    borderBottomColor: c.chatItemBG
  },

  arrowOwn: {
    left: 'auto',
    right: '-6px',
    borderBottomColor: c.chatItemOwnBG
  }
});