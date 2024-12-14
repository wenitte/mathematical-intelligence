theorem Singleton_Closure_Lower_Closure() {
  assert(
    ∀T ∈ TopologicalLattice(Scott) ∧
    ∀x ∈ T.S →
    ({x}⁻ = x^⪯)
  )
} ↔

proof Singleton_Closure_Lower_Closure() {
  setVar(T: TopologicalLattice(Scott)) →
  setVar(x: T.S) →
  
  lemma Lower_Closure_Directed_Suprema() {
    assert(x^⪯ isClosedUnder DirectedSuprema)
  } →
  
  lemma Lower_Closure_Singleton() {
    assert({x^⪯} = x^⪯)
  } →
  
  lemma Lower_Closure_Section() {
    assert(x^⪯ isLowerSection)
  } →
  
  apply(Scott_Closed_Set_Characterization()) →
  assert(x^⪯ isClosed) →
  
  assert(x ∈ x^⪯) by(LowerClosure_Reflexivity) →
  assert({x} ⊆ x^⪯) by(Singleton_Subset) →
  
  lemma Minimal_Closed_Set() {
    assert(
      ∀C ∈ ClosedSets(T) →
      ({x} ⊆ C → x^⪯ ⊆ C)
    ) ↔
    
    proof Minimal_Closed_Set() {
      setVar(C: ClosedSets(T)) →
      assume({x} ⊆ C) →
      apply(Scott_Closed_Set_Characterization()) →
      assert(C isLowerSection) →
      
      setVar(y: x^⪯) →
      assert(y ⪯ x) by(LowerClosure_Definition) →
      assert(x ∈ C) by(Singleton_Element) →
      assert(y ∈ C) by(LowerSection_Definition)
    }
  } →
  
  assert({x}⁻ = x^⪯) by(Closure_Definition, Minimal_Closed_Set)
}