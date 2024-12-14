theorem Regular_Heptagon_Not_Constructible() {
  assert(
    ¬∃construction(compass_straightedge, regular_heptagon)
  )
} ↔

proof Regular_Heptagon_Not_Constructible_1() {
  assert(sides(regular_heptagon) = 7) →
  assert(7 ∈ primes ∧ 7 ∉ fermat_primes) →
  apply(Regular_Prime_p_Gon_Construction_Theorem()) →
  conclude()
} ∧

proof Regular_Heptagon_Not_Constructible_2() {
  setVar(ε = exp(2π/7)) →
  assert(
    construction(regular_heptagon) ↔ 
    constructible_point((cos(2π/7), sin(2π/7))) ∧
    ε^7 - 1 = 0
  ) →
  
  lemma Polynomial_Factorization() {
    assert(
      x^7 - 1 = (x - 1)(x^6 + x^5 + x^4 + x^3 + x^2 + x + 1)
    )
  } →
  
  setVar(c = cos(2π/7)) →
  assert(
    ε = cos(2π/7) + i·sin(2π/7) ∧
    ε^(-1) = cos(2π/7) - i·sin(2π/7)
  ) →
  
  derive(
    ε + ε^(-1) = 2c ∧
    ε^2 + ε^(-2) + 2 = 4c^2 ∧
    ε^3 + ε^(-3) + 3(ε + ε^(-1)) = 8c^3
  ) →
  
  conclude(8c^3 + 4c^2 - 4c - 1 = 0) →
  
  apply(Irreducible_Polynomial_Theorem(x^3 + x^2 - 2x - 1)) →
  apply(Algebraic_Element_Degree_3_Theorem()) →
  apply(Constructible_Point_Field_Extension_Theorem()) →
  
  conclude()
}