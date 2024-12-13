theorem Cancellability_By_Cayley_Table() {
  assert(
    ∀S(finite_algebraic_structure(S, ∘) ∧
    ∃T(T = CayleyTable(S, ∘)) ∧
    ∀a ∈ S ⇒
    (cancellable(a, ∘) ↔ 
      (¬∃x ∈ S(repeated_in_row(x, T, a)) ∧
       ¬∃x ∈ S(repeated_in_column(x, T, a))))
  )
} ↔

proof Cancellability_By_Cayley_Table() {
  // Necessary Condition
  lemma Necessary() {
    setVar(a: S) →
    assume(cancellable(a, ∘)) →
    
    // Row proof by contradiction
    assume(∃x ∈ S(repeated_in_row(x, T, a))) →
    assert(∃y₁,y₂ ∈ S(y₁ ≠ y₂ ∧ a∘y₁ = x = a∘y₂)) →
    contradiction(cancellable(a, ∘)) →
    conclude(¬∃x ∈ S(repeated_in_row(x, T, a))) →
    
    // Column proof by contradiction
    assume(∃x ∈ S(repeated_in_column(x, T, a))) →
    assert(∃y₁,y₂ ∈ S(y₁ ≠ y₂ ∧ y₁∘a = x = y₂∘a)) →
    contradiction(cancellable(a, ∘)) →
    conclude(¬∃x ∈ S(repeated_in_column(x, T, a)))
  } →

  // Sufficient Condition
  lemma Sufficient() {
    setVar(a: S) →
    assume(¬∃x ∈ S(repeated_in_row(x, T, a)) ∧
           ¬∃x ∈ S(repeated_in_column(x, T, a))) →
    
    // Row condition
    assert(∀y₁,y₂ ∈ S(y₁ ≠ y₂ ⇒ a∘y₁ ≠ a∘y₂)) →
    apply(RuleOfTransposition) →
    assert(∀y₁,y₂ ∈ S(a∘y₁ = a∘y₂ ⇒ y₁ = y₂)) →
    
    // Column condition
    assert(∀y₁,y₂ ∈ S(y₁ ≠ y₂ ⇒ y₁∘a ≠ y₂∘a)) →
    apply(RuleOfTransposition) →
    assert(∀y₁,y₂ ∈ S(y₁∘a = y₂∘a ⇒ y₁ = y₂)) →
    
    conclude(cancellable(a, ∘))
  } →

  apply(Necessary()) →
  apply(Sufficient()) →
  conclude(theorem)
}