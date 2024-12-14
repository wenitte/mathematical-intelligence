theorem Completion_Metric_Space_Lemma_3() {
  let M = ⟨A,d⟩: MetricSpace
  let C[A]: Set = {seq | seq is_CauchySequence_in A}
  let ∼: EquivalenceRelation where
    seq₁ ∼ seq₂ ⟺ lim[n→∞] d(xₙ,yₙ) = 0
  let [xₙ]∼: EquivalenceClass
  let Ã: Set = C[A]/∼
  let d̃: Ã × Ã → ℝ₊ where
    d̃([xₙ]∼,[yₙ]∼) = lim[n→∞] d(xₙ,yₙ)
  
  assert(
    M̃ = ⟨Ã,d̃⟩ is_completion_of M
  )
} ↔

proof Completion_Metric_Space_Lemma_3() {
  setVar(x: A) →
  define(x̂ = (x,x,x,...)) →
  define(φ: A → Ã where φ(x) = [x̂]∼) →

  lemma Subset_Proof() {
    assert(φ(x) = φ(y)) →
    assert([x̂]∼ = [ŷ]∼) →
    assert(lim[n→∞] d(x,y) = 0) →
    assert(d(x,y) = 0) →
    assert(x = y) →
    conclude(A ⊆ Ã)
  } →

  lemma Distance_Preservation() {
    assert(∀x,y∈A:
      d̃([x̂]∼,[ŷ]∼) = lim[n→∞] d(x,y) = d(x,y)
    )
  } →

  lemma Density_Proof() {
    setVar([xₙ]∼: Ã, ε: ℝ₊) →
    assert(∃N∈ℕ: ∀m,n≥N: d(xₘ,xₙ) < ε) →
    assert(d̃([x̂ₙ]∼,[xₙ]∼) = lim[n→∞] d(xₙ,xₙ) < ε) →
    conclude(A is_dense_in Ã)
  } →

  lemma Completeness_Proof() {
    setVar(ŵₙ: CauchySequence_in φ[A]) →
    assert(∀m,n∈ℕ: d̃(ŵₙ,ŵₘ) = d(wₙ,wₘ)) →
    define(W = [(w₁,w₂,w₃,...)]∈Ã) →
    setVar(ε: ℝ₊) →
    assert(∃N∈ℕ: ∀n>N: d̃(wₙ,W) < ε) →
    conclude(Ã is_complete)
  } →

  apply(Subset_Proof()) →
  apply(Distance_Preservation()) →
  apply(Density_Proof()) →
  apply(Completeness_Proof()) →
  conclude(M̃ is_completion_of M)
}