theorem Closed_Subset_Same_Dim_Is_Equal() {
  assert(
    ∀X[TopologicalSpace ∧ Irreducible(X)] ∧
    ∀Y[Subset(Y,X) ∧ Closed(Y,X)] ∧
    dim(Y) = dim(X) ∧ dim(X) < ∞
    ⇒ Y = X
  )
} ↔

proof Closed_Subset_Same_Dim_Is_Equal() {
  setVar(n: ℕ, n = dim(Y)) →
  
  lemma Chain_Existence() {
    assert(
      ∃{A₀,...,Aₙ}[
        Closed(Aᵢ,Y) ∧ 
        Irreducible(Aᵢ) ∧
        A₀ ⊂ A₁ ⊂ ... ⊂ Aₙ
      ]
    )
  } →
  
  apply(Chain_Existence()) →
  
  lemma Contradiction_Path() {
    assert(
      Y ⊂ X →
      (A₀ ⊂ A₁ ⊂ ... ⊂ Aₙ ⊂ X) →
      dim(X) ≥ n + 1 →
      dim(X) > dim(Y)
    )
  } →
  
  assert(
    Contradiction_Path() ∧ dim(Y) = dim(X) →
    ¬(Y ⊂ X)
  ) →
  
  conclude(Y = X)
}