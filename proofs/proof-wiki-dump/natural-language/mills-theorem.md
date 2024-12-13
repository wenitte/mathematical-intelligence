# 

Source: https://proofwiki.org/wiki/Mills%27_Theorem


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
There exists a real number $A$ such that $\floor {A^{3^n} }$ is a prime number for all $n \in \N_{>0}$, where:

$\floor x$ denotes the floor function of $x$
$\N$ denotes the set of all natural numbers.


Proof
We define $\map f x$ as a prime-representing function if and only if:

$\forall x \in \N: \map f x \in \Bbb P$
where:

$\N$ denotes the set of all natural numbers
$\Bbb P$ denotes the set of all prime numbers.
Let $p_n$ be the $n$th prime number.
From Difference between Consecutive Primes:

$p_{n + 1} - p_n < K {p_n}^{5 / 8}$
where $K$ is an unknown but fixed positive integer.


Lemma 1
$\forall N > K^8 \in \Z: \exists p \in \Bbb P: N^3 < p < \paren {N + 1}^3 - 1$
$\Box$

Let $P_0 > K^8$ be a prime number.
By Lemma 1, there exists an infinite sequence of primes:

$P_0, P_1, P_2, \ldots$
such that:

$\forall n \in \N_{>0}: {P_n}^3 < P_{n + 1} < \paren {P_n + 1}^3 - 1$

Let us define two mappings $u, v: \N \to \Bbb P$ as:

$\forall n \in \N: \map u n = {P_n}^{3^{-n} }$
$\forall n \in \N: \map v n = \paren {P_n + 1}^{3^{-n} }$

It is trivial that $\map v n > \map u n$.


Lemma 2
$\forall n \in \N_{>0}: \map u {n + 1} > \map u n$
$\Box$


Lemma 3
$\forall n \in \N_{>0}: \map v {n + 1} < \map v n$
$\Box$

It follows trivially that $\map u n$ is bounded and strictly monotone.
Therefore, there exists a number $A$ which is defined as:

$A := \lim_{n \mathop \to \infty} \map u n$
From Lemma 2 and Lemma 3, we have:

$\map u n < A < \map v n$













\(\ds \map u n\)

\(<\)







\(\ds A\)

\(\ds < \paren n\)












\(\ds \leadsto \ \ \)





\(\ds {P_n}^{3^{-n} }\)

\(<\)







\(\ds A\)

\(\ds < \paren {P_n + 1}^{3^{-n} }\)












\(\ds \leadsto \ \ \)





\(\ds P_n\)

\(<\)







\(\ds A^{3^n}\)

\(\ds < P_n + 1\)







The result follows.
$\blacksquare$


Source of Name
This entry was named for William Harold Mills.


Sources
1947: W.H. Mills: A Prime-Representing Function (Bull. Amer. Math. Soc Vol. 53, no. 6: p. 604)
Weisstein, Eric W.. "Mills' Theorem." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/MillsTheorem.html




