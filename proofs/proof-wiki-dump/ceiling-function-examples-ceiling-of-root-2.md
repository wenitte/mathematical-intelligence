theorem Ceiling_Root_Two() {
  assert(
    ∀x ∈ ℝ [⌈√2⌉ = 2]
  )
} ↔

proof Ceiling_Root_Two() {
  lemma Decimal_Expansion() {
    assert(√2 ≈ 1.41421356237309504885...)
  } →
  
  lemma Value_Range() {
    assert(1 < √2) ∧
    assert(√2 ≤ 2)
  } →
  
  apply(Value_Range()) →
  
  lemma Ceiling_Definition() {
    assert(
      ∀x ∈ ℝ [
        ⌈x⌉ = min{n ∈ ℤ | n ≥ x}
      ]
    )
  } →
  
  apply(Ceiling_Definition()) →
  assert(
    min{n ∈ ℤ | n ≥ √2} = 2
  ) →
  
  conclude(⌈√2⌉ = 2)
}