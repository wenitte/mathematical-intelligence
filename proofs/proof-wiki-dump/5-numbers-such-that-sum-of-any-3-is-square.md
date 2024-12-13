theorem Square_Sum_Five_Numbers() {
  assert(
    ∃ S = {n₁, n₂, n₃, n₄, n₅} ⊂ ℤ where
    n₁ = 26072323311568661931 ∧
    n₂ = 43744839742282591947 ∧
    n₃ = 118132654413675138222 ∧
    n₄ = 186378732807587076747 ∧
    n₅ = 519650114814905002347 →
    ∀{a,b,c} ⊆ S where |{a,b,c}| = 3 ⇒ ∃k ∈ ℤ : a + b + c = k²
  )
}

proof Square_Sum_Five_Numbers() {
  setVar(S = {n₁, n₂, n₃, n₄, n₅}) →
  
  assert(n₁ + n₂ + n₃ = 13709479110²) →
  assert(n₁ + n₂ + n₄ = 16006120575²) →
  assert(n₁ + n₂ + n₅ = 24278947215²) →
  assert(n₁ + n₃ + n₄ = 18181961130²) →
  assert(n₁ + n₃ + n₅ = 25765385550²) →
  assert(n₁ + n₄ + n₅ = 27057368145²) →
  assert(n₂ + n₃ + n₄ = 18661624446²) →
  assert(n₂ + n₃ + n₅ = 26106083754²) →
  assert(n₂ + n₄ + n₅ = 27381995679²) →
  assert(n₃ + n₄ + n₅ = 28708213146²) →
  
  lemma All_Combinations_Covered() {
    assert(|{combinations of 3 from S}| = (5 choose 3) = 10) ∧
    assert(all_combinations_verified = 10)
  } →
  
  apply(All_Combinations_Covered()) →
  conclude(∀{a,b,c} ⊆ S : ∃k ∈ ℤ : a + b + c = k²)
}