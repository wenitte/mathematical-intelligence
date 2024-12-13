# 

Source: https://proofwiki.org/wiki/Ordinal_Exponentiation_is_Closed



Theorem
Let $x$ and $y$ be ordinals.

Then:

$x^y \in \On$
That is, ordinal exponentiation is closed.


Proof
Let $x = 0$ and $y = 0$.
Then by the definition of ordinal exponentiation:

$x^y = 1$
Let $x = 0$ and $y \ne 0$.
Then by the definition of ordinal exponentiation:

$x^y = 0$
In either case, $x^y$ is an ordinal.

Now suppose that $x \ne 0$.
The proof shall proceed by Transfinite Induction on $y$.


Basis for the Induction
By definition of ordinal exponentiation:

$x^0 = 1$
which is an ordinal.
This proves the basis for the induction.


Induction Step
The inductive hypothesis states that $x^y \in \On$.

Suppose the inductive hypothesis holds.
Then:














\(\ds x^{y^+}\)

\(=\)







\(\ds x^y \times x\)





Definition of Ordinal Exponentiation














\(\ds \)

\(\in\)







\(\ds \On\)





Ordinal Multiplication is Closed



This proves the induction step.


Limit Case
The inductive hypothesis states that $x^z \in \On$ for all $z \in y$.














\(\ds x^y\)

\(=\)







\(\ds \bigcup_{z \mathop \in y} x^z\)





Definition of Ordinal Exponentiation














\(\ds \)

\(\in\)







\(\ds \On\)





Union of Set of Ordinals is Ordinal: Corollary



This proves the limit case.
$\blacksquare$





