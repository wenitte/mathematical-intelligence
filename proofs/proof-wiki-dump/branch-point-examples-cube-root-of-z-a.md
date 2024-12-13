theorem BranchPoint_CubeRoot() {
  let f: ℂ → ℂ
  let a ∈ ℂ
  assert(
    ∀z ∈ ℂ: f(z) = (z - a)^(1/3) →
    IsBranchPoint(f, a)
  )
} ↔

proof BranchPoint_CubeRoot() {
  lemma SingleValueAtA() {
    setVar(z := a) →
    assert(f(a) = (a - a)^(1/3)) →
    assert(f(a) = 0)
  } →
  
  lemma MultipleValuesInNeighborhood() {
    assert(∀ε > 0: ∃z ∈ N_ε(a)) →
    define(N_ε(a) := {z ∈ ℂ: |z - a| < ε}) →
    
    lemma CubeRootsOfUnity() {
      assert(e^(0iπ/3) = 1) ∧
      assert(e^(2iπ/3) = -1/2 + (i√3)/2) ∧
      assert(e^(4iπ/3) = -1/2 - (i√3)/2)
    } →
    
    setVar(z := ε + a) →
    assert(f(ε + a) = ((ε + a) - a)^(1/3)) →
    assert(f(ε + a) = ε^(1/3)) →
    assert(ε = e^(ln(ε))) →
    
    assert(
      f(ε + a) = {
        e^((1/3)ln(ε)) × 1,
        e^((1/3)ln(ε)) × (-1/2 + (i√3)/2),
        e^((1/3)ln(ε)) × (-1/2 - (i√3)/2)
      }
    )
  } →
  
  apply(SingleValueAtA()) ∧
  apply(MultipleValuesInNeighborhood()) →
  assert(IsBranchPoint(f, a))
}