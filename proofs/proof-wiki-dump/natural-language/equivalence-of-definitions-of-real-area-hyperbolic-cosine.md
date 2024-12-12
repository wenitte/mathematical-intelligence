# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Area_Hyperbolic_Cosine



Theorem
The following definitions of the concept of Real Area Hyperbolic Cosine are equivalent:

Definition 1
The inverse hyperbolic cosine $\cosh^{-1}: S \to \R$ is a real multifunction defined on $S$ as:

$\forall x \in S: \map {\cosh^{-1} } x := \set {y \in \R: x = \map \cosh y}$
where $\map \cosh y$ denotes the hyperbolic cosine function.

Definition 2
The inverse hyperbolic cosine $\cosh^{-1}: S \to \R$ is a real multifunction defined on $S$ as:

$\forall x \in S: \map {\cosh^{-1} } x := \map \ln {x \pm \sqrt {x^2 - 1} }$
where:

$\ln$ denotes the natural logarithm of a (strictly positive) real number.
$\sqrt {x^2 - 1}$ denotes the square root of $x^2 - 1$


Proof
Definition 1 implies Definition 2
Let $x = \cosh y$, where $y > 0$.
Let $z = e^y$.
Then:














\(\ds x\)

\(=\)







\(\ds \frac {e^y + e^{-y} } 2\)





Definition of Hyperbolic Cosine








\(\ds \leadsto \ \ \)





\(\ds 2 x\)

\(=\)







\(\ds e^y + e^{-y}\)














\(\ds \leadsto \ \ \)





\(\ds 2 x e^y\)

\(=\)







\(\ds e^{2 y} + 1\)














\(\ds \leadsto \ \ \)





\(\ds z^2 - 2 x z + 1\)

\(=\)







\(\ds 0\)





Power of Power








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac {2 x \pm \sqrt {\paren {-2 x}^2 - 4} } 2\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds x \pm \sqrt{x^2 - 1}\)














\(\ds \leadsto \ \ \)





\(\ds e^y\)

\(=\)







\(\ds x \pm \sqrt{x^2 - 1}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \map \ln {x \pm \sqrt {x^2 - 1} }\)










Also, from Minimum of Real Hyperbolic Cosine Function:

$x = \cosh y \ge 1$

Also:














\(\ds x\)

\(=\)







\(\ds \sqrt {x^2}\)





$x$ is positive














\(\ds \)

\(>\)







\(\ds \sqrt {x^2 - 1}\)





Square Root is Strictly Increasing








\(\ds \leadsto \ \ \)





\(\ds x - \sqrt {x^2 - 1}\)

\(>\)







\(\ds 0\)










Thus $x - \sqrt {x^2 - 1}$ is (strictly) positive.

Aiming for a contradiction, suppose $x - \sqrt {x^2 - 1} > 1$.
Then:














\(\ds x - \sqrt {x^2 - 1}\)

\(>\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds x - 1\)

\(>\)







\(\ds \sqrt {x^2 - 1}\)





Both sides are (strictly) positive








\(\ds \leadsto \ \ \)





\(\ds \paren {x - 1}^2\)

\(>\)







\(\ds x^2 - 1\)





right hand side is (strictly) positive because $x \ge 1$








\(\ds \leadsto \ \ \)





\(\ds x^2 - 2 x + 1\)

\(>\)







\(\ds x^2 - 1\)














\(\ds \leadsto \ \ \)





\(\ds 2\)

\(>\)







\(\ds 2 x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(<\)







\(\ds 1\)









and a contradiction is deduced.

Therefore:

$x - \sqrt {x^2 - 1} < 1$

From Logarithm is Strictly Increasing:

$y = \map \ln {x - \sqrt {x^2 - 1} } < \ln 1 = 0$
Since $y$ is (strictly) positive from the first definition of real inverse hyperbolic cosine:

$y = \map \ln {x + \sqrt {x^2 - 1} }$
$\Box$


Definition 2 implies Definition 1
Let $z = x + \sqrt {x^2 - 1}$.
Then:

$y = \ln z$













\(\ds \map \cosh {\map \ln {x + \sqrt {x^2 - 1} } }\)

\(=\)







\(\ds \map \cosh {\ln z}\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{\ln z} + e^{-\ln z} } 2\)





Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \frac {z + \frac 1 z} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {z^2 + 1} {2 z}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {x + \sqrt {x^2 - 1} }^2 + 1} {2 x + 2 \sqrt {x^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2 + 2 x \sqrt {x^2 - 1} + \paren {x^2 - 1} + 1} {2 x + 2 \sqrt {x^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 x^2 + 2 x \sqrt {x^2 - 1} } {2 x + 2 \sqrt {x^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {2 x + 2 \sqrt {x^2 - 1} } x} {2 x + 2 \sqrt {x^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds x\)










If $-1 < x < 1$, $z$ is not defined.
If $x \le -1$:














\(\ds \sqrt {x^2 - 1}\)

\(<\)







\(\ds \sqrt {x^2}\)





Square Root is Strictly Increasing














\(\ds \)

\(=\)







\(\ds -x\)





$x$ is negative








\(\ds \leadsto \ \ \)





\(\ds x + \sqrt{x^2 - 1}\)

\(<\)







\(\ds 0\)









If $x \ge 1$, $z \ge 1$.
Therefore, $y = \ln z \ge \ln 1 = 0$.
$\Box$

Therefore:




\(\text {(1)}: \quad\)









\(\ds y > 0 \land x = \cosh y\)

\(\implies\)







\(\ds y = \map \ln {x + \sqrt {x^2 + 1} }\)





Definition 1 implies Definition 2




\(\text {(2)}: \quad\)









\(\ds y = \map \ln {x + \sqrt {x^2 + 1} }\)

\(\implies\)







\(\ds x = \cosh y \land y > 0\)





Definition 2 implies Definition 1








\(\ds \leadsto \ \ \)





\(\ds y > 0 \land x = \cosh y\)

\(\iff\)







\(\ds y = \map \ln {x + \sqrt {x^2 + 1} }\)









$\blacksquare$


Also see
Equivalence of Definitions of Real Area Hyperbolic Sine
Equivalence of Definitions of Real Area Hyperbolic Tangent
Equivalence of Definitions of Real Area Hyperbolic Cosecant
Equivalence of Definitions of Real Area Hyperbolic Secant
Equivalence of Definitions of Real Area Hyperbolic Cotangent




