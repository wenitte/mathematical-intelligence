theorem Bullseye_Illusion() {
  assert(
    ∀a ∈ ℝ⁺ ⇒ 
    (Area(Circle(3a)) = Area(Annulus(4a, 5a)))
  )
} ↔

proof Bullseye_Illusion() {
  setVar(a: ℝ⁺) →
  setVar(C: Circle(3a)) →
  setVar(A: Annulus(4a, 5a)) →
  
  assert(Area(C)) →
  compute(π(3a)²) →
  compute(9πa²) →
  
  assert(Area(A)) →
  compute(π((5a)² - (4a)²)) →
  compute(πa²(25 - 16)) →
  compute(9πa²) →
  
  conclude(Area(C) = Area(A)) →
  assert(Area(C) = Area(A) = 9πa²)
}