# 

Source: https://proofwiki.org/wiki/Nth_Derivative_of_Reciprocal_of_Mth_Power



Theorem
Let $m \in \Z$ be an integer such that $m > 0$.
The $n$th derivative of $\dfrac 1 {x^m}$ with respect to $x$ is:

$\dfrac {\d^n} {\d x^n} \dfrac 1 {x^m} = \dfrac {\paren {-1}^n m^{\overline n}} {x^{m + n}}$
where $m^{\overline n}$ denotes the rising factorial.


Corollary
The $n$th derivative of $\dfrac 1 x$ with respect to $x$ is:

$\dfrac {\d^n} {\d x^n} \dfrac 1 x = \dfrac {\paren {-1}^n n!} {x^{n + 1} }$
where $n!$ denotes $n$ factorial.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\dfrac {\d^n} {\d x^n} \dfrac 1 {x^m} = \dfrac {\paren {-1}^n m^{\overline n}} {x^{m + n}}$


Basis for the Induction
$P(1)$ is true, as this is the case:














\(\ds \frac {\d} {\d x} \frac 1 {x^m}\)

\(=\)







\(\ds \frac {\d} {\d x} x^{-m}\)




















\(\ds \)

\(=\)







\(\ds \paren {-m} x^{-m - 1}\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {-m} {x^{m+1} }\)









which matches the proposition as $m^{\overline 1} = m$ from the definition of rising factorial.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\dfrac {\d^k} {\d x^k} \dfrac 1 {x^m} = \dfrac {\paren {-1}^k m^{\overline k} } {x^{m + k} }$

Then we need to show:

$\dfrac {\d^{k + 1} } {\d x^{k + 1} } \dfrac 1 {x^m} = \dfrac {\paren {-1}^{k + 1} m^{\overline {k + 1} } } {x^{m + k + 1} }$


Induction Step
This is our induction step:
First, let $k < m$. Then we have:














\(\ds \frac {\d^{k + 1} } {\d x^{k + 1} } \frac 1 {x^m}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\frac {\d^k} {\d x^k} \frac 1 {x^m} }\)




















\(\ds \)

\(=\)







\(\ds \frac \d {\d x} \frac {\paren {-1}^k m^{\overline k} } {x^{m + k} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {-1}^k m^{\overline k} \frac \d {\d x} \frac 1 {x^{m + k} }\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \paren {-1}^k m^{\overline k} \paren {\frac {-\paren {m + k} } {x^{m + k + 1} } }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k + 1} m^{\overline {k + 1} } } {x^{m + k + 1} }\)





Definition of Rising Factorial



$\blacksquare$





