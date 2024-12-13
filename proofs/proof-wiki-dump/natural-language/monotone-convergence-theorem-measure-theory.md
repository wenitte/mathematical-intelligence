# 

Source: https://proofwiki.org/wiki/Monotone_Convergence_Theorem_(Measure_Theory)

This proof is about Monotone Convergence Theorem in the context of Measure Theory. For other uses, see Monotone Convergence Theorem.


September 2022:  It has been suggested that this page or section be merged into Beppo Levi's Theorem .In particular: The same up to null setTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.




Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $u : X \to \overline \R_{\ge 0}$ be a positive $\Sigma$-measurable function. 
Let $\sequence {u_n}_{n \mathop \in \N}$ be an sequence of positive $\Sigma$-measurable functions $u_n : X \to \overline \R_{\ge 0}$ such that: 

$\map {u_i} x \le \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
hold for $\mu$-almost all $x \in X$. 

Then:

$\ds \int u \rd \mu = \lim_{n \mathop \to \infty} \int u_n \rd \mu$


Corollary
Let $u : X \to \overline \R_{\ge 0}$ be a positive $\Sigma$-measurable function. 
Let $\sequence {u_n}_{n \mathop \in \N}$ be an sequence of positive $\Sigma$-measurable functions $u_n : X \to \overline \R_{\ge 0}$ such that: 

$\map {u_i} x \ge \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
for $\mu$-almost all $x \in X$. 
Suppose also that $u_1$ is $\mu$-integrable function.

Then $u_n$ is $\mu$-integrable for each $n \in \N$ and $u$ is $\mu$-integrable with: 

$\ds \int u \rd \mu = \lim_{n \mathop \to \infty} \int u_n \rd \mu$


Proof
First suppose that: 

$\map {u_i} x \le \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
for all $x \in X$.
From Integral of Positive Measurable Function is Monotone, we have that: 

$\ds \int u_i \rd \mu \le \int u_j \rd \mu$ for all $i \le j$.
From Monotone Convergence Theorem (Real Analysis): Increasing Sequence, we have: 

$u_i \le u$ for each $i$.
So, applying Integral of Positive Measurable Function is Monotone again we have: 

$\ds \int u_i \rd \mu \le \int u \rd \mu$ for each $i$.
So: 

the sequence $\ds \sequence {\int u_i \rd \mu}_{i \in \N}$ is increasing.
So, from Monotone Convergence Theorem (Real Analysis): Increasing Sequence and Unbounded Monotone Sequence Diverges to Infinity: Increasing, we have: 

$\ds \sequence {\int u_i \rd \mu}_{i \in \N}$ converges, possibly to $+\infty$.
From Lower and Upper Bounds for Sequences, we also have: 

$\ds \lim_{n \mathop \to \infty} \int u_n \rd \mu \le \int u \rd \mu$
We now aim to prove: 

$\ds \int u \rd \mu \le \lim_{n \mathop \to \infty} \int u_n \rd \mu$
From Measurable Function is Pointwise Limit of Simple Functions, for each $n$ there exists a increasing sequence of positive simple functions $\sequence {u_{n, k} }_{k \mathop \in \N}$ such that: 

$\ds u_n = \lim_{k \mathop \to \infty} u_{n, k}$
From Monotone Convergence Theorem (Real Analysis): Increasing Sequence, this is equivalent to: 

$\ds u_n = \sup_{k \in \N} u_{n, k}$
Let: 

$\ds g_n = \max \set {u_{1, n}, u_{2, n}, \ldots, u_{n, n} }$
for each $n$.
From Pointwise Maximum of Simple Functions is Simple, $g_n$ is a positive simple function for each $n \in \N$.

With a view to apply Integral of Positive Measurable Function as Limit of Integrals of Positive Simple Functions, we show that: 

$\sequence {g_n}_{n \mathop \in \N}$ is increasing
and:

$\ds \map u x = \lim_{n \to \infty} \map {g_n} x$
for each $x \in X$.
We also show that: 

$\map {g_n} x \le \map {u_n} x$
for each $n \in \N$ and $x \in X$. 

Lemma
$(1) \quad$ $\sequence {g_n}_{n \mathop \in \N}$ is increasing
$(2) \quad$ $\ds \map u x = \lim_{n \mathop \to \infty} \map {g_n} x$
$(3) \quad$ $g_n \le u_n$ for each $n \in \N$.
$\Box$

So, from Integral of Positive Measurable Function as Limit of Integrals of Positive Simple Functions, we have: 

$\ds \int u \rd \mu = \lim_{n \mathop \to \infty} \int g_n \rd \mu$
Since:

$g_n \le u_n$ for each $n \in \N$
we have: 

$\ds \int g_n \rd \mu \le \int u_n \rd \mu$ for each $n \in \N$
from Integral of Positive Measurable Function is Monotone. 
So, from Inequality Rule for Real Sequences: 

$\ds \lim_{n \mathop \to \infty} \int g_n \rd \mu \le \lim_{n \mathop \to \infty} \int h_n \rd \mu$
So, we have: 

$\ds \int u \rd \mu \le \lim_{n \mathop \to \infty} \int u_n \rd \mu$
We therefore obtain: 

$\ds \int u \rd \mu = \lim_{n \mathop \to \infty} \int u_n \rd \mu$
as required.

Now suppose that: 

$\map {u_i} x \le \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
for $\mu$-almost all $x \in X$.
That is, there exists a $\mu$-null set $N \subseteq X$ such that whenever $x \in X$ has: 

$\map {u_i} x > \map {u_j} x$ for some $i < j$
and:

either $\ds \lim_{n \mathop \to \infty} \map {u_n} x$ does not exist or $\ds \map u x \ne \lim_{n \mathop \to \infty} \map {u_n} x$
we have $x \in N$.
For each $n \in \N$, define $v_n : X \to \overline \R_{\ge 0}$ by: 

$\map {v_n} x = \map {u_n} x \times \map {\chi_{X \setminus N} } x$
for each $x \in X$. 
Also define $v : X \to \overline \R_{\ge 0}$ by:

$\map v x = \map u x \times \map {\chi_{X \setminus N} } x$
for each $x \in X$.
Clearly, if $x \in X \setminus N$, we have: 

$\map {v_n} x = \map {u_n} x$ for each $n$
and:

$\map v x = \map u x$
From the definition of $N$, we have: 

$\map {u_i} x \le \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
for $x \in X \setminus N$.
So:

$\map {v_i} x \le \map {v_j} x$ for all $i \le j$
and:

$\ds \map v x = \lim_{n \mathop \to \infty} \map {v_n} x$
If $x \in N$, we have: 

$\map {v_n} x = 0$ for each $n \in \N$
and:

$\map v x = 0$
So we have: 

$\map {v_i} x \le \map {v_j} x$ for $i \le j$
and:

$\ds \map v x = \lim_{n \mathop \to \infty} \map {v_n} x$
for $x \in N$. 
So, we have: 

$\map {v_i} x \le \map {v_j} x$ for $i \le j$
and:

$\ds \map v x = \lim_{n \mathop \to \infty} \map {v_n} x$
for all $x \in X$. 
So, from our previous work, we have: 

$\ds \int v \rd \mu = \lim_{n \mathop \to \infty} \int v_n \rd \mu$
From Characteristic Function of Null Set is A.E. Equal to Zero: Corollary, we have: 

$\chi_{X \setminus N} = 1$ $\mu$-almost everywhere.
So, from Pointwise Multiplication preserves A.E. Equality, we have: 

$u \times \chi_{X \setminus N} = u$ $\mu$-almost everywhere
and:

$u_n \times \chi_{X \setminus N} = u_n$ $\mu$-almost everywhere for each $n \in \N$.
So, we have: 

$u = v$ $\mu$-almost everywhere
and:

$u_n = v_n$ $\mu$-almost everywhere for each $n \in \N$.
From A.E. Equal Positive Measurable Functions have Equal Integrals, we therefore have: 

$\ds \int u \rd \mu = \int v \rd \mu$
and:

$\ds \int u_n \rd \mu = \int v_n \rd \mu$ for each $n \in \N$
giving: 

$\ds \int u \rd \mu = \lim_{n \mathop \to \infty} \int u_n \rd \mu$
hence the demand.
$\blacksquare$


Proof 2
Let $Y \subseteq X$ be the set of $x \in X$ such that: 

$\map {u_i} x \le \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
Then by hypothesis:

$\map \mu {X \setminus Y} = 0$
We define an increasing sequence $\sequence {f_n}_{n \mathop \in \N}$ by: 

$\map {f_n} x = \begin{cases}
\map {u_n} x & x \in Y \\
0 & x \not \in Y
\end{cases}$
Then:














\(\ds \lim_{n \mathop \to \infty} \int u_n \rd \mu\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_Y u_n \rd \mu\)





Measurable Function Zero A.E. iff Absolute Value has Zero Integral














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int f_n \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \sup_{n \in \N} f_n \rd \mu\)





Beppo Levi's Theorem














\(\ds \)

\(=\)







\(\ds \int_Y \sup_{n \in \N} u_n \rd \mu\)





Measurable Function Zero A.E. iff Absolute Value has Zero Integral














\(\ds \)

\(=\)







\(\ds \int_Y u \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int u \rd \mu\)





Measurable Function Zero A.E. iff Absolute Value has Zero Integral



$\blacksquare$

Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $11.1 \ \text{(i)}$




