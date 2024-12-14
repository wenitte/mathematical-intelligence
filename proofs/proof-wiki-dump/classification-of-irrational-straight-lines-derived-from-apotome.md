theorem Irrational_Lines_Classification() {
  assert(
    "Apotome and subsequent irrational straight lines are distinct from medial line and each other"
  )
} ↔

proof Irrational_Lines_Classification() {
  lemma Square_On_Medial() {
    apply(Book_X_Prop_22) →
    assert(
      ∀l[medial], w[rational] →
      (square(l) applied_to w) produces_breadth b[rational] ∧
      incommensurable_length(b, w)
    )
  } →

  lemma Square_On_Apotome() {
    apply(Book_X_Prop_97) →
    assert(
      ∀a[apotome], w[rational] →
      (square(a) applied_to w) produces_breadth first_apotome
    )
  } →

  lemma Square_On_First_Apotome_Medial() {
    apply(Book_X_Prop_98) →
    assert(
      ∀a[first_apotome_medial], w[rational] →
      (square(a) applied_to w) produces_breadth second_apotome
    )
  } →

  lemma Square_On_Second_Apotome_Medial() {
    apply(Book_X_Prop_99) →
    assert(
      ∀a[second_apotome_medial], w[rational] →
      (square(a) applied_to w) produces_breadth third_apotome
    )
  } →

  lemma Square_On_Minor() {
    apply(Book_X_Prop_100) →
    assert(
      ∀m[minor], w[rational] →
      (square(m) applied_to w) produces_breadth fourth_apotome
    )
  } →

  lemma Square_On_Rational_Medial_Whole() {
    apply(Book_X_Prop_101) →
    assert(
      ∀l[rational_medial_whole], w[rational] →
      (square(l) applied_to w) produces_breadth fifth_apotome
    )
  } →

  lemma Square_On_Medial_Medial_Whole() {
    apply(Book_X_Prop_102) →
    assert(
      ∀l[medial_medial_whole], w[rational] →
      (square(l) applied_to w) produces_breadth sixth_apotome
    )
  } →

  assert(
    ∀b1,b2 ∈ {apotome_types} →
    (b1 ≠ b2) ∧
    (∀b ∈ {apotome_types} → b ≠ rational)
  ) →

  apply(Book_X_Prop_111) →
  assert(apotome ≠ binomial) →

  conclude(
    distinct_types = {
      medial,
      binomial,
      first_bimedial,
      second_bimedial,
      major,
      rational_plus_medial_side,
      sum_two_medial_side,
      apotome,
      first_apotome_medial,
      second_apotome_medial,
      minor,
      rational_medial_whole,
      medial_medial_whole
    } ∧
    ∀x,y ∈ distinct_types → x ≠ y
  )
}