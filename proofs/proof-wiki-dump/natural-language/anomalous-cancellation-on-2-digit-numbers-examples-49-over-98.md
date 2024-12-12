# 

Source: https://proofwiki.org/wiki/Anomalous_Cancellation_on_2-Digit_Numbers/Examples/49_over_98

Example of Anomalous Cancellation on 2-Digit Numbers
The fraction $\dfrac {49} {98}$ exhibits the phenomenon of anomalous cancellation:

$\dfrac {49} {98} = \dfrac 4 8$
as can be seen by deleting the $9$ from both numerator and denominator.

This is part of a longer pattern:

$\dfrac 4 8 = \dfrac {49} {98} = \dfrac {499} {998} = \dfrac {4999} {9998} = \cdots$


Proof













\(\ds \frac {499 \cdots 99} {999 \cdots 98}\)

\(=\)







\(\ds \paren {4 \times 10^n + \paren {\sum_{i \mathop = 0}^{n - 1} 9 \times 10^i} } \Big / \paren {\paren {\sum_{i \mathop = 1}^n 9 \times 10^i} + 8}\)




















\(\ds \)

\(=\)







\(\ds \paren {4 \times 10^n + 9 \times \paren {\frac {10^n - 1} {10 - 1} } } \Big / \paren {9 \times 10 \times \paren {\frac {10^n - 1} {10 - 1} } + 8}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \dfrac {4 \times 10^n + \paren {10^n - 1} } {10 \times \paren {10^n - 1} + 8}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {5 \times 10^n - 1} {10 \times 10^n - 2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {5 \times 10^n - 1} {2 \times \paren {5 \times 10^n - 1} }\)





factoring














\(\ds \)

\(=\)







\(\ds \dfrac 1 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac 4 8\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16 /64$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16/64$




