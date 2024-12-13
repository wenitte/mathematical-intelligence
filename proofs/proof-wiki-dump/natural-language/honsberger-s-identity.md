# 

Source: https://proofwiki.org/wiki/Honsberger%27s_Identity



Theorem
Let $F_k$ be the $k$th Fibonacci number.

Then:

$\forall m, n \in \Z_{>0}: F_{m + n} = F_{m - 1} F_n + F_m F_{n + 1}$


Negative Indices
Let $n \in \Z_{< 0}$ be a negative integer.
Let $F_n$ be the $n$th Fibonacci number (as extended to negative integers).
Then Honsberger's Identity:

$F_{m + n} = F_{m - 1} F_n + F_m F_{n + 1}$
continues to hold, whether $m$ or $n$ are positive or negative.


Proof 1
From the initial definition of Fibonacci numbers, we have:

$F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3$
Proof by induction:
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\forall m \in \Z_{>0} : F_{m + n} = F_{m - 1} F_n + F_m F_{n + 1}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds F_{m + 1}\)

\(=\)







\(\ds F_{m - 1} + F_m\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{m - 1} \times 1 + F_m \times 1\)




















\(\ds \)

\(=\)







\(\ds F_{m - 1} F_1 + F_m F_2\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{m - 1} F_n + F_m F_{n + 1}\)





for $n = 1$



and so $\map P 1$ is seen to hold.

$\map P 2$ is the case:















\(\ds F_{m + 2}\)

\(=\)







\(\ds F_{m + 1} + F_m\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{m - 1} + F_m + F_m\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{m - 1} \times 1 + F_m \times 2\)




















\(\ds \)

\(=\)







\(\ds F_{m - 1} F_2 + F_m F_3\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{m - 1} F_n + F_m F_{n + 1}\)





for $n = 2$



and so $\map P 2$ is seen to hold.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ and $\map P {k - 1}$ are true, where $k > 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$F_{m + k} = F_{m - 1} F_k + F_m F_{k + 1}$
and:

$F_{m + k - 1} = F_{m - 1} F_{k - 1} + F_m F_k$

from which it is to be shown:

$F_{m + k + 1} = F_{m - 1} F_{k + 1} + F_m F_{k + 2}$


Induction Step
This is our induction step:














\(\ds F_{m + k + 1}\)

\(=\)







\(\ds F_{m + k} + F_{m + k - 1}\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{m - 1} F_k + F_m F_{k + 1} + F_{m - 1} F_{k - 1} + F_m F_k\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds F_{m - 1} \paren {F_k + F_{k - 1} } + F_m \paren {F_{k + 1} + F_k}\)




















\(\ds \)

\(=\)







\(\ds F_{m - 1} F_{k + 1} + F_m F_{k + 2}\)





Definition of Fibonacci Number



So $\map P k \land \map P {k - 1} \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n \in \Z_{>0} : F_{m + n} = F_{m - 1} F_n + F_m F_{n + 1}$
$\blacksquare$


Proof 2













\(\ds \)

\(\)







\(\ds F_{m - 1} F_n + F_m F_{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m - 1} - \hat \phi^{m - 1} } {\sqrt 5} \dfrac {\phi^n - \hat \phi^n} {\sqrt 5} + \dfrac {\phi^m - \hat \phi^m} {\sqrt 5} \dfrac {\phi^{n + 1} - \hat \phi^{n + 1} } {\sqrt 5}\)





Euler-Binet Formula














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} - \phi^{m - 1} \hat \phi^n - \phi^n \hat \phi^{m - 1} + \hat \phi^{m + n - 1} + \phi^{m + n + 1} - \phi^m \hat \phi^{n + 1} - \phi^{n + 1} \hat \phi^m + \hat \phi^{m + n + 1} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {1 + \phi^2} + \hat \phi^{m + n - 1} \paren {1 + \hat \phi^2} - \phi^{m - 1} \hat \phi^n \paren {1 + \phi \hat \phi} -\phi^n \hat \phi^{m - 1} \paren {1 + \phi \hat \phi} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {1 + \phi^2} + \hat \phi^{m + n - 1} \paren {1 + \hat \phi^2} } 5\)





as $\phi \hat \phi = -1$














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {2 + \phi} + \hat \phi^{m + n - 1} \paren {2 + \hat \phi} } 5\)





as both $\phi$ and $\hat \phi$ satisfy $x^2 = x + 1$














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {2 + \dfrac {1 + \sqrt 5} 2} + \hat \phi^{m + n - 1} \paren {2 + \dfrac {1 - \sqrt 5} 2} } 5\)





Definition of $\phi$ and $\hat \phi$














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {\dfrac {5 + \sqrt 5} 2} + \hat \phi^{m + n - 1} \paren {\dfrac{ 5 - \sqrt 5} 2} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {\dfrac {1 + \sqrt 5} 2} - \hat \phi^{m + n - 1} \paren {\dfrac {1 - \sqrt 5} 2} } {\sqrt 5}\)





dividing numerator and denominator by $\sqrt 5$














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n} - \hat \phi^{m + n} } {\sqrt 5}\)





Definition of $\phi$ and $\hat \phi$














\(\ds \)

\(=\)







\(\ds F_{m + n}\)





Euler-Binet Formula



$\blacksquare$


Source of Name
This entry was named for Ross Honsberger.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: $(6)$






