# 

Source: https://proofwiki.org/wiki/Anomalous_Cancellation/Examples/3544_over_7531

Theorem
The fraction $\dfrac {3544} {7531}$ exhibits the phenomenon of anomalous cancellation:

$\dfrac {3544} {7531} = \dfrac {344} {731}$
as can be seen by deleting the $5$ from both numerator and denominator.

This is part of a longer pattern:

$\dfrac {344} {731} = \dfrac {3544} {7531} = \dfrac {35544} {75531} = \cdots$


Proof













\(\ds \frac {355 \cdots 544} {755 \cdots 531}\)

\(=\)







\(\ds \paren {3 \times 10^n + \paren {\sum_{i \mathop = 2}^{n - 1} 5 \times 10^i} + 44} \Big / \paren {7 \times 10^n + \paren {\sum_{i \mathop = 2}^{n - 1} 5 \times 10^i} + 31}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 10^n + \paren {500 \times \sum_{i \mathop = 0}^{n - 3} \times 10^i} + 44} \Big / \paren {7 \times 10^n + \paren {500 \times \sum_{i \mathop = 0}^{n - 3} \times 10^i} + 31}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 10^n + \paren {500 \times \frac {10^{n - 2} - 1} {10 - 1} } + 44} \Big / \paren {7 \times 10^n + \paren {500 \times \frac {10^{n - 2} - 1} {10 - 1} } + 31}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \dfrac {3 \times 10^n \times \paren {10 - 1} + 500 \times \paren {10^{n - 2} - 1} + 44 \times \paren {10 - 1} } {7 \times 10^n \times \paren {10 - 1} + 500 \times \paren {10^{n - 2} - 1} + 31 \times \paren {10 - 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {27 \times 10^n + 500 \times 10^{n - 2} - 104} {63 \times 10^n + 500 \times 10^{n - 2} - 221}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {2700 \times 10^{n - 2} + 500 \times 10^{n - 2} - 104} {6300 \times 10^{n - 2} + 500 \times 10^{n - 2} - 221}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {3200 \times 10^{n - 2} - 104} {6800 \times 10^{n - 2} - 221}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {8 \times \paren {400 \times 10^{n - 2} - 13} } {17 \times \paren {400 \times 10^{n - 2} - 13} }\)





factoring














\(\ds \)

\(=\)







\(\ds \dfrac 8 {17}\)





factoring














\(\ds \)

\(=\)







\(\ds \dfrac {8 \times 43} {17 \times 43}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {344} {731}\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16 /64$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16/64$




