theorem Complex_Conjugate_Vanishing_At_Infinity() {
  assert(
    ∀X[locally_compact_Hausdorff_space(X) ∧
    ∃f[f: X → ℂ ∧ vanishing_at_infinity(f)] ∧
    ∃f̄[f̄: X → ℂ ∧ ∀x ∈ X[f̄(x) = conj(f(x))]]
    ⇒ vanishing_at_infinity(f̄)
  )
} ↔

proof Complex_Conjugate_Vanishing_At_Infinity() {
  setVar(ε > 0) →
  assert(vanishing_at_infinity(f)) →
  assert(∃K[compact(K) ∧ K ⊆ X ∧
         ∀x ∈ (X∖K)[|f(x)| < ε]]) →
  lemma Complex_Modulus_Conjugate() {
    assert(∀z ∈ ℂ[|z| = |conj(z)|])
  } →
  apply(Complex_Modulus_Conjugate()) →
  assert(∀x ∈ (X∖K)[|f̄(x)| = |conj(f(x))| = |f(x)| < ε]) →
  assert(∀ε > 0, ∃K[compact(K) ∧ K ⊆ X ∧
         ∀x ∈ (X∖K)[|f̄(x)| < ε]]) →
  conclude(vanishing_at_infinity(f̄))
}