# 

Source: https://proofwiki.org/wiki/Function_that_Satisfies_Axioms_of_Uncertainty/Proof

Theorem
Let $n \in \N$ be a natural number.
Let $p_1, p_2, \dotsc, p_n$ be real numbers such that:

$\forall i \in \set {1, 2, \dotsc, n}: p_i \ge 0$
$\ds \sum_{i \mathop = 1}^n p_i = 1$
Let $\map H {p_1, p_2, \ldots, p_n}$ be a real-valued function which satisfies the axioms of uncertainty.

Then:

$\ds \map H {p_1, p_2, \ldots, p_n} = -\lambda \sum_{i \mathop = 1}^n p_i \log_b p_i$
where:

$\lambda \in \R_{>0}$
$b \in \R_{>1}$


Proof
Let $g: \Z \to \R$ be the mapping defined as:

$(1): \quad \map g n = \map H {\dfrac 1 n, \dfrac 1 n, \dotsc, \dfrac 1 n}$

Let $k \in \Z_{>0}$.
We have:














\(\ds \map g {n^k}\)

\(=\)







\(\ds \map g {n \times n^{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \map g n + \map g {n^{k - 1} }\)





Axiom 7














\(\ds \)

\(=\)







\(\ds \map g n + \map g n + \map g {n^{k - 2} }\)





Axiom 7 again














\(\ds \)

\(=\)







\(\ds \underbrace {\map g n + \map g n + \dotsb + \map g n}_{\text {$k - 1$ times} } + \map g {n^{k - \paren {k - 1} } }\)





after $k - 1$ applications of Axiom 7














\(\ds \)

\(=\)







\(\ds \underbrace {\map g n + \map g n + \dotsb + \map g n}_{\text {$k - 1$ times} } + \map g n\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds k \map g n\)










Let $r, s \in \R$ and $n \in \Z_{>0}$.
Let $m$ satisfy:

$(3): \quad r^m \le s^n \le r^{m + 1}$
From $(2)$ and Axiom 5:

$\map g {r^m} \le \map g {s^n} \le \map g {r^{m + 1} }$
and so:

$m \map g r \le n \map g s \le \paren {m + 1} \map g r$
Taking logarithms of $(3)$:

$m \ln r \le n \ln s \le \paren {m + 1} \ln r$
which holds because Logarithm is Strictly Increasing.
Hence:

$\size {\dfrac {\map g s} {\map g r} - \dfrac {\map \ln s} {\map \ln r} } \le \dfrac 1 n$
We have that $n$ is an arbitrary positive integer.
Hence the right hand side of the above can be made arbitrarily small.
Hence:

$\size {\dfrac {\map g s} {\map g r} - \dfrac {\map \ln s} {\map \ln r} } = 0$
and so:

$(4): \quad \dfrac {\map g s} {\map \ln s} = \dfrac {\map g r} {\map \ln r} = A$
for some constant $A$.
That is:

$(5): \quad \map g s = A \map \ln s$
for $s \in \Z$.

Let $p$ be a rational number such that $0 < p < 1$.
That is:

$p = \dfrac t n$
for some integers $t$ and $n$.
Thus we can set:

$q = 1 = p = \dfrac {n - t} n$
Axiom 8 gives:

$\map g n = \map H {\dfrac 1 n, \dfrac 1 n, \dotsc, \dfrac 1 n} = \map H {\dfrac 1 n, \dfrac {n - t} n} + \dfrac t n \map g t + \dfrac {n - t} n \map g {n - t}$
Using $(5)$ and gathering up terms:

$\map H {\dfrac 1 n, \dfrac {n - t} n} = A \paren {\dfrac t n} \ln \dfrac t n + A \paren {\dfrac {n - t} n} \ln \dfrac {n - t} n$
which gives:

$(6): \quad \map H {p, 1 - p} = A p \ln p + A \paren {1 - p} \, \map \ln {1 - p}$
for rational $p$.
Axiom 6 gives that $H$ is continuous.
Thus $(6)$ extends to all real $p$ such that $0 < p < 1$.

It remains to be demonstrated that:

$(7): \quad \map H {p_1, p_2, \ldots, p_N} = A \displaystyle \sum_{i \mathop = 1}^N p_i \ln p_i$
where:

$0 < p_i < 1$ for all $p_i$
$p_1 + p_2 + \dotsb + p_N$
for all $N \in \Z_{\ge 2}$.
We have demonstrated that $(7)$ is true for $N = 2$.
Assume the induction hypothesis that $(7)$ holds for $N = k$.
Consider:

$\map H {p_1, p_2, \ldots, p_k, p_{k + 1} }$
Let:

$p = p_1 + p_2 + \dotsb + p_k$
$q = p_{k + 1}$
and apply Axiom 8:














\(\ds \map H {p_1, p_2, \ldots, p_k, p_{k + 1} }\)

\(=\)







\(\ds \map H {p, q} + p \map H {\dfrac {p_1} p, \dfrac {p_2} p, \dotsc, \dfrac {p_k} p} + q \map H 1\)




















\(\ds \)

\(=\)







\(\ds A p \ln p + A q \ln q + p A \sum_{i \mathop = 1}^k \dfrac {p_i} p \ln \dfrac {p_i} p\)





from the induction hypothesis














\(\ds \)

\(=\)







\(\ds A p \ln p + A p_{k + 1} \ln p_{k + 1} + A \sum_{i \mathop = 1}^k p_i \paren {\ln p_i - \ln p}\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds A p \ln p + A p_{k + 1} \ln p_{k + 1} + A \sum_{i \mathop = 1}^k p_i \ln p_i - A p \ln p\)





as $A \displaystyle \sum_{i \mathop = 1}^k p_i = p$








\(\ds \leadsto \ \ \)





\(\ds \map H {p_1, p_2, \ldots, p_k, p_{k + 1} }\)

\(=\)







\(\ds A \sum_{i \mathop = 1}^{k + 1} p_i \ln p_i\)









Hence the result from the Principle of Mathematical Induction.
$\blacksquare$



This article, or a section of it, needs explaining.In particular: Need to resolve the fact that $A$ as given here is arbitrary, but in the exposition we have the factor as $-\lambda$ for positive $\lambda$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Sources
1988: Dominic Welsh: Codes and Cryptography ... (next): Appendix $1$: Proof of the uniqueness theorem that $H = -\sum p_i \log p_i$




