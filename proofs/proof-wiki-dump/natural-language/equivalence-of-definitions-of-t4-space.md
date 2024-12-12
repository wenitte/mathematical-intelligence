# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_T4_Space



Theorem
The following definitions of the concept of $T_4$ space are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.

Definition by Open Sets
$T = \struct {S, \tau}$ is a $T_4$ space if and only if:

$\forall A, B \in \map \complement \tau, A \cap B = \O: \exists U, V \in \tau: A \subseteq U, B \subseteq V, U \cap V = \O$
That is, for any two disjoint closed sets $A, B \subseteq S$ there exist disjoint open sets $U, V \in \tau$ containing $A$ and $B$ respectively.

Definition by Closed Neighborhoods
$T = \struct {S, \tau}$ is a $T_4$ space if and only if each open set $U$ contains a closed neighborhood of each closed set contained in $U$.


Proof
Definition by Open Sets implies Definition by Closed Neighborhoods
Let $T$ satisfy the definition by open sets of a $T_4$ space.

Let $A$ be a closed set in $T$, and let $U_A$ be an open neighborhood of $A$.
By definition of open neighborhood:

$A \subseteq U_A$
Let $B := \relcomp S {U_A}$.
By Intersection with Complement is Empty iff Subset:

$A \cap B = \O$
As $B$ is the complement of $U_A$ in $S$, it is by definition closed in $T$.
Thus $A$ and $B$ are disjoint closed sets in $T$.

Also, from Set Complement inverts Subsets:

$B \subseteq \relcomp S A$

By assumption, there exist disjoint open sets $U$ and $V$ such that $A \subseteq U$ and $B \subseteq V$.
From Set Intersection Preserves Subsets:

$B \subseteq \map \complement A \cap V$
Note that the latter set, being an intersection of open sets, is itself open.

Then, from Complement of Complement, De Morgan's Laws: Complement of Union and Set Complement inverts Subsets:

$A \cup \map \complement V \subseteq U_A$
From Subset of Union we also have:

$A \subseteq A \cup \map \complement V$

Since $\relcomp S A \cap V$ is open, $A \cup \relcomp S V$ is closed.
Hence we have found a closed neighborhood for $A$ in $U_A$, as desired.
Hence it is concluded that $T$ satisfies the definition by closed neighborhoods of a $T_4$ space.
$\Box$


Definition by Closed Neighborhoods implies Definition by Open Sets
Let $T$ satisfy the definition by closed neighborhoods of a $T_4$ space.

Let $A$ and $B$ be disjoint closed sets in $T$.
Then from Empty Intersection iff Subset of Complement, we have:

$A \subseteq \map \complement B$
and the latter is open in $T$.
Applying the assumption, we find a closed neighborhood $C_A$ of $A$ contained in $\map \complement B$.
From Empty Intersection iff Subset of Complement and Set Complement inverts Subsets we establish:

$A \cap \map \complement {C_A} = \O$
$B \subseteq \map \complement {C_A}$

Similarly, we find a closed neighborhood $C_B$ of $B$ contained in $\map \complement {C_A}$.
Then from Intersection with Complement is Empty iff Subset:

$B \cap \map \complement {C_B} = \O$
But from Set Complement inverts Subsets, we have:

$\map \complement {C_A} \subseteq \map \complement A$
and so from Subset Relation is Transitive:

$C_B \subseteq \map \complement A$
Finally, another application of Set Complement inverts Subsets shows:

$A \subseteq \map \complement {C_B}$

Since $C_B \subseteq \map \complement {C_A}$, Empty Intersection iff Subset of Complement shows that $C_A$ and $C_B$ are disjoint sets.
They are also open sets, being the complement of closed sets.

Above, we established also that:

$A \subseteq \map \complement {C_B}$
$B \subseteq \map \complement {C_A}$
Hence it is concluded that $T$ satisfies the definition by open sets as well.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms




