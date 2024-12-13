theorem C8_Automorphism_Group() {
  assert(
    Aut(C₈) ≅ V₄
  )
} ↔

proof C8_Automorphism_Group() {
  setVar(C₈ ≅ ℤ₈) →
  assert(C₈ = {[0]₈, [1]₈, ..., [7]₈}) →
  lemma Generator_Identification() {
    assert(
      Gen(C₈) = {[1]₈, [3]₈, [5]₈, [7]₈}
    )
  } →
  lemma Automorphism_Count() {
    assert(
      |Aut(C₈)| = 4 ∧
      Aut(C₈) = {φ₁, φ₃, φ₅, φ₇} ∧
      (∀i ∈ {1,3,5,7})(φᵢ([1]₈) = [i]₈)
    )
  } →
  assert(
    CayleyTable(Aut(C₈)) = [
      [φ₁, φ₃, φ₅, φ₇],
      [φ₃, φ₁, φ₇, φ₅],
      [φ₅, φ₇, φ₁, φ₃],
      [φ₇, φ₅, φ₃, φ₁]
    ]
  ) →
  assert(CayleyTable(Aut(C₈)) = CayleyTable(V₄)) →
  conclude(Aut(C₈) ≅ V₄)
}