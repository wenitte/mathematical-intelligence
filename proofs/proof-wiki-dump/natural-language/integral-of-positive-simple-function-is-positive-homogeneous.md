# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Simple_Function_is_Positive_Homogeneous



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \R, f \in \EE^+$ be a positive simple function.
Let $\lambda \in \R_{\ge 0}$ be a positive real number.

Then:

$\map {I_\mu} {\lambda \cdot f} = \map {\lambda \cdot I_\mu} f$
where:

$\lambda \cdot f$ is the pointwise $\lambda$-multiple of $f$
$I_\mu$ denotes $\mu$-integration.

This can be summarized by saying that $I_\mu$ is positive homogeneous.


Proof
Remark that $\lambda \cdot f$ is a positive simple function by Scalar Multiple of Simple Function is Simple Function.
Let:

$f = \ds \sum_{i \mathop = 0}^n a_i \chi_{E_i}$
be a standard representation for $f$.
Then we also have, for all $x \in X$:














\(\ds \map {\lambda \cdot f} x\)

\(=\)







\(\ds \lambda \sum_{i \mathop = 0}^n a_i \map {\chi_{E_i} } x\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \paren {\lambda a_i} \map {\chi_{E_i} } x\)





Summation is Linear



and it is immediate from the definition that this yields a standard representation for $\lambda \cdot f$.

Therefore, we have:














\(\ds \map {\lambda \cdot I_\mu} f\)

\(=\)







\(\ds \lambda \sum_{i \mathop = 0}^n a_i \map \mu {E_i}\)





Definition of $\mu$-Integration














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \paren {\lambda a_i} \map \mu {E_i}\)





Summation is Linear














\(\ds \)

\(=\)







\(\ds \map {I_\mu} {\lambda \cdot f}\)





Definition of $\mu$-Integration



Hence the result.
$\blacksquare$


Also see
Integral of Positive Measurable Function is Positive Homogeneous, an extension of this result to positive measurable functions


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.3 \ \text{(ii)}$




