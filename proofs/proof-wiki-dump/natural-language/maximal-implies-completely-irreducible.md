# 

Source: https://proofwiki.org/wiki/Maximal_implies_Completely_Irreducible

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $p \in S$ such that

$\exists k \in S: p$ is maximal in $S \setminus k^\succeq$

Then $p$ is completely irreducible.


Proof
By Join Succeeds Operands:

$k \preceq p \vee k$ and $p \preceq p \vee k$
By definition of upper closure of element:

$p \vee k \in k^\succeq$ and $p \vee k \in p^\succeq$
By definition of intersection:

$p \vee k \in p^\succeq \cap k^\succeq$
By Maximal implies Difference equals Intersection:

$p^\succeq \setminus \set p = p^\succeq \cap k^\succeq$
By Infimum of Intersection of Upper Closures equals Join Operands

$\map \inf {p^\succeq \cap k^\succeq} = p \vee k$
By definition:

$p^\succeq \setminus \set p$ admits a minimum.
Thus by definition:

$p$ is completely irreducible.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL16:26




