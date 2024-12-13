# 

Source: https://proofwiki.org/wiki/Mills%27_Theorem/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Lemma for Mills' Theorem
Let:

$\N$ denote the set of all natural numbers
$\Bbb P$ denote the set of all prime numbers.
Let $p_n$ be the $n$th prime number.
From Difference between Consecutive Primes:

$p_{n + 1} - p_n < K {p_n}^{5 / 8}$
where $K$ is an unknown but fixed positive integer.

Let $P_0 > K^8$ be a prime number.
By Lemma 1, there exists an infinite sequence of primes:

$P_0, P_1, P_2, \ldots$
such that:

$\forall n \in \N_{>0}: {P_n}^3 < P_{n + 1} < \paren {P_n + 1}^3 - 1$

Let us define a mapping $u: \N \to \Bbb P$ as:

$\forall n \in \N: \map u n = {P_n}^{3^{-n} }$

Then we have that:

$\forall n \in \N_{>0}: \map u {n + 1} > \map u n$


Proof













\(\ds \map u {n + 1}\)

\(=\)







\(\ds {P_{n + 1} }^{3^{-\paren {n + 1} } }\)




















\(\ds \)

\(>\)







\(\ds \paren { {P_n}^3}^{3^{-n - 1} }\)





because $P_{n + 1} > {P_n}^3$














\(\ds \)

\(=\)







\(\ds {P_n}^{3 \times 3^{-n-1} }\)




















\(\ds \)

\(=\)







\(\ds {P_n}^{3^{-n} }\)




















\(\ds \)

\(=\)







\(\ds \map u n\)









$\blacksquare$





