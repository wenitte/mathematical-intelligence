# 

Source: https://proofwiki.org/wiki/Group_Action_of_Symmetric_Group



Theorem
Let $\N_n$ denote the set $\set {1, 2, \ldots, n}$.
Let $\struct {S_n, \circ}$ denote the symmetric group on $\N_n$.

The mapping $*: S_n \times \N_n \to \N_n$ defined as:

$\forall \pi \in S_n, \forall n \in \N_n: \pi * n = \map \pi n$
is a group action.


Group Action on Subset of $\N_n$
Let $r \in \N: 0 < r \le n$.
Let $B_r$ denote the set of all subsets of $\N_n$ of cardinality $r$:

$B_r  := \set {S \subseteq \N_n: \card S = r}$

Let $*$ be the mapping $*: S_n \times B_r \to B_r$ defined as:

$\forall \pi \in S_n, \forall S \in B_r: \pi * S = \pi \sqbrk S$
where $\pi \sqbrk S$ denotes the image of $S$ under $\pi$.

Then $*$ is a group action.


Proof
The group action axioms are investigated in turn.
Let $\pi, \rho \in S_n$ and $n \in \N_n$.

Thus:














\(\ds \pi * \paren {\rho * n}\)

\(=\)







\(\ds \pi * \map \rho n\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \map \pi {\map \rho n}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \map {\paren {\pi \circ \rho} } n\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \paren {\pi \circ \rho} * n\)





Definition of $*$



demonstrating that Group Action Axiom $\text {GA} 1$ holds.

Then:














\(\ds I_{\N_n} * n\)

\(=\)







\(\ds \map {I_{\N_n} } n\)





where $I_{\N_n}$ is the identity mapping on ${\N_n}$














\(\ds \)

\(=\)







\(\ds n\)





Definition of Identity Mapping



demonstrating that Group Action Axiom $\text {GA} 2$ holds.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.5$. Groups acting on sets: Example $102$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 53 \alpha$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Examples of group actions: $\text{(ii)}$




