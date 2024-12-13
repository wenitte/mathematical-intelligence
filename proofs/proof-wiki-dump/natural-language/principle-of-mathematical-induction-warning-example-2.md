# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/Warning/Example_2

Example of Incorrect Use of Principle of Mathematical Induction
We are to prove that:

$\dfrac 1 {1 \times 2} + \dfrac 1 {2 \times 3} + \dotsb + \dfrac 1 {\paren {n - 1} \times n} = \dfrac 3 2 - \dfrac 1 n$

For $n = 1$ we have:

$\dfrac 3 2 - \dfrac 1 n = \dfrac 1 2 = \dfrac 1 {1 \times 2}$
Assuming true for $k$, we have:














\(\ds \dfrac 1 {1 \times 2} + \dfrac 1 {2 \times 3} + \dotsb + \dfrac 1 {\paren {n - 1} \times n} + \dfrac 1 {n \times \paren {n + 1} }\)

\(=\)







\(\ds \dfrac 3 2 - \frac 1 n + \dfrac 1 {n \paren {n + 1} }\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac 3 2 - \frac 1 n + \paren {\dfrac 1 n - \dfrac 1 {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 3 2 - \frac 1 {n + 1}\)









But clearly this is wrong, because for $n = 6$:

$\dfrac 1 2 + \dfrac 1 6 + \dfrac 1 {12} + \dfrac 1 {30} = \dfrac 5 6$
on the left hand side, but:

$\dfrac 3 2 - \dfrac 1 6 = \dfrac 4 3$
on the right hand side.


Refutation
The supposed sequence of terms on the left hand side starts at $n = 2$.
It can be seen that it is meaningless (or has no terms for $n = 1$.
Hence in the first statement:

$\dfrac 3 2 - \dfrac 1 n = \dfrac 1 2 = \dfrac 1 {1 \times 2}$
the term on the right hand side is the term for $n = 2$, making this equation invalid.

The correct result is Sum of Sequence of Products of Consecutive Reciprocals:

$\ds \sum_{j \mathop = 1}^n \frac 1 {j \paren {j + 1} } = \frac n {n + 1}$

$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction: Exercise $3$




