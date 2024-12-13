# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_under_Composite_Mapping/Proof_2

Theorem
Let $S_1, S_2, S_3$ be sets.
Let $f: S_1 \to S_2$ and $g: S_2 \to S_3$ be mappings.
Denote with $g \circ f: S_1 \to S_3$ the composition of $g$ and $f$.
Let $S_3' \subseteq S_3$ be a subset of $S_3$.

Then:

$\paren {g \circ f}^{-1} \sqbrk {S_3'} = \paren {f^{-1} \circ g^{-1} } \sqbrk {S_3'}$
where $g^{-1} \sqbrk {S_3'}$ denotes the preimage of $S_3'$ under $g$.


Proof
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
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites




