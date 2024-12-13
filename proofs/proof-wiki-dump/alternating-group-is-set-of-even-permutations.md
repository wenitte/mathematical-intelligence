theorem AlternatingGroup_EvenPermutations() {
  assert(
    ∀n ∈ ℕ ⇒
    let(Sₙ: SymmetricGroup(n)) ∧
    let(Aₙ: AlternatingGroup(n)) ∧
    Aₙ = {σ ∈ Sₙ | σ isEvenPermutation}
  )
} ↔

proof AlternatingGroup_EvenPermutations() {
  setVar(n: ℕ) →
  let(sgn: Sₙ → C₂) →
  assert(sgn isOnto) →
  
  lemma FirstIsomorphismTheorem() {
    assert(
      ker(sgn) = Aₙ ∧
      Sₙ/ker(sgn) ≅ C₂
    )
  } →
  
  apply(FirstIsomorphismTheorem()) →
  assert(ker(sgn) = {σ ∈ Sₙ | sgn(σ) = 1}) →
  assert({σ ∈ Sₙ | sgn(σ) = 1} = {σ ∈ Sₙ | σ isEvenPermutation}) →
  assert(Aₙ = {σ ∈ Sₙ | σ isEvenPermutation})
}