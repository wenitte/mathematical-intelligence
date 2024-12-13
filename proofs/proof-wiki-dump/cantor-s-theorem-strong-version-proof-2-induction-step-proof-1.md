theorem CantorStrongThm_InductionStep() {
  assert(
    ∀S: Set ∧ ∀k: ℕ ∧ k > 0 ⇒
    [¬∃f: S → P^k(S) surjective] →
    [¬∃f: S → P^(k+1)(S) surjective]
  )
} ↔

proof CantorStrongThm_InductionStep() {
  setVar(S: Set, k: ℕ) →
  assumeHypothesis(¬∃f: S → P^k(S) surjective) →
  
  proof_by_contradiction() {
    assume(∃f: S → P^(k+1)(S) surjective) →
    
    define(g: S → P^k(S)) {
      ∀x ∈ S: g(x) = ⋃f(x)
    } →
    
    lemma ValidMapping() {
      assert(f(x) ∈ P^(k+1)(S)) →
      assert(f(x) ∈ P(P^k(S))) →
      assert(f(x) ⊆ P^k(S)) →
      assert(∀y ∈ f(x): y ⊆ P^(k-1)(S)) →
      apply(UnionOfSubsetsIsSubset) →
      assert(⋃f(x) ⊆ P^(k-1)(S)) →
      assert(g(x) ∈ P^k(S))
    } →
    
    lemma GSurjective() {
      assert(∀y ∈ P^k(S): {y} ∈ P^(k+1)(S)) →
      assert(∀y ∈ P^k(S): ∃x ∈ S: f(x) = {y}) →
      assert(∀y ∈ P^k(S): g(x) = ⋃{y} = y) →
      assert(g: surjective)
    } →
    
    apply(ValidMapping()) →
    apply(GSurjective()) →
    assert(contradiction(g: surjective, inductionHypothesis))
  } →
  
  conclude(¬∃f: S → P^(k+1)(S) surjective)
}