# 

Source: https://proofwiki.org/wiki/Lattice_is_Complete_iff_it_Admits_All_Suprema



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Then $\struct {S, \preceq}$ is a complete lattice if and only if

$\forall X \subseteq S: X$ admits a supremum.


Proof
Sufficient Condition
Let $\struct {S, \preceq}$ be a complete lattice.
Thus by definition of complete lattice:

$\forall X \subseteq S: X$ admits a supremum.
$\Box$


Necessary Condition
Let $\struct {S, \preceq}$ be such that

$\forall X \subseteq S: X$ admits a supremum.
We will prove that

$\forall X \subseteq S: X$ admits both a supremum and an infimum.
Let $X \subseteq S$.
Thus by assumption:

$X$ admits a supremum.
Define:

$Y := \leftset {s \in S: s}$ is a lower bound for $\rightset X$
By assumption:

$Y$ admits a supremum
We will prove that

$\sup Y$ is a lower bound for $X$
Let $x \in X$.
By definition of lower bound:

$x$ is an upper bound for $Y$
By definition of supremum:

$\sup Y \preceq x$
Thus by definition:

$\sup Y$ is a lower bound for $X$

We will prove that

$\forall s \in S: s$ is a lower bound for $X \implies s \preceq \sup Y$
Let $s \in S$ such that:

$s$ is a lower bound for $X$.
By definition of $Y$:

$s \in Y$
By definition of supremum:

$\sup Y$ is an upper bound for $Y$.
Thus by definition of upper bound:

$s \preceq \sup Y$

Thus by definition

$X$ admits an infimum

By definition

$\struct {S, \preceq}$ is a lattice.
Thus the result follows by definition of complete lattice.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article YELLOW_2:24




