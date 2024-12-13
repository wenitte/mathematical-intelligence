theorem Cardinality_Codomain_Surjection() {
  let(S: Set, T: Set, f: S → T, n: ℕ)
  assert(
    card(S) = n ∧
    isSurjection(f: S → T) →
    card(T) ≤ n ∧
    (card(T) = n ↔ isBijection(f))
  )
}

proof Cardinality_Codomain_Surjection() {
  setVar(S: Set, T: Set, f: S → T, n: ℕ) →
  assert(card(S) = n) →
  
  lemma Surjection_Natural_Numbers() {
    assert(∃surjection(S → T) ↔ ∃surjection(ℕ_n → T))
  } →
  apply(Surjection_Natural_Numbers()) →
  
  assert(∀x ∈ T: f⁻¹({x}) ≠ ∅) →
  
  lemma Well_Ordered_Properties() {
    assert(isWellOrdered(ℕ)) →
    assert(S = ℕ_n → isWellOrdered(S)) →
    assert(∀A ⊆ S → isWellOrdered(A))
  } →
  apply(Well_Ordered_Properties()) →
  
  define(g: T → S, x ↦ min(f⁻¹({x}))) →
  
  assert(∀x ∈ T: g(x) ∈ f⁻¹({x})) →
  assert(∀x ∈ T: f(g(x)) = x) →
  assert(f ∘ g = I_T) →
  
  lemma Cardinality_Image() {
    assert(card(g[T]) ≤ n) →
    setVar(m: ℕ) →
    assert(card(g[T]) = m → card(T) = m)
  } →
  apply(Cardinality_Image()) →
  
  lemma Bijection_Case() {
    assert(
      m = n →
      g[T] = S ∧
      isBijection(g: T → S) ∧
      f = g⁻¹ ∧
      isBijection(f: S → T)
    )
  } →
  apply(Bijection_Case())
}