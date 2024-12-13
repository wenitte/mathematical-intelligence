theorem Irrational_Number_Basis_Expansion() {
  assert(
    ∀x ∈ ℝ ∧ x ∉ ℚ ⇒ 
    (BasisExpansion(x) ¬terminates ∧ BasisExpansion(x) ¬recurs)
  )
} ↔

proof Irrational_Number_Basis_Expansion() {
  // Proof by contraposition
  setVar(x: ℝ) →
  assert(
    (BasisExpansion(x) terminates ∨ BasisExpansion(x) recurs) ⇒ x ∈ ℚ
  ) →

  // Case 1: Terminating expansion
  lemma Terminating_Case() {
    assert(∃k ∈ ℕ: f_k = 0) →
    assert(x = [s.d₁d₂d₃...d_{k-1}]_b) →
    assert(x = s + d₁/b + d₂/b² + d₃/b³ + ... + d_{k-1}/b^{k-1}) →
    assert(x = (sb^{k-1} + d₁b^{k-2} + d₂b^{k-3} + ... + d_{k-1})/b^{k-1}) →
    assert(numerator ∈ ℤ ∧ denominator ∈ ℤ) →
    conclude(x ∈ ℚ)
  } →

  // Case 2: Recurring expansion
  lemma Recurring_Case() {
    setVar(y: RecurringPart(x)) →
    assert(y = [0.00...0d₁d₂...d_{k-1}d₁d₂...d_{k-1}...]_b) →
    setVar(z := [0.d₁d₂...d_{k-1}]_b) →
    assert(z = d₁/b + d₂/b² + ... + d_{k-1}/b^{k-1}) →
    assert(z ∈ ℚ) →
    assert(y = (z/b^m)(1 + 1/b^k + 1/b^{2k} + ...)) →
    assert(y = (z/b^m)(1/(1-1/b^k))) →
    assert(y ∈ ℚ) →
    assert(x - y ∈ ℚ) →
    conclude(x ∈ ℚ)
  } →

  apply(Terminating_Case() ∨ Recurring_Case()) →
  conclude(x ∈ ℚ)
}