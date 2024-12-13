# 

Source: https://proofwiki.org/wiki/Intersection_of_Image_with_Subset_of_Codomain

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $A \subseteq S$ and $B \subseteq T$.

Then:

$f \sqbrk {A \cap f^{-1} \sqbrk B} = f \sqbrk A \cap B$


Proof













\(\ds f \sqbrk {A \cap f^{-1} \sqbrk B}\)

\(=\)







\(\ds \set {\map f x: x \in A \cap f^{-1} \sqbrk B}\)





Definition of Image of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \set {\map f x: x \in A \land x \in f^{-1} \sqbrk B}\)





Definition of Set Intersection














\(\ds \)

\(=\)







\(\ds \set {\map f x: x \in A \land \map f x \in B}\)





Definition of Preimage of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \set {\map f x: x \in A} \cap \set {\map f x: \map f x \in B}\)





Definition of Set Intersection














\(\ds \)

\(=\)







\(\ds f \sqbrk A \cap B\)





Definition of Image of Subset under Mapping



$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $4 \ \text{(d})$




