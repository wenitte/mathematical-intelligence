theorem Product_Index_Change() {
  assert(
    ∀R(∏_{R(i)} a_i = ∏_{R(j)} a_j)
  )
} ↔

proof Product_Index_Change() {
  define(S := {i ∈ ℤ : R(i)}) →
  define(T := {j ∈ ℤ : R(j)}) →
  
  lemma S_subset_T() {
    setVar(i ∈ S) →
    assert(R(i)) →
    let(j := i) →
    apply(LeibnizLaw()) →
    assert(R(j)) →
    assert(i ∈ T) →
    conclude(S ⊆ T)
  } →

  lemma T_subset_S() {
    setVar(j ∈ T) →
    assert(R(j)) →
    let(i := j) →
    apply(LeibnizLaw()) →
    assert(R(i)) →
    assert(j ∈ S) →
    conclude(T ⊆ S)
  } →

  apply(S_subset_T()) ∧ apply(T_subset_S()) →
  assert(S = T) →

  chain(
    ∏_{R(i)} a_i
    = ∏ a_i[R(i)]           by(IversonConvention)
    = ∏ a_i × χ_S           by(CharacteristicFunction)
    = ∏ a_j × χ_T           by(S = T)
    = ∏ a_j[R(j)]           by(CharacteristicFunction)
    = ∏_{R(j)} a_j          by(IversonConvention)
  )
}