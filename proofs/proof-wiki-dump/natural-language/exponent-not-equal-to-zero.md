# 

Source: https://proofwiki.org/wiki/Exponent_Not_Equal_to_Zero



Theorem
Let $x$ and $y$ be ordinals.
Let $x \ne 0$.

Then:

$x^y \ne 0$


Proof
The proof shall proceed by Transfinite Induction on $y$.


Basis for the Induction
$x^0 = 1$ by the definition of ordinal exponentiation.
Therefore, $x^0 \ne 0$.
This proves the basis for the induction.


Induction Step
The inductive hypothesis supposes that $x^y \ne 0$.














\(\ds x^{y^+}\)

\(=\)







\(\ds x^y \times x\)





Definition of Ordinal Exponentiation














\(\ds x^y\)

\(\ne\)







\(\ds 0\)





Inductive Hypothesis














\(\ds x\)

\(\ne\)







\(\ds 0\)





by hypothesis














\(\ds x^y \times x\)

\(\ne\)







\(\ds 0\)





Ordinals have No Zero Divisors



This proves the induction step.


Limit Case
The inductive hypothesis says that:

$\forall z \in y: x^z \ne 0$











\(\ds \forall z \in y: \, \)



\(\ds x^z\)

\(\ne\)







\(\ds 0\)





Inductive Hypothesis








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\in\)







\(\ds x^z\)





Ordinal Membership is Trichotomy








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\in\)







\(\ds \bigcup_{z \mathop \in y} x^z\)





Definition:Limit Ordinal








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\in\)







\(\ds x^y\)





Definition of Ordinal Exponentiation








\(\ds \leadsto \ \ \)





\(\ds x^y\)

\(\ne\)







\(\ds 0\)





Definition of Empty Set



This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.32$




