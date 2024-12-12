# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_10

Theorem
Let $p$ be a prime.
Let $b \in Z_{>0}$ be a (strictly) positive integer such that $b, p$ are coprime.
Let $\sequence {d_n}$ be a sequence of $p$-adic digits.
Let $\sequence {r_n}$ be an integer sequence such that:




\(\text {(1)}: \quad\)





\(\ds \forall n \in \N: \, \)



\(\ds r_n\)

\(=\)







\(\ds d_{n + 1} b + p r_{n + 1}\)










\(\text {(2)}: \quad\)





\(\ds \exists n_0 \in \N: \forall n \ge n_0: \, \)



\(\ds -b\)

\(\le\)







\(\ds r_n \le 0\)










Let: 

$n, k \in \N : k > 0 : r_n = r_{n + k}$

Then:

$d_{n + 1} = d_{n + k + 1}$
$r_{n + 1} = r_{n + k + 1}$


Proof
We have:














\(\ds d_{n + 1} b + p r_{n + 1}\)

\(=\)







\(\ds r_n\)





by hypothesis














\(\ds \)

\(=\)







\(\ds r_{n + k}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds d_{n + k + 1} b + p r_{n + k + 1}\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds p \paren{ r_{n + k + 1} - r_{n + 1} }\)

\(=\)







\(\ds \paren {d_{n + 1}  - d_{n + k + 1} }b\)





re-arranging terms




As $b, p$ are coprime:

$p \nmid b$
From Euclid's Lemma:

$p \divides \paren {d_{n + 1}  - d_{n + k + 1} }$
By definition of $p$-adic digits:

$d_{n + 1}, d_{n + k + 1} \in \set {0, 1, \ldots, p - 1}$
Hence:

$d_{n + 1} = d_{n + k + 1}$

We have:














\(\ds p \paren{ r_{n + k + 1} - r_{n + 1} }\)

\(=\)







\(\ds \paren {d_{n + 1}  - d_{n + k + 1} } b\)




















\(\ds \)

\(=\)







\(\ds 0\)





as $d_{n + 1} = d_{n + k + 1}$








\(\ds \leadsto \ \ \)





\(\ds \paren {r_{n + k + 1} - r_{n + 1} }\)

\(=\)







\(\ds 0\)





as $p \ne 0$








\(\ds \leadsto \ \ \)





\(\ds r_{n + 1}\)

\(=\)







\(\ds r_{n + k + 1}\)









$\blacksquare$





