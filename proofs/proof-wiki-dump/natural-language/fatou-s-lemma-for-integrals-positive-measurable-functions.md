# 

Source: https://proofwiki.org/wiki/Fatou%27s_Lemma_for_Integrals/Positive_Measurable_Functions



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\sequence {f_n}_{n \mathop \in \N} \in \MM_{\overline \R}^+$, $f_n: X \to \overline \R$ be a sequence of positive measurable functions.


This article, or a section of it, needs explaining.In particular: What is $\MM_{\overline \R}^+$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\ds \liminf_{n \mathop \to \infty} f_n: X \to \overline \R$ be the pointwise limit inferior of the $f_n$.

Then:

$\ds \int \liminf_{n \mathop \to \infty} f_n \rd \mu \le \liminf_{n \mathop \to \infty} \int f_n \rd \mu$
where:

the integral sign denotes $\mu$-integration
the right hand side limit inferior is taken in the extended real numbers $\overline \R$.


Proof
For each $n \in \N$, define $g_n : X \to \overline \R$ by: 

$\ds g_n = \inf_{k \mathop \ge n} f_k$
That is: 

$\map {g_n} x = \inf \set {\map {f_k} x : k \ge n}$
for each $x \in X$. 
For each $n \in \N$, we have that: 

$\set {\map {f_k} x : k \ge n + 1} \subseteq \set {\map {f_k} x : k \ge n}$
From Infimum of Subset: 

$\inf \set {\map {f_k} x : k \ge n + 1} \ge \inf \set {\map {f_k} x : k \ge n}$
That is: 

$\map {g_{n + 1} } x \ge \map {g_n} x$
for each $n \in \N$. 
From Pointwise Infimum of Measurable Functions is Measurable, we also have: 

$g_n$ is $\Sigma$-measurable for each $n \in \N$.
We have: 

$\ds \lim_{n \mathop \to \infty} g_n = \lim_{n \mathop \to \infty} \paren {\inf_{k \mathop \ge n} f_k}$
By the definition of limit inferior: 

$\ds \lim_{n \mathop \to \infty} g_n = \liminf_{n \mathop \to \infty} f_n$
So:

$\sequence {g_n}_{n \mathop \in \N}$ is an increasing sequence of $\Sigma$-measurable functions convergent to $\ds \liminf_{n \mathop \to \infty} f_n$.
We are therefore able to apply the monotone convergence theorem.
We then have:: 














\(\ds \int \liminf_{n \mathop \to \infty} f_n \rd \mu\)

\(=\)







\(\ds \int \lim_{n \mathop \to \infty} \paren {\inf_{k \mathop \ge n} f_k} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int \paren {\inf_{k \mathop \ge n} f_k} \rd \mu\)





applying the monotone convergence theorem to $\sequence {g_n}_{n \mathop \in \N}$



Clearly we have: 

$\ds \inf_{k \mathop \ge n} f_k \le f_n$
for any $n \in \N$. 
So, by Integral of Integrable Function is Monotone: 

$\ds \int \paren {\inf_{k \mathop \ge n} f_k} \rd \mu \le \int f_n \rd \mu$
and so: 

$\ds \int \paren {\inf_{k \mathop \ge n} f_k} \rd \mu \le \inf_{k \mathop \ge n} \int f_k \rd \mu$
Then: 














\(\ds \lim_{n \mathop \to \infty} \int \paren {\inf_{k \mathop \ge n} f_k} \rd \mu\)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} \paren {\inf_{k \mathop \ge n} \int f_k \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds \liminf_{n \mathop \to \infty} \int f_n \rd \mu\)









$\blacksquare$


Also see
Reverse Fatou's Lemma/Positive Measurable Functions


Source of Name
This entry was named for Pierre Joseph Louis Fatou.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.11$
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $2.4$: Limit Theorems: Theorem $2.4.4$




