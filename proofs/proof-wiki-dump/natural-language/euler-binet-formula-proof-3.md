# 

Source: https://proofwiki.org/wiki/Euler-Binet_Formula/Proof_3



Theorem
The Fibonacci numbers have a closed-form solution:

$F_n = \dfrac {\phi^n - \paren {1 - \phi}^n} {\sqrt 5} = \dfrac {\phi^n - \paren {-1 / \phi}^n} {\sqrt 5} = \dfrac {\phi^n - \paren {-1}^n \phi^{-n} } {\sqrt 5} = \dfrac {\phi^n - \paren {1 - \phi}^n} {\phi - \paren {1 - \phi}}$
where $\phi$ is the golden mean.

Putting $\hat \phi = 1 - \phi = -\dfrac 1 \phi$ this can be written:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$
From Definition 2 of Golden Mean: $\phi = \dfrac {1 + \sqrt 5} 2$
Therefore, substituting $\sqrt 5 = 2\phi - 1 = \phi - \paren {1 - \phi} = \phi - \hat \phi$, the above can be written as:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\paren {\phi - \hat \phi}}$


Proof
This follows as a direct application of the first Binet form:

$U_n = m U_{n - 1} + U_{n - 2}$
where:














\(\ds U_0\)

\(=\)







\(\ds 0\)




















\(\ds U_1\)

\(=\)







\(\ds 1\)









has the closed-form solution:

$U_n = \dfrac {\alpha^n - \beta^n} {\Delta}$
where:














\(\ds \Delta\)

\(=\)







\(\ds \sqrt {m^2 + 4}\)




















\(\ds \alpha\)

\(=\)







\(\ds \frac {m + \Delta} 2\)




















\(\ds \beta\)

\(=\)







\(\ds \frac {m - \Delta} 2\)









where $m = 1$.
$\blacksquare$


Source of Name
This entry was named for Jacques Philippe Marie Binet and Leonhard Paul Euler.


Also known as
The Euler-Binet Formula is also known as Binet's formula.





