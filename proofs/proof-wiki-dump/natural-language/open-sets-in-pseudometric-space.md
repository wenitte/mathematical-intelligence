# 

Source: https://proofwiki.org/wiki/Open_Sets_in_Pseudometric_Space

Theorem
Let $P = \struct {A, d}$ be a pseudometric space.

Then $\O$ and $A$ are both open in $P$.


Proof
From the definition of open set:

$\forall y \in U: \exists \epsilon \in \R_{>0}: \map {B_\epsilon} y \subseteq U$
where $U$ is an open set of $P$.
That is:

One cannot get out of $U$ by moving an arbitrarily small distance from any point in $U$.

Take the case where $U = \O$.
The empty set $\O$ is open by dint of the fact that there are no points $y$ in $\O$ for which the condition is false.
Thus for $\O$:

$\forall y \in U: \exists \epsilon \in \R_{>0}: \map {B_\epsilon} y \subseteq U$ is vacuously true.

When $U = A$, there are no points in $A$ to which one could get to by leaving $U$, an arbitrarily short distance or no, because there are no points in $A$ that are outside of $U$.
$\blacksquare$





