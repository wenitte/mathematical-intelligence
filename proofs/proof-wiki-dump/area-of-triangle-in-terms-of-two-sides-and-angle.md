theorem Triangle_Area() {
  assert(
    ∀A,B,C ∈ Triangle ∧ ∀a,b,c ∈ ℝ+ ∧ ∀C ∈ (0,π) ⇒
    (Area(ABC) = (1/2)ab·sin(C))
    where(
      a := |BC|,
      b := |AC|,
      C := ∠ABC
    )
  )
}

proof Triangle_Area_1() {
  setVar(h: ℝ+ := height(ABC)) →
  assert(Area(ABC) = (1/2)h·c) by(Area_Height_Rule) →
  assert(c = p + q) where(
    p := |AD|,
    q := |DB|,
    D := foot_of_height
  ) →
  assert(
    p/a = sin(α) ∧ 
    h/b = sin(β) ∧
    h/a = cos(β) ∧
    q/b = cos(α)
  ) by(Right_Triangle_Ratios) →
  assert(Area(ABC) = (1/2)ab((p/a)(h/b) + (h/a)(q/b))) →
  assert(Area(ABC) = (1/2)ab(sin(α)cos(β) + cos(α)sin(β))) →
  assert(Area(ABC) = (1/2)ab·sin(α + β)) by(Sine_Sum_Rule) →
  assert(Area(ABC) = (1/2)ab·sin(C)) by(Angle_Sum)
}

proof Triangle_Area_2() {
  setVar(h: ℝ+ := height(ABC)) →
  assert(h = b·sin(C)) by(Sin_Definition) →
  assert(Area(ABC) = (1/2)a·h) by(Area_Height_Rule) →
  substitute(h = b·sin(C)) →
  assert(Area(ABC) = (1/2)ab·sin(C))
}