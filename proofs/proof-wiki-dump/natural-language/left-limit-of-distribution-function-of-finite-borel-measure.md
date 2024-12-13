# 

Source: https://proofwiki.org/wiki/Left_Limit_of_Distribution_Function_of_Finite_Borel_Measure

Theorem
Let $\mu$ be a finite Borel measure.
Let $F_\mu$ be the distribution function of $\mu$.

Then we have:

$\ds \lim_{y \mathop \to x^-} \map {F_\mu} y = \map \mu {\openint {-\infty} x}$


Proof
From Monotonic Sequence Characterization of Left Limit of Function, the claim is equivalent to:

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n < x$ for each $n$, that converge to $x$ we have:
$\map {F_\mu} {x_n} \to \map \mu {\openint {-\infty} x}$
That is:

$\map \mu {\hointl {-\infty} {x_n} } \to \map \mu {\openint {-\infty} x}$
Let $\sequence {x_n}_{n \mathop \in \N}$ be a monotone sequence with $x_n < x$ for each $n \in \N$, satisfying $x_n \to x$. 
From Limit of Countable Union of Unbounded Below Closed Intervals, we have:

$\hointl {-\infty} {x_n} \uparrow \openint {-\infty} x$
where $\uparrow$ denotes the limit of an increasing sequence of sets.
From Measure of Limit of Increasing Sequence of Measurable Sets, we therefore have:

$\map \mu {\hointl {-\infty} {x_n} } \to \map \mu {\openint {-\infty} x}$
Invoking Monotonic Sequence Characterization of Left Limit of Function, we obtain:

$\ds \lim_{y \mathop \to x^-} \map {F_\mu} y = \map \mu {\openint {-\infty} x}$
$\blacksquare$





