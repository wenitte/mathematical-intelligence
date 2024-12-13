# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_under_Composite_Mapping



Theorem
Let $S_1, S_2, S_3$ be sets.
Let $f: S_1 \to S_2$ and $g: S_2 \to S_3$ be mappings.
Denote with $g \circ f: S_1 \to S_3$ the composition of $g$ and $f$.
Let $S_3' \subseteq S_3$ be a subset of $S_3$.

Then:

$\paren {g \circ f}^{-1} \sqbrk {S_3'} = \paren {f^{-1} \circ g^{-1} } \sqbrk {S_3'}$
where $g^{-1} \sqbrk {S_3'}$ denotes the preimage of $S_3'$ under $g$.


Proof 1
A mapping is a specific kind of relation.
Hence, Inverse of Composite Relation applies, and it follows that:

$\paren {g \circ f}^{-1} \sqbrk {S_3'} = \paren {f^{-1} \circ g^{-1} } \sqbrk {S_3'}$
$\blacksquare$


Proof 2
Let $x \in S_1$.
Then:














\(\ds x\)

\(\in\)







\(\ds \paren {g \circ f}^{-1} \sqbrk {S_3'}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\paren {g \circ f} } x\)

\(\in\)







\(\ds S_3'\)





Definition of Preimage of Subset under Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds \map g {\map f x}\)

\(\in\)







\(\ds S_3'\)





Definition of Composition of Mappings








\(\ds \leadstoandfrom \ \ \)





\(\ds \map f x\)

\(\in\)







\(\ds g^{-1} \sqbrk {S_3'}\)





Definition of Preimage of Subset under Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds f^{-1} \sqbrk {g^{-1} \sqbrk {S_3'} }\)





Definition of Preimage of Subset under Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \paren {f^{-1} \circ g^{-1} } \sqbrk {S_3'}\)





Definition of Composition of Mappings



Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 8$: Composition of Functions and Diagrams: Exercise $4$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.4 \ \text{(a)}$




