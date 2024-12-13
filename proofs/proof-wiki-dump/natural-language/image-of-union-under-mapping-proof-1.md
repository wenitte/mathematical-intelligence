# 

Source: https://proofwiki.org/wiki/Image_of_Union_under_Mapping/Proof_1

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $A$ and $B$ be subsets of $S$.

Then:

$f \sqbrk {A \cup B} = f \sqbrk A \cup f \sqbrk B$

This can be expressed in the language and notation of direct image mappings as:

$\forall A, B \in \powerset S: \map {f^\to} {A \cup B} = \map {f^\to} A \cup \map {f^\to} B$


Proof
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


Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1.3$: Functions and mappings. Images and preimages: Theorem $3$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.1: \ \text{(ii)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 21.4 \ \text{(ii)}$: The image of a subset of the domain; surjections




