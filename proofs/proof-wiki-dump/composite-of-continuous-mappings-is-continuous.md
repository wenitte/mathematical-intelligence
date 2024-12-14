theorem Composite_Continuous_Mappings() {
  assert(
    ∀T₁,T₂,T₃[TopologicalSpace(T₁) ∧ TopologicalSpace(T₂) ∧ TopologicalSpace(T₃)] ∧
    ∀f:T₁→T₂[Continuous(f)] ∧
    ∀g:T₂→T₃[Continuous(g)] ⇒
    Continuous(g∘f:T₁→T₃)
  )
}

proof Composite_Continuous_Mappings() {
  setVar(T₁,T₂,T₃: TopologicalSpace) →
  setVar(f: T₁→T₂, g: T₂→T₃) →
  setVar(U: OpenSet(T₃)) →
  
  assert(Continuous(g) ⇒ OpenSet(g⁻¹[U], T₂)) →
  assert(Continuous(f) ⇒ OpenSet(f⁻¹[g⁻¹[U]], T₁)) →
  
  lemma Preimage_Composite() {
    assert(
      f⁻¹[g⁻¹[U]] = (g∘f)⁻¹[U]
    )
  } →
  
  apply(Preimage_Composite()) →
  assert(OpenSet((g∘f)⁻¹[U], T₁)) →
  assert(Continuous(g∘f))
}

theorem Continuity_At_Point() {
  assert(
    ∀T₁,T₂,T₃[TopologicalSpace(T₁) ∧ TopologicalSpace(T₂) ∧ TopologicalSpace(T₃)] ∧
    ∀x∈T₁[Continuous_At(f,x) ∧ Continuous_At(g,f(x))] ⇒
    Continuous_At(g∘f,x)
  )
}

corollary Composite_Continuous_Metric() {
  assert(
    ∀T₁,T₂,T₃[MetricSpace(T₁) ∨ ComplexPlane(T₁) ∨ RealLine(T₁)] ∧
    [MetricSpace(T₂) ∨ ComplexPlane(T₂) ∨ RealLine(T₂)] ∧
    [MetricSpace(T₃) ∨ ComplexPlane(T₃) ∨ RealLine(T₃)] ∧
    ∀f:T₁→T₂[Continuous(f)] ∧
    ∀g:T₂→T₃[Continuous(g)] ⇒
    Continuous(g∘f:T₁→T₃)
  )
}