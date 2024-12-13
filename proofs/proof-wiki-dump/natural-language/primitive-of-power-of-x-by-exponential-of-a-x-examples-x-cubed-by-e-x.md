# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Exponential_of_a_x/Examples/x_cubed_by_e%5E-x

Example of Use of Primitive of $x^n e^{a x}$
$\ds \int x^3 e^{-x} \rd x = -e^{-x} \paren {x^3 + 3 x^2 + 6 x + 6} + C$


Proof
From Primitive of $x^n e^{a x}$:
Let $n$ be a positive integer.
Let $a$ be a non-zero real number.
Then:














\(\ds \int x^n e^{a x} \rd x\)

\(=\)







\(\ds \frac {e^{a x} } a \paren {x^n - \dfrac {n x^{n - 1} } a + \dfrac {n \paren {n - 1} x^{n - 2} } {a^2} - \dfrac {n \paren {n - 1} \paren {n - 2} x^{n - 3} } {a^3} + \cdots + \dfrac {\paren {-1}^n n!} {a^n} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a \sum_{k \mathop = 0}^n \paren {\paren {-1}^k \frac {n^{\underline k} x^{n - k} } {a^k} } + C\)









where $n^{\underline k}$ denotes the $k$th falling factorial power of $n$.

Hence:














\(\ds \int x^3 e^{-x} \rd x\)

\(=\)







\(\ds \frac {e^{-x} } {-1} \paren {x^3 - \dfrac {3 x^{3 - 1} } {-1} + \dfrac {3 \paren {3 - 1} x^{3 - 2} } {\paren {-1}^2} - \dfrac {3 \paren {3 - 1} \paren {3 - 2} x^{3 - 3} } {\paren {-1}^3} } + C\)





setting $a \gets -1$, $n \gets 3$














\(\ds \)

\(=\)







\(\ds -e^{-x} \paren {x^3 + 3 x^2 + 6 x + 6} + C\)









$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XIV}$: $26$.




