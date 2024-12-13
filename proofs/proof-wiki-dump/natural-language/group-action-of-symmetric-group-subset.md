# 

Source: https://proofwiki.org/wiki/Group_Action_of_Symmetric_Group/Subset

Theorem
Let $\N_n$ denote the set $\set {1, 2, \ldots, n}$.
Let $\struct {S_n, \circ}$ denote the symmetric group on $\N_n$.

Let $r \in \N: 0 < r \le n$.
Let $B_r$ denote the set of all subsets of $\N_n$ of cardinality $r$:

$B_r  := \set {S \subseteq \N_n: \card S = r}$

Let $*$ be the mapping $*: S_n \times B_r \to B_r$ defined as:

$\forall \pi \in S_n, \forall S \in B_r: \pi * S = \pi \sqbrk S$
where $\pi \sqbrk S$ denotes the image of $S$ under $\pi$.

Then $*$ is a group action.


Proof
The group action axioms are investigated in turn.
Let $\pi, \rho \in S_n$.
Let $S \in B_r$.

Thus:














\(\ds \pi * \paren {\rho * S}\)

\(=\)







\(\ds \pi * \rho \sqbrk S\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \pi \sqbrk {\rho \sqbrk S}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {\pi \circ \rho} \sqbrk S\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \paren {\pi \circ \rho} * n\)





Definition of $*$



demonstrating that Group Action Axiom $\text {GA} 1$ holds.

Then:














\(\ds I_{\N_n} * S\)

\(=\)







\(\ds I_{\N_n} \sqbrk S\)





where $I_{\N_n}$ is the identity mapping on $\N_n$














\(\ds \)

\(=\)







\(\ds S\)





Definition of Identity Mapping



demonstrating that Group Action Axiom $\text {GA} 2$ holds.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.5$. Orbits: Example $120$




