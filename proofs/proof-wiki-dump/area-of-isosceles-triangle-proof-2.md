theorem Isosceles_Triangle_Area() {
  assert(
    ∀triangle(ABC) ∧
    isIsosceles(ABC, apex: A) ∧
    let(θ: angle(A)) ∧
    let(r: legLength(ABC)) →
    area(ABC) = (1/2)r²sin(θ)
  )
} ↔

proof Isosceles_Triangle_Area() {
  setTriangle(ABC) →
  setVar(θ: angle(A)) →
  setVar(r: legLength(ABC)) →
  lemma Triangle_Area_Two_Sides() {
    assert(
      ∀triangle(T) →
      area(T) = (1/2)ab·sin(γ)
      where(a,b: sideLength(T) ∧ γ: angleBetween(a,b))
    )
  } →
  apply(Triangle_Area_Two_Sides()) →
  assert(legLength(ABC) = r) →
  substitute(a = r ∧ b = r) →
  assert(area(ABC) = (1/2)r²sin(θ))
}