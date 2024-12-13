theorem CantorStrongVersion() {
  assert(
    ∀S: Set ∧ ∀n ∈ ℕ₊ →
    let P^n(S) := match n with {
      0 → S,
      n > 0 → 𝒫(P^(n-1)(S))
    } →
    ¬∃f: S → P^n(S) [surjective(f)]
  )
} ↔

proof CantorStrongVersion() {
  let P(n) := "¬∃f: S → P^n(S) [surjective(f)]"

  // Base case
  lemma BaseCase() {
    assert(P(1) ↔ CantorTheorem())
  } →

  // Inductive step
  lemma InductiveStep() {
    setVar(k ∈ ℕ₊) →
    assume(P(k)) →
    
    // Proof by contradiction
    assume(∃f: S → P^(k+1)(S) [surjective(f)]) →
    
    // Define mapping g
    let g(x) := ⋃f(x) →
    assert(∀x ∈ S → g(x) ∈ P^k(S)) {
      assert(f(x) ∈ P^(k+1)(S)) →
      assert(f(x) ⊆ P^k(S)) →
      assert(⋃f(x) ⊆ P^(k-1)(S)) →
      assert(g(x) ∈ P^k(S))
    } →
    
    assert(∀y ∈ P^k(S) → {y} ∈ P^(k+1)(S)) →
    assert(∀y ∈ P^k(S) → ∃x ∈ S [f(x) = {y}]) →
    assert(∀y ∈ P^k(S) → g(x) = y) →
    assert(surjective(g)) →
    
    contradiction(P(k))
  } →

  apply(MathInduction(P)) →
  assert(∀n ∈ ℕ₊ → P(n))
}

// Alternative proof
proof CantorStrongVersion_Alt() {
  setVar(k ∈ ℕ₊) →
  assert(P^(k+1)(S) = 𝒫(P^k(S))) →
  assert(P^(k+1)(S) ≠ ∅) →

  cases(S) {
    case S = ∅:
      apply(EmptySetNoSurjection()) →
      assert(¬∃f: S → P^(k+1)(S) [surjective(f)])

    case S ≠ ∅:
      assume(∃f: S → P^(k+1)(S) [surjective(f)]) →
      assert(∃g: P^k(S) → 𝒫(P^k(S)) [injective(g)]) →
      assert(∃h: P^(k+1)(S) → P^k(S) [surjective(h)]) →
      assert(surjective(h ∘ f)) →
      contradiction(P(k))
  } →
  
  assert(∀n ∈ ℕ₊ → P(n))
}