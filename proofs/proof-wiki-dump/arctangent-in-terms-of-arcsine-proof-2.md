theorem Arctangent_Arcsine_Equality() {
  assert(
    ∀x ∈ ℝ ⇒ arctan(x) = arcsin(x/√(1 + x²))
  )
} ↔

proof Arctangent_Arcsine_Equality() {
  lemma Pfaff_Transform() {
    assert(
      ∀(a,b,c,x) ∈ ℝ⁴ ⇒ 
      F(a,b;c;x) = (1-x)⁻ᵃ F(a,c-b;c;x/(x-1))
    )
  } →

  setVar(x: ℝ) →
  
  assert(
    arctan(x) = x·F(1/2,1;3/2;-x²)
  ) →
  
  apply(Pfaff_Transform()) →
  
  assert(
    x·F(1/2,1;3/2;-x²) = 
    x·(1-(-x²))⁻¹/² F(1/2,3/2-1;3/2;(-x²)/((-x²)-1))
  ) →
  
  assert(
    = x/√(1+x²) · F(1/2,1/2;3/2;x²/(1+x²))
  ) →
  
  lemma Arcsine_Hypergeometric() {
    assert(
      ∀t ∈ ℝ ⇒
      arcsin(t) = t·F(1/2,1/2;3/2;t²)
    )
  } →
  
  apply(Arcsine_Hypergeometric()) →
  
  assert(
    = arcsin(x/√(1+x²))
  )
}