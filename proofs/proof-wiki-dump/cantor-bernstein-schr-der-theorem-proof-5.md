theorem Cantor_Bernstein_Schroeder() {
  let(S: Set, T: Set) →
  let(f: S → T, g: T → S) →
  assert(isInjective(f) ∧ isInjective(g)) →
  assert(
    ∃φ: S → T | isBijective(φ)
  )
} ↔

proof Cantor_Bernstein_Schroeder() {
  lemma Injection_To_Image() {
    assert(g: T → g[T] | isBijective(g)) →
    assert(isEquivalent(T, g[T]))
  } →
  
  lemma Composite_Injection() {
    assert(g ∘ f: S → g[T]) →
    assert(g[T] ⊆ S) →
    assert(isInjective(g ∘ f))
  } →
  
  apply(CBS_Lemma()) {
    assert(∃h: S → g[T] | isBijective(h)) →
    assert(isEquivalent(S, g[T]))
  } →
  
  apply(Injection_To_Image()) →
  
  lemma Set_Equivalence_Transitive() {
    assert(isEquivalent(S, g[T])) ∧
    assert(isEquivalent(T, g[T])) →
    assert(isEquivalent(S, T))
  } →
  
  apply(Set_Equivalence_Definition()) {
    assert(∃φ: S → T | isBijective(φ))
  }
}