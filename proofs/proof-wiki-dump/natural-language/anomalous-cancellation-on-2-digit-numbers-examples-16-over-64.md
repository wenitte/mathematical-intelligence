# 

Source: https://proofwiki.org/wiki/Anomalous_Cancellation_on_2-Digit_Numbers/Examples/16_over_64

Example of Anomalous Cancellation on 2-Digit Numbers
The fraction $\dfrac {16} {64}$ exhibits the phenomenon of anomalous cancellation:

$\dfrac {16} {64} = \dfrac 1 4$
as can be seen by deleting the $6$ from both numerator and denominator.

This is part of a longer pattern:

$\dfrac 1 4 = \dfrac {16} {64} = \dfrac {166} {664} = \dfrac {1666} {6664} = \cdots$


Proof













\(\ds \frac {166 \cdots 66} {666 \cdots 64}\)

\(=\)







\(\ds \paren {10^n + \paren {\sum_{i \mathop = 0}^{n - 1} 6 \times 10^i} } \Big / \paren {\paren {\sum_{i \mathop = 1}^n 6 \times 10^i} + 4}\)




















\(\ds \)

\(=\)







\(\ds \paren {10^n + 6 \times \paren {\frac {10^n - 1} {10 - 1} } } \Big / \paren {6 \times 10 \times \paren {\frac {10^n - 1} {10 - 1} } + 4}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {10 - 1} 10^n + 6 \times \paren {10^n - 1} } {60 \times \paren {10^n - 1} + 4 \paren {10 - 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {9 \times 10^n + 6 \times 10^n - 6} {60 \times 10^n - 60 + 36}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {15 \times 10^n - 6} {60 \times 10^n - 24}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {15 \times 10^n - 6} {4 \times \paren {15 \times 10^n - 6} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 4\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16 /64$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16/64$




