# 

Source: https://proofwiki.org/wiki/Cosine_to_Power_of_Odd_Integer/Proof_1

Theorem
$\ds \cos^{2 n + 1} \theta = \frac 1 {2^{2 n} } \sum_{k \mathop = 0}^n \binom {2 n + 1} k \cos \paren {2 n - 2 k + 1} \theta$


Proof













\(\ds \cos^{2 n + 1} \theta\)

\(=\)







\(\ds \paren {\frac {e^{i \theta} + e^{-i \theta} } 2}^{2 n + 1}\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n + 1} } \paren {e^{i \theta} + e^{-i \theta} }^{2 n + 1}\)





Power of Product














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n + 1} } \sum^{2 n + 1}_{k \mathop = 0} \binom {2 n + 1} k e^{k i \theta} e^{-\paren {2 n - k + 1} i \theta}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n + 1} } \sum^{2 n + 1}_{k \mathop = 0} \binom {2 n + 1} k e^{-\paren {2 n - 2 k + 1} i \theta}\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n + 1} } \paren {\sum^n_{k \mathop = 0} \binom {2 n + 1} k e^{-\paren {2 n - 2 k + 1} i \theta} + \sum^{2 n + 1}_{k \mathop = n + 1} \binom {2 n + 1} k e^{-\paren {2 n - 2 k + 1} i \theta} }\)





partitioning the sum














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n + 1} } \paren {\sum^n_{k \mathop = 0} \binom {2 n + 1} k e^{-\paren {2 n - 2 k + 1} i \theta} + \sum^n_{k \mathop = 0} \binom {2 n + 1} {2 n + 1 - k} e^{\paren {2 \paren {2 n - k + 1} - 2 n - 1} i \theta} }\)





$k \mapsto 2 n + 1 - k$














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n + 1} } \paren {\sum^n_{k \mathop = 0} \binom {2 n + 1} k e^{-\paren {2 n - 2 k + 1} i \theta} + \sum^n_{k \mathop = 0} \binom {2 n + 1} k e^{\paren {2 n - 2 k + 1} i \theta} }\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \sum^n_{k \mathop = 0} \binom {2 n + 1} k \map \cos {2 n - 2 k + 1} \theta\)





Euler's Cosine Identity



$\blacksquare$





