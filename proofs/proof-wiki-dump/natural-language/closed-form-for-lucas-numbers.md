# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Lucas_Numbers



Theorem
The Lucas numbers have a closed-form solution:

$L_n = \phi^n + \paren {1 - \phi}^n = \paren {\dfrac {1 + \sqrt 5} 2}^n + \paren {\dfrac {1 - \sqrt 5} 2}^n$
where $\phi$ is the golden mean.

Putting $\hat \phi = 1 - \phi = -\dfrac 1 \phi$ this can be written:

$L_n = \phi^n + \hat \phi^n$


Proof
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$L_n = \phi^n + \paren {1 - \phi}^n = \paren {\dfrac {1 + \sqrt 5} 2})^n + \paren {\dfrac {1 - \sqrt 5} 2}^n = \phi^n + \hat \phi^n$


Basis for the Induction
$\map P 0$ is true, as this just says:

$\phi^0 + \hat \phi^0 = 1 + 1 = 2 = L_0$

$\map P 1$ is the case:














\(\ds \phi^1 + \paren {1 - \phi}^1\)

\(=\)







\(\ds \phi + 1 - \phi\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds L_1\)










This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P j$ is true for all $0 \le j \le k + 1$, then it logically follows that $\map P {k + 2}$ is true.

So this is our induction hypothesis:

$\forall 0 \le j \le k + 1: L_j = \phi^j + \hat \phi^j$

Then we need to show:

$L_{k + 2} = \phi^{k + 2} + \hat \phi^{k + 2}$


Induction Step
This is our induction step:

We observe that we have the following two identities:

$\phi^2 = \paren {\dfrac {1 + \sqrt 5} 2}^2 = \dfrac 1 4 \paren {6 + 2 \sqrt 5} = \dfrac {3 + \sqrt 5} 2 = 1 + \phi$
$\hat \phi^2 = \paren {\dfrac {1 - \sqrt 5} 2}^2 = \dfrac 1 4 \paren {6 - 2 \sqrt 5} = \dfrac {3 - \sqrt 5} 2 = 1 + \hat \phi$
This can also be deduced from the definition of the golden mean: the fact that $\phi$ and $\hat \phi$ are the solutions to the quadratic equation $x^2 = x + 1$.

Thus:














\(\ds \phi^{k + 2} + \hat \phi^{k + 2}\)

\(=\)







\(\ds \paren {1 + \phi} \phi^k + \paren {1 + \hat \phi} \hat \phi^k\)




















\(\ds \)

\(=\)







\(\ds \paren {\phi^k + \hat \phi^k} + \paren {\phi^{k + 1} + \hat \phi^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds L_k + L_{k + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds L_{k + 2}\)





Definition of Lucas Number



The result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: L_n = \phi^n + \hat \phi^n$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $11$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $11$




