# 

Source: https://proofwiki.org/wiki/Element_of_Leibniz_Harmonic_Triangle_is_Sum_of_Numbers_Below

Theorem
The elements in the Leibniz harmonic triangle are the sum of the elements immediately below them.


This page has been identified as a candidate for refactoring of medium complexity.In particular: Rework this as another definition of LHT, establishing that column and diagonal $0$ are defined as the reciprocals.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Proof
By definition of Leibniz harmonic triangle, element $\tuple {n, m}$ is:

$\dfrac 1 {\paren {n + 1} \binom n m}$

Thus we have:














\(\ds \)

\(\)







\(\ds \dfrac 1 {\paren {n + 2} \binom {n + 1} m} + \dfrac 1 {\paren {n + 2} \binom {n + 1} {m + 1} }\)





Elements of Leibniz Harmonic Triangle immediately below














\(\ds \)

\(=\)







\(\ds \dfrac {\binom {n + 1} {m + 1} + \binom {n + 1} m} {\paren {n + 2} \binom {n + 1} m \binom {n + 1} {m + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\binom {n + 2} {m + 1} } {\paren {n + 2} \binom {n + 1} m \binom {n + 1} {m + 1} }\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \dfrac {\frac {\paren {n + 2}!} {\paren {m + 1}! \paren {n - m + 1}!} } {\paren {n + 2} \frac {\paren {n + 1}!} {m! \paren {n - m + 1}!} \frac {\paren {n + 1}!} {\paren {m + 1}! \paren {n - m}!} }\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {n + 1}!} {\frac {\paren {n + 1}!} {m!} \frac {\paren {n + 1}!} {\paren {n - m}!} }\)





some simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\frac {\paren {n + 1}!} {m! \paren {n - m}!} }\)





further simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {n + 1} \frac {n!} {m! \paren {n - m}!} }\)





further simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {n + 1} \binom n m}\)





Definition of Binomial Coefficient



Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




