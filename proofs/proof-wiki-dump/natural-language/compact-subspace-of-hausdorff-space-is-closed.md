# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Hausdorff_Space_is_Closed



Theorem
Let $H = \struct {A, \tau}$ be a Hausdorff space.
Let $C$ be a compact subspace of $H$.

Then $C$ is closed in $H$.


Corollary
A finite subspace of a Hausdorff space is closed.


Proof 1
From Subspace of Hausdorff Space is Hausdorff, a subspace of a Hausdorff space is itself Hausdorff.
Let $a \in A \setminus C$.
We are going to prove that there exists an open set $U_a$ such that $a \in U_a \subseteq A \setminus C$.

For any single point $x \in C$, the Hausdorff condition ensures the existence of disjoint open set $\map U x$ and $\map V x$ containing $a$ and $x$ respectively.
Suppose there were only a finite number of points $x_1, x_2, \ldots, x_r$ in $C$.
Then we could take $\ds U_a = \bigcap_{i \mathop = 1}^r \map U {x_i}$ and get $a \in U_a \subseteq A \setminus C$.

Now suppose $C$ is not finite.
The set $\set {\map V x: x \in C}$ is an open cover for $C$.
As $C$ is compact, it has a finite subcover, say $\set {\map V {x_1}, \map V {x_2}, \dotsc, \map V {x_r} }$.
Let $\ds U_a = \bigcap_{i \mathop = 1}^r \map U {x_i}$.
Then $U_a$ is open because it is a finite intersection of open sets.
Also, $a \in U_a$ because $a \in \map U {x_i}$ for each $i = 1, 2, \ldots, r$.

Finally, if $b \in U_a$ then for any $i = 1, 2, \ldots, r$ we have $b \in \map U {x_i}$.
Because $\ds C \subseteq \bigcup_{i \mathop = 1}^r \map V {x_i}$:

$b \notin \map V {x_i}$, so $b \notin C$
Thus:

$U_a \subseteq A \setminus C$.

Then:

$\ds A \setminus C = \bigcup_{a \mathop \in A \mathop \setminus C} U_a$
So $A \setminus C$ is open.
It follows that $C$ is closed.
$\blacksquare$


Proof 2
For a subset $S \subseteq A$, let $S^{\complement}$ denote the relative complement of $S$ in $A$.

Consider an arbitrary point $x \in C^{\complement}$.
Define the set:

$\ds \OO = \set {V \in \tau: \exists U \in \tau: x \in U \subseteq V^\complement}$
By Empty Intersection iff Subset of Complement:

$U \subseteq V^\complement \iff U \cap V = \O$
Hence, by the definition of a Hausdorff space, it follows that $\OO$ is an open cover for $C$.

By the definition of a compact subspace, there exists a finite subcover $\FF$ of $\OO$ for $C$.
By the Principle of Finite Choice, there exists an $\FF$-indexed family $\family {U_V}_{V \mathop \in \FF}$ of elements of $\tau$ such that:

$\forall V \in \FF: x \in U_V \subseteq V^\complement$
Define:

$\ds U = \bigcap_{V \mathop \in \FF} U_V$
By General Intersection Property of Topological Space:

$U \in \tau$

Clearly, $x \in U$.
We have that:














\(\ds U\)

\(\subseteq\)







\(\ds \bigcap_{V \mathop \in \FF} \paren {V^\complement}\)





Set Intersection Preserves Subsets














\(\ds \)

\(=\)







\(\ds \paren {\bigcup \FF}^\complement\)





De Morgan's laws














\(\ds \)

\(\subseteq\)







\(\ds C^\complement\)





Definition of Cover of Set and Relative Complement inverts Subsets



From Subset Relation is Transitive, we have that $U \subseteq C^\complement$.

Hence $C^\complement$ is a neighborhood of $x$.
From Set is Open iff Neighborhood of all its Points:

$C^\complement \in \tau$
That is, $C$ is closed in $H$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Localized Compactness Properties




