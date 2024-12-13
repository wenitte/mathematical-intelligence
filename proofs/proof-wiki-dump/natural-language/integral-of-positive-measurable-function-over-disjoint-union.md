# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_over_Disjoint_Union

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f : X \to \overline \R$ be a positive $\Sigma$-measurable function.
Let $\sequence {D_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint $\Sigma$-measurable sets.
Let: 

$\ds D = \bigcup_{n \mathop = 1}^\infty D_n$

Then: 

$\ds \int_D f \rd \mu = \sum_{n \mathop = 1}^\infty \int_{D_n} f \rd \mu$


Proof
We have: 














\(\ds \int_D f \rd \mu\)

\(=\)







\(\ds \int \paren {f \times \chi_D} \rd \mu\)





Definition of Integral of Positive Measurable Function over Measurable Set














\(\ds \)

\(=\)







\(\ds \int \paren {f \times \paren {\sum_{n \mathop = 1}^\infty \chi_{D_n} } } \rd \mu\)





Characteristic Function of Disjoint Union














\(\ds \)

\(=\)







\(\ds \int \paren {\sum_{n \mathop = 1}^\infty \paren {f \times \chi_{D_n} } } \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\int \paren {f \times \chi_{D_n} } \rd \mu}\)





Integral of Series of Positive Measurable Functions














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_{D_n} f_n \rd \mu\)





Definition of Integral of Positive Measurable Function over Measurable Set



$\blacksquare$





