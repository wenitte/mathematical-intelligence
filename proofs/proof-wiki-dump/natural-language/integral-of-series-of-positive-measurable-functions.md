# 

Source: https://proofwiki.org/wiki/Integral_of_Series_of_Positive_Measurable_Functions

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\sequence {f_n}_{n \mathop \in \N} \in \MM_{\overline \R}^+$, $f_n: X \to \overline \R$ be a sequence of positive measurable functions.
Let $\ds \sum_{n \mathop \in \N} f_n: X \to \overline \R$ be the pointwise series of the $f_n$.

Then:

$\ds \int \sum_{n \mathop \in \N} f_n \rd \mu = \sum_{n \mathop \in \N} \int f_n \rd \mu$
where the integral sign denotes $\mu$-integration.


Proof
Define the sequence $\sequence {g_N}_{n \mathop \in \N}$ of functions $g_N : X \to \overline \R$ by: 

$\ds \map {g_N} x = \sum_{n \mathop = 1}^N \map {f_n} x$
Since $f_n \ge 0$ for each $n$, we have: 














\(\ds \map {g_{N + 1} } x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^{N + 1} \map {f_n} x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \map {f_n} x + \map {f_{N + 1} } x\)




















\(\ds \)

\(\ge\)







\(\ds \sum_{n \mathop = 1}^N \map {f_n} x\)




















\(\ds \)

\(=\)







\(\ds \map {g_N} x\)









So $\sequence {g_N}_{N \mathop \in \N}$ is increasing. 
From Pointwise Sum of Measurable Functions is Measurable: General Result, we have that: 

$g_N$ is $\Sigma$-measurable for each $N$.
So, from the monotone convergence theorem, we have: 

$\ds \lim_{N \mathop \to \infty} \int g_N \rd \mu = \int \paren {\lim_{N \mathop \to \infty} g_N} \rd \mu$
From the definition of infinite series, we have: 

$\ds \lim_{N \mathop \to \infty} g_N = \sum_{n \mathop = 1}^\infty f_n$
So, we have: 

$\ds \lim_{N \mathop \to \infty} \int g_N \rd \mu = \int \paren {\sum_{n \mathop = 1}^\infty f_n} \rd \mu$
Manipulating the left hand side, we have: 














\(\ds \lim_{N \mathop \to \infty} \int g_N \rd \mu\)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \int \paren {\sum_{n \mathop = 1}^N f_n} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \sum_{n \mathop = 1}^N \paren {\int f_n \rd \mu}\)





Integral of Positive Measurable Function is Additive














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\int f_n \rd \mu}\)





Definition of Real Series



So:

$\ds \sum_{n \mathop = 1}^\infty \paren {\int f_n \rd \mu} = \int \paren {\sum_{n \mathop = 1}^\infty f_n} \rd \mu$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.9$, $\S 9$: Problem $4$




