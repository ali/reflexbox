
import expect from 'expect'
import margin from '../src/util/margin'

describe('margin util', () => {
  const scale = [
    0, 8, 16, 32, 64
  ]

  it('should return an object', () => {
    const m = margin()
    expect(m).toBeAn('object')
  })

  it('should return an empty object by default', () => {
    const m = margin()
    expect(m).toEqual({})
  })

  it('should return margin when m is 0', () => {
    const m = margin({ m: 0 }, scale)
    expect(m.margin).toEqual(0)
  })

  it('should return margin when m is 1', () => {
    const m = margin({ m: 1 }, scale)
    expect(m.margin).toEqual(scale[1])
  })

  it('should return margin when m is 2', () => {
    const m = margin({ m: 2 }, scale)
    expect(m.margin).toEqual(scale[2])
  })

  it('should return margin when m is 3', () => {
    const m = margin({ m: 3 }, scale)
    expect(m.margin).toEqual(scale[3])
  })

  it('should return margin when m is 4', () => {
    const m = margin({ m: 4 }, scale)
    expect(m.margin).toEqual(scale[4])
  })

  it('should not return margin when m is 5', () => {
    const m = margin({ m: 5 }, scale)
    expect(m).toEqual({})
  })

  it('should return auto when m is auto', () => {
    const m = margin({ m: 'auto' }, scale)
    expect(m).toEqual({
      margin: 'auto'
    })
  })

  it('should return margin left and right when mx is 0', () => {
    const m = margin({ mx: 0 }, scale)
    expect(m).toEqual({
      marginRight: 0,
      marginLeft: 0
    })
  })

  it('should return margin left and right when mx is 1', () => {
    const m = margin({ mx: 1 }, scale)
    expect(m).toEqual({
      marginRight: scale[1],
      marginLeft: scale[1]
    })
  })

  it('should return auto when mx is auto', () => {
    const m = margin({ mx: 'auto' }, scale)
    expect(m).toEqual({
      marginLeft: 'auto',
      marginRight: 'auto'
    })
  })

  it('should return margin top and bottom when my is 0', () => {
    const m = margin({ my: 0 }, scale)
    expect(m).toEqual({
      marginTop: 0,
      marginBottom: 0
    })
  })

  it('should return margin top and bottom when my is 1', () => {
    const m = margin({ my: 1 }, scale)
    expect(m).toEqual({
      marginTop: scale[1],
      marginBottom: scale[1]
    })
  })

  it('should return auto when my is auto', () => {
    const m = margin({ my: 'auto' }, scale)
    expect(m).toEqual({
      marginTop: 'auto',
      marginBottom: 'auto'
    })
  })

  it('should return margin top when mt is 0', () => {
    const m = margin({ mt: 0 }, scale)
    expect(m).toEqual({
      marginTop: 0
    })
  })

  it('should return margin top when mt is 1', () => {
    const m = margin({ mt: 1 }, scale)
    expect(m).toEqual({
      marginTop: scale[1]
    })
  })

  it('should return margin right when mr is 0', () => {
    const m = margin({ mr: 0 }, scale)
    expect(m).toEqual({
      marginRight: 0
    })
  })

  it('should return margin right when mr is 1', () => {
    const m = margin({ mr: 1 }, scale)
    expect(m).toEqual({
      marginRight: scale[1]
    })
  })

  it('should return margin bottom when mb is 0', () => {
    const m = margin({ mb: 0 }, scale)
    expect(m).toEqual({
      marginBottom: 0
    })
  })

  it('should return margin bottom when mb is 1', () => {
    const m = margin({ mb: 1 }, scale)
    expect(m).toEqual({
      marginBottom: scale[1]
    })
  })

  it('should return margin right when mr is 0', () => {
    const m = margin({ mr: 0 }, scale)
    expect(m).toEqual({
      marginRight: 0
    })
  })

  it('should return margin right when mr is 1', () => {
    const m = margin({ mr: 1 }, scale)
    expect(m).toEqual({
      marginRight: scale[1]
    })
  })

  it('should return override ml with mx', () => {
    const m = margin({ ml: 1, mx: 2 }, scale)
    expect(m).toEqual({
      marginRight: scale[2],
      marginLeft: scale[2]
    })
  })

  it('should return override mt with my', () => {
    const m = margin({ mt: 1, my: 2 }, scale)
    expect(m).toEqual({
      marginTop: scale[2],
      marginBottom: scale[2]
    })
  })

  it('should return override mt auto with my', () => {
    const m = margin({ mt: 'auto', my: 2 }, scale)
    expect(m).toEqual({
      marginTop: scale[2],
      marginBottom: scale[2]
    })
  })

  it('should keep margin when mt is set', () => {
    const m = margin({ m: 3, mt: 1 }, scale)
    expect(m).toEqual({
      margin: scale[3],
      marginTop: scale[1]
    })
  })

  it('should return negative margin left and right when gutter is set', () => {
    const m = margin({ gutter: 3 }, scale)
    expect(m).toEqual({
      marginLeft: -scale[3],
      marginRight: -scale[3]
    })
  })

  it('should override ml and mx when gutter is set', () => {
    const m = margin({ gutter: 3, ml: 1, mx: 2 }, scale)
    expect(m).toEqual({
      marginLeft: -scale[3],
      marginRight: -scale[3]
    })
  })
})

