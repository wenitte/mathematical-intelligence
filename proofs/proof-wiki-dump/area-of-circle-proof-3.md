theorem Circle_Area() {
  assert(
    ∀r ∈ ℝ⁺ ⇒ (A = πr²)
    where A is_area_of circle_with_radius(r)
  )
} ↔

proof Circle_Area() {
  construct(
    circle(r) → c := circumference,
    C := area_of_circle,
    triangle(height: r, base: c) → T := area_of_triangle
  ) →
  
  lemma Triangle_Area() {
    assert(T = πr²)
  } →
  
  lemma Upper_Bound() {
    assert(T ≥ C)
  } →
  
  lemma Lower_Bound() {
    assert(T ≤ C)
  } →
  
  apply(Upper_Bound()) ∧ apply(Lower_Bound()) →
  assert(T ≥ C ∧ T ≤ C) →
  conclude(T = C) →
  
  apply(Triangle_Area()) →
  substitute(T = C) →
  conclude(C = πr²)
}

historical_note() {
  attribute(
    author: "Archimedes",
    work: "Measurement of a Circle",
    date: "~250 BCE"
  )
}