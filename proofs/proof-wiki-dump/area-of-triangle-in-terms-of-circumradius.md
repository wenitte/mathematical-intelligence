theorem Triangle_Area_Circumradius() {
  assert(
    ∀triangle(ABC) ∧ ∀sides(a,b,c) ∧ ∀vertices(A,B,C) ∧ ∀circumradius(R) ⇒
    Area(ABC) = (a*b*c)/(4*R)
  )
}

proof Triangle_Area_Circumradius_1() {
  setVar(O: circumcenter(ABC)) →
  setVar(E: perpendicular_foot(C,AB)) →
  setVar(h: length(CE)) →
  
  assert(Area(ABC) = (c*h)/2) →
  
  lemma Height_Area_Relation() {
    assert(h = 2*Area(ABC)/c)
  } →
  
  setVar(D: diameter_point(C,O)) →
  assert(CD = 2*R) →
  assert(angle(CAD) = 90°) by Thales_Theorem() →
  assert(angle(ADC) = angle(ABC)) by Equal_Arc_Angles() →
  assert(angle(ACD) = angle(ECB)) by Triangle_Angle_Sum() →
  assert(similar(triangle(DAC), triangle(BEC))) →
  
  assert(CA/CD = CE/CB) →
  assert(b/(2*R) = h/a) →
  assert(b/(2*R) = 2*Area(ABC)/(a*c)) by Height_Area_Relation() →
  assert(Area(ABC) = (a*b*c)/(4*R))
}

proof Triangle_Area_Circumradius_2() {
  assert(2*R = a/sin(A)) by Law_of_Sines() →
  assert(2*R = (a*b*c)/(b*c*sin(A))) →
  assert(2*R = (a*b*c)/(2*Area(ABC))) by Triangle_Area_Formula() →
  assert(R = (a*b*c)/(4*Area(ABC))) →
  assert(Area(ABC) = (a*b*c)/(4*R))
}