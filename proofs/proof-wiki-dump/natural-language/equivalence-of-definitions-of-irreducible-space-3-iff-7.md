# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Irreducible_Space/3_iff_7



Theorem
The following definitions of the concept of Irreducible Space are equivalent:

Open Sets Intersect
A topological space $T = \struct {S, \tau}$ is irreducible if and only if every two non-empty open sets of $T$ have non-empty intersection:

$\forall U, V \in \tau: U, V \ne \O \implies U \cap V \ne \O$
Open Sets are Connected
A topological space $T = \struct {S, \tau}$ is irreducible if and only if every open set of $T$ is connected.


Proof
Open Sets Intersect implies Open Sets are Connected
Let $T = \struct {S, \tau}$ be irreducible in the sense that:

no two non-empty open sets of $T$ are disjoint.

Let $U \subseteq S$ be an open set of $T$.
Aiming for a contradiction, suppose $U$ is not connected.
Then there exist non-empty open sets $V, W$ of $U$ that are disjoint and whose union is $U$.
By Open Set in Open Subspace, $V$ and $W$ are open sets of $T$.
Because $V \cap W = \O$, $T$ is not irreducible.
This is a contradiction.
Thus $U$ is connected.

Thus $T = \struct {S, \tau}$ is irreducible in the sense that:

every open set of $T$ is connected..
$\Box$


Open Sets are Connected implies Open Sets Intersect
Let $T = \struct {S, \tau}$ be irreducible in the sense that:

every open set of $T$ is connected.

Let $V$ and $W$ be open sets of $T$.
By definition of topology, their union $V \cup W$ is open in $T$.
By hypothesis, $V \cup W$ is connected.
By Open Set in Open Subspace, $V$ and $W$ are open sets of $V \cup W$.
Because $V \cup W$ is connected, $V \cap W$ is non-empty.
Because $V$ and $W$ were arbitrary, $T$ is irreducible.

Thus $T = \struct {S, \tau}$ is irreducible in the sense that:

no two non-empty open sets of $T$ are disjoint.
$\blacksquare$


Also see
Open Subset of Irreducible Space is Irreducible
Space is Ultraconnected iff Closed Sets are Connected




