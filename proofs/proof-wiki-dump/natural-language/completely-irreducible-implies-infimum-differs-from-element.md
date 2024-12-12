# 

Source: https://proofwiki.org/wiki/Completely_Irreducible_implies_Infimum_differs_from_Element

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $p \in S$ such that

$p$ is completely irreducible.

Then $\map \inf {p^\succeq \setminus \set p} \ne p$
where $p^\succeq$ donotes the upper closure of $p$.


Proof
By definition of completely irreducible:

$p^\succeq \setminus \set p$ admits a minimum.
Then:

$p^\succeq \setminus \set p$ admits a infimum and $\map \inf {p^\succeq \setminus \set p} \in p^\succeq \setminus \set p$
By definition of difference:

$\map \inf {p^\succeq \setminus \set p} \notin \set p$
Thus by definition of singleton:

$\map \inf {p^\succeq \setminus \set p} \ne p$
$\blacksquare$


Sources
Mizar article WAYBEL16:19




