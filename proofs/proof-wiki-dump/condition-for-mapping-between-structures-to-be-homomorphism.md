theorem MappingHomomorphismCondition() {
  assert(
    ∀A,B [
      (isStructure(⟨A,⊙⟩) ∧ isStructure(⟨B,⊛⟩) ∧ areMagmas(A,B)) ∧
      let(⟨A×B,⊗⟩ = externalDirectProduct(⟨A,⊙⟩, ⟨B,⊛⟩)) ∧
      ∃φ[φ: A→B ∧ φ⊆(A×B)]
    ] ⇒
    (isHomomorphism(φ) ↔ isSubmagma(⟨φ,⊗_φ⟩, ⟨A×B,⊗⟩))
  )
}

proof MappingHomomorphismCondition() {
  // Forward direction
  assume(isHomomorphism(φ)) →
  let(⟨a,b⟩,⟨c,d⟩ ∈ A×B) →
  assume(⟨a,b⟩ ∈ φ ∧ ⟨c,d⟩ ∈ φ) →
  
  assert(φ(a) = b) by mappingDef →
  assert(φ(c) = d) by mappingDef →
  
  assert(φ(a⊙c) = b⊛d) by homomorphismDef →
  assert(⟨a⊙c, b⊛d⟩ ∈ φ) by mappingDef →
  assert(⟨a,b⟩⊗_φ⟨c,d⟩ ∈ φ) by directProductDef →
  
  conclude(isSubmagma(⟨φ,⊗_φ⟩, ⟨A×B,⊗⟩)) by closureProperty →

  // Reverse direction
  assume(isSubmagma(⟨φ,⊗_φ⟩, ⟨A×B,⊗⟩)) →
  let(⟨a,b⟩,⟨c,d⟩ ∈ φ) →
  assert(⟨a,b⟩⊗_φ⟨c,d⟩ ∈ φ) by submagmaProperty →
  assert(φ(a⊙c) = b⊛d) by directProductDef →
  conclude(isHomomorphism(φ))
}