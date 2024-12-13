theorem Triangle_Area_Isosceles() {
  assert(
    ∀triangle(ABC) ∈ Isosceles ∧
    ∀θ ∈ ℝ[apex_angle] ∧
    ∀r ∈ ℝ⁺[leg_length] ⇒
    Area(ABC) = (1/2)r²sin(θ)
  )
}

proof Triangle_Area_Isosceles_1() {
  setVar(A: Area) →
  assert(A = (1/2)bh) by(Triangle_Area_Base_Height) →
  assert(h = r·cos(θ/2)) by(Cosine_Definition) →
  assert(b = 2r·sin(θ/2)) by(Sine_Definition) →
  assert(A = (1/2)(2r·sin(θ/2))(r·cos(θ/2))) →
  assert(A = r²·sin(θ/2)·cos(θ/2)) →
  assert(A = (1/2)r²·sin(θ)) by(Double_Angle_Formula)
}

proof Triangle_Area_Isosceles_2() {
  setVar(A: Area) →
  lemma Triangle_Area_Two_Sides() {
    assert(A = (1/2)ab·sin(θ))
  } →
  apply(Triangle_Area_Two_Sides()) →
  assert(a = r ∧ b = r) by(Isosceles_Definition) →
  assert(A = (1/2)r²·sin(θ))
}