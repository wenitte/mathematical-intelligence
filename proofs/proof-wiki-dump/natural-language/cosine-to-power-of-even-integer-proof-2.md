# 

Source: https://proofwiki.org/wiki/Cosine_to_Power_of_Even_Integer/Proof_2



Theorem
Let $n \in \Z$ be an even integer.
Then:

$\ds \cos^n \theta = \frac 1 {2^{n - 1} } \sum_{k \mathop = 0}^{n / 2} \paren {\binom n k \cos \paren {n - 2 k} \theta}$
That is:

$\cos^n \theta = \dfrac 1 {2^{n - 1} } \paren {\cos n \theta + n \cos \paren {n - 2} \theta + \dfrac {n \paren {n - 1} } 2 \cos \paren {n - 4} \theta + \cdots + \dfrac {n!} {\paren {\paren {\frac n 2}!}^2} \cos \theta}$


Proof













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
This result is also reported in the form:

$\ds \cos^{2 n + 1} \theta = \frac 1 {2^{2 n} } \sum_{k \mathop = 0}^n \binom {2 n + 1} k \cos \paren {2 n - 2 k + 1} \theta$
for all $n \in \Z$.


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $130 \ \text{(a)}$




