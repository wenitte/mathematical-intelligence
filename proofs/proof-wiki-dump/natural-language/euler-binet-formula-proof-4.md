# 

Source: https://proofwiki.org/wiki/Euler-Binet_Formula/Proof_4



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
From Generating Function for Fibonacci Numbers, a generating function for the Fibonacci numbers is:

$\map G z = \dfrac z {1 - z - z^2}$

Hence:














\(\ds \map G z\)

\(=\)







\(\ds \dfrac z {1 - z - z^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 5} \paren {\dfrac 1 {1 - \phi z} - \dfrac 1 {1 - \hat \phi z} }\)





Partial Fraction Expansion



where:

$\phi = \dfrac {1 + \sqrt 5} 2$
$\hat \phi = \dfrac {1 - \sqrt 5} 2$
By Sum of Infinite Geometric Sequence:

$\dfrac 1 {1 - \phi z} = 1 + \phi z + \phi^2 z^2 + \cdots$
and so:

$\map G z = \dfrac 1 {\sqrt 5} \paren {1 + \phi z + \phi^2 z^2 + \cdots - 1 - \hat \phi z - \hat \phi^2 z^2 - \cdots}$
By definition, the coefficient of $z^n$ in $\map G z$ is exactly the $n$th Fibonacci number.
That is:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$
$\blacksquare$


Source of Name
This entry was named for Jacques Philippe Marie Binet and Leonhard Paul Euler.


Also known as
The Euler-Binet Formula is also known as Binet's formula.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: $(14)$




