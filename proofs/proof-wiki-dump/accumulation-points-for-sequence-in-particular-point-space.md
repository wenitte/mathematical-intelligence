theorem Accumulation_Points_Particular_Point_Space() {
  assert(
    ∀T[T = ⟨S,τ_p⟩ ∧ IsParticularPointSpace(T)] ∧
    ∀{a_i}[IsInfiniteSequence({a_i}, T)] ∧
    ∀β[IsAccumulationPoint(β, {a_i})] ⇒
    |{i: a_i = β ∨ a_i = p}| = ∞
  )
}

proof Accumulation_Points_Particular_Point_Space() {
  setVar(T: TopologicalSpace) →
  setVar({a_i}: Sequence) →
  setVar(β: Point) →
  
  assert(IsAccumulationPoint(β, {a_i})) →
  
  lemma AccumulationPointDefinition() {
    assert(
      ∀U[IsOpenSet(U, T) ∧ β ∈ U ⇒ 
      |{i: a_i ∈ U}| = ∞]
    )
  } →

  assert({β,p} ∈ τ_p) →
  
  apply(AccumulationPointDefinition(), U = {β,p}) →
  
  assert(|{i: a_i ∈ {β,p}}| = ∞) →
  
  assert(
    {i: a_i ∈ {β,p}} = {i: a_i = β ∨ a_i = p}
  ) →
  
  conclude(|{i: a_i = β ∨ a_i = p}| = ∞)
}