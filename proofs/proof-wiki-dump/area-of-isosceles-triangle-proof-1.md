theorem Isosceles_Triangle_Area() {
  assert(
    ∀triangle(ABC) ∧ isosceles(ABC) ∧
    ∃θ[angle(A)] ∧
    ∃r[length(leg)] →
    area(ABC) = (1/2)r²sin(θ)
  )
} ↔

proof Isosceles_Triangle_Area() {
  setVar(triangle: ABC, θ: angle(A), r: length(leg)) →
  letVar(A: area(ABC), b: base(ABC), h: height(ABC)) →
  
  assert(A = (1/2)bh) →  // Triangle area formula
  
  assert(h = r·cos(θ/2)) →  // Height using cosine
  
  assert(b = 2r·sin(θ/2)) →  // Base using sine for isosceles
  
  assert(
    A = (1/2)·(2r·sin(θ/2))·(r·cos(θ/2))
  ) →  // Substitute b and h
  
  lemma Double_Angle_Sine() {
    assert(sin(θ) = 2sin(θ/2)cos(θ/2))
  } →
  
  apply(Double_Angle_Sine()) →
  
  assert(A = (1/2)r²sin(θ))  // Final result
}