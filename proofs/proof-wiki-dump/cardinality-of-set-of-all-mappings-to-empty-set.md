theorem Cardinality_Empty_Set_Mappings() {
  assert(
    ∀S(Set(S) →
      let(O^S = {f | f: S → ∅}) →
      |O^S| = match(S) {
        case ∅: 1
        case _: 0
      }
    )
  )
} ↔

proof Cardinality_Empty_Set_Mappings() {
  lemma Null_Relation_Mapping() {
    assert(
      ∀S,T(
        let(R = ∅ ⊆ S × T) →
        (Mapping(R) ↔ S = ∅)
      )
    )
  } →
  
  case_analysis {
    case S ≠ ∅ {
      apply(Null_Relation_Mapping()) →
      assert(¬∃f(f: S → ∅)) →
      assert(|O^S| = 0)
    } →
    
    case S = ∅ {
      apply(Null_Relation_Mapping()) →
      assert(∃!f(f: ∅ → ∅)) →
      assert(|O^S| = 1)
    }
  } →
  
  conclude(
    |O^S| = match(S) {
      case ∅: 1
      case _: 0
    }
  )
}