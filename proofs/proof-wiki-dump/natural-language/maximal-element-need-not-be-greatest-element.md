# 

Source: https://proofwiki.org/wiki/Maximal_Element_need_not_be_Greatest_Element



Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.
Let $M \in S$ be a maximal element of $S$.

Then $M$ is not necessarily the greatest element of $S$.


Proof
Proof by Counterexample:
Let $S = \set {a, b, c}$.
Let $\preccurlyeq$ be defined as:

$x \preccurlyeq y \iff \tuple {x, y} \in \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, b}, \tuple {a, c} }$
A straightforward but laborious process determines that $\preccurlyeq$ is a partial ordering on $S$.

We have that:

$c \preccurlyeq x \implies c = x$
and:

$b \preccurlyeq x \implies b = x$
and so by definition, both $b$ and $c$ are maximal elements of $S$.

Suppose $b$ is the greatest element of $S$.
Then from Greatest Element is Unique it follows that $c$ can not be the greatest element of $S$.
Hence the result.

In fact, from the definition of the greatest element of $S$:

$x$ is the greatest element of $S$ if and only if $\forall y \in S: y \preccurlyeq x$
it can be seen directly that neither $b$ nor $c$ is the greatest element of $S$.
$\blacksquare$


Also see
Maximal Element in Toset is Unique and Greatest


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.5$: Ordered Sets

A particular theorem is missing.In particular: This must be extracted and put into the context of class theory and maximal elements under the subset orderingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding the theorem.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{TheoremWanted}} from the code.
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {II}$ -- Maximal principles: $\S 5$ Maximal principles




