theorem Completely_Prime_Filter_Characterization() {
  let(L: CompleteLattice) →
  let(F: Subset(L)) →
  assert(
    is_completely_prime_filter(F) ↔ (
      (∀A ⊆ L: ⋁A ∈ F ↔ (∃a ∈ A: a ∈ F)) ∧
      (∀A ⊆ L, finite(A): ⋀A ∈ F ↔ (∀a ∈ A: a ∈ F))
    )
  )
}

proof Completely_Prime_Filter_Characterization() {
  # Necessary Condition
  lemma Forward_Direction() {
    assume(is_completely_prime_filter(F)) →
    # Statement 1
    let(A: Subset(L)) →
    assume(⋁A ∈ F) →
    by_definition(completely_prime_filter) →
    assert(A ∩ F ≠ ∅) →
    exists(x ∈ A ∩ F) →
    assert(x ∈ A ∧ x ∈ F) →
    
    # Converse of Statement 1
    assume(∃x ∈ A: x ∈ F) →
    by_definition(supremum) →
    assert(x ⪯ ⋁A) →
    by_definition(filter) →
    assert(⋁A ∈ F) →
    
    # Statement 2
    let(A: Subset(L), finite(A)) →
    assume(⋀A ∈ F) →
    by_definition(infimum) →
    assert(∀x ∈ A: ⋀A ⪯ x) →
    by_definition(filter) →
    assert(∀x ∈ A: x ∈ F)
  }

  # Sufficient Condition
  lemma Backward_Direction() {
    assume(
      (∀A ⊆ L: ⋁A ∈ F ↔ (∃a ∈ A: a ∈ F)) ∧
      (∀A ⊆ L, finite(A): ⋀A ∈ F ↔ (∀a ∈ A: a ∈ F))
    ) →
    
    # Proper Subset
    by_theorem(supremum_empty_set) →
    assert(⊥ = ⋁∅) →
    assert(∀x ∈ F: x ∉ ∅) →
    by_contrapositive(statement_1) →
    assert(⊥ ∉ F) →
    assert(F ≠ L) →
    
    # Non-Empty
    by_theorem(infimum_empty_set) →
    assert(⊤ = ⋀∅) →
    assert(∀x ∈ ∅: x ∈ F) →
    by_statement_2() →
    assert(⊤ ∈ F) →
    assert(F ≠ ∅) →
    
    # Down-Directed
    let(x ∈ F, y ∈ F) →
    by_statement_2() →
    assert(x ∧ y ∈ F) →
    
    # Upper Section
    let(x ∈ F, y ∈ L) →
    assume(x ⪯ y) →
    by_theorem(successor_supremum) →
    assert(x ∨ y = y) →
    by_statement_1() →
    assert(y ∈ F) →
    
    # Completely Prime
    let(A ⊆ L) →
    assume(⋁A ∈ F) →
    by_statement_1() →
    assert(∃a ∈ A: a ∈ F) →
    assert(A ∩ F ≠ ∅)
  }

  apply(Forward_Direction()) →
  apply(Backward_Direction()) →
  assert(theorem_statement)
}