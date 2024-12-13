theorem Asymmetric_Implies_Antireflexive() {
  assert(
    ∀S: Set,
    ∀R ⊆ (S × S),
    isAsymmetric(R) → isAntireflexive(R)
  )
} ↔

proof Asymmetric_Implies_Antireflexive() {
  setVar(S: Set) →
  setVar(R ⊆ (S × S)) →
  assume(isAsymmetric(R)) →
  
  def(isAsymmetric) {
    assert(∀x,y ∈ S: (x,y) ∈ R → (y,x) ∉ R)
  } →

  proof_by_contradiction() {
    assume(¬isAntireflexive(R)) →
    assert(∃x ∈ S: (x,x) ∈ R) →
    
    setVar(x₀ ∈ S: (x₀,x₀) ∈ R) →
    
    assert((x₀,x₀) ∈ R) →
    apply(isAsymmetric, {x=x₀, y=x₀}) →
    assert((x₀,x₀) ∉ R) →
    
    contradiction() {
      assert((x₀,x₀) ∈ R ∧ (x₀,x₀) ∉ R)
    }
  } →
  
  conclude(isAntireflexive(R))
}