theorem Cartesian_Product_Not_Associative() {
  assert(
    ∀A,B,C ∈ Sets ∧ A≠∅ ∧ B≠∅ ∧ C≠∅ ⇒
    A × (B × C) ≠ (A × B) × C
  )
} ↔

proof Cartesian_Product_Not_Associative() {
  // Define function n(X)
  defineFunction(n: Set → ℕ) {
    n(X) = match X with {
      ∅ → 0,
      _ → 1 + max({n(Y) | Y ∈ X})
    }
  } →
  
  // Foundation Axiom
  assert(∀X ∈ Sets ⇒ n(X) < ∞) →
  
  // Select minimal element
  setVar(a: A) {
    n(a) = min({n(b) | b ∈ A})
  } →
  
  // Proof by contradiction
  assume(∃a'∈A, b∈B: a = ⟨a',b⟩) →
  
  lemma OrderedPairNValue() {
    assert(
      n(a) = n({∅,{a'},{a',b}}) →
      n(a) = 1 + max(n({a'}), n({a',b})) →
      n({a',b}) ≥ n({a'}) →
      n({a'}) = 1 + n(a') →
      n(a) ≥ 2 + n(a')
    )
  } →
  
  apply(OrderedPairNValue()) →
  assert(n(a') < n(a)) →
  assert(contradiction(with: "minimality of n(a)")) →
  
  conclude(a ∉ A×B) →
  conclude(A ⊈ A×B) →
  
  apply(Equality_of_Cartesian_Products) →
  conclude(A × (B × C) ≠ (A × B) × C)
}

theorem Cardinality_Equal() {
  assert(
    ∀A,B,C ∈ FiniteSets ⇒
    |A × (B × C)| = |(A × B) × C|
  )
}