# 

Source: https://proofwiki.org/wiki/Monotone_Convergence_Theorem_for_Positive_Simple_Functions

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \R$ be a positive simple function.
Let $\EE^+$ be the space of positive simple functions.
For each $n \in \N$, let $f_n : X \to \R$ be a positive simple function, such that:

$\ds \lim_{n \mathop \to \infty} f_n = f$
and:

for each $x \in X$, the sequence $\sequence {\map {f_n} x}_{n \mathop \in \N}$ is increasing
where $\lim$ denotes a pointwise limit.

Then:

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \int f_n \rd \mu$
where the integral signs denote $\mu$-integration.


Proof
Note that since: 

for each $x \in X$, the sequence $\sequence {\map {f_n} x}$ is increasing
we have that: 

$f_i \le f_j$
whenever $i \le j$. 
Since $f_n \to f$, from Monotone Convergence Theorem (Real Analysis): Increasing Sequence, we further obtain: 

$f_i \le f_j \le f$
whenever $i \le j$. 
From Integral of Positive Simple Function is Monotone, we have: 

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

Let $0 < \epsilon < 1$.
We will construct a non-increasing sequence of positive simple functions $\sequence {g_n}$ such that: 

$g_n \le f_n$
and: 

$\ds \lim_{n \mathop \to \infty} \int g_n \rd \mu = \paren {1 - \epsilon} \int f \rd \mu$
From Integral of Positive Simple Function is Monotone: 

$\ds \int g_n \rd \mu \le \int f_n \rd \mu$
So, from Inequality Rule for Real Sequences: 

$\ds \lim_{n \mathop \to \infty} \int g_n \rd \mu \le \lim_{n \mathop \to \infty} \int f_n \rd \mu$
giving: 

$\ds \paren {1 - \epsilon} \int f \rd \mu \le \lim_{n \mathop \to \infty} \int f_n \rd \mu$
Since $\epsilon$ is arbitrary, we will then have: 

$\ds \int f \rd \mu \le \lim_{n \mathop \to \infty} \int f_n \rd \mu$
giving the result. 

From Simple Function has Standard Representation: 

there exist disjoint $\Sigma$-measurable sets $E_1, E_2, \ldots, E_k$ and non-negative real numbers $a_1, a_2, \ldots, a_k$ such that:
$\ds \map f x = \sum_{i \mathop = 1}^k a_i \map {\chi_{E_i} } x$
For each $n \in \N$ and $i \in \N$, define: 

$E_{n, i} = \set {x \in E_i : \map {f_n} x \ge \paren {1 - \epsilon} a_i}$
Each $f_n$ is a positive simple function.
Hence from Simple Function is Measurable:

each $f_n$ is $\Sigma$-measurable.
So, from Characterization of Measurable Functions: 

$E_{n, i}$ is $\Sigma$-measurable for each $n \in \N$ and $i \in \N$.
Since $f_n \le f_{n + 1}$, we have: 

$\set {x \in E_i : \map {f_n} x \ge \paren {1 - \epsilon} a_i} \subseteq \set {x \in E_i : \map {f_{n + 1} } x \ge \paren {1 - \epsilon} a_i}$
That is: 

$E_{n, i} \subseteq E_{\paren {n + 1}, i}$
So:

for each $i \in \N$, the sequence $\sequence {E_{n, i} }_{n \mathop \in \N}$ is increasing.

We now show that, for each $i \in \N$: 

$\ds E_i = \bigcup_{n \mathop = 1}^\infty E_{n, i}$
Since:

$\ds \lim_{n \mathop \to \infty} f_n = f$
for each $x \in X$, there exists $N$ such that: 

$\size {\map {f_n} x - \map f x} \le \epsilon \map f x$
for $n \ge N$. 
In particular, for $x \in E_i$, we have: 

$\map {f_N} x \ge \paren {1 - \epsilon} \map f x = \paren {1 - \epsilon} a_i$
So:

$x \in E_{N, i}$
So: 

$\ds E_i \subseteq \bigcup_{n \mathop = 1}^\infty E_{n, i}$
By construction we have $E_{n, i} \subseteq E_i$ for each $n \in \N$, so we obtain: 

$\ds E_i = \bigcup_{n \mathop = 1}^\infty E_{n, i}$
as required.

We have that: 

for each $i \in \N$, $\sequence {E_{n, i} }_{n \mathop \in \N}$ is an increasing sequence of sets with $E_{n, i} \uparrow E_i$.
So, from Measure of Limit of Increasing Sequence of Measurable Sets, we have: 

$\ds \map \mu {E_i} = \lim_{n \mathop \to \infty} \map \mu {E_{n, i} }$
Now note that since each $E_i$ is disjoint, and: 

$E_{n, i} \subseteq E_i$
for each $n \in \N$, we must have: 

$E_{n, i} \cap E_{n, j} = \O$ for all $n, i, j \in \N$ with $i \ne j$.
Since the sets $E_{n, 1}, E_{n, 2}, \ldots, E_{n, k}$ are all disjoint and $\Sigma$-measurable, define a positive simple function $g_n : X \to \R$ by: 

$\ds \map {g_n} x = \sum_{i \mathop = 1}^k \paren {1 - \epsilon} a_i \map {\chi_{E_{n, i} } } x$
for each $x \in X$ and $n \in \N$. 
Then from the definition of the $\mu$-integral, we have: 

$\ds \int g_n \rd \mu = \sum_{i \mathop = 1}^k \paren {1 - \epsilon} a_i \map \mu {E_{n, i} }$
So: 














\(\ds \lim_{n \mathop \to \infty} \int g_n \rd \mu\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = 1}^k \paren {1 - \epsilon} a_i \map \mu {E_{n, i} }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \epsilon} \sum_{i \mathop = 1}^k a_i \paren {\lim_{n \mathop \to \infty} \map \mu {E_{n, i} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \epsilon} \sum_{i \mathop = 1}^k a_i \map \mu {E_i}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \epsilon} \int f \rd \mu\)





Definition of Integral of Positive Simple Function



as required.
$\blacksquare$





