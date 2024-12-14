theorem No_Regular_Heptagon_Construction() {
  assert(
    ¬∃C[compass_straightedge_construction] : 
    C creates regular_heptagon
  )
} ↔

proof No_Regular_Heptagon_Construction() {
  setDef(regular_heptagon) {
    assert(sides = 7)
  } →
  
  setVar(p := 7) →
  
  assert(isPrime(p) ∧ ¬isFermatPrime(p)) →
  
  theorem Fermat_Prime_Construction() {
    assert(
      ∀n ∈ ℕ : 
      (regular_n_gon_constructible ↔ 
       (isPrime(n) → isFermatPrime(n)))
    )
  } →
  
  apply(Fermat_Prime_Construction()) →
  assert(¬regular_7_gon_constructible)
}