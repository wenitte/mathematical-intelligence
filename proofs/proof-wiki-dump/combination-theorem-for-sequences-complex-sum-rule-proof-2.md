theorem ComplexSequenceSum() {
  assert(
    ∀z_n,w_n ∈ ℂℕ ∧
    lim(n→∞, z_n) = c ∧
    lim(n→∞, w_n) = d →
    lim(n→∞, (z_n + w_n)) = c + d
  )
} ↔

proof ComplexSequenceSum() {
  setVar(ε > 0) →
  setVar(ε/2 > 0) →
  
  letDecomposition(
    z_n = x_n + i·y_n ∧
    w_n = r_n + i·s_n ∧
    c = a + i·b ∧
    d = l + i·m,
    where(x_n,y_n,r_n,s_n,a,b,l,m ∈ ℝ)
  ) →
  
  lemma ComplexConvergence() {
    assert(
      lim(n→∞, z_n) = c ↔
      ∀ε>0 ∃N∈ℝ ∀n>N: 
        |x_n - a| < ε ∧ |y_n - b| < ε
    ) ∧
    assert(
      lim(n→∞, w_n) = d ↔
      ∀ε>0 ∃N∈ℝ ∀n>N:
        |r_n - l| < ε ∧ |s_n - m| < ε
    )
  } →

  assert(
    lim(n→∞, (z_n + w_n)) =
    lim(n→∞, (x_n + i·y_n + r_n + i·s_n)) =
    lim(n→∞, ((x_n + r_n) + i·(y_n + s_n))) =
    lim(n→∞, (x_n + r_n)) + i·lim(n→∞, (y_n + s_n)) =
    (a + l) + i·(b + m) =
    (a + i·b) + (l + i·m) =
    c + d
  )
}