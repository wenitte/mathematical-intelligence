theorem Square_Number_All_Bases() {
  assert(
    ∀b,n ∈ ℤ ∧ (b ≥ 3) ∧ (n = 121_b) ⇒ 
    ∃k ∈ ℤ: n = k²
  )
}

proof Square_Number_All_Bases() {
  setVar(b: ℤ, b ≥ 3) →
  setVar(n: ℤ, n = 121_b) →
  
  lemma Base_Representation() {
    assert(11_b = b + 1)
  } →
  
  apply(Base_Representation()) →
  
  assert(
    (11_b)² = (b + 1)² 
  ) →
  
  assert(
    (b + 1)² = b² + 2b + 1
  ) →
  
  assert(
    b² + 2b + 1 = 121_b
  ) →
  
  assert(
    121_b = (11_b)²
  ) →
  
  conclude(
    ∃k ∈ ℤ: (k = 11_b) ∧ (n = k²)
  )
}