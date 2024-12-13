theorem Arc_Is_Path() {
  assert(
    ∀T(T = ⟨X,τ⟩ ∧ IsTopologicalSpace(T)) ∧
    ∀f(IsArc(f,T)) →
    IsPath(f,T)
  )
} ↔

proof Arc_Is_Path() {
  setVar(T: TopologicalSpace) →
  setVar(f: Arc) →
  lemma Arc_Definition() {
    assert(
      IsArc(f,T) ↔ 
      ∃a,b ∈ T(
        f: I → T ∧
        f(0) = a ∧
        f(1) = b ∧
        IsInjective(f)
      )
    )
  } →
  lemma Path_Definition() {
    assert(
      IsPath(f,T) ↔
      ∃a,b ∈ T(
        f: I → T ∧
        f(0) = a ∧
        f(1) = b
      )
    )
  } →
  apply(Arc_Definition()) →
  apply(Path_Definition()) →
  assert(IsPath(f,T))
}