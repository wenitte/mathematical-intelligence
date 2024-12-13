# 

Source: https://proofwiki.org/wiki/Infimum_Precedes_Coarser_Infimum

Theorem
Let $L = \left({S, \vee, \wedge, \preceq}\right)$ be a complete lattice.
Let $X, Y$ be subsets of $S$ such that

$Y$ is coarser than $X$.

Then $\inf X \preceq \inf Y$
where $\inf X$ denotes the infimum of $X$.


Proof
We will prove that

$\inf X$ is lower bound for $Y$.
Let $x \in Y$.
By definition of coarser subset:

$\exists y \in X: y \preceq x$
By definitions of infimum and lower bound:

$\inf X \preceq y$
Thus by definition of transitivity:

$\inf X \preceq x$
$\Box$
Hence by definition of infimum:

$\inf X \preceq \inf Y$
$\blacksquare$

Sources
Mizar article WYABEL11:1




