theorem Area_Triangle_Inscribed_Parabola() {
  assert(
    ∀T: Parabola, ∀A,B,C: Point, ∀u,v: ℝ where
    T = {(x,y) | y = x²} ∧
    A = (u,u²) ∧ B = (v,v²) ∧ u > v ∧
    C.x = (u+v)/2 ∧ C ∈ T
    ⇒ Area(ABC) = (1/8)(u-v)³
  )
} ↔

proof Area_Triangle_Inscribed_Parabola() {
  setVar(O: Point = (0,0)) →
  assert(O ∈ T ∧ O = vertex(T)) →
  
  setVar(P: Point) →
  assert(P = midpoint(A,B)) →
  assert(P.x = (u+v)/2) →
  assert(P.y = (u²+v²)/2) →
  
  setVar(h: ℝ = (u-v)/2) →
  assert(height(APC) = height(BPC) = h) →
  
  setVar(b: ℝ) →
  assert(b = P.y - C.y) →
  assert(b = (u²+v²)/2 - (u+v)²/4) →
  assert(b = (2u²+2v²-(u+v)²)/4) →
  assert(b = (u²-2uv+v²)/4) →
  assert(b = (u-v)²/4) →
  
  lemma Equal_Triangles() {
    assert(
      base(APC) = base(BPC) ∧
      height(APC) = height(BPC)
      ⇒ Area(APC) = Area(BPC)
    )
  } →
  
  assert(Area(APC) = (1/2)hb) →
  assert(Area(APC) = (1/16)(u-v)³) →
  
  apply(Equal_Triangles()) →
  
  assert(Area(ABC) = Area(APC) + Area(BPC)) →
  assert(Area(ABC) = 2Area(APC)) →
  assert(Area(ABC) = (1/8)(u-v)³)
}