theorem ComplexRoots4thUnity() {
  assert(
    U₄ = {z ∈ ℂ : z⁴ = 1} = {1, i, -1, -i}
  )
} ↔

proof ComplexRoots4thUnity() {
  setDef(U₄ := {z ∈ ℂ : z⁴ = 1}) →
  
  lemma FirstRoot() {
    setVar(α := e^{2πi/4}) →
    assert(α = e^{iπ/2}) →
    assert(α = cos(π/2) + i·sin(π/2)) →
    assert(α = 0 + i·1) →
    assert(α = i)
  } →
  
  lemma ZerothRoot() {
    assert(e^{0·iπ/4} = e⁰) →
    assert(e⁰ = 1)
  } →
  
  lemma RemainingRoots() {
    apply(FirstRoot()) →
    setVar(α = i) →
    assert(α² = i² = -1) →
    assert(α³ = α² · α) →
    assert(α³ = (-1) · i) →
    assert(α³ = -i)
  } →
  
  apply(FirstRoot()) ∧
  apply(ZerothRoot()) ∧
  apply(RemainingRoots()) →
  
  assert(U₄ = {1, i, -1, -i})
}