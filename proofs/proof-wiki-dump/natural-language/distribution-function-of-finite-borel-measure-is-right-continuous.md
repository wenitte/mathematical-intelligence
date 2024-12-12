# 

Source: https://proofwiki.org/wiki/Distribution_Function_of_Finite_Borel_Measure_is_Right-Continuous

Theorem
Let $\mu$ be a finite Borel measure on $\R$.
Let $F_\mu$ be the distribution function of $\mu$.

Then $F_\mu$ is right-continuous.


Proof
From Monotonic Sequential Right-Continuity is Equivalent to Right-Continuity in the Reals, it suffices to show that: 

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n > x$ for each $n$, that converge to $x$ we have:
$\ds \map {F_\mu} x = \lim_{n \mathop \to \infty} \map {F_\mu} {x_n}$
Now let $\sequence {x_n}_{n \mathop \in \N}$ be a monotone sequence with $x_n > x$ for each $n \in \N$ and $x_n \to x$.
Then $\sequence {\hointl {-\infty} {x_n} }_{n \mathop \in \N}$ is a decreasing sequence of sets.
Then from Limit of Decreasing Sequence of Unbounded Below Closed Intervals, we have: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \hointl {-\infty} x$
Since $\mu$ is finite, we have: 

$\map \mu {\hointl {-\infty} {x_1} } < \infty$
so Measure of Limit of Decreasing Sequence of Measurable Sets is admissable and gives: 

$\ds \map \mu {\bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} } = \lim_{n \mathop \to \infty} \map \mu {\hointl {-\infty} {x_n} }$
That is: 

$\ds \map \mu {\bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} } = \lim_{n \mathop \to \infty} \map {F_\mu} {x_n}$
so:

$\ds \map \mu {\hointl {-\infty} x} = \lim_{n \mathop \to \infty} \map {F_\mu} {x_n}$
Hence: 

$\ds \map {F_\mu} x = \lim_{n \mathop \to \infty} \map {F_\mu} {x_n}$
Since the sequence $\sequence {x_n}_{n \mathop \in \N}$ was arbitrary, we have: 

$F_\mu$ is right-continuous.
from Monotonic Sequential Right-Continuity is Equivalent to Right-Continuity in the Reals.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.3$: Outer Measures




