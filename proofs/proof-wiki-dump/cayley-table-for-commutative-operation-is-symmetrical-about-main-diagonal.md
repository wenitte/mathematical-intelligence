theorem CayleyTableSymmetry() {
  assert(
    ∀S(
      isAlgebraicStructure(S, ∘) ⇒
      (isSymmetricAboutDiagonal(cayleyTable(S, ∘)) ↔ isCommutative(∘))
    )
  )
}

proof CayleyTableSymmetry() {
  define(C := cayleyTable(S, ∘)) →
  define(c[a,b] := entry(C, row(a), col(b))) →
  
  // Necessary condition
  lemma NecessaryCondition() {
    assert(isCommutative(∘)) →
    assert(∀a,b ∈ S: a ∘ b = b ∘ a) →
    assert(∀a,b ∈ S: c[a,b] = c[b,a]) →
    assert(∀a ∈ S: row(a) = col(a)) →
    conclude(isSymmetricAboutDiagonal(C))
  } →

  // Sufficient condition
  lemma SufficientCondition() {
    assert(isSymmetricAboutDiagonal(C)) →
    assert(∀a,b ∈ S: c[a,b] = c[b,a]) →
    assert(∀a,b ∈ S: a ∘ b = b ∘ a) →
    conclude(isCommutative(∘))
  } →

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude(
    isSymmetricAboutDiagonal(cayleyTable(S, ∘)) ↔ isCommutative(∘)
  )
}