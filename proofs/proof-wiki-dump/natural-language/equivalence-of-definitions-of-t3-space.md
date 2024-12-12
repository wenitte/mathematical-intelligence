# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_T3_Space



Theorem
The following definitions of the concept of $T_3$ space are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.

Definition by Open Sets
$T = \struct {S, \tau}$ is a $T_3$ space if and only if:

$\forall F \subseteq S: \relcomp S F \in \tau, y \in \relcomp S F: \exists U, V \in \tau: F \subseteq U, y \in V: U \cap V = \O$
That is, for any closed set $F \subseteq S$ and any point $y \in S$ such that $y \notin F$ there exist disjoint open sets $U, V \in \tau$ such that $F \subseteq U$, $y \in V$.

Definition by Closed Neighborhoods
$T = \struct {S, \tau}$ is a $T_3$ space if and only if each open set contains a closed neighborhood around each of its points:

$\forall U \in \tau: \forall x \in U: \exists N_x: \relcomp S {N_x} \in \tau: \exists V \in \tau: x \in V \subseteq N_x \subseteq U$
where $N_x$ denotes a neighborhood of $x$.

Definition by Intersection of Closed Neighborhoods
$T = \struct {S, \tau}$ is a $T_3$ space if and only if each of its closed sets is the intersection of its closed neighborhoods:

$\forall H \subseteq S: \relcomp S H \in \tau: H = \bigcap \set {N_H: \relcomp S {N_H} \in \tau, \exists V \in \tau: H \subseteq V \subseteq N_H}$


Proof
Definition by Open Sets implies Definition by Closed Neighborhoods
Let $T = \struct {S, \tau}$ be a topological space for which:

$\forall F \subseteq S: \relcomp S F \in \tau, y \in \relcomp S F: \exists U, V \in \tau: F \subseteq U, y \in V: U \cap V = \O$

Let $U \in \tau$, and let $x \in U$.
Then:

$\relcomp S U$ is closed
and:

$x \notin \relcomp S U$

We have by hypothesis:

$\exists A, B \in \tau: \relcomp S U \subseteq A, x \in B: A \cap B = \O$
It follows that:














\(\ds x\)

\(\in\)







\(\ds B\)





by hypothesis














\(\ds \)

\(\subseteq\)







\(\ds \relcomp S A\)





Empty Intersection iff Subset of Complement: from $A \cap B$














\(\ds \)

\(\subseteq\)







\(\ds \relcomp S {\relcomp S U}\)





Set Complement inverts Subsets: from $\relcomp S U \subseteq A$














\(\ds \)

\(=\)







\(\ds U\)





Relative Complement of Relative Complement



That is:

$x \in \relcomp S A \subseteq U$
So we have demonstrated that there exists a closed neighborhood $\relcomp S A$ of $x$ contained in $U$.

As $U, x$ are arbitrary:

$\forall U \in \tau: \forall x \in U: \exists N_x: \relcomp S {N_x} \in \tau: \exists V \in \tau: x \in V \subseteq N_x \subseteq U$
$\Box$


Definition by Closed Neighborhoods implies Definition by Intersection of Closed Neighborhoods
Let $T = \struct {S, \tau}$ be a topological space for which:

$\forall U \in \tau: \forall x \in U: \exists N_x: \relcomp S {N_x} \in \tau: \exists V \in \tau: x \in V \subseteq N_x \subseteq U$
where $N_x$ denotes a neighborhood of $x$.

Let $H \subseteq S$ such that $\relcomp S H \in \tau$. 
Let $C_H$ be the set of all closed neighborhoods of $H$:

$C_H = \set {N_H: \relcomp S {N_H} \in \tau, \exists V \in \tau: H \subseteq V \subseteq N_H}$
By construction:

$H \subseteq \bigcap C_H$

Let $x \notin H$.
Then:

$x \in \relcomp S H \in \tau$

We have by hypothesis:

$\exists N_x: \relcomp S {N_x} \in \tau: \exists V \in \tau: x \in V \subseteq N_x \subseteq \relcomp S H$
It follows that:














\(\ds H\)

\(=\)







\(\ds \relcomp S {\relcomp S H}\)





Relative Complement of Relative Complement














\(\ds \)

\(\subseteq\)







\(\ds \relcomp S {N_x}\)





Set Complement inverts Subsets: from $N_x \subseteq \relcomp S H$














\(\ds \)

\(\subseteq\)







\(\ds \relcomp S V\)





Set Complement inverts Subsets: from $V \subseteq N_x$




Therefore by construction of $C_H$:

$\relcomp S V \in C_H$

Then:














\(\ds x\)

\(\in\)







\(\ds V\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\notin\)







\(\ds \relcomp S V\)





Definition of Relative Complement








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\notin\)







\(\ds \bigcap C_H\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \relcomp S {\bigcap C_H}\)





Definition of Relative Complement




That is:














\(\ds x \in \relcomp S H\)

\(\implies\)







\(\ds x \in \relcomp S {\bigcap C_H}\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S H\)

\(\subseteq\)







\(\ds \relcomp S {\bigcap C_H}\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds \bigcap C_H\)

\(\subseteq\)







\(\ds H\)





Set Complement inverts Subsets




We have shown that:

$\bigcap C_H \subseteq H$
and:

$H \subseteq \bigcap C_H$
So by definition of set equality:

$\bigcap C_H = H$

As $H$ is arbitrary:

$\forall H \subseteq S: \relcomp S H \in \tau: H = \bigcap \set {N_H: \relcomp S {N_H} \in \tau, \exists V \in \tau: H \subseteq V \subseteq N_H}$
$\Box$


Definition by Intersection of Closed Neighborhoods implies Definition by Open Sets
Let $T = \struct {S, \tau}$ be a topological space for which:

$\forall H \subseteq S: \relcomp S H \in \tau: H = \bigcap \set {N_H: \relcomp S {N_H} \in \tau, \exists V \in \tau: H \subseteq V \subseteq N_H}$

Let $F \subseteq S$ and $\relcomp S F \in \tau$.
We have by hypothesis:

$F = \bigcap \set {N_F: \relcomp S {N_F} \in \tau, \exists V \in \tau: F \subseteq V \subseteq N_F}$

Pick arbitrary $x \notin F$. 
Then:

$\exists N \subseteq S: \relcomp S N \in \tau, \exists V \in \tau: F \subseteq V \subseteq N$
Because $x \notin F \subseteq N$:

$x \in \relcomp S N$
Because $V \subseteq N$, it follows from Empty Intersection iff Subset of Complement that:

$V \cap \relcomp S N = \O$

Therefore we have:














\(\ds \relcomp S N, V\)

\(\in\)







\(\ds \tau\)




















\(\ds x\)

\(\in\)







\(\ds \relcomp S N\)




















\(\ds F\)

\(\subseteq\)







\(\ds V\)




















\(\ds V \cap \relcomp S N\)

\(=\)







\(\ds \O\)










As $F$ and $x$ are arbitrary:

$\forall F \subseteq S: \relcomp S F \in \tau, y \in \relcomp S F: \exists U, V \in \tau: F \subseteq U, y \in V: U \cap V = \O$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.): Problems: $\S 2: \ 9$




