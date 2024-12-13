# 

Source: https://proofwiki.org/wiki/Ordinal_Multiplication_by_One



Theorem
Let $x$ be an ordinal.
Let $1$ denote the ordinal one.














\(\ds x \cdot 1\)

\(=\)







\(\ds x\)




















\(\ds 1 \cdot x\)

\(=\)







\(\ds x\)











Proof













\(\ds x \cdot 1\)

\(=\)







\(\ds x \cdot \O^+\)





Definition of One (Ordinal)














\(\ds \)

\(=\)







\(\ds \paren {x \cdot \O} + x\)





Definition of Ordinal Multiplication














\(\ds \)

\(=\)







\(\ds \O + x\)





Definition of Ordinal Multiplication














\(\ds \)

\(=\)







\(\ds x\)





Ordinal Addition by Zero



$\Box$

The proof of the other equality shall proceed by Transfinite Induction.


Basis for the Induction













\(\ds 1 \cdot \O\)

\(=\)







\(\ds \O\)





Definition of Ordinal Multiplication



This proves the basis for the induction.


Induction Step













\(\ds 1 \cdot x\)

\(=\)







\(\ds x\)





Inductive Hypothesis








\(\ds \leadsto \ \ \)





\(\ds \paren {1 \cdot x} + 1\)

\(=\)







\(\ds x^+\)





Ordinal Addition by One














\(\ds 1 \cdot x^+\)

\(=\)







\(\ds \paren {1 \cdot x} + 1\)





Definition of Ordinal Multiplication








\(\ds \leadsto \ \ \)





\(\ds 1 \cdot x^+\)

\(=\)







\(\ds x^+\)





Equality is Transitive



This proves the induction step.


Limit Case









\(\ds \forall y \in x: \, \)



\(\ds 1 \cdot y\)

\(=\)







\(\ds y\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{y \mathop \in x} \paren {1 \cdot y}\)

\(=\)







\(\ds \bigcup_{y \mathop \in x} y\)





Indexed Union Equality








\(\ds \leadsto \ \ \)





\(\ds 1 \cdot x\)

\(=\)







\(\ds \bigcup_{y \mathop \in x} y\)





Definition of Ordinal Multiplication








\(\ds \leadsto \ \ \)





\(\ds 1 \cdot x\)

\(=\)







\(\ds x\)





Limit Ordinal Equals its Union



This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.18$




