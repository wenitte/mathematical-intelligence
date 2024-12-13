# 

Source: https://proofwiki.org/wiki/Nth_Derivative_of_Natural_Logarithm_by_Reciprocal



Theorem
$\dfrac {\d^n} {\d x^n} \dfrac {\ln x} x = \paren {-1}^{n + 1} n! \dfrac {H_n - \ln x} {x^{n + 1} }$
where $H_n$ denotes the $n$th harmonic number:

$H_n = \ds \sum_{r \mathop = 1}^n \dfrac 1 r = 1 + \dfrac 1 2 + \dfrac 1 3 + \cdots + \dfrac 1 r$


Proof
The proof proceeds by induction.
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\dfrac {\d^n} {\d x^n} \dfrac {\ln x} x = \paren {-1}^{n + 1} n! \dfrac {H_n - \ln x} {x^{n + 1} }$


Basis for the Induction
$\map P 1$ is the case:

$\dfrac \d {\d x} \dfrac {\ln x} x = \paren {-1}^n n! \dfrac {H_n - \ln x} {x^{n + 1} }$















\(\ds \dfrac \d {\d x} \dfrac {\ln x} x\)

\(=\)







\(\ds \dfrac {1 - \ln x} {x^2}\)





Derivative of Logarithm over Power














\(\ds \)

\(=\)







\(\ds \paren {-1}^2 \times 1! \times \dfrac {H_1 - \ln x} {x^{1 + 1} }\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\dfrac {\d^k} {\d x^k} \dfrac {\ln x} x = \paren {-1}^{k + 1} k! \dfrac {H_k - \ln x} {x^{k + 1} }$

from which it is to be shown that:

$\dfrac {\d^{k + 1} } {\d x^{k + 1} } \dfrac {\ln x} x = \paren {-1}^{k + 2} \paren {k + 1}! \dfrac {H_{k + 1} - \ln x} {x^{k + 2} }$


Induction Step
This is the induction step:















\(\ds \dfrac {\d^{k + 1} } {\d x^{k + 1} } \dfrac {\ln x} x\)

\(=\)







\(\ds \dfrac \d {\d x} \paren {-1}^{k + 1} k! \dfrac {H_k - \ln x} {x^{k + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 1} k! \map {\dfrac \d {\d x} } {\dfrac {H_k} {x^{k + 1} } - \dfrac {\ln x} {x^{k + 1} } }\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 1} k! \paren {\dfrac {-\paren {k + 1} H_k} {x^{k + 2} } - \dfrac {1 - \paren {k + 1} \ln x} {x^{k + 2} } }\)





Derivative of Power, Derivative of Logarithm over Power














\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} \paren {k + 1}! \paren {\dfrac {H_k} {x^{k + 2} } + \dfrac 1 {\paren {k + 1} x^{k + 2} } - \dfrac {\ln x} {x^{k + 2} } }\)





extracting $-\paren {k + 1}$ as a factor














\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} \paren {k + 1}! \paren {\paren {H_k + \dfrac 1 {\paren {k + 1} } } \dfrac 1 {x^{k + 2} } - \dfrac {\ln x} {x^{k + 2} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} \paren {k + 1}! \paren {\dfrac {H_{k + 1} } {x^{k + 2} } - \dfrac {\ln x} {x^{k + 2} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} \paren {k + 1}! \dfrac {H_{k + 1} - \ln x} {x^{k + 2} }\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0}: \dfrac {\d^n} {\d x^n} \dfrac {\ln x} x = \paren {-1}^{n + 1} n! \dfrac {H_n - \ln x} {x^{n + 1} }$
$\blacksquare$





