# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Function_with_respect_to_Counting_Measure_on_Natural_Numbers

Theorem
Consider the measure space $\struct {\N, \map \PP \N, \mu}$ where $\mu$ is the counting measure on $\struct {\N, \map \PP \N}$.
Let $f : \N \to \R$ be a function. 

Then: 

$\ds \int f \rd \mu = \sum_{n \mathop = 1}^\infty \map f n$


Proof
Clearly we have: 

$\set {x \in \N : \map f x \le \alpha} \in \map \PP \N$
for each $\alpha \in \R$, so any function $f : \N \to \R$ is $\map \PP \N$-measurable.
Similarly, an arbitrary subset of $\N$ is clearly $\map \PP \N$-measurable.

For each $n \in \N$, define $f_n : \N \to \R$ by: 

$\ds \map {f_n} k = \begin{cases}\map f k & k \le n \\ 0 & k > n\end{cases}$
for $k \in \N$.

We show that $\sequence {f_n}_{n \mathop \in \N}$ is increasing.
Let $k \in \N$. 
We want to show that: 

$\map {f_n} k \le \map {f_{n + 1} } k$
for each $n \in \N$. 
If $k \le n$, then we have: 

$\map {f_n} k = \map f k$
and:

$\map {f_{n + 1} } k = \map f k$
so we have: 

$\map {f_n} k = \map {f_{n + 1} } k$
in this case.
If $k = n + 1$, then: 

$\map {f_n} k = 0$
and:

$\map {f_{n + 1} } k = \map f k$
so we have: 

$\map {f_n} k \le \map {f_{n + 1} } k$
If $k > n + 1$, then: 

$\map {f_n} k = \map f k$
and:

$\map {f_{n + 1} } k = \map f k$
so that: 

$\map {f_n} k = \map {f_{n + 1} } k$
So $\sequence {f_n}_{n \mathop \in \N}$ is increasing

We show that: 

$\ds \map f k = \lim_{n \mathop \to \infty} \map {f_n} k$
Note that for all $n \ge k$, we have: 

$\map {f_n} k = \map f k$
so we obtain the above from Tail of Convergent Sequence.

So $\sequence {f_n}_{n \mathop \in \N}$ is a increasing sequence of $\map \PP \N$-measurable functions converging to $f$. 
So, from the monotone convergence theorem, we obtain: 

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \int f_n \rd \mu$
It remains to compute: 

$\ds \int f_n \rd \mu$
for each $n \in \N$.
We can rewrite: 

$\ds f_n = \sum_{i \mathop = 1}^n \map f i \chi_{\set i}$
Clearly:

$\set {\set 1, \set 2, \ldots, \set n}$ is pairwise disjoint
so, from the definition of the $\mu$-integral of a positive simple function, we have: 

$\ds \map {I_\mu} {f_n} = \sum_{i \mathop = 1}^n \map f i \map \mu {\set i}$
From the definition of the counting measure, we have: 

$\map \mu {\set i} = 1$
for each $i$, so:

$\ds \map {I_\mu} {f_n} = \sum_{i \mathop = 1}^n \map f i$
From Integral of Positive Measurable Function Extends Integral of Positive Simple Function, we therefore have: 

$\ds \int f_n \rd \mu = \sum_{i \mathop = 1}^n \map f i$
From the definition of infinite series, we then have: 

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \sum_{k \mathop = 1}^n \map f k = \sum_{k \mathop = 1}^\infty \map f k$
as required.
$\blacksquare$





