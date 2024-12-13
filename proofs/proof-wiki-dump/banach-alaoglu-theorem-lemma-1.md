theorem BanachAlaogluLemma1() {
  assert(
    (X: separableNormedVectorSpace) ∧
    (X*: dualSpace(X)) ∧
    (∃{ln}n∈ℕ: boundedSequence(X*)) ∧
    (∃{xn}n∈ℕ: countableDenseSubset(X)) ∧
    (∃Λ1,Λ2,...⊆ℕ: Λ1⊇Λ2⊇...) ∧
    (∀j∈ℕ: limk→∞,k∈Λj(lk(xj)) = l(xj)) →
    (∃l∈X*: extensionOf({l(xj)}j∈ℕ))
  )
}

proof BanachAlaogluLemma1() {
  setVar(M := span({xj}j∈ℕ)) →
  
  lemma LinearExtension() {
    assert(∃l': M→ℝ: linear(l') ∧ ∀j∈ℕ: l'(xj) = l(xj))
  } →
  
  lemma BoundednessEstimate() {
    assert(
      ∀x∈X, ∀{xk}k∈ℕ⊆M: (limk→∞(xk) = x) →
      |l(x)| = limk→∞|l(xk)| ≤ limsupk→∞||lk||X* ||x||X
    )
  } →
  
  apply(LinearExtension()) →
  apply(BoundednessEstimate()) →
  
  assert(
    boundedSequence({lk}k∈ℕ) →
    bounded(l) →
    continuous(l)
  ) →
  
  conclude(l∈X*)
}