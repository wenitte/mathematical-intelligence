# 

Source: https://proofwiki.org/wiki/Composite_Mapping_is_Mapping



Theorem
Let $S_1, S_2, S_3$ be sets.
Let $f: S_1 \to S_2$ and $g: S_2 \to S_3$ be mappings.

Then the composite mapping $g \circ f$ is also a mapping.


Proof
The composite of $f$ and $g$ is defined as:

$g \circ f := \set {\tuple {x, z} \in S_1 \times S_3: \exists y \in S_2: \tuple {x, y} \in f \land \tuple {y, z} \in g}$

It is necessary to show that $g \circ f$ is both left-total and many-to-one.


Left-total
From the definition of a mapping:










\(\ds \forall x \in S_1: \exists y \in S_2: \, \)



\(\ds \map f x\)

\(=\)







\(\ds y\)





Definition of Mapping










\(\ds \forall y \in S_2: \exists z \in S_2: \, \)



\(\ds \map g y\)

\(=\)







\(\ds z\)





Definition of Mapping








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S_1: \exists z \in S_3: \, \)



\(\ds \map g {\map f x}\)

\(=\)







\(\ds z\)














\(\ds \leadsto \ \ \)

\(\ds \forall x \in S_1: \exists z \in S_3: \, \)



\(\ds \map {\paren {g \circ f} } x\)

\(=\)







\(\ds z\)





Definition of Composite Mapping



That is, $g \circ f$ is left-total.
$\Box$


Many-to-one
Suppose $x_1, x_2 \in S_1: x_1 = x_2$.
Then as $f$ is a mapping and so by definition many-to-one:

$\map f {x_1} = \map f {x_2}$
and so:

$\map g {\map f {x_1} } = \map g {\map f {x_2} }$
demonstrating that $g \circ f$ is similarly many-to-one.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Functions
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.4$: Functions




