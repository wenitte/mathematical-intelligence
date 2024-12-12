# 

Source: https://proofwiki.org/wiki/Countably_Compact_Space_satisfies_Countable_Finite_Intersection_Axiom



Theorem
The following definitions of the concept of Countably Compact Space are equivalent:

Definition by Finite Subcover
A topological space $T = \struct {S, \tau}$ is countably compact if and only if:

every countable open cover of $T$ has a finite subcover.
Definition by Countable Finite Intersection Axiom
A topological space $T = \struct {S, \tau}$ is countably compact if and only if:

every countable set of closed sets of $T$ whose intersection is empty has a finite subset whose intersection is empty.
That is, $T$ satisfies the countable finite intersection axiom.


Proof
Let every countable open cover of $S$ have a finite subcover.
Let $\AA$ be any set of closed sets of $T$ satisfying $\bigcap \AA = \O$.
We define the set:

$\VV := \set {S \setminus A : A \in \AA}$
which is clearly an open cover of $S$.

From De Morgan's Laws: Difference with Union:

$\ds S \setminus \bigcup \VV = \bigcap \set {S \setminus V : V \in \VV} = \bigcap \set{A : A \in \AA} = \O$
and therefore $S = \bigcup \VV$.

By definition, there exists a finite subcover $\tilde \VV \subseteq \VV$.
We define:

$\tilde \AA := \set {S \setminus V : V \in \tilde \VV}$
Then $\tilde \AA \subseteq \AA$ by definition of $\VV$.

Because $\tilde \VV$ covers $S$, it follows directly that:

$\ds \bigcap \tilde \AA = \bigcap \set {S \setminus V : V \in \tilde \VV} = S \setminus \bigcup \tilde \VV = \O$

Thus, in every countable set $\AA$ of closed sets of $T$ satisfying $\ds \bigcap \AA = \O$ exists a finite subset $\tilde \AA$ such that $\ds \bigcap \tilde \AA = \O$.
That is, $S$ satisfies the Countable Finite Intersection Axiom.
$\Box$

The converse works exactly as the previous, but with the roles of the open cover and $\AA$ reversed.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Global Compactness Properties




