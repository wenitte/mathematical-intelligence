# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Simple_Function_is_Increasing

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \R$, $f, g \in \EE^+$ be positive simple functions.

Suppose that:

$f \le g$
where $\le$ denotes pointwise inequality.

Then:

$\map {I_\mu} f \le \map {I_\mu} g$
where $I_\mu$ denotes $\mu$-integration

This can be summarized by saying that $I_\mu$ is an increasing mapping.


Proof
Note that: 

$g - f \ge 0$
From Scalar Multiple of Simple Function is Simple Function and Pointwise Sum of Simple Functions is Simple Function, we then have that: 

$g - f \in \EE^+$
Write: 

$g = f + \paren {g - f}$
From Integral of Positive Simple Function is Additive, we then have: 

$\map {I_\mu} g = \map {I_\mu} f + \map {I_\mu} {g - f}$
Since: 

$\map {I_\mu} {g - f} \ge 0$
we obtain: 

$\map {I_\mu} f \le \map {I_\mu} g$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.3 \ \text{(iv)}$




