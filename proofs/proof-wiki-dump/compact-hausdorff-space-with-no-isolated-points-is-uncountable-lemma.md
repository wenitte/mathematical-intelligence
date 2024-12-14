theorem Hausdorff_NoIsolated_OpenSubset() {
  assert(
    ∀T(Hausdorff_Space(T) ∧ NoIsolatedPoints(T)) ∧
    ∀U(U ⊆ S ∧ Open(U) ∧ ¬Empty(U)) ∧
    ∀x(x ∈ S) 
    ⇒ 
    ∃V(V ⊆ U ∧ Open(V) ∧ ¬Empty(V) ∧ x ∉ Closure(V))
  )
}

proof Hausdorff_NoIsolated_OpenSubset() {
  setVar(T: Hausdorff_Space) →
  setVar(U: OpenSet(T)) →
  setVar(x: Element(S)) →
  
  lemma Find_Distinct_Point() {
    assert(x ∈ U ∨ x ∉ U) →
    case x ∈ U {
      assert(¬IsIsolated(x)) →
      conclude(∃y(y ∈ U ∧ y ≠ x))
    } →
    case x ∉ U {
      assert(¬Empty(U)) →
      setVar(y: Element(U)) →
      conclude(y ∈ U ∧ y ≠ x)
    } →
    conclude(∃y(y ∈ U ∧ y ≠ x))
  } →
  
  apply(Find_Distinct_Point()) →
  setVar(y: Element(U), y ≠ x) →
  
  lemma Hausdorff_Separation() {
    assert(Hausdorff_Space(T)) →
    conclude(∃V(Open(V) ∧ y ∈ V ∧ x ∉ Closure(V)))
  } →
  
  apply(Hausdorff_Separation()) →
  setVar(V: OpenSet(T)) →
  assert(V ⊆ U ∧ ¬Empty(V) ∧ x ∉ Closure(V))
}