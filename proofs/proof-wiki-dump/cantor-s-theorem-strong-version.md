theorem Cantors_Theorem_Strong() {
  assert(
    ∀S: Set ∧ ∀n ∈ ℕ⁺ ⇒
    let PP^n(S) := match n with {
      0 → S,
      n > 0 → 𝒫(PP^(n-1)(S))
    } ⇒
    ¬∃f: S ↔ PP^n(S)
  )
} ↔

proof Cantors_Theorem_Strong() {
  // Proof 1
  lemma PowerNotation() {
    assert(∀a ∈ S ⇒
      let a^n := match n with {
        0 → a,
        n > 0 → {a^(n-1)}
      }
    )
  } →

  assume(∃f: S → Q^n where Q^n ⊆ PP^n(S)) →
  define(A^(n-1) := {s^(n-1) ∈ PP^(n-1)(S) | s^(n-1) ≠ f(s)}) →
  
  forall(Q^(n-1) ∈ Q^n) {
    exists(x ∈ S where Q^(n-1) = f(x)) →
    assert(
      (x^(n-1) ∈ Q^(n-1) ⇒ x^(n-1) ∉ A^(n-1)) ∧
      (x^(n-1) ∉ Q^(n-1) ⇒ x^(n-1) ∈ A^(n-1))
    ) →
    conclude(A^(n-1) ∉ Q^n)
  } →
  conclude(Q^n ⊂ PP^n(S)) →
  contradiction()
} ∧

proof Cantors_Theorem_Strong_Inductive() {
  induction(n ∈ ℕ⁺) {
    base_case(n = 1) {
      apply(Cantors_Theorem())
    } →
    
    inductive_step(k ≥ 1) {
      assume(¬∃surj: S → PP^k(S)) →
      assume(∃f: S → PP^(k+1)(S) is_surjective) →
      
      define(g: S → PP^k(S) as g(x) := ⋃f(x)) →
      assert(∀y ∈ PP^k(S) ⇒ {y} ∈ PP^(k+1)(S)) →
      assert(∀y ∈ PP^k(S) ⇒ ∃x ∈ S: f(x) = {y}) →
      assert(g(x) = y) →
      conclude(g is_surjective) →
      contradiction()
    }
  }
}