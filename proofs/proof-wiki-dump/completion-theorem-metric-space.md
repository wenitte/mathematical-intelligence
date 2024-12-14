theorem Completion_Metric_Space() {
  let M = struct(A, d: metric)
  assert(
    ∃M̃ = struct(Ã, d̃: metric) ∧
    isCompletion(M̃, M) ∧
    ∀M̂ = struct(Â, d̂: metric)[
      isCompletion(M̂, M) →
      ∃τ: Ã ↔ Â[
        (∀x ∈ A: τ(x) = x) ∧
        (∀x₁,x₂ ∈ A: d̂(τ(x₁),τ(x₂)) = d̃(x₁,x₂))
      ]
    ]
  )
} ↔

proof Completion_Metric_Space() {
  let C[A] = {s | isCauchySequence(s, A)} →
  define(∼: Relation[C[A]] | 
    {xₙ} ∼ {yₙ} ↔ lim[n→∞]d(xₙ,yₙ) = 0
  ) →
  
  lemma Equivalence_Relation() {
    assert(isEquivalenceRelation(∼, C[A]))
  } →
  
  let Ã = C[A]/∼ →
  define(d̃: Ã×Ã → ℝ≥₀ |
    d̃([{xₙ}]∼,[{yₙ}]∼) = lim[n→∞]d(xₙ,yₙ)
  ) →
  
  lemma Well_Defined() {
    assert(isWellDefined(d̃))
  } →
  
  lemma Metric_Properties() {
    assert(isMetric(d̃, Ã))
  } →
  
  lemma Completion_Properties() {
    assert(
      ∃i: A → Ã[
        isDense(i(A), Ã) ∧
        ∀x,y ∈ A: d̃(i(x),i(y)) = d(x,y)
      ]
    )
  } →
  
  lemma Uniqueness() {
    assert(
      ∀M₁,M₂: isCompletion(M₁,M) ∧ isCompletion(M₂,M) →
      ∃τ: isIsometry(τ,M₁,M₂)
    )
  } →
  
  apply(Well_Defined()) →
  apply(Metric_Properties()) →
  apply(Completion_Properties()) →
  apply(Uniqueness())
}

note Dependencies() {
  assert(
    requires(Axiom_Countable_Choice) ∧
    usedIn(Completion_Properties)
  )
}