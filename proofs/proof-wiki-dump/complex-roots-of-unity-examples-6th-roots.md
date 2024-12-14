theorem SixthRootsOfUnity() {
  assert(
    U₆ = {z ∈ ℂ : z⁶ = 1} ↔ {1, e^{iπ/3}, e^{2iπ/3}, -1, e^{4iπ/3}, e^{5iπ/3}}
  )
} ↔

proof SixthRootsOfUnity() {
  setVar(α = e^{2πi/6}: ℂ) →
  
  lemma FirstRoot() {
    assert(α = e^{iπ/3}) →
    assert(e^{iπ/3} = cos(π/3) + i·sin(π/3)) →
    assert(cos(π/3) = 1/2 ∧ sin(π/3) = √3/2) →
    conclude(α = 1/2 + i·√3/2)
  } →

  lemma SecondRoot() {
    assert(α² = (1/2 + i·√3/2)²) →
    assert(α² = 1/4 + i·√3/2 - 3/4) →
    conclude(α² = -1/2 + i·√3/2)
  } →

  lemma ThirdRoot() {
    assert(α³ = e^{iπ}) →
    conclude(α³ = -1)
  } →

  lemma FourthRoot() {
    assert(α⁴ = conj(α²)) →
    assert(conj(-1/2 + i·√3/2) = -1/2 - i·√3/2) →
    conclude(α⁴ = -1/2 - i·√3/2)
  } →

  lemma FifthRoot() {
    assert(α⁵ = conj(α)) →
    assert(conj(1/2 + i·√3/2) = 1/2 - i·√3/2) →
    conclude(α⁵ = 1/2 - i·√3/2)
  } →

  lemma ZerothRoot() {
    assert(α⁰ = e⁰) →
    conclude(α⁰ = 1)
  } →

  apply(FirstRoot(), SecondRoot(), ThirdRoot(), FourthRoot(), FifthRoot(), ZerothRoot()) →
  conclude(U₆ = {1, 1/2 + i·√3/2, -1/2 + i·√3/2, -1, -1/2 - i·√3/2, 1/2 - i·√3/2})
}