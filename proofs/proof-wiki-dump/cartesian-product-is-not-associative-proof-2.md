theorem Cartesian_Product_Not_Associative() {
  assert(
    ∀A,B,C(¬empty(A) ∧ ¬empty(B) ∧ ¬empty(C)) →
    A × (B × C) ≠ (A × B) × C
  )
} ↔

proof Cartesian_Product_Not_Associative() {
  function n(X: Set) → ℕ {
    return(
      if X = ∅ then 0
      else 1 + max({n(Y) | Y ∈ X})
    )
  } →
  
  axiom Foundation() {
    assert(∀X ∈ Set → n(X) < ∞)
  } →
  
  setVar(a ∈ A) {
    assert(n(a) = min({n(b) | b ∈ A}))
  } →
  
  lemma Contradiction() {
    assume(∃a'∈A, b∈B → a = ⟨a',b⟩) →
    assert(
      n(a) = n({∅,{a'},{a',b}}) →
      n(a) = 1 + max(n({a'}), n({a',b})) →
      n({a',b}) ≥ n({a'}) →
      n({a'}) = 1 + n(a') →
      n(a) ≥ 2 + n(a')
    ) →
    conclude(n(a') < n(a))
  } →
  
  apply(Contradiction()) →
  assert(contradicts(min({n(b) | b ∈ A}))) →
  conclude(a ∉ A×B) →
  conclude(A ⊈ A×B) →
  
  apply(Equality_of_Cartesian_Products()) →
  conclude(A × (B × C) ≠ (A × B) × C)
}