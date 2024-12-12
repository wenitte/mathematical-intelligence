# 

Source: https://proofwiki.org/wiki/Cosine_to_Power_of_Even_Integer



Theorem













\(\ds \cos^{2 n} \theta\)

\(=\)







\(\ds \frac 1 {2^{2 n} } \binom {2 n} n + \frac 1 {2^{2 n - 1} } \paren {\cos 2 n \theta + \binom {2 n} 1 \map \cos {2 n - 2} \theta + \cdots + \binom {2 n} {n - 1} \cos 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 n} } \binom {2 n} n + \frac 1 {2^{2 n - 1} } \sum_{k \mathop = 0}^{n - 1} \binom {2 n} k \map \cos {2 n - 2 k} \theta\)











Proof 1













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


Proof 2













\(\ds \cos^n \theta\)

\(=\)







\(\ds \paren {\frac {e^{i \theta} + e^{-i \theta} } 2}^n\)





De Moivre's Theorem














\(\ds \)

\(=\)







\(\ds \frac {\paren {e^{i \theta} + e^{-i \theta} }^n} {2^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2^n} \sum_{k \mathop = 0}^n \binom n k e^{\paren {n - k} i \theta} e^{-k i \theta}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 {2^n} \sum_{k \mathop = 0}^n \binom n k e^{\paren {n - 2 k} i \theta}\)










Matching up terms from the beginning of this expansion with those from the end:














\(\ds 2^n \cos^n \theta\)

\(=\)







\(\ds e^{n i \theta} + \binom n 1 e^{\paren {n - 2} i \theta} + \binom n 2 e^{\paren {n - 4} i \theta} + \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \binom n {n - 2} e^{-\paren {n - 4} i \theta} + \binom n {n - 1} e^{-\paren {n - 2} i \theta} + e^{-n i \theta}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {2^n} 2 \cos^n \theta\)

\(=\)







\(\ds \paren {\frac {e^{n i \theta} + e^{-n i \theta} } 2} + \binom n 1 \paren {\frac {e^{\paren {n - 2} i \theta} + e^{-\paren {n - 2} i \theta} } 2}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \binom n 2 \paren {\frac {e^{\paren {n - 4} i \theta} + e^{-\paren {n - 4} i \theta} } 2} + \cdots\)










Thus:

$\cos^n \theta = \dfrac 1 {2^{n - 1} } \paren {\cos n \theta + n \cos \paren {n - 2} \theta + \dfrac {n \paren {n - 1} } {2!} \cos \paren {n - 4} \theta + \cdots + R_n}$

Now to determine $R_n$.
The middle term of the sequence $0, 1, \ldots, n$ is $\dfrac n 2$.
So when $k = \dfrac n 2$ we have $n - 2k = 0$ and $n - k = n - \dfrac n 2 = \dfrac n 2$.
Thus:














\(\ds \binom n k\)

\(=\)







\(\ds \frac {n!} {\paren {\paren {n / 2}!} \paren {\paren {n - n / 2}!} }\)




















\(\ds \)

\(=\)







\(\ds \frac {n!} {\paren {\paren {n / 2}!}^2}\)










So the middle term collapses to:














\(\ds R_n\)

\(=\)







\(\ds 2 \frac {n!} {\paren {\paren {n / 2}!}^2} \frac {e^{0 i \theta} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {n!} {\paren {\paren {n / 2}!}^2}\)









$\blacksquare$


Also defined as
This result is also reported in a less elegant form as:

$\ds \cos^n \theta = \frac 1 {2^{n - 1}} \sum_{k \mathop = 0}^{n / 2} \paren {\binom n k \map \cos {n - 2 k} \theta}$
for all even $n$.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.73$




