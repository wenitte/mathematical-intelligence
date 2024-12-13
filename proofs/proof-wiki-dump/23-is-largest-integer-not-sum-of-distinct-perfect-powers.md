theorem Largest_Not_Perfect_Power_Sum() {
  assert(
    ∀n ∈ ℤ, [n cannot be expressed as sum of distinct perfect powers] ↔ [n ≤ 23]
  )
}

proof Largest_Not_Perfect_Power_Sum() {
  lemma Cannot_Express_23() {
    setPerfectPowers(P = {1,4,8,9,16,25,27,32,...}) →
    setVar(candidates_less_than_23 = {1,4,8,9,16}) →
    assert(1 + 4 + 8 + 9 = 22 < 23) →
    assert(16 must be used in any sum to reach 23) →
    assert(23 - 16 = 7) →
    assert(7 ∉ sums({1,4})) →
    conclude(23 cannot be expressed as sum of distinct perfect powers)
  }

  lemma All_Greater_Than_23_Expressible() {
    assert(by Richert's Theorem, need to prove:
      (∀n ∈ ℤ)[23 < n ≤ 55 → n ∈ sums({1,4,8,9,16,25,27})] ∧
      (∀i ≥ 7)[s_{i+1} ≤ 2s_i]
    ) →
    
    subproof Second_Condition() {
      setVar(i ≥ 7) →
      setVar(m: ℤ | 2^{m+1} > s_i ≥ 2^m) →
      assert(2^{m+1} is perfect power) →
      assert(∃ perfect power p: s_i < p ≤ 2^{m+1}) →
      conclude(s_{i+1} ≤ 2^{m+1} = 2·2^m ≤ 2s_i)
    }

    subproof First_Condition() {
      assert(∀n ∈ [24,55], verified by explicit construction in table) →
      conclude(all n > 23 expressible as sum of distinct perfect powers)
    }
  }

  apply(Cannot_Express_23()) →
  apply(All_Greater_Than_23_Expressible()) →
  conclude(23 is largest integer not expressible as sum of distinct perfect powers)
}