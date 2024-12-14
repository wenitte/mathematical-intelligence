theorem Closed_Extension_Not_Hausdorff() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ IsTopologicalSpace(T)) ∧
    ∀T*_p(T*_p = ⟨S*_p,τ*_p⟩ ∧ IsClosedExtensionSpace(T*_p,T)) 
    ⇒ ¬IsHausdorff(T*_p)
  )
} ↔

proof Closed_Extension_Not_Hausdorff() {
  assume(IsHausdorff(T*_p)) →
  
  lemma T2_Implies_T1() {
    assert(
      ∀X(IsHausdorff(X) ⇒ IsT1Space(X))
    )
  } →
  
  apply(T2_Implies_T1()) →
  assert(IsT1Space(T*_p)) →
  
  lemma Closed_Extension_Not_T1() {
    assert(
      ∀T*_p(IsClosedExtensionSpace(T*_p) ⇒ ¬IsT1Space(T*_p))
    )
  } →
  
  apply(Closed_Extension_Not_T1()) →
  assert(¬IsT1Space(T*_p)) →
  
  assert(IsT1Space(T*_p) ∧ ¬IsT1Space(T*_p)) →
  assert(contradiction) →
  
  conclude(¬IsHausdorff(T*_p))
}