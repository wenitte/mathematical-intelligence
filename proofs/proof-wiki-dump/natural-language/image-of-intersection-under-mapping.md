# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_Mapping



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $S_1$ and $S_2$ be subsets of $S$.

Then:

$f \sqbrk {S_1 \cap S_2} \subseteq f \sqbrk {S_1} \cap f \sqbrk {S_2}$

This can be expressed in the language and notation of direct image mappings as:

$\forall S_1, S_2 \in \powerset S: \map {f^\to} {S_1 \cap S_2} \subseteq \map {f^\to} {S_1} \cap \map {f^\to} {S_2}$

That is, the image of the intersection of subsets of a mapping is a subset of the intersection of their images.


General Result
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $\powerset S$ be the power set of $S$.
Let $\mathbb S \subseteq \powerset S$.

Then:

$\ds f \sqbrk {\bigcap \mathbb S} \subseteq \bigcap_{X \mathop \in \mathbb S} f \sqbrk X$


Family of Sets
Let $S$ and $T$ be sets.
Let $\family {S_i}_{i \mathop \in I}$ be a family of subsets of $S$.
Let $f: S \to T$ be a mapping.

Then:

$\ds f \sqbrk {\bigcap_{i \mathop \in I} S_i} \subseteq \bigcap_{i \mathop \in I} f \sqbrk {S_i}$
where $\ds \bigcap_{i \mathop \in I} S_i$ denotes the intersection of $\family {S_i}_{i \mathop \in I}$.


Proof 1













\(\ds S_1 \cap S_2\)

\(\subseteq\)







\(\ds S_1\)





Intersection is Subset








\(\ds \leadsto \ \ \)





\(\ds f \sqbrk {S_1 \cap S_2}\)

\(\subseteq\)







\(\ds f \sqbrk {S_1}\)





Image of Subset under Mapping is Subset of Image


















\(\ds S_1 \cap S_2\)

\(\subseteq\)







\(\ds S_2\)





Intersection is Subset








\(\ds \leadsto \ \ \)





\(\ds f \sqbrk {S_1 \cap S_2}\)

\(\subseteq\)







\(\ds f \sqbrk {S_2}\)





Image of Subset under Mapping is Subset of Image












\(\ds \leadsto \ \ \)





\(\ds f \sqbrk {S_1 \cap S_2}\)

\(\subseteq\)







\(\ds f \sqbrk {S_1} \cap f \sqbrk {S_2}\)





Intersection is Largest Subset



$\blacksquare$


Proof 2
As $f$, being a mapping, is also a relation, we can apply Image of Intersection under Relation:

$\RR \sqbrk {S_1 \cap S_2} \subseteq \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}$
$\blacksquare$


Examples
Square Function
Let:

$S_1 = \set {x \in \Z: x \le 0}$
$S_2 = \set {x \in \Z: x \ge 0}$
$f: \Z \to \Z: \forall x \in \Z: \map f x = x^2$

We have:

$f \sqbrk {S_1} = \set {0, 1, 4, 9, 16, \ldots} = f \sqbrk {S_2}$
Then:

$f \sqbrk {S_1} \cap f \sqbrk {S_2} = \set {0, 1, 4, 9, 16, \ldots}$
but:

$f \sqbrk {S_1 \cap S_2} = f \sqbrk {\set 0} = \set 0$

As can be seen, the inclusion is proper, that is:

$f \sqbrk {S_1 \cap S_2} \ne f \sqbrk {S_1} \cap f \sqbrk {S_2}$


First Projection on Subsets of $\N \times \N$
Let $\pr_1: \N \times \N \to \N$ denote the first projection from the cartesian space $\N \times \N$ of the natural numbers.
Let:














\(\ds S_1\)

\(=\)







\(\ds \set {\tuple {m, 1}: m \in \N}\)




















\(\ds S_2\)

\(=\)







\(\ds \set {\tuple {0, 2 n}: n \in \N}\)










First note that we have:














\(\ds S_1 \cap S_1\)

\(=\)







\(\ds \set {\tuple {m, 1}: m \in \N} \cap \set {\tuple {0, 2 n}: n \in \N}\)




















\(\ds \)

\(=\)







\(\ds \O\)





as $1$ is not an integer of the form $2 n$




Then:














\(\ds \pr_1 \sqbrk {S_1}\)

\(=\)







\(\ds \set {m: m \in \N}\)




















\(\ds \)

\(=\)







\(\ds \N\)










and:












\(\ds \pr_1 \sqbrk {S_2}\)

\(=\)







\(\ds \set 0\)




















\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \pr_1 \sqbrk {S_1} \cap \pr_1 \sqbrk {S_2}\)

\(=\)







\(\ds \N \cap 0\)




















\(\ds \)

\(=\)







\(\ds 0\)










while:














\(\ds \pr_1 \sqbrk {S_1 \cap S_2}\)

\(=\)







\(\ds \pr_1 \sqbrk {\O}\)




















\(\ds \)

\(=\)







\(\ds \O\)










As can be seen, the inclusion is proper, that is:

$\pr_1 \sqbrk {S_1 \cap S_2} \ne \pr_1 \sqbrk {S_1} \cap \pr_1 \sqbrk {S_2}$


Also see
Image of Intersection under Injection: equality happens if and only if $f$ is an injection
Image of Intersection under One-to-Many Relation
Preimage of Intersection under Mapping
Image of Union under Mapping
Preimage of Union under Mapping


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.13 \ \text{(a)}$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1.3$: Functions and mappings. Images and preimages: Remark $1$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.10$: Functions: Exercise $5 \ \text{(f)}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.1: \ \text{(iii)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.2 \ \text{(g)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $4 \ \text{(i)}$




