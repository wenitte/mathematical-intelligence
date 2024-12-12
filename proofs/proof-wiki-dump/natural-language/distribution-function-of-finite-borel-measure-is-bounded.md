# 

Source: https://proofwiki.org/wiki/Distribution_Function_of_Finite_Borel_Measure_is_Bounded

Theorem
Let $\mu$ be a finite Borel measure on $\R$.
Let $F_\mu$ be the distribution function of $\mu$.

Then $F_\mu$ is bounded.


Proof
Let $x \in \R$.
Then: 

$\O \subseteq \hointl {-\infty} x \subseteq \R$
Then, from Measure is Monotone we have: 

$\map \mu \O \le \map \mu {\hointl {-\infty} x} \le \map \mu \R$
From Empty Set is Null Set, we have: 

$\map \mu \O = 0$
Since $\mu$ is a finite measure, we have: 

$\map \mu \R < \infty$
So, we have: 

$0 \le \map \mu {\hointl {-\infty} x} \le \map \mu \R < \infty$
So:

$0 \le \map {F_\mu} x \le \map \mu \R$ for each $x \in \R$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.3$: Outer Measures




