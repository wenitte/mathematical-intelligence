# 

Source: https://proofwiki.org/wiki/Modulo_Addition_is_Closed/Integers



Theorem
Let $m \in \Z$ be an integer.
Then addition modulo $m$ on the set of integers modulo $m$ is closed:

$\forall \eqclass x m, \eqclass y m \in \Z_m: \eqclass x m +_m \eqclass y m \in \Z_m$.


Proof
From the definition of addition modulo $m$, we have:

$\eqclass x m +_m \eqclass y m = \eqclass {x + y} m$
By the Division Theorem:

$x + y = q m + r$ where $0 \le r < m$
Therefore for all $0 \le r < m$:

$\eqclass {x + y} m = \eqclass r m$.
Therefore from the definition of integers modulo $m$:

$\eqclass {x + y} m \in \Z_m$
$\blacksquare$


Also see
Modulo Addition is Closed/Real Numbers


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups: Example $1.10$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 19.1$: Properties of $\Z_m$ as an algebraic system




