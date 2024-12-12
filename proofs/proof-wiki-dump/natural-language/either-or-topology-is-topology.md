# 

Source: https://proofwiki.org/wiki/Either-Or_Topology_is_Topology



Theorem
Let $T = \struct {S, \tau}$ be the either-or topology.

Then $\tau$ is a topology on $T$.


Proof
Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Let $\UU \subseteq \tau$.
Then either:

$\forall U \in \UU: \set 0 \nsubseteq U$ in which case $\set 0 \nsubseteq \bigcup \UU$
or:

$\exists U \in \UU: \openint {-1} 1 \subseteq U$ in which case $\openint {-1} 1 \subseteq \bigcup \UU$
In both cases:

$\ds \bigcup \UU \in \tau$

Note that:

$\set 0 \nsubseteq U \implies \openint {-1} 1 \nsubseteq U$
so there does not exist the confusion of what happens if the conditions are contradictory.
$\Box$


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Let $U_1, U_2 \in \tau$.
By definition of either-or topology, either:

$\openint {-1} 1 \subseteq U_1$ and $\openint {-1} 1 \subseteq U_2$
or:

$\set 0 \nsubseteq U_1$ or $\set 0 \nsubseteq U_2$

Suppose:

$\openint {-1} 1 \subseteq U_1$ and $\openint {-1} 1 \subseteq U_2$
From Intersection is Largest Subset:

$\openint {-1} 1 \subseteq U_1 \cap U_2$
By definition of either-or topology:

$U_1 \cap U_2 \in \tau$

Suppose:

$\set 0 \nsubseteq U_1$ or $\set 0 \nsubseteq U_2$
Then:














\(\ds \set 0\)

\(\nsubseteq\)







\(\ds U_1\)


















\(\, \ds \lor \, \)

\(\ds \set 0\)

\(\nsubseteq\)







\(\ds U_2\)














\(\ds \leadsto \ \ \)





\(\ds \set 0\)

\(\subseteq\)







\(\ds \relcomp S {U_1}\)





Definition of Relative Complement












\(\, \ds \lor \, \)

\(\ds \set 0\)

\(\subseteq\)







\(\ds \relcomp S {U_2}\)














\(\ds \leadsto \ \ \)





\(\ds \set 0\)

\(\subseteq\)







\(\ds \relcomp S {U_1} \cup \relcomp S {U_2}\)





Definition of Set Union








\(\ds \leadsto \ \ \)





\(\ds \set 0\)

\(\subseteq\)







\(\ds \relcomp S {U_1 \cap U_2}\)





De Morgan's Laws: Difference with Intersection








\(\ds \leadsto \ \ \)





\(\ds \set 0\)

\(\nsubseteq\)







\(\ds U_1 \cap U_2\)





Definition of Relative Complement



By definition of either-or topology:

$U_1 \cap U_2 \in \tau$

Thus by Proof by Cases:

$\forall U_1, U_2 \in \tau: U_1 \cap U_2 \in \tau$
$\Box$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
From Open Real Interval is Subset of Closed Real Interval:

$\openint {-1} 1 \subseteq \closedint {-1} 1 = S$
By definition of either-or topology:

$S \in \tau$
$\Box$

Hence the result, from the definition of topology.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $17$. Either-Or Topology




