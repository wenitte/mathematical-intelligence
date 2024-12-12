# 

Source: https://proofwiki.org/wiki/Alternating_Sum_of_Sequence_of_Odd_Cubes_over_Fourth_Power_plus_4



Theorem













\(\ds \sum_{k \mathop = 0}^n \dfrac {\paren {-1}^k \paren {2 k + 1}^3} {\paren {2 k + 1}^4 + 4}\)

\(=\)







\(\ds \frac {1^3} {1^4 + 4} - \frac {3^3} {3^4 + 4} + \frac {5^3} {5^4 + 4} - \cdots + \dfrac {\paren {-1}^n \paren {2 n + 1}^3} {\paren {2 n + 1}^4 + 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^n \paren {n + 1} } {4 \paren {n + 1}^2 + 1}\)











Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \sum_{k \mathop = 0}^n \dfrac {\paren {-1}^k \paren {2 k + 1}^3} {\paren {2 k + 1}^4 + 4} = \dfrac {\paren {-1}^n \paren {n + 1} } {4 \paren {n + 1}^2 + 1}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \sum_{k \mathop = 0}^0 \dfrac {\paren {-1}^k \paren {2 k + 1}^3} {\paren {2 k + 1}^4 + 4}\)

\(=\)







\(\ds \dfrac {\paren {-1}^0 \paren {2 \times 0 + 1}^3} {\paren {2 \times 0 + 1}^4 + 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 \times 1^3} {1^4 + 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^0 \paren {0 + 1} } {4 \paren {0 + 1}^2 + 1}\)









Thus $\map P 0$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P {r - 1}$ is true, where $r \ge 1$, then it logically follows that $\map P r$ is true.

So this is the induction hypothesis:

$\ds \sum_{k \mathop = 0}^{r - 1} \dfrac {\paren {-1}^k \paren {2 k + 1}^3} {\paren {2 k + 1}^4 + 4} = \dfrac {\paren {-1}^r r} {4 r^2 + 1}$

from which it is to be shown that:

$\ds \sum_{k \mathop = 0}^r \dfrac {\paren {-1}^k \paren {2 k + 1}^3} {\paren {2 k + 1}^4 + 4} = \dfrac {\paren {-1}^r \paren {r + 1} } {4 \paren {r + 1}^2 + 1}$


Induction Step
This is the induction step:















\(\ds \sum_{k \mathop = 0}^r \dfrac {\paren {-1}^k \paren {2 k + 1}^3} {\paren {2 k + 1}^4 + 4}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{r - 1} \dfrac {\paren {-1}^k \paren {2 k + 1}^3} {\paren {2 k + 1}^4 + 4} + \dfrac {\paren {-1}^r \paren {2 r + 1}^3} {\paren {2 r + 1}^4 + 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^{r - 1} r} {4 r^2 + 1} + \dfrac {\paren {-1}^r \paren {2 r + 1}^3} {\paren {2 r + 1}^4 + 4}\)





Induction Hypothesis and simplification














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^{r - 1} r \paren {\paren {2 r + 1}^4 + 4} + \paren {-1}^r \paren {2 r + 1}^3 \paren {4 r^2 + 1} } {\paren {4 r^2 + 1} \paren {\paren {2 r + 1}^4 + 4} }\)





common denominator




We refactorise the denominator:














\(\ds \paren {2 r + 1}^4 + 4\)

\(=\)







\(\ds 16 r^4 + 32 r^3 + 24 r^2 + 8 r + 1 + 4\)




















\(\ds \)

\(=\)







\(\ds \paren {4 r^2 + 1} \paren {4 r^2 + 8 r + 5}\)




















\(\ds \)

\(=\)







\(\ds \paren {4 r^2 + 1} \paren {4 \paren {r + 1}^2 + 1}\)









and so the denominator is seen to be:

$\paren {4 r^2 + 1}^2 \paren {4 \paren {r + 1}^2 + 1}$

Similarly, now the hard work has been done, for the numerator:














\(\ds \)

\(\)







\(\ds \paren {-1}^{r - 1} r \paren {\paren {2 r + 1}^4 + 4} + \paren {-1}^r \paren {2 r + 1}^3 \paren {4 r^2 + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{r - 1} r \paren {4 r^2 + 1} \paren {4 \paren {r + 1}^2 + 1} + \paren {-1}^r \paren {2 r + 1}^3 \paren {4 r^2 + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{r - 1} \paren {r \paren {4 r^2 + 1} \paren {4 \paren {r + 1}^2 + 1} - \paren {2 r + 1}^3 \paren {4 r^2 + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{r - 1} \paren {4 r^2 + 1} \paren {r \paren {4 \paren {r + 1}^2 + 1} - \paren {2 r + 1}^3}\)










There exists a common factor of $\paren {4 r^2 + 1}$ in the numerator and the denominator, which can be cancelled, leaving:















\(\ds \sum_{k \mathop = 0}^r \dfrac {\paren {-1}^k \paren {2 k + 1}^3} {\paren {2 k + 1}^4 + 4}\)

\(=\)







\(\ds \dfrac {\paren {-1}^{r - 1} \paren {r \paren {4 \paren {r + 1}^2 + 1} - \paren {2 r + 1}^3} } {\paren {4 r^2 + 1} \paren {4 \paren {r + 1}^2 + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^{r - 1} \paren {4 r^3 + 8 r^2 + 5 r - 8 r^3 - 12 r^2 - 6 r - 1} } {\paren {4 r^2 + 1} \paren {4 \paren {r + 1}^2 + 1} }\)





multiplying out numerator














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^r \paren {4 r^3 + 4 r^2 + r + 1} } {\paren {4 r^2 + 1} \paren {4 \paren {r + 1}^2 + 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^r \paren {4 r^2 + 1} \paren {r + 1} } {\paren {4 r^2 + 1} \paren {4 \paren {r + 1}^2 + 1} }\)





factorising














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^r \paren {r + 1} } {4 \paren {r + 1}^2 + 1}\)





factorising




So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{\ge 0}: \sum_{k \mathop = 0}^n \dfrac {\paren {-1}^k \paren {2 k + 1}^3} {\paren {2 k + 1}^4 + 4} = \dfrac {\paren {-1}^n \paren {n + 1} } {4 \paren {n + 1}^2 + 1}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction: Exercise $11$




