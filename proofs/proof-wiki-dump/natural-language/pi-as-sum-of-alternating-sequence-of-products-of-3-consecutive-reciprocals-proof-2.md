# 

Source: https://proofwiki.org/wiki/Pi_as_Sum_of_Alternating_Sequence_of_Products_of_3_Consecutive_Reciprocals/Proof_2

Theorem
$\dfrac {\pi - 3} 4 = \dfrac 1 {2 \times 3 \times 4} - \dfrac 1 {4 \times 5 \times 6} + \dfrac 1 {6 \times 7 \times 8} \cdots$


Proof
The alternating sum can be written as $\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1}} {2 n \paren{2 n + 1} \paren{2 n + 2}}$.
By Partial Fraction Decomposition:

$\ds \frac 1 {2 n \paren {2 n + 1} \paren {2 n + 2}} = \frac 1 2 \paren{\frac 1 {2 n} - \frac 2 {2 n + 1} + \frac 1 {2 n + 2}}$
Therefore:














\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {2 n \paren{2 n + 1} \paren{2 n + 2} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } 2 \paren{\frac 1 {2 n} - \frac 2 {2 n + 1} + \frac 1 {2 n + 2} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {4 n} - \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {2 n + 1} - \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 2} } {4 \paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {4 n} - \sum_{n \mathop = 2}^\infty \frac {\paren {-1}^{n + 1} } {4 n} + \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {2 n + 1} - 1\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \frac 1 4 + \frac \pi 4 - 1\)





Leibniz's Formula for Pi














\(\ds \)

\(=\)







\(\ds \frac {\pi - 3} 4\)









$\blacksquare$





