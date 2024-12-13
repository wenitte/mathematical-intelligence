# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_is_Closed

Theorem
Multiplication modulo $m$ is closed on the set of integers modulo $m$:

$\forall \eqclass x m, \eqclass y m \in \Z_m: \eqclass x m \times_m \eqclass y m \in \Z_m$.


Proof
From the definition of multiplication modulo $m$, we have:

$\eqclass x m \times_m \eqclass y m = \eqclass {x y} m$
By the Division Theorem:

$x y = q m + r$ where $0 \le r < m$
Therefore for all $0 \le r < m$:

$\eqclass {x y} m = \eqclass r m$
Therefore from the definition of integers modulo $m$:

$\eqclass {x y} m \in \Z_m$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 19.1$: Properties of $\Z_m$ as an algebraic system




