# 

Source: https://proofwiki.org/wiki/Anomalous_Cancellation_on_2-Digit_Numbers/Examples/26_over_65

Example of Anomalous Cancellation on 2-Digit Numbers
The fraction $\dfrac {26} {65}$ exhibits the phenomenon of anomalous cancellation:

$\dfrac {26} {65} = \dfrac 2 5$
as can be seen by deleting the $6$ from both numerator and denominator.

This is part of a longer pattern:

$\dfrac 2 5 = \dfrac {26} {65} = \dfrac {266} {665} = \dfrac {2666} {6665} = \cdots$


Proof













\(\ds \frac {266 \cdots 66} {666 \cdots 65}\)

\(=\)







\(\ds \paren {2 \times 10^n + \paren {\sum_{i \mathop = 0}^{n - 1} 6 \times 10^i} } \Big / \paren {\paren {\sum_{i \mathop = 1}^n 6 \times 10^i} + 5}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 \times 10^n + 6 \times \paren {\frac {10^n - 1} {10 - 1} } } \Big / \paren {6 \times 10 \times \paren {\frac {10^n - 1} {10 - 1} } + 5}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \dfrac {2 \times \paren {10 - 1} 10^n + 6 \times \paren {10^n - 1} } {60 \times \paren {10^n - 1} + 5 \paren {10 - 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {18 \times 10^n + 6 \times 10^n - 6} {60 \times 10^n - 60 + 45}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {24 \times 10^n - 6} {60 \times 10^n - 15}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {2 \times \paren {12 \times 10^n - 3} } {5 \times \paren {12 \times 10^n - 3} }\)





factoring














\(\ds \)

\(=\)







\(\ds \dfrac 2 5\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16 / 64$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16 / 64$




