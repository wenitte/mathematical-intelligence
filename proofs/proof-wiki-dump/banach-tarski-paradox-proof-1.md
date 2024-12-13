theorem Banach_Tarski_Paradox() {
  let D³, D₃′ ⊂ ℝ³ be unit balls
  assert(
    ∃ decomposition F: D³ → (P₁,...,Pₙ) ∧
    ∃ isometries φᵢ: ℝ³ → ℝ³ ⇒
    D³ ∪ D₃′ = ⋃ᵢ φᵢ(Pᵢ)
  )
}

proof Banach_Tarski_Paradox() {
  setVar(D³: centered at origin) →
  setVar(D₃′: unit ball s.t. D³ ∩ D₃′ = ∅) →
  setVar(S²: ∂D³) →
  
  lemma Hausdorff_Paradox() {
    assert(∃ decomposition(S²) = A ∪ B ∪ C ∪ Q where
      A ≅ B ≅ C ≅ (B ∪ C) ∧
      Q is countable
    )
  } →

  define(r*: ℝ³ → ℝ³, r*(x) = rx) →
  define(W = ⋃_{0<r≤1} r*(A)) →
  define(X = ⋃_{0<r≤1} r*(B)) →
  define(Y = ⋃_{0<r≤1} r*(C)) →
  define(Z = ⋃_{0<r≤1} r*(Q)) →
  define(T = W ∪ Z ∪ {0}) →

  assert(W ≅ (X ∪ Y)) →
  assert(X ≅ Y ∧ W ≅ X ⇒ (X ∪ Y) ≅ (W ∪ X)) →
  assert(W ≅ (W ∪ X ∪ Y)) →
  
  lemma SO3_Countable() {
    assert(Q countable ∧ SO(3) uncountable ⇒
      ∃φ ∈ SO(3): φ(Q) ⊂ (A ∪ B ∪ C)
    )
  } →
  
  define(I = φ(Q) ⊂ (W ∪ X ∪ Y)) →
  assert(∃H ⊂ X: H ≅ I) →
  define(p ∈ X - H) →
  define(S = Y ∪ H ∪ {p}) →

  assert(
    Y ≅ (W ∪ X ∪ Y) ∧
    H ≅ Z ∧
    {0} ≅ {p} ⇒
    S ≅ D³
  ) →

  assert(T ∪ S ≅ D³ ∪ D₃′) →
  assert(T ∪ S ⊆ D³ ⊂ D³ ∪ D₃′ ⇒ D³ ≅ D³ ∪ D₃′)
}