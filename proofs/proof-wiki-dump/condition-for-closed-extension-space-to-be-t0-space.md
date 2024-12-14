theorem Closed_Extension_T0_Equivalence() {
  assert(
    let T = ⟨S,τ⟩ ∧
    let T*_p = ⟨S*_p,τ*_p⟩ ∧
    isClosedExtensionSpace(T*_p, T) ⇒
    (isT0Space(T*_p) ↔ isT0Space(T))
  )
}

proof Closed_Extension_T0_Equivalence() {
  setDef(τ*_p = {U ∪ {p}: U ∈ τ} ∪ {∅}) →
  
  lemma Forward_Direction() {
    assume(isT0Space(T)) →
    assert(∀x,y ∈ S: x ≠ y ⇒ 
      (∃U ∈ τ: x ∈ U ∧ y ∉ U) ∨ 
      (∃U ∈ τ: y ∈ U ∧ x ∉ U)) →
    
    case1(x,y ∈ S*_p ∧ x ≠ y ∧ x ≠ p ∧ y ≠ p) {
      let U* = U ∪ {p} →
      assert((x ∈ U* ∧ y ∉ U*) ∨ (y ∈ U* ∧ x ∉ U*))
    } →
    
    case2(x ∈ S*_p ∧ x ≠ p) {
      assert({p} ∈ τ*_p ∧ p ∈ {p} ∧ x ∉ {p})
    } →
    
    conclude(isT0Space(T*_p))
  } →

  lemma Reverse_Direction() {
    assume(¬isT0Space(T)) →
    assert(∃x,y ∈ S: x ≠ y ∧
      (∀U ∈ τ: x ∈ U ⇒ y ∈ U) ∧
      (∀U ∈ τ: y ∈ U ⇒ x ∈ U)) →
    
    setVar(U* = U ∪ {p}) →
    assert(∀U ∈ τ: 
      (x ∈ U* ⇒ y ∈ U*) ∧
      (y ∈ U* ⇒ x ∈ U*)) →
    
    conclude(¬isT0Space(T*_p))
  } →
  
  conclude(isT0Space(T*_p) ↔ isT0Space(T))
}