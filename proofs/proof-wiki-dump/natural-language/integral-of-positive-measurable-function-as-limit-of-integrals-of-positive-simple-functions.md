# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_as_Limit_of_Integrals_of_Positive_Simple_Functions

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R$ be a positive $\Sigma$-measurable function.
For each $n \in \N$, let $f_n : X \to \R$ be a positive simple function, such that:

$\ds \lim_{n \mathop \to \infty} f_n = f$
and:

for each $x \in X$, the sequence $\sequence {\map {f_n} x}_{n \mathop \in \N}$ is increasing
where $\lim$ denotes a pointwise limit.

Then:

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \int f_n \rd \mu$
where the integral signs denote $\mu$-integration.


Proof
Let $\EE^+$ be the space of positive simple functions.
Note that since: 

for each $x \in X$, the sequence $\sequence {\map {f_n} x}$ is increasing
we have that: 

$f_i \le f_j$
whenever $i \le j$. 
Since $f_n \to f$, from Monotone Convergence Theorem (Real Analysis): Increasing Sequence, we further obtain: 

$f_i \le f_j \le f$
whenever $i \le j$. 
From Integral of Positive Simple Function is Monotone: 

$\ds \int f_i \rd \mu \le \int f_j \rd \mu \le \int f \rd \mu$
So the sequence: 

$\ds \sequence {\int f_n \rd \mu}_{n \mathop \in \N}$
is increasing and bounded.
So, by Monotone Convergence Theorem (Real Analysis): Increasing Sequence, it converges with: 

$\ds \lim_{n \mathop \to \infty} \int f_n \rd \mu \le \int f \rd \mu$
We now want to show: 

$\ds \int f \rd \mu \le \lim_{n \mathop \to \infty} \int f_n$
at which point we will have: 

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \int f_n \rd \mu$

We will show that for all $g \in \EE^+$ with $g \le f$, we have: 

$\ds \int g \rd \mu \le \lim_{n \mathop \to \infty} \int f \rd \mu$
At which point, we have: 

$\ds \sup \set {\int g \rd \mu : g \le f, g \in \EE^+} \le \lim_{n \mathop \to \infty} \int f \rd \mu$
so that, by the definition of $\mu$-integration: 

$\ds \int f \rd \mu \le \lim_{n \mathop \to \infty} \int f \rd \mu$
This will give us: 

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \int f \rd \mu$
as required. 

For each $n \in \N$, define $h_n : X \to \R$ by: 

$h_n = \min \set {g, f_n}$
From Simple Function is Measurable: 

$g$ and $f_n$ are both $\Sigma$-measurable for each $n \in \N$.
So, from Pointwise Minimum of Measurable Functions is Measurable: 

$h_n$ is $\Sigma$-measurable for each $n \in \N$.
Also, from Pointwise Minimum of Simple Functions is Simple: 

$h_n$ is simple for each $n \in \N$.
We will show that: 

$\ds \lim_{n \mathop \to \infty} h_n = g$
and that: 

for each $x \in X$, the sequence $\sequence {\map {h_n} x}$ is increasing.
At which point, we will be able to apply the Monotone Convergence Theorem for Positive Simple Functions.

Let $x \in X$. 
Since $f_n \to f$ and $f - g \ge 0$, there exists $N \in \N$ such that: 

$\size {\map {f_n} x - \map f x} \le \map f x - \map g x$
for $n \ge N$. 
Then: 

$\map {f_n} x \ge \map g x$
for $n \ge N$. 
So:

$\map {h_n} x = \map g x$
for $n \ge N$, giving: 

$\ds \map g x = \lim_{n \mathop \to \infty} \map {h_n} x$
from Tail of Convergent Sequence.
Since $x \in X$ was arbitrary: 

$\ds g = \lim_{n \mathop \to \infty} h_n$
We move on to showing that $\sequence {\map {h_n} x}$ is increasing for each $x \in X$. 
For each $x \in X$, let $N_x$ be the least $N$ such that: 

$\map {f_n} x \ge \map g x$
If $N_x = 1$, then:

$\map {h_n} x = \map g x$
for each $n \in \N$, so: 

the sequence $\sequence {\map {h_n} x}_{n \mathop \in \N}$ is constant.
Hence: 

the sequence $\sequence {\map {h_n} x}_{n \mathop \in \N}$ is increasing.
Now suppose $N_x > 1$. 
Then, for $n < N_x$, we have that: 

$\map {h_n} x = \map {f_n} x$
So that, for $i \le j < N_x$, we have: 

$\map {h_i} x \le \map {h_j} x < \map g x$
So:

$\sequence {\map {h_n} x}_{n \mathop \in \N}$ is increasing for each $x \in X$.

Applying the Monotone Convergence Theorem for Positive Simple Functions, we then have: 

$\ds \int g \rd \mu = \lim_{n \mathop \to \infty} \int h_n \rd \mu$
We have that: 

$h_n \le f_n$
for each $n \in \N$. 
So, from Integral of Positive Measurable Function is Monotone:

$\ds \int h_n \rd \mu \le \int f_n \rd \mu$
for each $n \in \N$
Hence by Inequality Rule for Real Sequences: 

$\ds \lim_{n \mathop \to \infty} \int h_n \rd \mu \le \lim_{n \mathop \to \infty} \int f_n \rd \mu$
This gives: 

$\ds \int g \rd \mu \le \lim_{n \mathop \to \infty} \int f_n \rd \mu$
hence the required conclusion.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.7$




