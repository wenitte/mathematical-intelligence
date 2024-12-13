# 

Source: https://proofwiki.org/wiki/Nth_Derivative_of_Natural_Logarithm



Theorem
The $n$th derivative of $\map \ln x$ for $n \ge 1$ is:

$\dfrac {\d^n} {\d x^n} \ln x = \dfrac {\paren {n - 1}! \paren {-1}^{n - 1} } {x^n}$


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\dfrac {\d^n} {\d x^n} \ln x = \dfrac {\paren {n - 1}! \paren {-1}^{n - 1} } {x^n}$


Basis for the Induction
$\map P 1$ is true, as this just says:

$\dfrac \d {\d x} \ln x = \dfrac 1 x$
This follows by Derivative of Natural Logarithm Function.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\dfrac {\d^k} {\d x^k} \ln x = \dfrac {\paren {k - 1}! \paren {-1}^{k - 1} } {x^k}$
Then we need to show:

$\dfrac {\d^{k + 1} } {\d x^{k + 1} } \ln x = \dfrac {k! \paren {-1}^k} {x^{k + 1} }$


Induction Step
This is our induction step:














\(\ds \frac {\d^{k + 1} } {\d x^{k + 1} } \ln x\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\frac {\d^k} {\d x^k} \ln x}\)




















\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d x} } {\paren {k - 1}! \paren {-1}^{k - 1} x^{-k} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k - 1}! \paren {-1}^{k - 1} \map {\frac \d {\d x} } {x^{-k} }\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \paren {k - 1}! \paren {-1}^{k - 1} \paren {k x^{-k - 1} }\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds k! \paren {-1}^k x^{-\paren {k + 1} }\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {k! \paren {-1}^k} {x^{k + 1} }\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\dfrac {\d^n} {\d x^n} \ln x = \dfrac {\paren {n - 1}! \paren {-1}^{n - 1} } {x^n}$
$\blacksquare$





