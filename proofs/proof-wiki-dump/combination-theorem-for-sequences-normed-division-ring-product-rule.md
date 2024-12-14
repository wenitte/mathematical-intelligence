theorem ProductRule_NormedDivisionRing() {
  let R: NormedDivisionRing
  let xn, yn: Sequence(R)
  let l, m: R
  assert(
    (∀n ∈ ℕ: xn, yn ∈ R) ∧
    (lim[n→∞](xn) = l) ∧
    (lim[n→∞](yn) = m) ⇒
    (lim[n→∞](xn·yn) = l·m)
  )
} ↔

proof ProductRule_NormedDivisionRing() {
  // Proof 1
  lemma BoundedSequence() {
    assert(∃K ∈ ℝ⁺: ∀n ∈ ℕ: ∥xn∥ ≤ K)
  } →
  setVar(M := max{K, ∥m∥}) →
  assert(∀n ∈ ℕ: ∥xn∥ ≤ M ∧ ∥m∥ ≤ M) →
  
  setVar(ε > 0) →
  setVar(ε' := ε/(2M)) →
  
  assert(∃N₁ ∈ ℕ: ∀n > N₁: ∥xn - l∥ < ε') →
  assert(∃N₂ ∈ ℕ: ∀n > N₂: ∥yn - m∥ < ε') →
  
  setVar(N := max{N₁, N₂}) →
  
  calc {
    ∥xn·yn - l·m∥
    = ∥xn·yn - xn·m + xn·m - l·m∥
    ≤ ∥xn·yn - xn·m∥ + ∥xn·m - l·m∥    // Triangle Inequality
    = ∥xn·(yn - m)∥ + ∥(xn - l)·m∥
    ≤ ∥xn∥·∥yn - m∥ + ∥xn - l∥·∥m∥    // Multiplicativity
    ≤ M·∥yn - m∥ + ∥xn - l∥·M
    < M·(ε/(2M)) + (ε/(2M))·M
    = ε/2 + ε/2
    = ε
  } →
  
  assert(∀n > N: ∥xn·yn - l·m∥ < ε) →
  assert(lim[n→∞](xn·yn) = l·m)
}

theorem_end()