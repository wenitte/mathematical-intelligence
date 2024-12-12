# 

Source: https://proofwiki.org/wiki/Cosine_to_Power_of_Even_Integer/Proof_1

Theorem













\(\ds \cos^{2 n} \theta\)

\(=\)







\(\ds \frac 1 {2^{2 n} } \binom {2 n} n + \frac 1 {2^{2 n - 1} } \paren {\cos 2 n \theta + \binom {2 n} 1 \map \cos {2 n - 2} \theta + \cdots + \binom {2 n} {n - 1} \cos 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \binom {2 n} n + \frac 1 {2^{2 n - 1} } \sum_{k \mathop = 0}^{n - 1} \binom {2 n} k \map \cos {2 n - 2 k} \theta\)











Proof













\(\ds \cos^{2 n} \theta\)

\(=\)







\(\ds \paren {\frac {e^{i \theta} + e^{-i \theta} } 2}^{2 n}\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \paren {e^{i \theta} + e^{-i \theta} }^{2 n}\)





Power of Product














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \sum^{2 n}_{k \mathop = 0} \binom{2 n} k e^{k i \theta} e^{-\paren {2 n - k} i \theta}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \sum^{2 n}_{k \mathop = 0} \binom{2 n} k e^{-\paren {2 n - 2 k} i \theta}\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \paren {\sum^{n \mathop - 1}_{k \mathop = 0} \binom {2 n} k e^{-\paren {2 n - 2 k} i \theta} + \binom {2 n} n e^{\paren {2 n - 2 n} i \theta} + \sum^{2 n}_{k \mathop = n + 1} \binom {2 n} k e^{-\paren {2 n - 2 k} i \theta} }\)





partitioning the sum














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \binom {2 n} n + \frac 1 {2^{2 n} } \paren {\sum^{n - 1}_{k \mathop = 0} \binom {2 n} k e^{-\paren {2 n - 2 k} i \theta} + \sum^{2 n}_{k \mathop = n + 1} \binom {2 n} k e^{-\paren {2 n - 2 k} i \theta} }\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \binom {2 n} n + \frac 1 {2^{2 n} } \paren {\sum^{n - 1}_{k \mathop = 0} \binom {2 n} k e^{-\paren {2 n - 2 k} i \theta} + \sum^{n - 1}_{k \mathop = 0} \binom {2 n} {2 n - k} e^{\paren {2 \paren {2 n - k} - 2 n} i \theta} }\)





$k \mapsto 2 n - k$














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \binom {2 n} n + \frac 1 {2^{2 n} } \paren {\sum^{n - 1}_{k \mathop = 0} \binom {2 n} k e^{-\paren {2 n - 2 k} i \theta} + \sum^{n - 1}_{k \mathop = 0} \binom {2 n} k e^{\paren {2 n - 2 k} i \theta} }\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \binom {2 n} n + \frac 1 {2^{2 n - 1} } \sum^{n - 1}_{k \mathop = 0} \binom {2 n} k \map \cos {2 n - 2 k} \theta\)





Euler's Cosine Identity



$\blacksquare$





