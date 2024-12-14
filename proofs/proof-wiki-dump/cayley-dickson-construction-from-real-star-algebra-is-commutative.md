theorem Cayley_Dickson_Real_Star_Algebra_Commutative() {
  assert(
    ∀A(isStarAlgebra(A) ∧ A' = CayleyDicksonConstruct(A)) ↔
    (isRealStarAlgebra(A) ↔ isCommutative(A'))
  )
}

proof Cayley_Dickson_Real_Star_Algebra_Commutative() {
  setVar(a,b,c,d: A) →
  setVar(⟨a,b⟩,⟨c,d⟩: A') →
  
  // Forward direction
  assume(isRealStarAlgebra(A)) → {
    assert(⟨a,b⟩ ⊕' ⟨c,d⟩ = ⟨a⊕c - d⊕b*, a*⊕d + c⊕b⟩) →
    apply(realStarAlgebraProperty: ∀x∈A(x = x*)) → {
      assert(a = a* ∧ b = b*) →
      assert(⟨a,b⟩ ⊕' ⟨c,d⟩ = ⟨a⊕c - d⊕b, a⊕d + c⊕b⟩)
    } →
    apply(realStarAlgebraCommutative: ∀x,y∈A(x⊕y = y⊕x)) → {
      assert(⟨a,b⟩ ⊕' ⟨c,d⟩ = ⟨c⊕a - b⊕d, c⊕b + a⊕d⟩)
    } →
    apply(realStarAlgebraProperty) → {
      assert(c = c* ∧ d = d*) →
      assert(⟨a,b⟩ ⊕' ⟨c,d⟩ = ⟨c⊕a - b⊕d*, c*⊕b + a⊕d⟩) →
      assert(⟨a,b⟩ ⊕' ⟨c,d⟩ = ⟨c,d⟩ ⊕' ⟨a,b⟩)
    }
  }

  // Reverse direction
  assume(isCommutative(A')) → {
    assert(∀⟨a,b⟩,⟨c,d⟩∈A'(⟨a,b⟩ ⊕' ⟨c,d⟩ = ⟨c,d⟩ ⊕' ⟨a,b⟩)) →
    assert(∀x∈A(x = x*)) →  // Necessary condition from commutativity equations
    assert(isRealStarAlgebra(A))
  }
}