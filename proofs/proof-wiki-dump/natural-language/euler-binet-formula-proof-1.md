# 

Source: https://proofwiki.org/wiki/Euler-Binet_Formula/Proof_1



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
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$


Basis for the Induction
$\map P 0$ is true, as this just says:

$\dfrac {\phi^0 - \hat \phi^0} {\sqrt 5} = \dfrac {1 - 1} {\sqrt 5} = 0 = F_0$

$\map P 1$ is the case:














\(\ds \frac {\phi - \hat \phi} {\sqrt 5}\)

\(=\)







\(\ds \frac {\paren {\frac {1 + \sqrt 5} 2} - \paren {\frac {1 - \sqrt 5} 2} } {\sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - 1} + \paren {\sqrt 5 + \sqrt 5} } {2 \sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds F_1\)










This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P j$ is true for all $0 \le j \le k + 1$, then it logically follows that $\map P {k + 2}$ is true.

So this is our induction hypothesis:

$\forall 0 \le j \le k + 1: F_j = \dfrac {\phi^j - \hat \phi^j} {\sqrt 5}$

Then we need to show:

$F_{k + 2} = \dfrac {\phi^{k + 2} - \hat \phi^{k + 2} } {\sqrt 5}$


Induction Step
This is our induction step:

We observe that we have the following two identities:

$\phi^2 = \paren {\dfrac {1 + \sqrt 5} 2}^2 = \dfrac 1 4 \paren {6 + 2 \sqrt 5} = \dfrac {3 + \sqrt 5} 2 = 1 + \phi$
$\hat \phi^2 = \paren {\dfrac {1 - \sqrt 5} 2}^2 = \dfrac 1 4 \paren {6 - 2 \sqrt 5} = \dfrac {3 - \sqrt 5} 2 = 1 + \hat \phi$
This can also be deduced from the definition of the golden mean: the fact that $\phi$ and $\hat \phi$ are the solutions to the quadratic equation $x^2 = x + 1$.

Thus:














\(\ds \phi^{k + 2} - \hat \phi^{k + 2}\)

\(=\)







\(\ds \paren {1 + \phi} \phi^k - \paren {1 + \hat \phi} \hat \phi^k\)




















\(\ds \)

\(=\)







\(\ds \paren {\phi^k - \hat \phi^k} + \paren {\phi^{k + 1} - \hat \phi^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt 5 \paren {F_k + F_{k + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sqrt 5 F_{k + 2}\)





Definition of Fibonacci Numbers



The result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$
$\blacksquare$


Source of Name
This entry was named for Jacques Philippe Marie Binet and Leonhard Paul Euler.


Also known as
The Euler-Binet Formula is also known as Binet's formula.





