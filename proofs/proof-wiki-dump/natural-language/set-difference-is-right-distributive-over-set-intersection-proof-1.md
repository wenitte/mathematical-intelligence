# 

Source: https://proofwiki.org/wiki/Set_Difference_is_Right_Distributive_over_Set_Intersection/Proof_1

Theorem
$\paren {A \cap B} \setminus C = \paren {A \setminus C} \cap \paren {B \setminus C}$


Proof
Consider $A, B, C \subseteq \mathbb U$, where $\mathbb U$ is considered as the universal set.















\(\ds \paren {A \cap B} \setminus C\)

\(=\)







\(\ds \paren {A \cap B} \cap \map \complement C\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {A \cap B} \cap \paren {\map \complement C \cap \map \complement C}\)





Set Intersection is Idempotent














\(\ds \)

\(=\)







\(\ds \paren {A \cap \map \complement C} \cap \paren {B \cap \map \complement C}\)





Intersection is Associative and Intersection is Commutative














\(\ds \)

\(=\)







\(\ds \paren {A \setminus C} \cap \paren {B \setminus C}\)





Set Difference as Intersection with Complement



$\blacksquare$





