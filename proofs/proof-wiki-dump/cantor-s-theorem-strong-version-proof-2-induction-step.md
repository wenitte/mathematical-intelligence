theorem CantorStrongInductionStep() {
  assert(
    ∀S ∈ Set, ∀k ∈ ℕ, 
    (¬∃f: S → PP^k(S) [surjective]) →
    (¬∃f: S → PP^{k+1}(S) [surjective])
  )
} ↔

proof CantorStrongInductionStep_1() {
  setVar(S: Set, k: ℕ) →
  assume(∃f: S → PP^{k+1}(S) [surjective]) →
  
  define(g: S → PP^k(S)) {
    ∀x ∈ S: g(x) = ∪f(x)
  } →
  
  assert(∀x ∈ S: f(x) ∈ PP^{k+1}(S) = P(PP^k(S))) →
  assert(∀x ∈ S: f(x) ⊆ PP^k(S)) →
  assert(∀x ∈ S: ∪f(x) ⊆ PP^k(S)) →
  assert(∀x ∈ S: g(x) ∈ PP^k(S)) →
  
  assert(∀y ∈ PP^k(S): {y} ∈ PP^{k+1}(S)) →
  assert(∀y ∈ PP^k(S): ∃x ∈ S: f(x) = {y}) →
  assert(∀y ∈ PP^k(S): g(x) = ∪{y} = y) →
  
  conclude(g: S → PP^k(S) [surjective]) →
  contradiction(¬∃f: S → PP^k(S) [surjective])
}

proof CantorStrongInductionStep_2() {
  setVar(S: Set, k: ℕ) →
  assert(PP^{k+1}(S) = P(PP^k(S)) ≠ ∅) →
  
  cases {
    case(S = ∅) {
      apply(ImageEmptySetIsEmpty()) →
      conclude(¬∃f: S → PP^{k+1}(S) [surjective])
    }
    case(S ≠ ∅) {
      assume(∃f: S → PP^{k+1}(S) [surjective]) →
      apply(InjectionSetToPowerSet()) {
        assert(∃g: PP^k(S) → P(PP^k(S)) [injective])
      } →
      apply(InjectionHasSurjectiveLeftInverse()) {
        assert(∃h: P(PP^k(S)) → PP^k(S) [surjective])
      } →
      assert(h ∘ f: S → PP^k(S) [surjective]) →
      contradiction(¬∃f: S → PP^k(S) [surjective])
    }
  }
}