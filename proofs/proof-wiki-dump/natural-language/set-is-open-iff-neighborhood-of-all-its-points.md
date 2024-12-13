# 

Source: https://proofwiki.org/wiki/Set_is_Open_iff_Neighborhood_of_all_its_Points



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $V \subseteq S$ be a subset of $T$.

Then:

$V$ is an open set of $T$
if and only if:

$V$ is a neighborhood of all the points in $V$.


Proof
Necessary Condition
Let $V$ be open in $T$.
Let $z \in V$.
By definition, a neighborhood of $z$ is any subset of $S$ containing an open set which itself contains $z$.
But $V$ is itself an open set which itself contains $z$.
Hence by Set is Subset of Itself, $V$ is a subset of $S$ which contains an open set which itself contains $z$.
So for all points of $z \in V$, $V$ is a neighborhood of $z$.
$\Box$


Sufficient Condition
Suppose that for all points of $z \in V$, $V$ is a neighborhood of $z$.
That is, for all $z \in V$ there exists an open set $T_z \subseteq V$ of $T$ such that $z \in T_z$.

Now by Union is Smallest Superset: Family of Sets:

$\ds \bigcup_{z \mathop \in V} T_z \subseteq V$
as $\forall z \in V: T_z \subseteq V$.

If $z \in V$, then $z \in T_z$ by definition of $T_z$.
So:

$\ds z \in \bigcup_{z \mathop \in V} T_z$
Thus we also have:

$\ds V \subseteq \bigcup_{z \mathop \in V} T_z$
Hence by definition of set equality:

$\ds V = \bigcup_{z \mathop \in V} T_z$

Thus $V$ can be expressed as a union of open sets.
Hence $V$ is open in $T$, by Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets of a topological space.
$\blacksquare$


Also see
Space is Neighborhood of all its Points


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets: Lemma $1$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 2$: Topological Spaces: Corollary $2.3$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): open set (of points)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): open set (of points)




