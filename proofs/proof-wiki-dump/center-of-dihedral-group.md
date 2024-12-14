theorem Center_Dihedral_Group() {
  assert(
    ∀n ∈ ℕ, n ≥ 3 ⇒
    let D_n = ⟨α, β: α^n = β^2 = e, βαβ = α^{-1}⟩ ∧
    let Z(D_n) be center of D_n ⇒
    Z(D_n) = {
      {e} if n odd
      {e, α^{n/2}} if n even
    }
  )
}

proof Center_Dihedral_Group() {
  setDef(Z(D_n) = {g ∈ D_n: gx = xg, ∀x ∈ D_n}) →
  
  lemma Product_Rule() {
    assert(βα^k = α^{n-k}β, ∀k ∈ ℤ≥0)
  } →
  
  assert(x ∈ Z(D_n) ↔ xα = αx ∧ xβ = βx) →
  
  letVar(x ∈ Z(D_n)) →
  assert(x = α^iβ^j for some i,j ∈ ℤ≥0) →
  
  chain(
    x ∈ Z(D_n) →
    α^iβ^jα = αα^iβ^j →
    β^jα = αβ^j
  ) →
  
  subCase(j = 1) {
    chain(
      αβ = βα →
      αβ = α^{-1}β →
      α = α^{-1} →
      α^2 = e
    ) →
    assert(α^2 ≠ e since order(α) = n > 2) →
    contradiction()
  } →
  
  conclude(x must be of form α^i) →
  
  chain(
    xβ = βx →
    α^iβ = βα^i →
    α^iβ = α^{n-i}β →
    α^i = α^{n-i} →
    α^{2i} = e
  ) →
  
  assert(n|2i by order properties) →
  
  conclude(
    i = 0 ∨ 2i = n →
    x = e ∨ (n even ∧ x = α^{n/2})
  )
}