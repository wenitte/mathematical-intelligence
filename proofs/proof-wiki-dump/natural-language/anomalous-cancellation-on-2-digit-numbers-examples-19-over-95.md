# 

Source: https://proofwiki.org/wiki/Anomalous_Cancellation_on_2-Digit_Numbers/Examples/19_over_95

Example of Anomalous Cancellation on 2-Digit Numbers
The fraction $\dfrac {19} {95}$ exhibits the phenomenon of anomalous cancellation:

$\dfrac {19} {95} = \dfrac 1 5$
as can be seen by deleting the $9$ from both numerator and denominator.

This is part of a longer pattern:

$\dfrac 1 5 = \dfrac {19} {95} = \dfrac {199} {995} = \dfrac {1999} {9995} = \cdots$


Proof
Formally written, we have to show that:

$\ds \paren {\paren  {\sum_{i \mathop = 0}^{n - 1} 9 \times 10^i} + 10^n} \Big / \paren {5 + \paren {\sum_{i \mathop = 1}^n 9 \times 10^i} } = \frac 1 5$ for integers $n > 1$.

So:














\(\ds \)

\(\)







\(\ds \paren {\paren {\sum_{i \mathop = 0}^{n - 1} 9 \times 10^i} + 10^n} \Big / \paren {5 + \paren {\sum_{i \mathop = 1}^n 9 \times 10^i} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {\sum_{i \mathop = 0}^{n - 1} \paren {10^{i + 1} - 10^i} } + 10^n} \Big / \paren {5 + \paren {\sum_{i \mathop = 1}^n \paren {10^{i + 1} - 10^i} } }\)





rewriting the $9$'s














\(\ds \)

\(=\)







\(\ds \paren {10^n - 10^0 + 10^n} \Big / \paren {5 + 10^{n + 1} - 10^1}\)





Definition of Telescoping Series














\(\ds \)

\(=\)







\(\ds \paren {2 \times 10^n - 1} \Big / \paren {10 \times 10^n - 5}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 5\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16 /64$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16/64$




