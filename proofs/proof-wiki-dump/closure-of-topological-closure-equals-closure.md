theorem Closure_of_Closure() {
  assert(
    ∀T:TopologicalSpace ∧ ∀H⊆T ⇒
    cl(cl(H)) = cl(H)
  )
} ↔

proof Closure_of_Closure() {
  setVar(T: TopologicalSpace) →
  setVar(H: Set | H⊆T) →
  
  lemma Subset_Forward() {
    assert(cl(H) ⊆ cl(cl(H))) →
    apply(Set_is_Subset_of_Closure)
  } →

  lemma Subset_Backward() {
    assert(∀x ∈ cl(cl(H)) ⇒ x ∈ cl(H)) →
    setVar(x: Point | x ∈ cl(cl(H))) →
    apply(Condition_for_Point_in_Closure) →
    assert(∀U:Open | x∈U ⇒ U∩cl(H)≠∅) →
    setVar(y: Point | y∈cl(H)) →
    assert(∀U:Open | y∈U ⇒ U∩H≠∅) →
    conclude(x ∈ cl(H)) →
    conclude(cl(cl(H)) ⊆ cl(H))
  } →
  
  apply(Subset_Forward()) →
  apply(Subset_Backward()) →
  apply(Set_Equality_Definition) →
  conclude(cl(cl(H)) = cl(H))
}