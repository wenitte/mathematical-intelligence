theorem CauchyBinetFormula() {
  setContext(
    A: Matrix(m×n),
    B: Matrix(n×m),
    j: Vector(m) where ∀i∈[1..m]: 1 ≤ j[i] ≤ n,
    A_j: Matrix(m×m) := selectColumns(A, j),
    B_j: Matrix(m×m) := selectRows(B, j)
  ) →
  assert(
    det(A×B) = ∑_{1≤j₁<j₂<...<jₘ≤n} det(A_j) × det(B_j)
  )
}

proof CauchyBinetFormula() {
  setVar(k: Vector(m), l: Vector(m)) →
  
  lemma SignTransposition() {
    assert(
      ∀k,l where l = transpose(k,i,j):
      ε(l) = -ε(k)
    )
  } →

  lemma DeterminantProperties() {
    assert(
      ∀k,j where j = sort(k):
      det(B_k) = ε(k) × det(B_j)
    )
  } →

  assert(
    det(A×B) = 
    ∑_{1≤l₁,...,lₘ≤m} ε(l) × ∏ᵢ(∑_{k=1}^n aᵢₖbₖₗᵢ)
  ) →

  apply(DeterminantDefinition()) →
  assert(
    = ∑_{1≤k₁,...,kₘ≤n} (∏ᵢ aᵢₖᵢ) × ∑_{1≤l₁,...,lₘ≤m} ε(l)∏ᵢ bₖᵢₗᵢ
  ) →

  assert(
    = ∑_{1≤k₁,...,kₘ≤n} (∏ᵢ aᵢₖᵢ) × det(B_k)
  ) →

  apply(DeterminantProperties()) →
  assert(
    = ∑_{1≤k₁,...,kₘ≤n} (∏ᵢ aᵢₖᵢ) × ε(k) × det(B_j)
  ) →

  lemma ZeroDeterminant() {
    assert(
      ∀j where ∃i≠p: j[i]=j[p]:
      det(A_j) = 0
    )
  } →

  assert(
    = ∑_{1≤j₁<j₂<...<jₘ≤n} det(A_j) × det(B_j)
  )
}