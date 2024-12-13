theorem DarbouxIntegrability() {
  assert(
    ∀f: ℝ → ℝ, ∀[a,b] ⊂ ℝ, a < b ⇒
    (continuous(f, (a,b)) ∧ bounded(f, [a,b])) →
    isDarbouxIntegrable(f, [a,b])
  )
} ↔

proof DarbouxIntegrability() {
  setVar(f: ℝ → ℝ) →
  setVar(a,b: ℝ, a < b) →
  setVar(ε: ℝ, ε > 0) →
  
  lemma BoundExists() {
    assert(bounded(f, [a,b]) → ∃K > 0: |f(x)| ≤ K, ∀x ∈ [a,b])
  } →
  apply(BoundExists()) →
  
  setVar(δ: ℝ) →
  assert(0 < δ < min(ε/(6K), (b-a)/2)) →
  
  lemma ContinuousSubinterval() {
    assert(
      continuous(f, (a,b)) ∧ [a+δ,b-δ] ⊂ (a,b) →
      continuous(f, [a+δ,b-δ])
    )
  } →
  
  lemma ContinuousDarbouxIntegrable() {
    assert(
      continuous(f, [a+δ,b-δ]) →
      ∃Sδ: U(Sδ) - L(Sδ) < ε/3
    )
  } →
  
  apply(ContinuousDarbouxIntegrable()) →
  
  setVar(S = Sδ ∪ {a,b}) →
  assert(U(S) = Ma·δ + U(Sδ) + Mb·δ) →
  assert(L(S) = ma·δ + L(Sδ) + mb·δ) →
  
  setVar(U' = K·δ + U(Sδ) + K·δ) →
  setVar(L' = -K·δ + L(Sδ) - K·δ) →
  
  assert(U' ≥ U(S) ∧ L' ≤ L(S)) →
  assert(U(S) - L(S) ≤ U' - L') →
  assert(U' - L' = 4K·δ + U(Sδ) - L(Sδ)) →
  assert(4K·δ + U(Sδ) - L(Sδ) < 4K·(ε/(6K)) + ε/3) →
  assert(4K·(ε/(6K)) + ε/3 = ε) →
  
  conclude(U(S) - L(S) < ε) →
  conclude(isDarbouxIntegrable(f, [a,b]))
}