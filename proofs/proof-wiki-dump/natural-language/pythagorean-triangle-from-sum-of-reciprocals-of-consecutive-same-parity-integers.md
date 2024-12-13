# 

Source: https://proofwiki.org/wiki/Pythagorean_Triangle_from_Sum_of_Reciprocals_of_Consecutive_Same_Parity_Integers

Theorem
Let $a, b \in \Z_{>0}$ be (strictly) positive integers such that they are consecutively of the same parity.
Let $\dfrac p q = \dfrac 1 a + \dfrac 1 b$.

Then $p$ and $q$ are the legs of a Pythagorean triangle.


Proof
Let $a$ and $b$ both be even.
Then:














\(\ds a\)

\(=\)







\(\ds 2 n\)




















\(\ds b\)

\(=\)







\(\ds 2 \paren {n + 1}\)





for some $n \in \Z_{>0}$








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 a + \dfrac 1 b\)

\(=\)







\(\ds \dfrac 1 {2 n} + \dfrac 1 {2 \paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n + \paren {n + 1} } {2 n \paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 n + 1} {2 n \paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n^2 + 2 n + 1 - n^2} {2 n \paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {n + 1}^2 - n^2} {2 n \paren {n + 1} }\)









From Solutions of Pythagorean Equation, $\tuple {n, n + 1}$ form the generator for the primitive Pythagorean triple $\tuple {2 m n, m^2 - n^2, m^2 + n^2}$ where $m = n + 1$.
The legs of the resulting primitive Pythagorean triangle are $2 n \paren {n + 1}$ and $\paren {n + 1}^2 - n^2$.

Let $a$ and $b$ both be odd.
Then:














\(\ds a\)

\(=\)







\(\ds 2 n + 1\)




















\(\ds b\)

\(=\)







\(\ds 2 \paren {n + 1} + 1\)





for some $n \in \Z_{>0}$








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 a + \dfrac 1 b\)

\(=\)







\(\ds \dfrac 1 {2 n + 1} + \dfrac 1 {2 \paren {n + 1} + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {4 n + 4} {4 n^2 + 8 n + 3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \paren {2 n + 2} \times 1} {\paren {2 n + 2}^2 - 1}\)









From Solutions of Pythagorean Equation, $\tuple {2 n + 2, 1}$ form the generator for the primitive Pythagorean triple $\tuple {2 m n, m^2 - n^2, m^2 + n^2}$ where $m = 2 n + 2$ and $n = 1$.
The legs of the resulting primitive Pythagorean triangle are $2 \paren {2 n + 2}$ and $\paren {2 n + 2}^2 - 1$.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $13$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $13$




