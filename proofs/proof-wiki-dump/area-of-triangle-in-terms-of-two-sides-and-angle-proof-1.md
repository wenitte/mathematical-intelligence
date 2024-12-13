theorem Triangle_Area() {
  assert(
    ∀ABC ∈ Triangle ⇒ 
    Area(ABC) = (1/2)ab·sin(C)
    where(
      a,b: sides,
      C: angle_opposite_third_side
    )
  )
} ↔

proof Triangle_Area() {
  setVar(ABC: Triangle) →
  setVar(h: height, c,p,q: segments) →
  
  assert(Area(ABC) = (1/2)h·c) by(Triangle_Area_Height_Base) →
  
  assert(c = p + q) →
  assert(Area(ABC) = (1/2)h·(p + q)) →
  
  assert(p/a = sin(α)) ∧ assert(h/b = sin(β)) ∧
  assert(h/a = cos(α)) ∧ assert(q/b = cos(β)) →
  
  assert(Area(ABC) = (1/2)ab·(sin(α)cos(β) + cos(α)sin(β))) →
  
  lemma Sine_Sum() {
    assert(sin(α + β) = sin(α)cos(β) + cos(α)sin(β))
  } →
  
  apply(Sine_Sum()) →
  assert(Area(ABC) = (1/2)ab·sin(α + β)) →
  
  assert(α + β = C) →
  assert(Area(ABC) = (1/2)ab·sin(C))
}