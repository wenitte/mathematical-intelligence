theorem Composite_Connected_Not_Necessarily_Connected() {
  assert(
    ∀A: Set ∧ ∀R,S ⊆ A×A ∧ 
    is_connected(R) ∧ is_connected(S) ∧
    ¬(∀R,S: is_connected(R∘S))
  )
} ↔

proof Composite_Connected_Not_Necessarily_Connected() {
  lemma Relation_Composition_Definition() {
    assert(
      ∀R₁ ⊆ S₁×T₁, R₂ ⊆ S₂×T₂ →
      R₂ ∘ R₁ = {(x,z) ∈ S₁×T₂ | ∃y ∈ S₂∩T₁: (x,y) ∈ R₁ ∧ (y,z) ∈ R₂}
    )
  } →

  counterexample() {
    setVar(A = {a,b,c}) →
    setVar(R = {(a,b), (b,c), (c,a)}) →
    setVar(S = R⁻¹ = {(b,a), (c,b), (a,c)}) →
    
    assert(is_connected(R)) →
    assert(is_connected(S)) →
    
    compute(R ∘ S = {(a,a), (b,b), (c,c)}) →
    
    assert(¬is_connected(R ∘ S)) →
    conclude(∃R,S: is_connected(R) ∧ is_connected(S) ∧ ¬is_connected(R ∘ S))
  }
}