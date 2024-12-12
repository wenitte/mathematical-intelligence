# 

Source: https://proofwiki.org/wiki/Exponent_Base_of_One



Theorem
Let $x$ be an ordinal.

Then:

$1^x = 1$


Proof
The proof shall proceed by Transfinite Induction on $x$.


Basis for the Induction













\(\ds 1^0\)

\(=\)







\(\ds 1\)





Definition of Ordinal Exponentiation



This proves the basis for the induction.


Induction Step
The inductive hypothesis supposes that $1^x = 1$ for some $x$.














\(\ds 1^{x^+}\)

\(=\)







\(\ds 1^x \times 1\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds 1 \times 1\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds 1\)





Ordinal Multiplication by One



This proves the induction step.


Limit Case
The inductive hypothesis supposes that $\forall y \in x: 1^y = 1$.
It follows that:










\(\ds \forall y \in x: \, \)



\(\ds 1^y\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \bigcup_{y \mathop \in x} 1^y\)

\(=\)







\(\ds \bigcup_{y \mathop \in x} 1\)





Indexed Union Equality








\(\ds \leadsto \ \ \)





\(\ds 1^x\)

\(=\)







\(\ds 1\)





Definition of Ordinal Exponentiation



This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.31$




