# 

Source: https://proofwiki.org/wiki/Lower_Bound_for_Ordinal_Exponentiation



Theorem
Let $x$ and $y$ be ordinals.
Let $x$ be greater than $1$, where $1$ denotes the successor of the zero ordinal.

Then:

$y \le x^y$


Proof
The proof shall proceed by Transfinite Induction on $y$.


Basis for the Induction
If $y = 0$, then $0 \le x^y$ by Empty Set is Subset of All Sets.
This proves the basis for the induction.
$\Box$


Induction Step
The induction hypothesis states that:

$y \le x^y$















\(\ds y\)

\(\le\)







\(\ds x^y\)





Induction Hypothesis














\(\ds \)

\(<\)







\(\ds x^y \times x\)





Membership is Left Compatible with Ordinal Multiplication








\(\ds \leadsto \ \ \)





\(\ds y \cup \set y\)

\(\le\)







\(\ds x^{y^+}\)





Ordinal is Transitive








\(\ds \leadsto \ \ \)





\(\ds y^+\)

\(\le\)







\(\ds x^{y^+}\)





Definition of Successor Set



This proves the induction step.
$\Box$


Limit Case
The induction hypothesis for the limit case states that:

$\forall z \in y: z \le x^z$ and $y$ is a limit ordinal











\(\ds \forall z \in y: \, \)



\(\ds z\)

\(\le\)







\(\ds x^z\)





Induction Hypothesis








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{z \mathop \in y} z\)

\(\le\)







\(\ds \bigcup_{z \mathop \in y} x^z\)





Indexed Union Subset








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\le\)







\(\ds x^y\)





Definition of Ordinal Exponentiation and Limit Ordinal Equals its Union



This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.37$




