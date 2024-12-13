# 

Source: https://proofwiki.org/wiki/Ordinal_Multiplication_is_Closed



Theorem
Let $x$ and $y$ be ordinals.

Let $\On$ denote the class of all ordinals.

$x \cdot y \in \On$


Proof
The proof proceeds by transfinite induction on $y$.


Basis for the Induction













\(\ds x \cdot \O\)

\(=\)







\(\ds \O\)





Definition of Ordinal Multiplication














\(\ds \O\)

\(\in\)







\(\ds \On\)





Empty Set is Ordinal








\(\ds \leadsto \ \ \)





\(\ds x \cdot \O\)

\(\in\)







\(\ds \On\)





Substitutivity of Equality



This proves the basis for the induction.


Induction Step













\(\ds x \cdot y\)

\(\in\)







\(\ds \On\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \cdot y} + y\)

\(\in\)







\(\ds \On\)





Ordinal Addition is Closed














\(\ds x \cdot y^+\)

\(=\)







\(\ds \paren {x \cdot y} + y\)





Definition of Ordinal Multiplication








\(\ds \leadsto \ \ \)





\(\ds x \cdot y^+\)

\(\in\)







\(\ds \On\)





Substitutivity of Equality



This proves the induction step.


Limit Case









\(\ds \forall z \in y: \, \)



\(\ds x \cdot z\)

\(\in\)







\(\ds \On\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{z \mathop \in y} \paren {x \cdot z}\)

\(\in\)







\(\ds \On\)





Union of Set of Ordinals is Ordinal: Corollary














\(\ds x \cdot y\)

\(=\)







\(\ds \bigcup_{z \mathop \in y} \paren {x \cdot z}\)





Definition of Ordinal Multiplication








\(\ds \leadsto \ \ \)





\(\ds x \cdot y\)

\(\in\)







\(\ds \On\)





Substitutivity of Equality



This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.16$




