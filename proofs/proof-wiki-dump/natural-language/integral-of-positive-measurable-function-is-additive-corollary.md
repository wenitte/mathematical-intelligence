# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_is_Additive/Corollary

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f : X \to \overline \R$ and $g : X \to \overline \R$ be positive $\Sigma$-measurable functions.
Let $A \in \Sigma$. 

Then: 

$\ds \int_A \paren {f + g} \rd \mu = \int_A f \rd \mu + \int_A g \rd \mu$
where:

$f + g$ is the pointwise sum of $f$ and $g$
the integral sign denotes $\mu$-integration over $A$.

This can be summarized by saying that $\ds \int_A \cdot \rd \mu$ is additive.


Proof
We have: 














\(\ds \int_A \paren {f + g} \rd \mu\)

\(=\)







\(\ds \int \paren {f + g} \times \chi_A \rd \mu\)





Definition of Integral of Positive Measurable Function over Measurable Set














\(\ds \)

\(=\)







\(\ds \int \paren {f \times \chi_A + g \times \chi_A} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \paren {f \times \chi_A} \rd \mu + \int \paren {g \times \chi_A} \rd \mu\)





Integral of Positive Measurable Function is Additive














\(\ds \)

\(=\)







\(\ds \int_A f \rd \mu + \int_A g \rd \mu\)





Definition of Integral of Positive Measurable Function over Measurable Set



$\blacksquare$





