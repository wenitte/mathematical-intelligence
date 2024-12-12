# 

Source: https://proofwiki.org/wiki/Cosine_to_Power_of_Odd_Integer/Proof_2



Theorem
$\ds \cos^{2 n + 1} \theta = \frac 1 {2^{2 n} } \sum_{k \mathop = 0}^n \binom {2 n + 1} k \cos \paren {2 n - 2 k + 1} \theta$


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





\(\ds \frac {2 n} 2 \cos^n \theta\)

\(=\)







\(\ds \paren {\frac {e^{n i \theta} + e^{-n i \theta} } 2} + \binom n 1 \paren {\frac {e^{\paren {n - 2} i \theta} + e^{-\paren {n - 2} i \theta} } 2}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \binom n 2 \paren {\frac {e^{\paren {n - 4} i \theta} + e^{-\paren {n - 4} i \theta} } 2} + \cdots\)










Thus:

$\cos^n \theta = \dfrac 1 {2^{n - 1} } \paren {\cos n \theta + n \cos \paren {n - 2} \theta + \dfrac {n \paren {n - 1} } {2!} \cos \paren {n - 4} \theta + \cdots + R_n}$

Now to determine $R_n$.
The middle two terms of the sequence $0, 1, \ldots, n$ are $\dfrac {n - 1} 2$ and $\dfrac {n + 1} 2$.
Thus, when $k = \dfrac {n - 1} 2$:














\(\ds n - 2 k\)

\(=\)







\(\ds n - 2 \frac {n - 1} 2\)




















\(\ds \)

\(=\)







\(\ds n - \frac {2 n - 2} 2\)




















\(\ds \)

\(=\)







\(\ds n - n + 1\)




















\(\ds \)

\(=\)







\(\ds 1\)









Similarly, when $k = \dfrac {n + 1} 2$:














\(\ds n + 2 k\)

\(=\)







\(\ds n - 2 \frac {n + 1} 2\)




















\(\ds \)

\(=\)







\(\ds n - \frac {2 n + 2} 2\)




















\(\ds \)

\(=\)







\(\ds n - n - 1\)




















\(\ds \)

\(=\)







\(\ds -1\)










The binomial coefficient in each case is the same, because:














\(\ds n - \frac {n - 1} 2\)

\(=\)







\(\ds \frac {2 n - n - 1} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {n + 1} 2\)










So:














\(\ds \binom n {\paren {n - 1} / 2}\)

\(=\)







\(\ds \frac {n!} {\paren {\frac {n - 1} 2}! \paren {\frac {n + 1} 2}!}\)




















\(\ds \)

\(=\)







\(\ds \binom n {\paren {n + 1} / 2}\)










Thus the two middle terms collapse to:














\(\ds R_n\)

\(=\)







\(\ds \frac {n!} {\paren {\frac {n - 1} 2}! \paren {\frac {n + 1} 2}!} \paren {\frac {e^{i \theta} + e^{-i \theta} } 2}\)




















\(\ds \)

\(=\)







\(\ds \frac {n!} {\paren {\frac {n - 1} 2}! \paren {\frac {n + 1} 2}!} \cos \theta\)









$\blacksquare$


Also defined as
This result is also reported in the form:

$\ds\cos^{2 n + 1} \theta = \frac 1 {2^{2 n} } \sum_{k \mathop = 0}^n \binom {2 n + 1} k \map \cos {2 n - 2 k + 1} \theta$
for all $n \in \Z$.


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $130 \ \text{(a)}$
(although see Cosine to Power of Odd Integer/Mistake for analysis of an error in that work)




