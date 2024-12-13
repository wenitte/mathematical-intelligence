# 

Source: https://proofwiki.org/wiki/Nth_Derivative_of_Exponential_of_Minus_One_over_x



Theorem
Let $n \in \N$ be a natural number.
Let $\map {P_n} x$ be a real polynomial of degree $n$.

Then:

$\ds \dfrac {\d^n} {\d x^n} \map \exp {- \frac 1 x} = \frac {\map {P_n} x}{x^{2n}} \map \exp {- \frac 1 x}$
where $\map {P_n} x$ satisfies the following recurrence relation:

$\map {P_{n + 1}} x = x^2 \dfrac \d {\d x} \map {P_n} x - \paren {2 n x - 1} \map {P_n} x$
and $\map {P_0} x = 1$.


Proof
Proof by induction:

Basis for the Induction
We have that:

$\ds \map \exp {- \frac 1 x} = \frac {\map {P_0} x} {x^{2 \cdot 0}} \map \exp {- \frac 1 x}$


Induction Hypothesis
This is our induction hypothesis:

$\ds \dfrac {\d^n} {\d x^n} \map \exp {- \frac 1 x} = \dfrac {\map {P_n} x}{x^{2n}} \map \exp {- \frac 1 x}$
Now we need to show true for $n + 1$:

$\ds \dfrac {\d^{n + 1}} {\d x^{n + 1}} \map \exp {- \frac 1 x} = \dfrac {\map {P_{n + 1}} x}{x^{2\paren {n + 1}}} \map \exp {- \frac 1 x}$


Induction Step
This is our induction step:














\(\ds \dfrac {\d^{n + 1} } {\d x^{n + 1} } \map \exp {- \frac 1 x}\)

\(=\)







\(\ds \dfrac \d {\d x} \frac {\map {P_n} x} {x^{2n} } \map \exp {- \frac 1 x}\)




















\(\ds \)

\(=\)







\(\ds \map {P_n'} x \frac 1 {x^{2n} } \map \exp {- \frac 1 x} + \map {P_n} x \paren {\frac {-2n} {x^{2n + 1} } } \map \exp {- \frac 1 x} + \frac {\map {P_n} x} {x^{2n} } \frac 1 {x^2} \map \exp {- \frac 1 x}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {- \frac 1 x} \frac {x^2 \map {P_n'} x - \map {P_n} x \paren {2nx - 1} } {x^{2\paren {n + 1} } }\)









The result follows by induction.
For all $n \in \N$ $\map {P_n} x$ is a real polynomial because we have $\map {P_0} x = 1$, and every step involves only addition, subtraction and multiplication of polynomials and their derivatives.
$\blacksquare$





