theorem Altitudes_Bisect_Orthic_Angles() {
  assert(
    ∀ABC ∈ Triangle ∧
    ∀DEF ∈ OrthicTriangle(ABC) ⇒
    Altitudes(ABC) = AngleBisectors(DEF)
  )
} ↔

proof Altitudes_Bisect_Orthic_Angles() {
  setVar(ABC: Triangle, DEF: OrthicTriangle(ABC)) →
  
  lemma Similar_Triangles() {
    assert(
      ∠FAC = ∠BAE ∧
      ∠AFC = ∠AEB = 90° ⇒
      Similar(△ABE, △ACF)
    )
  } →
  
  apply(Similar_Triangles()) →
  assert(∠ABE = ∠ACF) →
  
  lemma Cyclic_BFHD() {
    assert(
      ∠BFH = 90° ∧
      ∠BDH = 90° ⇒
      Cyclic(BFHD)
    )
  } →
  
  apply(Cyclic_BFHD()) →
  assert(∠FBH = ∠FDH) →
  
  lemma Cyclic_DHEC() {
    assert(
      ∠DHE = 90° ∧
      ∠DCE = 90° ⇒
      Cyclic(DHEC)
    )
  } →
  
  apply(Cyclic_DHEC()) →
  assert(∠HDE = ∠HCE) →
  
  assert(∠FBH = ∠ABE) →
  assert(∠HCE = ∠ACF) →
  assert(∠FDH = ∠HDE) →
  
  conclude(
    ∠FDH = ∠HDE ⇒
    AD = AngleBisector(∠FDE)
  ) →
  
  apply(
    SimilarArgument(BE) ∧
    SimilarArgument(CF)
  ) →
  
  assert(
    Altitudes(ABC) = AngleBisectors(DEF)
  )
}