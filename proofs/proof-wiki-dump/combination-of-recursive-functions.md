theorem Combination_of_Recursive_Functions() {
  assert(
    ∀f,g: ℕ^k → ℕ, k ≥ 1,
    (isRecursive(f) ∧ isRecursive(g)) ∧
    ∃R: k-ary_relation[
      (R(n₁,...,nₖ) → isDefined(f(n₁,...,nₖ))) ∧
      (¬R(n₁,...,nₖ) → isDefined(g(n₁,...,nₖ)))
    ] →
    let h = λ(n₁,...,nₖ).
      if R(n₁,...,nₖ) then f(n₁,...,nₖ)
      else g(n₁,...,nₖ) →
    isRecursive(h)
  )
}

proof Combination_of_Recursive_Functions() {
  setVar(f,g: ℕ^k → ℕ) →
  setVar(R: k-ary_relation) →
  
  lemma URM_Programs_Exist() {
    assert(
      isRecursive(f) → ∃P_f[isURM_Program(P_f) ∧ computes(P_f,f)] ∧
      isRecursive(g) → ∃P_g[isURM_Program(P_g) ∧ computes(P_g,g)] ∧
      ∃P_R[isURM_Program(P_R) ∧ computes(P_R,χ_R)]
    )
  } →

  apply(URM_Programs_Exist()) →
  
  let algorithm = λ(n₁,...,nₖ).{
    result_R = execute(P_R,(n₁,...,nₖ)) →
    if result_R then
      return execute(P_f,(n₁,...,nₖ))
    else
      return execute(P_g,(n₁,...,nₖ))
  } →

  lemma URM_Computable_is_Recursive() {
    assert(
      ∀func[isURM_Computable(func) → isRecursive(func)]
    )
  } →

  assert(isURM_Computable(algorithm)) →
  apply(URM_Computable_is_Recursive()) →
  assert(isRecursive(h))
}