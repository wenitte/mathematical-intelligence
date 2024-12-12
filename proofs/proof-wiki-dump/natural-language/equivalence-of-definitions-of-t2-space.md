# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_T2_Space



Theorem
The following definitions of the concept of $T_2$ (Hausdorff) space are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.

Definition 1
$\struct {S, \tau}$ is a Hausdorff space or $T_2$ space if and only if:

$\forall x, y \in S, x \ne y: \exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$
That is:

for any two distinct elements $x, y \in S$ there exist disjoint open sets $U, V \in \tau$ containing $x$ and $y$ respectively.
Definition 2
$\struct {S, \tau}$ is a Hausdorff space or $T_2$ space if and only if each point of $S$ is the intersection of all its closed neighborhoods.

Definition 3
$\struct {S, \tau}$ is a Hausdorff space or $T_2$ space if and only if:

$\forall x, y \in S, x \ne y: \exists N_x, N_y \subseteq S: \exists U, V \in \tau: x \in U \subseteq N_x, y \in V \subseteq N_y: N_x \cap N_y = \O$
That is:

for any two distinct elements $x, y \in S$ there exist disjoint neighborhoods $N_x, N_y \subseteq S$ containing $x$ and $y$ respectively.


Proof
Definition 1 implies Definition 2
Let $T = \struct {S, \tau}$ be a topological space for which:

$\forall x, y \in S, x \ne y: \exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$

Let us take any arbitrary $x, y \in S: x \ne y$.
Let $\CC_x$ be the set of all closed neighborhoods of $x$:

$\CC_x = \set {H: \relcomp S H \in \tau, \exists U \in \tau: x \in U \subseteq H}$
where $\relcomp S H$ is the complement of $H$ in $S$.

We need to demonstrate that the only element in the intersection of $\CC_x$ is $x$:

$\bigcap \CC_x = \set x$
and to do that we show that if $y \ne x$ then $y \notin \bigcap \CC_x$.

Let $C = \bigcap C_x$.
Clearly $x \in C$ and so $\set x \subseteq C_x$.
We have that $\exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$ by hypothesis.
As $x \in U$ it follows that $x \notin V$ and so $x \in \relcomp S V$.
Thus $x \in U \subseteq \relcomp S V$.
That is, $\relcomp S V$ is a closed neighborhood of $x$ and so $\relcomp S V \in \CC_x$.

As $y \in V$ it follows that $y \notin \relcomp S V$.
So $\relcomp S V$ is a closed neighborhood of $x$ which does not contain $y$.
So $y \notin \bigcap C_x$.

As $y$ is arbitrary:

$\forall y \in S, y \ne x: \exists H: \relcomp S H \in \tau: y \notin H$
and so $C_x \subseteq \set x$.
That is:

$\ds \forall x \in S: \set x = \bigcap \set {H: \relcomp S H \in \tau, \exists U \in \tau: x \in U \subseteq H}$
or, each point is the intersection of all its closed neighborhoods.
$\Box$


Definition 2 implies Definition 1
Let $T = \struct {S, \tau}$ be a topological space for which each point is the intersection of all its closed neighborhoods.

Let $x, y \in S: x \ne y$.
Let $\CC_x$ be the set of all closed neighborhoods of $x$:

$\CC_x = \set {H: \relcomp S H \in \tau, \exists U \in \tau: x \in U \subseteq H}$
where $\relcomp S H$ is the complement of $H$ in $S$.
This arises from the definition of a closed set as the complement in $S$ of an open set.

We have that:

$\ds \set x = \bigcap \set {H: \relcomp S H \in \tau, \exists U \in \tau: x \in U \subseteq H}$
Then as $y \notin \set x$ it is not the case that $\forall H \in C_x: y \in H$.
So for some $H \in C_x$ it must be the case that $y \in \relcomp S H = V$.

But $V = \relcomp S H \in \tau$, that is, $V$ is open in $T$.
Also, as $U \subseteq H$, it must follow that $U \cap V = \O$.
So:

$\exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$

As $x$ and $y$ are arbitrary, it follows that:

$\forall x, y \in S, x \ne y: \exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$
$\Box$


Definition 1 implies Definition 3
Let $T = \struct {S, \tau}$ be a topological space for which:

$\forall x, y \in S, x \ne y: \exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$

Let $x, y \in S: x \ne y$ be arbitrary.
From Set is Open iff Neighborhood of all its Points, $U$ and $V$ are neighborhoods of $x$ and $y$.
Thus as $x$ and $y$ are arbitrary:

$\forall x, y \in S, x \ne y: \exists N_x, N_y \subseteq S: \exists U, V \in \tau: x \subseteq U \subseteq N_x, y \subseteq V \subseteq N_y: N_x \cap N_y = \O$
$\Box$


Definition 3 implies Definition 1
Let $T = \struct {S, \tau}$ be a topological space for which:

$\forall x, y \in S, x \ne y: \exists N_x, N_y \subseteq S: \exists U, V \in \tau: x \subseteq U \subseteq N_x, y \subseteq V \subseteq N_y: N_x \cap N_y = \O$

Let $x, y \in S: x \ne y$ be arbitrary.
We have that:

$\exists U, V \in \tau: x \subseteq U \subseteq N_x, y \subseteq V \subseteq N_y: N_x \cap N_y = \O$

Aiming for a contradiction, suppose $\exists z \in S: z \in U \cap V$.
Then $z \in U, z \in V$














\(\ds z\)

\(\in\)







\(\ds U\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds z\)

\(\in\)







\(\ds V\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds z\)

\(\in\)







\(\ds N_x\)





Definition of Subset












\(\, \ds \land \, \)

\(\ds z\)

\(\in\)







\(\ds N_y\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds z\)

\(\in\)







\(\ds N_x \cap N_y\)





Definition of Set Intersection



From this contradiction it follows that $U \cap V = \O$.
As $x$ and $y$ are arbitrary, it follows that:

$\forall x, y \in S, x \ne y: \exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.): Problems: $\S 2: \ 8$




