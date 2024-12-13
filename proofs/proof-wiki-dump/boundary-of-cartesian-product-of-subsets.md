theorem Boundary_Product() {
  assert(
    ∀T₁(S₁,τ₁), T₂(S₂,τ₂) [TopologicalSpaces] ∧
    ∀T(T₁×T₂,τ) [ProductSpace] ∧
    ∀H⊆T₁, K⊆T₂ ⇒
    ∂(H×K) = (∂H×cl(K)) ∪ (cl(H)×∂K)
  )
} ↔

proof Boundary_Product() {
  setDef(∂X ≡ cl(X)∖int(X)) →
  setDef(cl(A×B) ≡ cl(A)×cl(B)) →
  setDef(int(A×B) ≡ int(A)×int(B)) →

  assert(
    ∂(H×K) = cl(H×K)∖int(H×K)
  ) [ByBoundaryDef] →

  assert(
    cl(H×K)∖int(H×K) = (cl(H)×cl(K))∖int(H×K)
  ) [ByProductClosure] →

  assert(
    (cl(H)×cl(K))∖int(H×K) = (cl(H)×cl(K))∖(int(H)×int(K))
  ) [ByProductInterior] →

  assert(
    (cl(H)×cl(K))∖(int(H)×int(K)) = 
    (cl(H)×(cl(K)∖int(K))) ∪ ((cl(H)∖int(H))×cl(K))
  ) [BySetDifference] →

  assert(
    (cl(H)×(cl(K)∖int(K))) ∪ ((cl(H)∖int(H))×cl(K)) =
    (∂H×cl(K)) ∪ (cl(H)×∂K)
  ) [ByBoundaryDef]
}