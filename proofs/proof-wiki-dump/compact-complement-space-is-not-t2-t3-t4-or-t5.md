theorem Compact_Complement_Not_Separation() {
  let T = struct(ℝ, τ) where τ is_compact_complement_topology
  assert(
    ¬(T is_T2) ∧ 
    ¬(T is_T2.5) ∧ 
    ¬(T is_T3) ∧ 
    ¬(T is_T4) ∧ 
    ¬(T is_T5)
  )
} ↔

proof Compact_Complement_Not_Separation() {
  assert(compact_complement_space → T1_space) →
  assert(T1_space → T0_space) →
  setVar(T is_T0) →

  lemma Compact_Properties() {
    assert(compact_complement_topology → irreducible) ∧
    assert(irreducible ∧ hausdorff → singleton)
  } →

  apply(Compact_Properties()) →
  assert(T is_not_singleton) →
  assert(¬(T is_T2)) →
  
  assert(T2.5_space → T2_space) →
  assert(¬(T is_T2.5)) →
  
  assert(regular_space → T2_space) →
  assert(¬(T is_regular)) →
  assert(regular_space ↔ (T0_space ∧ T3_space)) →
  assert(T is_T0 ∧ ¬(T is_regular)) →
  assert(¬(T is_T3)) →
  
  assert(normal_space → T3_space) →
  assert(¬(T is_normal)) →
  assert(normal_space ↔ (T1_space ∧ T4_space)) →
  assert(T is_T1 ∧ ¬(T is_normal)) →
  assert(¬(T is_T4)) →
  
  assert(T5_space → T4_space) →
  assert(¬(T is_T4) → ¬(T is_T5)) →
  assert(¬(T is_T5))
}