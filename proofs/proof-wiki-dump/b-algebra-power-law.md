theorem BAlgebraPowerLaw() {
  assert(
    ∀X(isBAlgebra(X) ∧ 
    ∀n,m ∈ ℕ(n ≥ m) ⇒
    ∀x ∈ X(x^n ∘ x^m = x^(n-m)))
  )
} ↔

proof BAlgebraPowerLaw() {
  letProp(P(n) := ∀m ∈ ℕ₊(m ≤ n ⇒ ∀x ∈ X(x^n ∘ x^m = x^(n-m)))) →
  
  // Base case
  lemma BaseCase() {
    assert(P(1)) →
    setVar(x ∈ X) →
    assert(x ∘ x = 0) →
    conclude(P(1))
  } →

  // Inductive step
  lemma InductiveStep() {
    assume(k ≥ 2 ∧ P(k)) →
    forall(x ∈ X) {
      // Step 1: Show x^(k+1) ∘ x = x^k
      assert(x^(k+1) ∘ x = (x^k ∘ (0 ∘ x)) ∘ x) →  // By def of power
      assert(= x^k ∘ (x ∘ (0 ∘ (0 ∘ x)))) →        // By A3
      assert(= x^k ∘ ((x ∘ x) ∘ 0)) →               // By A3
      assert(= x^k ∘ (x ∘ x)) →                     // By A2
      assert(= x^k ∘ 0) →                           // By A1
      assert(= x^k) →                               // By A2
      
      // Step 2: Show for 1 ≤ m ≤ k
      forall(m ∈ ℕ₊, m ≤ k) {
        assert(x^(k+1) ∘ x^(m+1) = 
               x^(k+1) ∘ (x^m ∘ (0 ∘ x))) →        // By def of power
        assert(= (x^(k+1) ∘ x) ∘ x^m) →            // By A3
        assert(= x^k ∘ x^m) →                       // From Step 1
        assert(= x^(k-m))                           // By IH
      }
    } →
    conclude(P(k+1))
  } →

  apply(MathInduction(P)) →
  conclude(∀n,m ∈ ℕ(n ≥ m ⇒ ∀x ∈ X(x^n ∘ x^m = x^(n-m))))
}