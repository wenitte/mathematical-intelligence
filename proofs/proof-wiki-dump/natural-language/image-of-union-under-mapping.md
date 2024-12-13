# 

Source: https://proofwiki.org/wiki/Image_of_Union_under_Mapping



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $A$ and $B$ be subsets of $S$.

Then:

$f \sqbrk {A \cup B} = f \sqbrk A \cup f \sqbrk B$

This can be expressed in the language and notation of direct image mappings as:

$\forall A, B \in \powerset S: \map {f^\to} {A \cup B} = \map {f^\to} A \cup \map {f^\to} B$


General Result
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $\powerset S$ be the power set of $S$.
Let $\mathbb S \subseteq \powerset S$.

Then:

$\ds f \sqbrk {\bigcup \mathbb S} = \bigcup_{X \mathop \in \mathbb S} f \sqbrk X$

This can be expressed in the language and notation of direct image mappings as:

$\ds \forall \mathbb S \subseteq \powerset S : \map {f^\to} {\bigcup \mathbb S} = \bigcup_{X \mathop \in \mathbb S} \map {f^\to} X$


Family of Sets
Let $S$ and $T$ be sets.
Let $\family {S_i}_{i \mathop \in I}$ be a family of subsets of $S$.
Let $f: S \to T$ be a mapping.

Then:

$\ds f \sqbrk {\bigcup_{i \mathop \in I} S_i} = \bigcup_{i \mathop \in I} f \sqbrk {S_i}$
where $\ds \bigcup_{i \mathop \in I} S_i$ denotes the union of $\family {S_i}_{i \mathop \in I}$.

This can be expressed in the language and notation of direct image mappings as:

$\ds \map {f^\to} {\bigcup_{i \mathop \in I} S_i} = \bigcup_{i \mathop \in I} \map {f^\to} {S_i}$


Proof 1
First we have:














\(\ds A\)

\(\subseteq\)







\(\ds A \cup B\)





Set is Subset of Union








\(\ds \leadsto \ \ \)





\(\ds f \sqbrk A\)

\(\subseteq\)







\(\ds f \sqbrk {A \cup B}\)





Image of Subset under Mapping is Subset of Image


















\(\ds B\)

\(\subseteq\)







\(\ds A \cup B\)





Set is Subset of Union








\(\ds \leadsto \ \ \)





\(\ds f \sqbrk B\)

\(\subseteq\)







\(\ds f \sqbrk {A \cup B}\)





Image of Subset under Mapping is Subset of Image












\(\ds \leadsto \ \ \)





\(\ds f \sqbrk A \cup f \sqbrk B\)

\(\subseteq\)







\(\ds f \sqbrk {A \cup B}\)





Union is Smallest Superset



$\Box$

Then:














\(\ds y\)

\(\in\)







\(\ds f \sqbrk {A \cup B}\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in A \cup B: \, \)



\(\ds y\)

\(=\)







\(\ds \map f x\)





Definition of Image of Subset under Relation








\(\ds \leadsto \ \ \)

\(\ds \exists x: x \in A \lor x \in B: \, \)



\(\ds y\)

\(=\)







\(\ds \map f x\)





Definition of Set Union








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds f \sqbrk A \lor y \in f \sqbrk B\)





Definition of Image of Subset under Relation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds f \sqbrk A \cup f \sqbrk B\)





Definition of Set Union








\(\ds \leadsto \ \ \)





\(\ds f \sqbrk {A \cup B}\)

\(\subseteq\)







\(\ds f \sqbrk A \cup f \sqbrk B\)





Definition of Subset



$\Box$

Thus we have:














\(\ds f \sqbrk A \cup f \sqbrk B\)

\(\subseteq\)







\(\ds f \sqbrk {A \cup B}\)




















\(\ds f \sqbrk {A \cup B}\)

\(\subseteq\)







\(\ds f \sqbrk A \cup f \sqbrk B\)














\(\ds \leadsto \ \ \)





\(\ds f \sqbrk A \cup f \sqbrk B\)

\(=\)







\(\ds f \sqbrk {A \cup B}\)





Definition of Set Equality



$\blacksquare$


Proof 2
As $f$, being a mapping, is also a relation, we can apply Image of Union under Relation:

$\RR \sqbrk {A \cup B} = \RR \sqbrk A \cup \RR \sqbrk B$
$\blacksquare$


Also see
Preimage of Union under Mapping
Image of Intersection under Mapping
Preimage of Intersection under Mapping


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.13 \ \text{(a)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 12 \alpha$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.10$: Functions: Exercise $5 \ \text{(e)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.2 \ \text{(f)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$




