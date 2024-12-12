# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_T5_Space



Theorem
The following definitions of the concept of $T_5$ space are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.

Definition by Open Sets
$\struct {S, \tau}$ is a $T_5$ space if and only if:

$\forall A, B \subseteq S, A^- \cap B = A \cap B^- = \O: \exists U, V \in \tau: A \subseteq U, B \subseteq V, U \cap V = \O$
That is:

$\struct {S, \tau}$ is a $T_5$ space when for any two separated sets $A, B \subseteq S$ there exist disjoint open sets $U, V \in \tau$ containing $A$ and $B$ respectively.
Definition by Closed Neighborhoods
$\struct {S, \tau}$ is a $T_5$ space if and only if:

$\forall Y, A \subseteq S: (A \subseteq Y^\circ \wedge A^- \subseteq Y) \implies \exists N \subseteq Y: \relcomp S N \in \tau: \exists U \in \tau: A \subseteq U \subseteq N$
That is:

$\struct {S, \tau}$ is a $T_5$ space if and only if every subset $Y \subseteq S$ contains a closed neighborhood of each $A \subseteq Y^\circ$ for which $A^- \subseteq Y$.
In the above, $Y^\circ$ denotes the interior of $Y$ and $A^-$ denotes the closure of $A$.


Proof
Definition by Open Sets implies Definition by Closed Neighborhoods
Suppose that:

$\forall A, B \subseteq S, A^- \cap B = A \cap B^- = \O: \exists U, V \in \tau: A \subseteq U, B \subseteq V, U \cap V = \O$

Let $Y, A \subseteq S$.
Suppose $A \subseteq Y^\circ$ and $A^- \subseteq Y$. 
Then:














\(\ds A^- \cap \relcomp S Y\)

\(\subseteq\)







\(\ds Y \cap \relcomp S Y\)





Set Intersection Preserves Subsets: Corollary: from $A^- \subseteq Y$














\(\ds \)

\(=\)







\(\ds \O\)





Intersection with Complement








\(\ds \leadsto \ \ \)





\(\ds A^- \cap \relcomp S Y\)

\(=\)







\(\ds \O\)





Subset of Empty Set



We also have:














\(\ds A \cap \paren {\relcomp S Y}^-\)

\(\subseteq\)







\(\ds Y^\circ \cap \paren {\relcomp S Y}^-\)





Set Intersection Preserves Subsets/Corollary: from $A \subseteq Y^\circ$














\(\ds \)

\(=\)







\(\ds Y^\circ \cap \relcomp S Y^\circ\)





Complement of Interior equals Closure of Complement














\(\ds \)

\(=\)







\(\ds \O\)





Intersection with Complement








\(\ds \leadsto \ \ \)





\(\ds A \cap \paren {\relcomp S Y}^-\)

\(=\)







\(\ds \O\)





Subset of Empty Set



We have by hypothesis: 

$\exists U, V \in \tau: A \subseteq U, \relcomp S Y \subseteq V, U \cap V = \O$
Then:














\(\ds A\)

\(\subseteq\)







\(\ds U\)





by hypothesis














\(\ds \)

\(\subseteq\)







\(\ds \relcomp S V\)





Empty Intersection iff Subset of Complement: from $U \cap V = \O$














\(\ds \)

\(\subseteq\)







\(\ds \relcomp S {\relcomp S Y}\)





Set Complement inverts Subsets: from $\relcomp S Y \subseteq V$














\(\ds \)

\(=\)







\(\ds Y\)





Relative Complement of Relative Complement



So we have demonstrated that there exists a closed neighborhood $\relcomp S V$ of $A$ contained in $Y$. 

As $Y$ and $A$ are arbitrary:

$\forall Y, A \subseteq S: \paren {A \subseteq Y^\circ \wedge A^- \subseteq Y} \implies \exists N \subseteq Y: \relcomp S N \in \tau: \exists U \in \tau: A \subseteq U \subseteq N$
$\Box$


Definition by Closed Neighborhoods implies Definition by Open Sets
Suppose that:

$\forall Y, A \subseteq S: \paren {A \subseteq Y^\circ \wedge A^- \subseteq Y} \implies \exists N \subseteq Y: \relcomp S N \in \tau: \exists U \in \tau: A \subseteq U \subseteq N$

Let $A, B \subseteq S$ be separated sets.
Then $A^- \cap B = A \cap B^- = \O$.
Then:














\(\ds A^-\)

\(\subseteq\)







\(\ds \relcomp S B\)





Empty Intersection iff Subset of Complement: from $A^- \cap B = \O$



We also have:














\(\ds A\)

\(\subseteq\)







\(\ds \relcomp S {B^-}\)





Empty Intersection iff Subset of Complement: from $A \cap B^- = \O$














\(\ds \)

\(=\)







\(\ds \paren{\relcomp S B}^\circ\)





Complement of Interior equals Closure of Complement




We have by hypothesis that there exists a closed neighborhood $N$ of $A$ contained in $\relcomp S B$.
Then:

$\exists U \in \tau: A \subseteq U \subseteq N \subseteq \relcomp S B$
Then we have:














\(\ds B\)

\(=\)







\(\ds \relcomp S {\relcomp S B}\)





Relative Complement of Relative Complement














\(\ds \)

\(\subseteq\)







\(\ds \relcomp S N\)





Set Complement inverts Subsets: from $N \subseteq \relcomp S B$














\(\ds \)

\(\in\)







\(\ds \tau\)





$N$ is closed



Finally:














\(\ds U \cap \relcomp S N\)

\(\subseteq\)







\(\ds N \cap \relcomp S N\)





Set Intersection Preserves Subsets: Corollary: from $U \subseteq N$














\(\ds \)

\(=\)







\(\ds \O\)





Intersection with Complement








\(\ds \leadsto \ \ \)





\(\ds U \cap \relcomp S N\)

\(=\)







\(\ds \O\)





Subset of Empty Set




Therefore we have:














\(\ds U, \relcomp S N\)

\(\in\)







\(\ds \tau\)




















\(\ds A\)

\(\subseteq\)







\(\ds U\)




















\(\ds B\)

\(\subseteq\)







\(\ds \relcomp S N\)




















\(\ds U \cap \relcomp S N\)

\(=\)







\(\ds \O\)










As $A$ and $B$ are arbitrary:

$\forall A, B \subseteq S, A^- \cap B = A \cap B^- = \O: \exists U, V \in \tau: A \subseteq U, B \subseteq V, U \cap V = \O$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms




