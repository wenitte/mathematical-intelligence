# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ultraconnected_Space/1_iff_3



Theorem
The following definitions of the concept of Ultraconnected Space are equivalent:

Closed Sets Intersect
A topological space $T = \struct {S, \tau}$ is ultraconnected if and only if no two non-empty closed sets are disjoint.

Closed Sets are Connected
A topological space $T = \left({S, \tau}\right)$ is ultraconnected if and only if every closed set of $T$ is connected.


Proof
Closed Sets Intersect implies Closed Sets are Connected
Let $T = \struct {S, \tau}$ be ultraconnected in the sense that:

no two non-empty closed sets of $T$ are disjoint.

Let $F \subseteq S$ be an arbitrary closed set of $T$.
Aiming for a contradiction, suppose $F$ is not connected.
Then there exist non-empty closed set $G, H$ in $F$ that are disjoint (and whose union is $F$).
By Closed Set in Closed Subspace, $G$ and $H$ are closed in $T$.
Because $G \cap H = \O$, $T$ is not ultraconnected.
This is a contradiction.
Thus $F$ is connected.
As $F$ is arbitrary, this applies to all closed set of $T$.

Thus $T = \struct {S, \tau}$ is ultraconnected in the sense that:

every closed set of $T$ is connected..
$\Box$


Closed Sets are Connected implies Closed Sets Intersect
Let $T = \struct {S, \tau}$ be ultraconnected in the sense that:

every closed set of $T$ is connected.

Let $G$ and $H$ be closed sets of $T$.
Then their union $G \cup H$ is closed in $T$.
By assumption, $G \cup H$ is connected.
By Closed Set in Closed Subspace, $G$ and $H$ are closed sets of $G \cup H$.
Because $G \cup H$ is connected, $G \cap H$ is non-empty.
Because $G$ and $H$ were arbitrary, this applies to intersection of all such closed sets

Thus $T = \struct {S, \tau}$ is ultraconnected in the sense that:

no two non-empty closed sets of $T$ are disjoint.
$\blacksquare$


Also see
Closed Set of Ultraconnected Space is Ultraconnected
Space is Irreducible iff Open Sets are Connected




