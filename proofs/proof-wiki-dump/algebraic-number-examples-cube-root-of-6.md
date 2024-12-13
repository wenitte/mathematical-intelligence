theorem Cube_Root_6_Is_Algebraic() {
  assert(
    ∃p(x) ∈ ℚ[x] : p(∛6) = 0
  )
} ↔

proof Cube_Root_6_Is_Algebraic() {
  setVar(x: ℂ) →
  let(x = ∛6) →
  assert(x = ∛6 → x³ = 6) →
  assert(x³ - 6 = 0) →
  let(p(x) = x³ - 6) →
  assert(
    p(x) ∈ ℚ[x] ∧
    deg(p) = 3 ∧
    p(∛6) = 0
  ) →
  lemma Algebraic_Number_Definition() {
    assert(
      ∀z ∈ ℂ: [∃p(x) ∈ ℚ[x]: p(z) = 0] ↔ z is algebraic
    )
  } →
  apply(Algebraic_Number_Definition()) →
  assert(∛6 is algebraic)
}