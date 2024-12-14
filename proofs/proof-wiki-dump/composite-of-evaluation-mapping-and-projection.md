theorem CompositeEvaluationProjection() {
  assert(
    ∀X[TopSpace(X)] ∧
    ∀I[Set(I)] ∧
    ∀i∈I[∃Y_i[TopSpace(Y_i)]] ∧
    ∀i∈I[∃f_i[Continuous(f_i: X → Y_i)]] ∧
    let(Y = ∏_{i∈I} Y_i) ∧
    let(f: X → Y = EvalMap({f_i})) ∧
    let(pr_i: Y → Y_i = Projection(i)) ⇒
    ∀i∈I[pr_i ∘ f = f_i]
  )
} ↔

proof CompositeEvaluationProjection() {
  setVar(x: X) →
  setVar(i: I) →
  
  assert((pr_i ∘ f)(x)) →
  
  assert(pr_i(f(x))) {
    by(CompositeMapDef)
  } →
  
  assert(pr_i({f_i(x)})) {
    by(EvalMapDef)
  } →
  
  assert(f_i(x)) {
    by(ProjectionDef)
  } →
  
  conclude(∀x∈X[∀i∈I[(pr_i ∘ f)(x) = f_i(x)]]) →
  
  conclude(∀i∈I[pr_i ∘ f = f_i]) {
    by(MappingEquality)
  }
}