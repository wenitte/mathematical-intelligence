theorem Cardinal_Number_Equivalence() {
  let(S: Set, card_S: Cardinal, 𝕌: UniversalClass) →
  assert(
    S ∼ card_S ∨ card_S = 𝕌
  )
} ↔

proof Cardinal_Number_Equivalence() {
  apply(Condition_for_Set_Equivalent_to_Cardinal()) →
  case_split() {
    case_1() {
      assume(∃x ∈ On: S ∼ x) →
      assert(S ∼ card_S)
    } ∧
    case_2() {
      assume(¬∃x ∈ On: S ∼ x) →
      assert(
        card_S = ⋂{x ∈ On : S ∼ x}
      ) →
      assert(
        ⋂{x ∈ On : S ∼ x} = ⋂∅
      ) →
      lemma Intersection_Empty_Set() {
        assert(⋂∅ = 𝕌)
      } →
      apply(Intersection_Empty_Set()) →
      assert(card_S = 𝕌)
    }
  } →
  conclude(S ∼ card_S ∨ card_S = 𝕌)
}