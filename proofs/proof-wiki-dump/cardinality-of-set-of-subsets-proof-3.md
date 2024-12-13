theorem Subset_Cardinality() {
  assert(
    ∀S[card(S) = n] ∧ ∀m[m ≤ n] ⇒ 
    card({T | T ⊆ S ∧ card(T) = m}) = (n!/(m!(n-m)!))
  )
} ↔

proof Subset_Cardinality() {
  setDef(ℕn := {1,2,...,n}) →
  setDef(Sn := symmetric_group(ℕn)) →
  setDef(Br := {S | S ⊆ ℕn ∧ card(S) = r}) →
  
  defMapping(*: Sn × Br → Br) {
    ∀π ∈ Sn, ∀S ∈ Br: π * Br = π[S]
  } →

  lemma Group_Action() {
    assert(* is_group_action(Sn on Br))
  } →
  
  setVar(U := {1,2,...,r}) →
  assert(
    card(Stab(U)) = r!(n-r)! ↔ {
      permutations(1,...,r) = r! ∧
      permutations(r+1,...,n) = (n-r)!
    }
  ) →

  lemma Transitive_Action() {
    assert(Br = Orb(U))
  } →

  apply(Orbit_Stabilizer_Theorem()) {
    card(Orb(U)) = order(Sn)/order(Stab(U))
  } →

  assert(
    card(Br) = card(Orb(U)) = n!/(r!(n-r)!)
  ) →

  substitute(r := m) →
  conclude(
    card({T | T ⊆ S ∧ card(T) = m}) = n!/(m!(n-m)!)
  )
}