# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Real_Numbers/Proof_4

Theorem
Let $x, y \in \R$ be real numbers.
Let $\exp x$ be the exponential of $x$.

Then:

$\map \exp {x + y} = \paren {\exp x} \paren {\exp y}$


Proof
This proof assumes the definition of $\exp$ as defined by an initial value problem.
That is, suppose $\exp$ satisfies:

$(1): \quad D_x \exp x = \exp x$
$(2): \quad \exp 0 = 1$
on $\R$.

Consider the real function $f: \R \to \R$ defined by:

$\map f x := \dfrac {\map \exp {x + y} } {\map \exp y}$
From Exponential of Real Number is Strictly Positive, $f$ is well-defined.

So:














\(\ds D_x \, \map f x\)

\(=\)







\(\ds D_x \frac {\map \exp {x + y} } {\map \exp y}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map \exp y} D_x \, \map \exp {x + y}\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {x + y} } {\map \exp y}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map f x\)










Thus $f$ satisfies $(1)$.

Further:














\(\ds \map f 0\)

\(=\)







\(\ds \frac {\map \exp {0 + y} } {\map \exp y}\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \exp y} {\map \exp y}\)




















\(\ds \)

\(=\)







\(\ds 1\)










So $f$ satisfies $(2)$.

From Exponential Function is Well-Defined:

$f = \exp$
That is:














\(\ds \frac {\map \exp {x + y} } {\map \exp y}\)

\(=\)







\(\ds \map \exp x\)














\(\ds \leadsto \ \ \)





\(\ds \map \exp {x + y}\)

\(=\)







\(\ds \map \exp x \, \map \exp y\)









$\blacksquare$


Sources
2011: Robert G. Bartle and Donald R. Sherbert: Introduction to Real Analysis (4th ed.): $\S 8.3$: Theorem $6 (iv)$




