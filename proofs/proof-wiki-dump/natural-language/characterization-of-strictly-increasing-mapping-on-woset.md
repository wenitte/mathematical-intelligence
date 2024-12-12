# 

Source: https://proofwiki.org/wiki/Characterization_of_Strictly_Increasing_Mapping_on_Woset



Theorem
Let $J$ and $E$ be well-ordered sets.
Let $h: J \to E$ be a mapping.
Let $S_\alpha$ denote an initial segment determined by $\alpha$.

The following statements are equivalent:

$(1): \quad h$ is strictly increasing and its image is either all of $E$ or an initial segment of $E$
$(2): \quad \forall \alpha \in J: \map h \alpha = \map \min {E \setminus h \sqbrk {S_\alpha} }$, and $h \sqbrk {S_\alpha} = S_{\map h \alpha}$
where:

$h \sqbrk {S_\alpha}$ denotes the image of $S_\alpha$ under $h$
$\min$ denotes the smallest element of the set.


Proof
$(1)$ implies $(2)$
Suppose $h$ satisfies:

$h$ is strictly increasing and its image is either all of $E$ or an initial segment of $E$
Then for any $x,y \in J$:














\(\ds x\)

\(\prec\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \map h x\)

\(\prec\)







\(\ds \map h y\)





Definition of Strictly Increasing Mapping














\(\ds h \sqbrk {S_y}\)

\(=\)







\(\ds \set {\map h x \in E: \exists x \in J: \map h x \prec \map h y}\)




















\(\ds \)

\(=\)







\(\ds S_{\map h y}\)




















\(\ds \map \min {E \setminus h \sqbrk {S_y} }\)

\(=\)







\(\ds \map \min {E \setminus S_{\map h y} }\)




















\(\ds \)

\(=\)







\(\ds \map h y\)





Definition of Smallest Element and Definition of Initial Segment



$\Box$


$(2)$ implies $(1)$
Suppose $h$ satisfies:

$\map h \alpha = \map \min {E \setminus h \sqbrk {S_\alpha} }$
By the Principle of Recursive Definition for Well-Ordered Sets, $h$ is thus uniquely determined.

Then:














\(\ds \map h y\)

\(=\)







\(\ds \map \min {E \setminus h \sqbrk {S_y} }\)




















\(\ds h \sqbrk {S_y}\)

\(=\)







\(\ds \set {\map h x \in E: \exists x \in J: \map h x =
           \map \min {E \setminus h \sqbrk {S_y} } }\)





















\(\ds \)

\(=\)







\(\ds \set {\map h x \in E: \exists x \in J: \map h x \prec \map h y}\)




















\(\ds \)

\(=\)







\(\ds S_{\map h y}\)





Definition of Initial Segment



Thus for every $x \in S_y$, we have that:

$\map h x \in S_{\map h y}$.
Therefore $h$ is an strictly increasing mapping.
Furthermore, the image set of $h$ is the union of initial segments in $E$.
By Union of Initial Segments is Initial Segment or All of Woset:

$h \sqbrk J$
is an initial segment of $E$ or all of $E$.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
2000: James R. Munkres: Topology (2nd ed.): Supplementary Exercise $1.2$




