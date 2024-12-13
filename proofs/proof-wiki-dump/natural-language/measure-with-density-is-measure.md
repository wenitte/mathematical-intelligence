# 

Source: https://proofwiki.org/wiki/Measure_with_Density_is_Measure



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R_{\ge 0}$ be a positive $\Sigma$-measurable function.

Then the $f \mu$, the measure with density $f$ with respect to $\mu$ is a measure.


Proof
Note that for each $A \in \Sigma$, we have: 

$\ds \map {\paren {f \mu} } A = \int_A f \rd \mu$
We verify each of the three conditions for a measure.


Proof of $(1)$
We have: 

$\map {\paren {f \mu} } A \ge 0$
for each $A \in \Sigma$ from the definition of the $\mu$-integral of a positive measurable function. 
$\Box$


Proof of $(2)$
Let $\sequence {D_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets. 
Let: 

$\ds D = \bigcup_{n \mathop = 1}^\infty D_n$
We then have: 














\(\ds \map {\paren {f \mu} } D\)

\(=\)







\(\ds \int_D f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_{D_n} f \rd \mu\)





Integral of Positive Measurable Function over Disjoint Union














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\paren {f \mu} } {D_i}\)









which shows $(2)$.
$\Box$


Proof of $(3')$
We have: 














\(\ds \map {\paren {f \mu} } \O\)

\(=\)







\(\ds \int_\O f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds 0\)





Empty Set is Null Set, Integral of Positive Measurable Function over Null Set



verifying $(3')$.

Since all three conditions have been verified, we have that $\mu f$ is a measure.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 9$: Problem $5$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.8$




