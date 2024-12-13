theorem Triangle_Area() {
  assert(
    ∀triangle(ABC) ∧ ∀sides(a,b,c) ∧ ∀altitudes(h_a,h_b,h_c) ⇒
    (area(ABC) = (c·h_c)/2 = (b·h_b)/2 = (a·h_a)/2)
  )
} ↔

proof Triangle_Area() {
  construct(point D: parallelogram(ABDC)) →
  lemma Parallelogram_Congruence() {
    assert(triangle(ABC) ≅ triangle(DCB))
  } →
  lemma Parallelogram_Area() {
    assert(area(ABDC) = c·h_c)
  } →
  apply(Parallelogram_Congruence()) →
  assert(area(ABC) = area(DCB)) →
  apply(Parallelogram_Area()) →
  assert(
    2·area(ABC) = area(ABDC) = c·h_c
  ) →
  assert(area(ABC) = (c·h_c)/2)
} ↔

corollary Triangle_Area_Sine() {
  assert(
    ∀triangle(ABC) ∧ ∀sides(a,b,c) ∧ ∀angle(C) ⇒
    area(ABC) = (1/2)·a·b·sin(C)
  )
}