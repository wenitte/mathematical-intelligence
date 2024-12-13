theorem AdditiveNowhereNegativeIsSubadditive() {
  assert(
    let(𝒜: AlgebraOfSets) ∧
    let(f: 𝒜 → ℝ̄) ∧
    isAdditive(f) ∧
    (∀A ∈ 𝒜 ⇒ f(A) ≥ 0) ⇒
    isSubadditive(f)
  )
} ↔

proof AdditiveNowhereNegativeIsSubadditive() {
  setVar(𝒜: AlgebraOfSets) →
  setVar(f: 𝒜 → ℝ̄) →
  assume(isAdditive(f)) →
  assume(∀A ∈ 𝒜 ⇒ f(A) ≥ 0) →
  
  apply(AdditiveIsStronglyAdditive(f)) →
  assert(∀A,B ∈ 𝒜 ⇒ f(A ∪ B) = f(A) + f(B) - f(A ∩ B)) →
  
  assert(f(A ∩ B) ≥ 0) →
  assert(-f(A ∩ B) ≤ 0) →
  assert(f(A ∪ B) = f(A) + f(B) - f(A ∩ B) ≤ f(A) + f(B)) →
  
  conclude(∀A,B ∈ 𝒜 ⇒ f(A ∪ B) ≤ f(A) + f(B)) →
  conclude(isSubadditive(f))
}