# 

Source: https://proofwiki.org/wiki/Mills%27_Theorem/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Lemma for Mills' Theorem
Let:

$\N$ denotes the set of all natural numbers
$\Bbb P$ denotes the set of all prime numbers.

Let $p_n$ be the $n$th prime number.
From Difference between Consecutive Primes:

$p_{n + 1} - p_n < K {p_n}^{5 / 8}$
where $K$ is an unknown but fixed positive integer.

Then we have that:

$\forall N > K^8 \in \Z: \exists p \in \Bbb P: N^3 < p < \paren {N + 1}^3 - 1$


Proof
Let $p_n$ be the greatest prime less than $N^3$.














\(\ds N^3\)

\(<\)







\(\ds p_{n + 1}\)





because $p_n$ is the greatest prime less than $N^3$














\(\ds \)

\(<\)







\(\ds p_n + K {p_n}^{\frac 5 8}\)





Difference between Consecutive Primes














\(\ds \)

\(<\)







\(\ds N^3 + K N^{\frac {15} 8}\)





because $p_n < N^3$














\(\ds \)

\(<\)







\(\ds N^3 + N^2\)





because $N > K^8$














\(\ds \)

\(<\)







\(\ds N^3 + 3N^2 + 3N\)




















\(\ds \)

\(=\)







\(\ds \paren {N + 1}^3 - 1\)









Therefore:

$N^3 < p_{n + 1} < \paren {N + 1}^3 - 1$
$\blacksquare$





