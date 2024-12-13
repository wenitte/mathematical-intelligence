theorem Triangle_Area_Exradius() {
  assert(
    ∀triangle ABC ∈ Triangles,
    let(a,b,c: sides(ABC)) ∧
    let(ρa: exradius_a(ABC)) ∧
    let(s: semiperimeter(ABC)) ⇒
    Area(ABC) = ρa(s-a)
  )
} ↔

proof Triangle_Area_Exradius() {
  setVar(C: excircle_a(ABC)) →
  setDef(ρa: radius(C)) →
  setDef(Ia: center(C)) →
  
  assert(Area(ABC) = Area(ABIa) + Area(ACIa) - Area(CBIa)) →
  
  lemma Triangle_Area_Side_Altitude() {
    assert(
      Area(ABIa) = (c·ρa)/2 ∧
      Area(ACIa) = (b·ρa)/2 ∧
      Area(CBIa) = (a·ρa)/2
    )
  } →
  
  apply(Triangle_Area_Side_Altitude()) →
  assert(Area(ABC) = (c·ρa)/2 + (b·ρa)/2 - (a·ρa)/2) →
  
  assert(Area(ABC) = ρa·(b+c+a)/2 - ρa·a) →
  
  lemma Semiperimeter_Definition() {
    assert(s = (a+b+c)/2)
  } →
  
  apply(Semiperimeter_Definition()) →
  assert(Area(ABC) = ρa·s - ρa·a) →
  assert(Area(ABC) = ρa(s-a))
}