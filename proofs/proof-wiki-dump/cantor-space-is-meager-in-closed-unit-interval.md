theorem Cantor_Space_Meager() {
  assert(
    let T = (𝓒, τ_d) ∧ 
    T is_topology(Cantor_Space) →
    T is_meager_in([0,1])
  )
} ↔

proof Cantor_Space_Meager() {
  lemma Cantor_Nowhere_Dense() {
    assert(T is_nowhere_dense_in([0,1]))
  } →
  
  apply(Cantor_Nowhere_Dense()) →
  
  assert(
    𝓒 = ⋃{S: S is_nowhere_dense_in([0,1])} ∧
    |{S: S is_nowhere_dense_in([0,1])}| = 1
  ) →
  
  apply(meager_definition: 
    ∀X(X is_meager ↔ 
      ∃S(X = ⋃S ∧ 
        ∀s∈S(s is_nowhere_dense)
      )
    )
  ) →
  
  conclude(T is_meager_in([0,1]))
}