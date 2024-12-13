# 

Source: https://proofwiki.org/wiki/Mapping_from_Unit_Circle_defines_Periodic_Function



Theorem
Let $\SS$ denote the unit circle whose center is at the origin of the Cartesian plane $\R^2$.
Let $p: \R \to \SS$ be the mapping defined as:

$\forall x \in \R: \map p x = \tuple {\cos x, \sin x}$

Let $f': \SS \to \R$ be a real-valued function.

Then the composition $f' \circ p$ defines a periodic real function whose period is $2 \pi$.


Proof
Let $f := f' \circ p$ denote the composition of $f$ with $p$.
We have:










\(\ds \forall x \in \R: \, \)



\(\ds \map f {x + 2 \pi}\)

\(=\)







\(\ds \map {f'} {\map p {x + 2 \pi} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {f'} {\map \cos {x + 2 \pi}, \map \sin {x + 2 \pi} }\)





Definition of $p$














\(\ds \)

\(=\)







\(\ds \map {f'} {\cos x, \sin x}\)





Cosine of Angle plus Full Angle, Sine of Angle plus Full Angle














\(\ds \)

\(=\)







\(\ds \map {f'} {\map p x}\)





Definition of $p$














\(\ds \)

\(=\)







\(\ds \map f x\)





Definition of Composition of Mappings



Hence the result.
$\blacksquare$


Also see
Periodic Function as Mapping from Unit Circle


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.8$: Quotient spaces




