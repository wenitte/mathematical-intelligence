theorem CoCountable_Measure_Is_Measure() {
  assert(
    ∀X[uncountable(X)] ∧
    ∃Σ[σ_algebra(Σ, X) ∧ contains_countable_sets(Σ, X)] ∧
    ∃μ[co_countable_measure(μ, X)] →
    is_measure(μ)
  )
} ↔

proof CoCountable_Measure_Is_Measure() {
  lemma Axiom1() {
    setVar(S: Σ) →
    assert(μ(S) ∈ {0,1}) →
    assert(μ(S) ≥ 0)
  } →

  lemma Axiom2() {
    setVar(Sₙ: sequence(Σ, ℕ), disjoint(Sₙ)) →
    
    case CoCountableExists() {
      assert(∃N ∈ ℕ[co_countable(Sₙ)]) →
      assert(∀n ∈ ℕ[n ≠ N → Sₙ ⊆ (X \ Sₙ)]) →
      assert(∀n ∈ ℕ[n ≠ N → countable(Sₙ)]) →
      assert(μ(Sₙ) = if(n = N) then 1 else 0) →
      assert(Σₙ₌₁^∞ μ(Sₙ) = 1) →
      assert(co_countable(∪ₙ₌₁^∞ Sₙ)) →
      assert(μ(∪ₙ₌₁^∞ Sₙ) = 1)
    } ∨
    
    case AllCountable() {
      assert(∀n ∈ ℕ[countable(Sₙ)]) →
      assert(∀n ∈ ℕ[μ(Sₙ) = 0]) →
      assert(Σₙ₌₁^∞ μ(Sₙ) = 0) →
      assert(countable(∪ₙ₌₁^∞ Sₙ)) →
      assert(μ(∪ₙ₌₁^∞ Sₙ) = 0)
    } →
    
    assert(Σₙ₌₁^∞ μ(Sₙ) = μ(∪ₙ₌₁^∞ Sₙ))
  } →

  lemma Axiom3() {
    assert(∅ ∈ Σ) →
    assert(countable(∅)) →
    assert(μ(∅) = 0)
  } →

  apply(Axiom1()) ∧
  apply(Axiom2()) ∧
  apply(Axiom3()) →
  assert(is_measure(μ))
}