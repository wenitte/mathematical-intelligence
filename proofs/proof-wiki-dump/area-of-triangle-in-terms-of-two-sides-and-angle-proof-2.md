theorem Triangle_Area() {
  assert(
    ∀a,b ∈ ℝ⁺, ∀C ∈ (0,π) ⇒
    Area(ABC) = (1/2)ab·sin(C)
    where(
      a,b: sides_of_triangle,
      C: angle_opposite_third_side
    )
  )
} ↔

proof Triangle_Area() {
  setVar(a,b: ℝ⁺, C: (0,π)) →
  lemma Height_From_Sine() {
    assert(
      h = b·sin(C)
      where(h: height_to_base_a)
    )
  } →
  apply(Height_From_Sine()) →
  lemma Triangle_Area_Base_Height() {
    assert(
      Area(ABC) = (1/2)·a·h
      where(h: height_to_base_a)
    )
  } →
  apply(Triangle_Area_Base_Height()) →
  substitute(h = b·sin(C)) →
  assert(
    Area(ABC) = (1/2)·a·(b·sin(C)) →
    Area(ABC) = (1/2)ab·sin(C)
  )
}