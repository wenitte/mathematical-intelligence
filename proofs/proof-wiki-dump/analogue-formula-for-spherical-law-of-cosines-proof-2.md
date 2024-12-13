theorem SphericalAnalogueFormula() {
  assert(
    ∀triangle(ABC) ∈ SphereO ∧
    sides(a,b,c) ↔ angles_at_O(a,b,c) ∧
    opposite(a,A) ∧ opposite(b,B) ∧ opposite(c,C) ⇒
    (sin(a)cos(B) = cos(b)sin(c) - sin(b)cos(c)cos(A)) ∧
    (sin(a)cos(C) = cos(c)sin(b) - sin(c)cos(b)cos(A))
  )
}

proof SphericalAnalogueFormula() {
  case c_less_than_pi_half() {
    assume(c < π/2) →
    construct(
      arc(BA) → point(D) |
      BD = π/2
    ) →
    assert(AD = π/2 - c) →
    assert(∠CAD = π - A) →
    construct(arc(CD) as x) →
    
    lemma Triangle_DAC() {
      apply(SphericalLawOfCosines) →
      assert(
        cos(x) = cos(π/2 - c)cos(b) + sin(π/2 - c)sin(b)cos(π - A) →
        cos(x) = sin(c)cos(b) - cos(c)sin(b)cos(A)
      )
    } →
    
    lemma Triangle_DBC() {
      apply(SphericalLawOfCosines) →
      assert(
        cos(x) = cos(π/2)cos(a) + sin(π/2)sin(a)cos(B) →
        cos(x) = sin(a)cos(B)
      )
    } →
    
    apply(Triangle_DAC()) ∧ apply(Triangle_DBC()) →
    assert(sin(a)cos(B) = sin(c)cos(b) - cos(c)sin(b)cos(A))
  }
  
  case c_greater_than_pi_half() {
    assume(c > π/2) →
    assert(similar_construction_applies) →
    assert(result_holds)
  }
}