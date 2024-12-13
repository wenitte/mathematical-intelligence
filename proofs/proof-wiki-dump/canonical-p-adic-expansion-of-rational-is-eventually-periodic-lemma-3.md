theorem CanonicalPAdicExpansionLimit() {
  let(Qp: p-adic_numbers, p: prime) →
  let(a: ℤ, b: ℤ>0) →
  assert(
    ∀n ∈ ℕ ∃An,rn ∈ ℤ: (
      (a/b = An + p^(n+1) * rn/b) ∧
      (∃n0 ∈ ℕ: ∀n ≥ n0: -b ≤ rn ≤ 0)
    )
  ) →
  assert(
    lim(n→∞) An = a/b
  )
} ↔

proof CanonicalPAdicExpansionLimit() {
  let(ε: ℝ>0) →
  setVar(M = max({‖r0‖p, ‖r1‖p, ..., ‖rn0‖p, ‖-1‖p, ‖-2‖p, ..., ‖-b‖p})) →
  
  lemma PowerUnbounded() {
    assert(∃N ∈ ℕ: p^(N+1) > M/(ε*‖b‖p))
  } →
  
  assert(∀n ≥ N:
    ‖a/b - An‖p = 
    ‖p^(n+1) * rn/b‖p = 
    ‖p‖p^(n+1) * ‖rn‖p/‖b‖p ≤
    1/p^(n+1) * M/‖b‖p ≤
    1/p^(N+1) * M/‖b‖p <
    (ε*‖b‖p)/M * M/‖b‖p =
    ε
  ) →
  
  apply(ConvergenceDefinition(Qp)) →
  assert(lim(n→∞) An = a/b)
}