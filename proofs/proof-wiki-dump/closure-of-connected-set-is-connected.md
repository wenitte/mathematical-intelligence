theorem Closure_Connected() {
  assert(
    ∀T: TopologicalSpace ∧
    ∀H ⊆ T ∧
    isConnected(H) ∧
    let H⁻ = closure(H,T) ⇒
    isConnected(H⁻)
  )
}

proof Closure_Connected() {
  setVar(T: TopologicalSpace) →
  setVar(H: Set) →
  assume(H ⊆ T) →
  assume(isConnected(H)) →
  setVar(H⁻: Set = closure(H,T)) →
  
  lemma Set_Subset_Self() {
    assert(H ⊆ H⁻)
  } →
  
  lemma Between_Connected_Closure() {
    assert(
      ∀K: Set ∧ 
      H ⊆ K ∧ 
      K ⊆ H⁻ ⇒
      isConnected(K)
    )
  } →
  
  apply(Set_Subset_Self()) →
  apply(Between_Connected_Closure(), K = H⁻) →
  assert(isConnected(H⁻))
}