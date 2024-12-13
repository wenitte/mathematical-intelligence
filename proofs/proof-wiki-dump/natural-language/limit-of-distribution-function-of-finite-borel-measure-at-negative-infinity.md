# 

Source: https://proofwiki.org/wiki/Limit_of_Distribution_Function_of_Finite_Borel_Measure_at_Negative_Infinity

Theorem
Let $\mu$ be a finite Borel measure on $\R$.
Let $F_\mu$ be the distribution function of $\mu$.

Then:

$\ds \lim_{x \mathop \to -\infty} \map {F_\mu} x = 0$


Proof
From Sequential Characterisation of Limit at Minus Infinity of Real Function: Corollary, we aim to show that: 

for all decreasing real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to -\infty$ we have $\ds \lim_{n \mathop \to \infty} \map {F_\mu} {x_n} = 0$.
Since $\sequence {x_n}_{n \mathop \in \N}$ is decreasing, we have: 

the sequence $\sequence {\hointl {-\infty} {x_n} }_{n \mathop \in \N}$ is decreasing.
From Limit of Decreasing Sequence of Unbounded Below Closed Intervals with Endpoint Tending to Negative Infinity:

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \O$
Further, since $\mu$ is a finite measure, we have: 

$\ds \map \mu {\hointl {-\infty} {x_1} } < \infty$
So Measure of Limit of Decreasing Sequence of Measurable Sets is admissible, and gives: 

$\ds \map \mu {\bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} } = \lim_{n \mathop \to \infty} \map {F_\mu} {x_n}$
Since: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \O$
we have: 

$\ds \map \mu {\bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} } = 0$
from Empty Set is Null Set.
So:

$\ds \lim_{n \mathop \to \infty} \map {F_\mu} {x_n} = 0$
Since the sequence $\sequence {x_n}_{n \mathop \in \N}$ was arbitrary, we have: 

$\ds \lim_{x \mathop \to -\infty} \map {F_\mu} x = 0$
by Sequential Characterisation of Limit at Minus Infinity of Real Function: Corollary.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.3$: Outer Measures




