# 

Source: https://proofwiki.org/wiki/Real_Number_to_Negative_Power/Positive_Integer



Theorem
Let $r \in \R_{> 0}$ be a (strictly) positive real number.
Let $n \in \Z_{\ge 0}$ be a positive integer.
Let $r^n$ be defined as $r$ to the power of $n$.

Then:

$r^{-n} = \dfrac 1 {r^n}$


Proof
Proof by induction on $m$:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$r^{-n} = \dfrac 1 {r^n}$

$\map P 0$ is the case:














\(\ds r^{-0}\)

\(=\)







\(\ds r^0\)




















\(\ds \)

\(=\)







\(\ds 1\)





Definition of Integer Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {r^0}\)





Definition of Integer Power





Basis for the Induction
$\map P 1$ is the case:














\(\ds r^{-1}\)

\(=\)







\(\ds \dfrac {r^{-1 + 1} } r\)





Definition of Integer Power














\(\ds \)

\(=\)







\(\ds \dfrac {r^0} r\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 r\)





Definition of Integer Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 {r^1}\)





Definition of Integer Power




This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$r^{-k} = \dfrac 1 {r^k}$

Then we need to show:

$r^{-\paren {k + 1} } = \dfrac 1 {r^{k + 1} }$


Induction Step
This is our induction step:















\(\ds r^{-\paren {k + 1} }\)

\(=\)







\(\ds \dfrac {r^{-\paren {k + 1} + 1} } r\)





Definition of Integer Power














\(\ds \)

\(=\)







\(\ds \dfrac {r^{-k} } r\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {r^k \times r}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac 1 {r^{k + 1} }\)





Definition of Integer Power



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: r^{-n} = \dfrac 1 {r^n}$
$\blacksquare$





