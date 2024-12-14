theorem CartesianProductBijection() {
  assert(
    ∀S,A,B[
      isAlgebraicStructure(S,∘) ∧
      isSubstructure(A,S) ∧ 
      isSubstructure(B,S) ∧
      φ: A×B → S ∧
      (∀a∈A, b∈B: φ(a,b) = a∘b)
    ] ⇒
    [isBijection(φ) ↔ ∀s∈S ∃!⟨a,b⟩∈A×B: s = a∘b]
  )
} ↔

proof CartesianProductBijection() {
  // Initial Setup
  assert(A×B ⊆ S) →
  assert(∀⟨a,b⟩∈A×B: ∃s∈S: s = a∘b = φ(a,b)) →

  // Forward Direction
  lemma Sufficient() {
    assume(isBijection(φ)) →
    assert(isSurjective(φ) ∧ isInjective(φ)) →
    assert(S ⊆ A×B) →
    assert(S = A×B) →
    
    // Uniqueness
    setVar(a₁,b₁,a₂,b₂: A×B) →
    assert(φ(a₁,b₁) = φ(a₂,b₂) ⇒ ⟨a₁,b₁⟩ = ⟨a₂,b₂⟩) →
    assert(a₁ = a₂ ∧ b₁ = b₂) →
    assert(∀s∈S ∃!⟨a,b⟩∈A×B: s = a∘b)
  } →

  // Reverse Direction
  lemma Necessary() {
    assume(∀s∈S ∃!⟨a,b⟩∈A×B: s = a∘b) →
    
    // Surjectivity
    assert(∀s∈S ∃⟨a,b⟩∈A×B: s = φ(a,b)) →
    
    // Injectivity
    setVar(a,b,c,d: A×B) →
    assert(φ(a,b) = φ(c,d) ⇒ a∘b = c∘d) →
    assert(uniqueFactorization ⇒ ⟨a,b⟩ = ⟨c,d⟩) →
    assert(isInjective(φ)) →
    assert(isSurjective(φ) ∧ isInjective(φ) ⇒ isBijection(φ))
  } →
  
  apply(Sufficient()) ∧ apply(Necessary())
}