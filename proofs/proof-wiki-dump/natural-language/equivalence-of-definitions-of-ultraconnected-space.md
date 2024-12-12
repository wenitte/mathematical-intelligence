# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ultraconnected_Space


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
The following definitions of the concept of Ultraconnected Space are equivalent:

Definition 1
A topological space $T = \struct {S, \tau}$ is ultraconnected if and only if no two non-empty closed sets are disjoint.

Definition 2
A topological space $T = \struct {S, \tau}$ is ultraconnected if and only if the closures of every distinct pair of elements of $S$ are not disjoint:

$\forall x, y \in S: \set x^- \cap \set y^- \ne \O$
Definition 3
A topological space $T = \left({S, \tau}\right)$ is ultraconnected if and only if every closed set of $T$ is connected.


Proof
$(1)$ iff $(2)$
Let $T = \struct {S, \tau}$ be ultraconnected by Definition 1:

no two non-empty closed sets of $T$ are disjoint.
Let $x, y \in S$.
By Topological Closure is Closed, both $\set x^-$ and $\set y^-$ are closed.
By hypothesis:

$\set x^- \cap \set y^- \ne \O$
That is, $T = \struct {S, \tau}$ is ultraconnected by Definition 2.
$\Box$

Let $T = \struct {S, \tau}$ be ultraconnected by Definition 2:

$\forall x, y \in S: \set x^- \cap \set y^- \ne \O$
Let $V_1, V_2$ be closed sets of $T$.
Let $x \in V_1, y \in V_2$.
Then:

$\set x^- \cap \set y^- \ne \O$
But then from Topological Closure of Subset is Subset of Topological Closure we have that:

$\set x^- \subseteq V_1^-$
$\set y^- \subseteq V_2^-$
But from Closed Set Equals its Closure $V_1^- = V_1, V_2^- = V_2$.
So from Intersection is Subset:

$\set x^- \cap \set y^- \subseteq V_1$
$\set x^- \cap \set y^- \subseteq V_2$
from which:

$V_1 \cap V_2 \ne \O$
As $V_1$ and $V_2$ are arbitrary, it follows that $T$ is ultraconnected by Definition 1.
$\blacksquare$


$(1)$ iff $(3)$
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


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




