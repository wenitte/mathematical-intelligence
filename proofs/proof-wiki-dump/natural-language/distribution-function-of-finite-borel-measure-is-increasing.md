# 

Source: https://proofwiki.org/wiki/Distribution_Function_of_Finite_Borel_Measure_is_Increasing

Theorem
Let $\mu$ be a finite Borel measure on $\R$.
Let $F_\mu$ be the distribution function of $\mu$.

Then $F_\mu$ is an increasing function.


Proof
Let $x, y \in \R$ be such that $x \le y$.
Then: 

$\hointl {-\infty} x \subseteq \hointl {-\infty} x$
So, from Measure is Monotone:

$\map \mu {\hointl {-\infty} x} \le \map \mu {\hointl {-\infty} y}$
That is: 

$\map {F_\mu} x \le \map {F_\mu} y$ whenever $x \le y$.
So $F_\mu$ is an increasing function.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.3$: Outer Measures




