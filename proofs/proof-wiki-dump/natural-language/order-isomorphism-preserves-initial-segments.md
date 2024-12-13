# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_Preserves_Initial_Segments

Theorem
Let $A_1$ and $A_2$ be classes.
Let $\prec_1$ and $\prec_2$ be strict orderings.
Let $\phi: A_1 \to A_2$ create an order isomorphism between $\struct {A_1, \prec_1}$ and $\struct {A_2, \prec_2}$.
Suppose $x \in A_1$.

Then $\phi$ maps the $\prec_1$-initial segment of $x$ to the $\prec_2$-initial segment of $\map \phi x$.


Proof
$\phi$ maps the $\prec_1$-initial segment of $x$ to:














\(\ds \phi \sqbrk {\set {y \in A: y \prec_1 x} }\)

\(=\)







\(\ds \phi \sqbrk {\set {y \in A: \map \phi y \prec_2 \map \phi x} }\)





Definition of Initial Segment and Definition of Order Isomorphism














\(\ds \)

\(=\)







\(\ds \set {\map \phi y \in \phi \sqbrk A: \map \phi y \prec_2 \map \phi x}\)





Definition of Order Isomorphism and Definition of Image of Subset under Mapping




This is the $\prec_2$-initial segment of $\map \phi x$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.31$




