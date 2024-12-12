# 

Source: https://proofwiki.org/wiki/Countably_Infinite_Set_in_Countably_Compact_Space_has_Omega-Accumulation_Point



Theorem
Let $\struct {X, \tau}$ be a countably compact topological space.
Let $A \subseteq X$ be countably infinite.

Then $A$ has an $\omega$-accumulation point in $X$.


Corollary
Let $\sequence {x_n}_{n \mathop \in \N}$ be an infinite sequence in $S$.

Then $\sequence {x_n}$ has an accumulation point in $T$.


Proof
Proof by Contradiction.
Aiming for a contradiction, suppose that $A$ does not have an $\omega$-accumulation point in $X$.

Let $\SS \subseteq \powerset A$ be the set of all finite subsets of $A$.
By Set of Finite Subsets of Countable Set is Countable, we have that $\SS$ is countable.

For all (finite) $F \in \SS$, define:

$U_F = \paren {F \cup \paren {X \setminus A} }^\circ$
where ${}^\circ$ denotes the interior.
By Image of Countable Set under Mapping is Countable, we have that $\CC = \set {U_F: F \in \SS}$ is countable.

By the definition of an $\omega$-accumulation point, it follows that:

$\forall x \in X: \exists U \in \tau: x \in U: \exists F \in \SS: U \cap A = F$
By Set Difference Union Intersection, we have:

$U = \paren {U \cap A} \cup \paren {U \setminus A} \subseteq F \cup \paren {X \setminus A}$
By Set Interior is Largest Open Set, it follows that $\CC$ is a countable open cover for $X$.

Hence, by the definition of a countably compact space, there exists a finite subcover $\CC'$ of $\CC$ for $X$.
By the Principle of Finite Choice, there exists an indexed family $\family {G_V}_{V \mathop \in \CC'}$ of elements of $\SS$ such that:

$\forall V \in \CC': V = U_{G_V} = \paren {G_V \cup \paren {X \setminus A} }^\circ$
Define:

$\ds B = \bigcup_{V \mathop \in \CC'} G_V \subseteq A$
By Union of Finite Sets is Finite, it follows that $B$ is finite.

We can use the definition of a cover to conclude that:

$X \subseteq B \cup \paren {X \setminus A}$
By Relative Complement inverts Subsets, it follows that:

$\paren {X \setminus B} \cap A = \O$
Hence, $A \subseteq B$.
But then by Subset of Finite Set is Finite, it follows that $A$ is finite, a contradiction.
$\blacksquare$


Also see
Infinite Set in Compact Space has $\omega$-Accumulation Point


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Global Compactness Properties




