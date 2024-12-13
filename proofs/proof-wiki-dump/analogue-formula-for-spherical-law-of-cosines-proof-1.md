theorem Spherical_Analogue_Formula() {
  assert(
    ∀triangle ABC on sphere with center O,
    ∀sides a,b,c subtending angles at O ⇒
    (sin(a)cos(B) = cos(b)sin(c) - sin(b)cos(c)cos(A)) ∧
    (sin(a)cos(C) = cos(c)sin(b) - sin(c)cos(b)cos(A))
  )
}

proof Spherical_Analogue_Formula() {
  setVar(ABC: SphericalTriangle, O: Point, a,b,c: Angle) →
  
  lemma First_Identity() {
    assert(sin(c)sin(a)cos(B) = cos(b) - cos(c)cos(a)) by SphericalLawCosines →
    assert(
      sin(c)sin(a)cos(B) = 
      cos(b) - cos(c)(cos(b)cos(c) + sin(b)sin(c)cos(A))
    ) →
    assert(
      sin(c)sin(a)cos(B) =
      cos(b)(1 - cos²(c)) - sin(b)sin(c)cos(c)cos(A)
    ) →
    assert(
      sin(c)sin(a)cos(B) =
      sin²(c)cos(b) - sin(b)sin(c)cos(c)cos(A)
    ) by SumSquaresSineCosine →
    conclude(sin(a)cos(B) = sin(c)cos(b) - sin(b)cos(c)cos(A))
  }

  lemma Second_Identity() {
    assert(sin(a)sin(b)cos(C) = cos(c) - cos(a)cos(b)) by SphericalLawCosines →
    assert(
      sin(a)sin(b)cos(C) =
      cos(c) - cos(b)(cos(b)cos(c) + sin(b)sin(c)cos(A))
    ) →
    assert(
      sin(a)sin(b)cos(C) =
      cos(c)(1 - cos²(b)) - sin(b)sin(c)cos(b)cos(A)
    ) →
    assert(
      sin(a)sin(b)cos(C) =
      sin²(b)cos(c) - sin(b)sin(c)cos(b)cos(A)
    ) by SumSquaresSineCosine →
    conclude(sin(a)cos(C) = cos(b)sin(c) - sin(c)cos(b)cos(A))
  }

  apply(First_Identity()) ∧
  apply(Second_Identity()) →
  conclude()
}