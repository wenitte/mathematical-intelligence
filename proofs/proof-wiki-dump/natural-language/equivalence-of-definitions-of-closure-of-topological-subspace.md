# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Closure_of_Topological_Subspace



Theorem
The following definitions of the concept of Closure in the context of Topology are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.

Definition 1
The closure of $H$ (in $T$) is defined as:

$H^- := H \cup H'$
where $H'$ is the derived set of $H$.

Definition 2
The closure of $H$ (in $T$) is defined as:

$\ds H^- := \bigcap \leftset {K \supseteq H: K}$ is closed in $\rightset T$
Definition 3
The closure of $H$ (in $T$), denoted $H^-$, is defined as the smallest closed set of $T$ that contains $H$.

Definition 4
The closure of $H$ (in $T$) is defined as the union of $H$ and its boundary in $T$:

$H^- := H \cup \partial H$
Definition 5
The closure of $H$ (in $T$) is the union of the set of all isolated points of $H$ and the set of all limit points of $H$:

$H^- := H^i \cup H'$
Definition 6
The closure of $H$ (in $T$), denoted $H^-$, is the set of all adherent points of $H$.


Proof
Definition $1$ is equivalent to Definition $2$
This is proved in Set Closure as Intersection of Closed Sets.
$\Box$


Definition $2$ is equivalent to Definition $3$
This is proved in Set Closure is Smallest Closed Set in Topological Space.
$\Box$


Definition $1$ is equivalent to Definition $4$
By the definition of the interior, and Set is Subset of its Topological Closure, it easily follows that

$H^\circ \subseteq H \subseteq H^-$
Then:














\(\ds H \cup \partial H\)

\(=\)







\(\ds H \cup \paren {H^- \setminus H^\circ}\)





Definition of Boundary (Topology)














\(\ds \)

\(=\)







\(\ds H \cup \paren {H \setminus H^\circ} \cup \paren {H^- \setminus H}\)





Union of Relative Complements of Nested Subsets














\(\ds \)

\(=\)







\(\ds H \cup \paren {H^- \setminus H}\)





Set Difference is Subset and Union with Superset is Superset














\(\ds \)

\(=\)







\(\ds H^-\)





Union with Relative Complement



$\Box$


Definition $1$ is equivalent to Definition $5$
Every isolated point of $H$ is a point of $H$.
So by Set Union Preserves Subsets:

$(1): \quad H^i \cup H' \subseteq H \cup H'$

If $S \setminus \paren {H^i \cup H'} = \O$, then $(1)$ yields $H^i \cup H' = H \cup H'$ and so the proof is complete.

Otherwise, let $x \in S \setminus \paren {H^i \cup H'} \ne \O$.
From De Morgan's Laws:

$S \setminus \paren {H^i \cup H'} = \paren {S \setminus H^i} \cap \paren {S \setminus H'}$
Thus $x$ is a point of $S$ that is neither an isolated point of $H$ nor a limit point of $H$.

Then there exists an open set $U$ that contains $x$ such that:

$U \cap H \ne \set x$
and:

$H \cap \paren {U \setminus \set x} = \O$

This implies that

$U \cap H = \O$
By Condition for Point being in Closure:

$x \notin H \cup H'$

It has been shown that:

$x \notin H^i \cup H' \implies x \notin H \cup H'$
From Rule of Transposition:

$x \in H \cup H' \implies x \in H^i \cup H'$
And so

$(2): \quad H \cup H' \subseteq H^i \cup H'$

Combining $(1)$ and $(2)$:

$H \cup H' = H^i \cup H'$
Hence the result.
$\Box$


Definition $1$ is equivalent to Definition $6$
By one of the equivalent definitions of an adherent point:

A point $x \in S$ is an adherent point of $H$ if and only if every open neighborhood $U$ of $x$ satisfies $H \cap U \ne \O$

From Condition for Point being in Closure:

$x \in H^-$ if and only if every open set of $T$ which contains $x$ contains a point in $H$
where:

$H^-$ is the union of $H$ and all the limit points of $H$ in $T$
The equivalence follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




