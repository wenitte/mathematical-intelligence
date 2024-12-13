# 

Source: https://proofwiki.org/wiki/Image_of_Set_Difference_under_Injection

Theorem
Let $f: S \to T$ be a mapping.
Let $S_1$ and $S_2$ be subsets of $S$.
Let $S_1 \setminus S_2$ denote the set difference between $S_1$ and $S_2$.

Then:

$\forall S_1, S_2 \subseteq S: f \sqbrk {S_1} \setminus f \sqbrk {S_2} = f \sqbrk {S_1 \setminus S_2}$
if and only if $f$ is an injection.


Proof
An injection is a type of one-to-one relation, and therefore also a one-to-many relation.

Therefore One-to-Many Image of Set Difference applies:

$\RR \sqbrk {S_1} \setminus \RR \sqbrk {S_2} = \RR \sqbrk {S_1 \setminus S_2}$
if and only if $\RR$ is one-to-many.

We have that $f$ is a mapping and therefore a many-to-one relation.
So $f$ is a one-to-many relation if and only if $f$ is also an injection.

It follows that:

$\forall S_1, S_2 \subseteq S: f \sqbrk {S_1} \setminus f \sqbrk {S_2} = f \sqbrk {S_1 \setminus S_2}$
if and only if $f$ is an injection.
$\blacksquare$


Sources
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Exercise $4 \ \text{(a)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.2 \ \text{(h)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $2.2$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: extract Halmos' result into a different page. It looks like it can be formulated in terms of complementIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites: Exercise $\text{(iii)}$




