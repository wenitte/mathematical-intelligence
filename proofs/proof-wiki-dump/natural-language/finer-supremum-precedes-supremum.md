# 

Source: https://proofwiki.org/wiki/Finer_Supremum_Precedes_Supremum

Theorem
Let $L = \left({S, \vee, \wedge, \preceq}\right)$ be a complete lattice.
Let $X, Y$ be subsets of $S$ such that

$X$ is finer than $Y$.

Then $\sup X \preceq \sup Y$
where $\sup X$ denotes the supremum of $X$.


Proof
We will prove that

$\sup Y$ is upper bound for $X$.
Let $x \in X$.
By definition of finer subset:

$\exists y \in Y: x \preceq y$
By definitions of supremum and upper bound:

$y \preceq \sup Y$
Thus by definition of transitivity:

$x \preceq \sup Y$
$\Box$
Hence by definition of supremum:

$\sup X \preceq \sup Y$
$\blacksquare$

Sources
Mizar article WYABEL11:2




