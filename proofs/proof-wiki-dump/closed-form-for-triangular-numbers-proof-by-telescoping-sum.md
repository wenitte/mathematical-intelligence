theorem Triangular_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ (∑_{i=1}^n i = (n(n+1))/2)
  )
} ↔

proof Triangular_Numbers_Closed_Form() {
  setVar(n: ℕ) →
  
  lemma Telescoping_Identity() {
    assert(∑_{i=1}^n ((i+1)^2 - i^2) = -∑_{i=1}^n (i^2 - (i+1)^2)) →
    assert(∑_{i=1}^n ((i+1)^2 - i^2) = -(1 - (n+1)^2)) →
    assert(∑_{i=1}^n ((i+1)^2 - i^2) = (n+1)^2 - 1)
  } →

  lemma Square_Difference() {
    assert(∀i ∈ ℕ ⇒ ((i+1)^2 - i^2 = 2i + 1))
  } →

  lemma Endpoint_Values() {
    assert((n+1)^2 - 1 = n^2 + 2n)
  } →

  apply(Telescoping_Identity()) →
  apply(Square_Difference()) →
  apply(Endpoint_Values()) →

  assert(n + 2∑_{i=1}^n i = n^2 + 2n) →
  assert(2∑_{i=1}^n i = n(n+1)) →
  assert(∑_{i=1}^n i = (n(n+1))/2)
}