# 

Source: https://proofwiki.org/wiki/Higher_Derivatives_of_Exponential_Function



Theorem
Let $\exp x$ be the exponential function.

Then:

$\map {\dfrac {\d^n} {\d x^n} } {\exp x} = \exp x$


Corollary
Let $c$ be a constant.
Then:

$\map {\dfrac {\d^n} {\d x^n} } {\map \exp {c x} } = c^n \map \exp {c x}$


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\map {\dfrac {\d^n} {\d x^n} } {\exp x} = \exp x$


Basis for the Induction
$\map P 1$ is true, as this is the case proved in Derivative of Exponential Function:

$\map {\dfrac \d {\d x} } {\exp x} = \exp x$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\map {\dfrac {\d^k} {\d x^k} } {\exp x} = \exp x$

Then we need to show:

$\map {\dfrac {\d^{k + 1} } {\d x^{k + 1} } } {\exp x} = \exp x$


Induction Step
This is our induction step:














\(\ds \map {\dfrac {\d^{k + 1} } {\d x^{k + 1} } } {\exp x}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac {\d^k} {\d x^k} } {\exp x}\)





Definition of Higher Derivatives














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\exp x}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \exp x\)





Basis for the Induction



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>0}: \map {\dfrac {\d^n} {\d x^n} } {\exp x} = \exp x$
$\blacksquare$





