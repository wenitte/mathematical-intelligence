theorem BabylonianTriangleDivision() {
  assert(
    ∃triangle(ABC) ∧ 
    ∃d,a ∈ ℝ⁺ ∧
    area(ABC) = 11*60 + 22.5 ∧
    divisions = 6 ∧
    ∀i∈[1..6]: shares[i] parallel_to a →
    (∀j∈[1..5]: shares[j] - shares[j+1] = 37 + 11/12)
  )
} ↔

proof BabylonianTriangleDivision() {
  setVar(ABC: Triangle, d,a: ℝ⁺) →
  setVar(A₁,A₂,...,A₆: Areas) →
  setVar(a₁,a₂,...,a₅: Lines) →
  
  assert(area(ABC) = ½ * k * d * a where k = sin(∠CAB)) →
  
  lemma AreaFormulas() {
    assert(
      A₁ = ((a + a₁) * k * d)/(2*6) ∧
      ∀j∈[2..5]: Aⱼ = ((aⱼ + aⱼ₋₁) * k * d)/(2*6) ∧
      A₆ = (a₅ * k * d)/(2*6)
    )
  } →
  
  lemma LinePositions() {
    assert(
      ∀j∈[1..5]: aⱼ = a * (1 - j/6)
    )
  } →
  
  apply(AreaFormulas(), LinePositions()) →
  assert(
    ∀j∈[2..6]: Aⱼ₋₁ - Aⱼ = 
    ((aⱼ₋₂ - aⱼ) * k * d)/(2*6) = 
    (a * k * d)/36 = 
    area(ABC)/18
  ) →
  
  assert(area(ABC) = 11*60 + 22.5) →
  assert(area(ABC)/18 = 682/18 + 1/36) →
  assert(682/18 + 1/36 = 37 + 11/12) →
  conclude(∀j∈[1..5]: shares[j] - shares[j+1] = 37 + 11/12)
}