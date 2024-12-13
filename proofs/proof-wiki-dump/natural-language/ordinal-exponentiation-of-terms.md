# 

Source: https://proofwiki.org/wiki/Ordinal_Exponentiation_of_Terms



Theorem
Let $x, y, z$ be ordinals.
Let $n$ be a finite ordinal.
Let $x$ be a limit ordinal.
Let $y, z, n$ all be greater than $0$.

Then:

$\paren {x^y \times n}^z = x^{y \mathop \times z} \times n$ if $z$ is not a limit ordinal
$\paren {x^y \times n}^z = x^{y \mathop \times z}$ if $z$ is a limit ordinal.


Proof
The proof shall proceed by Transfinite Induction on $z$.


Basis for the Induction
The hypothesis requires that $z \ne 0$, so the induction starts at $z = 1$.















\(\ds \paren {x^y \times n}^1\)

\(=\)







\(\ds x^y \times n\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds x^{y \mathop \times 1} \times n\)





Ordinal Multiplication by One



This proves the basis for the induction.
$\Box$


Induction Step













\(\ds \paren {x^y \times n}^z\)

\(=\)







\(\ds x^{y \mathop \times z} \times n\)





Inductive Hypothesis








\(\ds \leadsto \ \ \)





\(\ds \paren {x^y \times n}^{z^+}\)

\(=\)







\(\ds \paren {x^y \times n}^z \times x^y \times n\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds x^{y \mathop \times z} \times n \times x^y \times n\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds x^{y \mathop \times z} \times x^y \times n\)





Finite Ordinal Times Ordinal














\(\ds \)

\(=\)







\(\ds x^{y \mathop \times z + y} \times n\)





Ordinal Sum of Powers














\(\ds \)

\(=\)







\(\ds x^{y \mathop \times z^+} \times n\)





Definition of Ordinal Multiplication



This proves the induction step.
$\Box$


Limit Case
Suppose that this statement holds for all $w \in z$ where $z$ is a limit ordinal.

Then:














\(\ds x^{y \mathop \times z}\)

\(=\)







\(\ds \paren {x^y}^z\)





Ordinal Power of Power














\(\ds \)

\(\le\)







\(\ds \paren {x^y \times n}^z\)





Subset is Right Compatible with Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds \bigcup_{w \mathop \in z} \paren {x^y \times n}^w\)





Definition of Ordinal Exponentiation














\(\ds \)

\(\le\)







\(\ds \bigcup_{w \mathop \in z} x^{y \mathop \times w} \times n\)





Proof by Cases where $w \in K_I$ or $w \in K_{II}$














\(\ds \)

\(\le\)







\(\ds \bigcup_{w \mathop \in z} x^{y \mathop \times w + 1}\)





Membership is Left Compatible with Ordinal Exponentiation














\(\ds \)

\(\le\)







\(\ds \bigcup_{w \mathop \in z} x^{y \mathop \times w^+}\)





Membership is Left Compatible with Ordinal Multiplication and Membership is Left Compatible with Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds \bigcup_{w \mathop \in z} \left({ x^y }\right)^{w^+}\)





Ordinal Power of Power














\(\ds \)

\(=\)







\(\ds \paren {x^y}^z\)





Definition of Ordinal Exponentiation



This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.47$




