# 

Source: https://proofwiki.org/wiki/Real_and_Imaginary_Parts_of_Holomorphic_Function_are_Harmonic

Theorem
Let $D \subseteq \C$ be an open subset of the set of complex numbers $\C$.
Let $f: D \to \C$ be a holomorphic complex function on $D$.
Let $u, v: \set {\tuple {x, y} \in \R^2: x + i y = z \in D} \to \R$ be the two real-valued functions defined as:














\(\ds \map u {x, y}\)

\(=\)







\(\ds \map \Re {\map f {x + i y} }\)




















\(\ds \map v {x, y}\)

\(=\)







\(\ds \map \Im {\map f {x + i y} }\)










Then $u$ and $v$ are harmonic functions.


Proof
By Cauchy-Riemann Equations, $u$ and $v$ satisfy:




\(\text {(1)}: \quad\)









\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {\partial v} {\partial y}\)










\(\text {(2)}: \quad\)









\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds -\dfrac {\partial v} {\partial x}\)












This article, or a section of it, needs explaining.In particular: Need to justify some facts about continuity and differentiability for this argument to hold.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Consider the partial derivative of $(1)$ with respect to $x$, and the partial derivative of $(2)$ with respect to $y$:




\(\text {(3)}: \quad\)









\(\ds \dfrac {\partial^2 u} {\partial x^2}\)

\(=\)







\(\ds \dfrac {\partial^2 v} {\partial x \partial y}\)










\(\text {(4)}: \quad\)









\(\ds \dfrac {\partial^2 u} {\partial y^2}\)

\(=\)







\(\ds -\dfrac {\partial^2 v} {\partial y \partial x}\)









By Clairaut's Theorem:

$\dfrac {\partial^2 v} {\partial x \partial y} = \dfrac {\partial^2 v} {\partial y \partial x}$

Thus $(3) + (4)$ yields:

$\dfrac {\partial^2 u} {\partial x^2} + \dfrac {\partial^2 u} {\partial y^2} = 0$
So $u$ is a harmonic function by definition.
$\Box$

Now consider the partial derivative of $(1)$ with respect to $y$, and the partial derivative of $(2)$ with respect to $x$:




\(\text {(5)}: \quad\)









\(\ds \dfrac {\partial^2 u} {\partial x \partial y}\)

\(=\)







\(\ds \dfrac {\partial^2 v} {\partial y^2}\)










\(\text {(6)}: \quad\)









\(\ds \dfrac {\partial^2 u} {\partial y \partial x}\)

\(=\)







\(\ds -\dfrac {\partial^2 v} {\partial x^2}\)









By Clairaut's Theorem :

$\dfrac {\partial^2 u} {\partial x \partial y} = \dfrac {\partial^2 u} {\partial y \partial x}$
Thus $(5) - (6)$ yields:

$0 = \dfrac {\partial^2 v} {\partial y^2} + \dfrac {\partial^2 v} {\partial x^2}$
So $v$ is a harmonic function by definition.
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.7$ Complex Numbers and Functions: Laplace's Equation: $3.7.32$




