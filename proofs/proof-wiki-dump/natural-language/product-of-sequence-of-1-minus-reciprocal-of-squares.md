# 

Source: https://proofwiki.org/wiki/Product_of_Sequence_of_1_minus_Reciprocal_of_Squares



Theorem
For all $n \in \Z_{\ge 1}$:

$\ds \prod_{j \mathop = 2}^n \paren {1 - \dfrac 1 {j^2} } = \dfrac {n + 1} {2 n}$


Proof 1
The proof proceeds by induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

$\ds \prod_{j \mathop = 2}^n \paren {1 - \dfrac 1 {j^2} } = \dfrac {n + 1} {2 n}$

It is first noted that $n = 0$ is excluded because in that case $\dfrac {n + 1} {2 n}$ is undefined.

$\map P 1$ is the other edge case:














\(\ds \prod_{j \mathop = 2}^1 \paren {1 - \dfrac 1 {j^2} }\)

\(=\)







\(\ds 1\)





Definition of Vacuous Product














\(\ds \)

\(=\)







\(\ds \dfrac {1 + 1} {2 \times 1}\)









Thus $\map P 1$ is seen to hold.


Basis for the Induction
$\map P 2$ is the case:














\(\ds \prod_{j \mathop = 2}^2 \paren {1 - \dfrac 1 {j^2} }\)

\(=\)







\(\ds 1 - \dfrac 1 {2^2}\)





Definition of Continued Product














\(\ds \)

\(=\)







\(\ds \frac {4 - 1} 4\)




















\(\ds \)

\(=\)







\(\ds \frac {2 + 1} {2 \times 2}\)




















\(\ds \)

\(=\)







\(\ds \valueat {\frac {n + 1} {2 n} } {n \mathop = 2}\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \prod_{j \mathop = 2}^k \paren {1 - \dfrac 1 {j^2} } = \dfrac {k + 1} {2 k}$

from which it is to be shown that:

$\ds \prod_{j \mathop = 2}^{k + 1} \paren {1 - \dfrac 1 {j^2} } = \dfrac {k + 2} {2 \paren {k + 1} }$


Induction Step
This is the induction step:














\(\ds \prod_{j \mathop = 2}^{k + 1} \paren {1 - \dfrac 1 {j^2} }\)

\(=\)







\(\ds \prod_{j \mathop = 2}^k \paren {1 - \dfrac 1 {j^2} } \paren {1 - \dfrac 1 {\paren {k + 1}^2} }\)





Definition of Continued Product














\(\ds \)

\(=\)







\(\ds \dfrac {k + 1} {2 k} \paren {1 - \dfrac 1 {\paren {k + 1}^2} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {k + 1} {2 k} \times \dfrac {\paren {k + 1}^2 - 1} {\paren {k + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {k^2 + 2 k + 1 - 1} {2 k \paren {k + 1} }\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac {k \paren {k + 2} } {2 k \paren {k + 1} }\)





further simplification














\(\ds \)

\(=\)







\(\ds \dfrac {k + 2} {2 \paren {k + 1} }\)





further simplification




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{\ge 1}: \prod_{j \mathop = 2}^n \paren {1 - \dfrac 1 {j^2} } = \dfrac {n + 1} {2 n}$
$\blacksquare$


Proof 2
We have: 














\(\ds \prod_{j \mathop = 2}^n \paren {1 - \frac 1 {j^2} }\)

\(=\)







\(\ds \prod_{j \mathop = 2}^n \paren {\frac {\paren {j - 1} \paren {j + 1} } {j^2} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 2}^n \paren {j - 1} } \paren {\prod_{j \mathop = 2}^n \paren {j + 1} } \paren {\prod_{j \mathop = 2}^n \frac 1 j}^2\)





Product of Products














\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^{n - 1} j} \paren {\prod_{j \mathop = 3}^{n + 1} j} \frac 1 {\paren {\prod_{j \mathop = 2}^n j}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {n - 1}! \paren {\frac 1 2 \prod_{j \mathop = 2}^{n + 1} j} \frac 1 {\paren {n!}^2}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {n - 1}! \paren {n + 1}!} {2 \times n! \times n!}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {n - 1}! n! \paren {n + 1} } {2 \paren {n - 1}! \times n \times n!}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {n + 1} {2 n}\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $28$




