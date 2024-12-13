theorem Triangle_Area() {
  assert(
    ∀triangle(ABC) ∧ ∀sides(a,b,c) ∧ ∀altitudes(h_a,h_b,h_c) ⇒
    (c·h_c)/2 = (b·h_b)/2 = (a·h_a)/2
  )
} ↔

proof Triangle_Area() {
  setVar(ABC: triangle) →
  setVar(D: point) →
  construct(parallelogram(ABDC)) →
  
  lemma Parallelogram_Properties() {
    assert(triangle(ABC) ≅ triangle(DCB)) ∧
    assert(area(ABC) = area(DCB))
  } →
  
  lemma Parallelogram_Area() {
    assert(
      area(ABCD) = base·height ⇒
      area(ABCD) = c·h_c
    )
  } →
  
  apply(Parallelogram_Properties()) →
  apply(Parallelogram_Area()) →
  
  assert(area(ABCD) = c·h_c) →
  assert(2·area(ABC) = c·h_c) →
  assert(area(ABC) = (c·h_c)/2) →
  
  lemma Similar_For_Other_Sides() {
    assert(
      area(ABC) = (b·h_b)/2 ∧
      area(ABC) = (a·h_a)/2
    )
  } →
  
  apply(Similar_For_Other_Sides()) →
  assert((c·h_c)/2 = (b·h_b)/2 = (a·h_a)/2)
}