theorem Binary_36() {
  assert(
    36 = (100100)₂
  )
} ↔

proof Binary_36() {
  assert(
    36 = 1×2⁵ + 0×2⁴ + 0×2³ + 1×2² + 0×2¹ + 0×2⁰
  ) →
  assert(
    1×2⁵ + 0×2⁴ + 0×2³ + 1×2² + 0×2¹ + 0×2⁰
    = 32 + 0 + 0 + 4 + 0 + 0
  ) →
  assert(
    32 + 0 + 0 + 4 + 0 + 0 = 36
  ) →
  lemma Binary_Representation() {
    assert(
      [1,0,0,1,0,0] = (100100)₂
    )
  } →
  apply(Binary_Representation()) →
  assert(
    36 = (100100)₂
  )
}