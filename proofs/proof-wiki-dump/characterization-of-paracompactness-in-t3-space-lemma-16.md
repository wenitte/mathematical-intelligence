theorem Paracompactness_Lemma_16() {
  assert(
    ∀X[setWithWellOrdering(X, ≺)] ∧
    ∀{Vₙ}[sequence(Vₙ, ℕ → P(X×X))] ∧
    (∀n ∈ ℕ₊: symmetric(Vₙ)) ∧
    (∀n ∈ ℕ₊: Vₙ∘Vₙ ⊆ Vₙ₋₁) ∧
    (∀n ∈ ℕ₊: Uₙ = Vₙ∘Vₙ₋₁∘...∘V₁) ∧
    (∀n ∈ ℕ₊, ∀x ∈ X: Aₙ(x) = Uₙ(x) \ ⋃{y≺x,y≠x}Uₙ₊₁(y)) →
    ∀n ∈ ℕ₊, ∀y,z ∈ X: y ≠ z ⇒ Aₙ(z) ∩ Vₙ₊₁[Aₙ(y)] = ∅
  )
} ↔

proof Paracompactness_Lemma_16() {
  setVar(n: ℕ₊) →
  setVar(y,z: X, y ≠ z) →
  
  case_1(y ≺ z) {
    assert(Vₙ₊₁[Aₙ(y)] ⊆ Vₙ₊₁[Uₙ(y)]) →
    assert(Vₙ₊₁[Uₙ(y)] ⊆ (Vₙ₊₁∘Uₙ)(y)) →
    assert((Vₙ₊₁∘Uₙ)(y) ⊆ Uₙ₊₁(y)) →
    assert(Uₙ₊₁(y) ⊆ ⋃{w≺z,w≠z}Uₙ₊₁(w)) →
    assert(Aₙ(z) ∩ ⋃{w≺z,w≠z}Uₙ₊₁(w) = ∅) →
    conclude(Aₙ(z) ∩ Vₙ₊₁[Aₙ(y)] = ∅)
  } →

  case_2(z ≺ y) {
    lemma ImageUnderSymmetricRelation() {
      assert(Vₙ₊₁[Aₙ(z) ∩ Vₙ₊₁[Aₙ(y)]] ⊆ 
             Vₙ₊₁[Aₙ(z)] ∩ (Vₙ₊₁∘Vₙ₊₁⁻¹)[Aₙ(y)])
    } →
    apply(case_1(z ≺ y)) →
    assert(Aₙ(y) ∩ Vₙ₊₁[Aₙ(z)] = ∅) →
    conclude(Aₙ(z) ∩ Vₙ₊₁[Aₙ(y)] = ∅)
  } →

  conclude(
    ∀n ∈ ℕ₊, ∀y,z ∈ X: y ≠ z ⇒ Aₙ(z) ∩ Vₙ₊₁[Aₙ(y)] = ∅
  )
}