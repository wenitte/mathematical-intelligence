# 

Source: https://proofwiki.org/wiki/Derivatives_of_PGF_of_Negative_Binomial_Distribution/First_Form



Theorem
Let $X$ be a discrete random variable with the negative binomial distribution (second form) with parameters $n$ and $p$.
Then the derivatives of the PGF of $X$ with respect to $s$ are:

$\dfrac {\d^k} {\d s^k} \map {\Pi_X} s = \dfrac {n^{\overline k} p^k} {q^k} \paren {\dfrac q {1 - p s} }^{n + k}$
where:

$n^{\overline k}$ is the rising factorial: $n^{\overline k} = n \paren {n + 1} \paren {n + 2} \cdots \paren {n + k - 1}$
$q = 1 - p$


Proof
Proof by induction:

The Probability Generating Function of Negative Binomial Distribution (First Form) is:

$\ds \map {\Pi_X} s = \paren {\frac q {1 - p s} }^n$

For all $k \in \N_{> 0}$, let $\map P k$ be the proposition:

$\dfrac {\d^k} {\d s^k} \map {\Pi_X} s = \dfrac {n^{\overline k} p^k} {q^k} \paren {\dfrac q {1 - p s} }^{n + k}$


Basis for the Induction
$\map P 1$ is the case:

$\dfrac \d {\d s} \map {\Pi_X} s = \dfrac {n^{\overline 1} p} q \paren {\dfrac q {1 - p s} }^{n + 1}$
which is proved in First Derivative of PGF of Negative Binomial Distribution: First Form.
Note that from Number to Power of One Rising is Itself:

$n^\overline 1 = n$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P j$ is true, where $j \ge 1$, then it logically follows that $\map P {j + 1}$ is true.

So this is our induction hypothesis:

$\dfrac {\d^j} {\d s^j} \map {\Pi_X} s = \dfrac {n^{\overline j} p^j} {q^j} \paren {\dfrac q {1 - p s} }^{n + j}$

Then we need to show:

$\dfrac {\d^{j + 1} } {\d s^{j + 1} } \map {\Pi_X} s = \dfrac {n^{\overline {j + 1}} p^{j + 1} } {q^{j + 1} } \paren {\dfrac q {1 - p s} }^{n + j + 1}$


Induction Step
This is our induction step:















\(\ds \map {\dfrac \d {\d s} } {\dfrac {\d^j} {\d s^j} \map {\Pi_X} s}\)

\(=\)







\(\ds \map {\dfrac \d {\d s} } {\dfrac {n^{\overline j} p^j} {q^j} \paren {\dfrac q {1 - p s} }^{n + j} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {n^{\overline j} p^j} {q^j} \map {\dfrac \d {\d s} } {\paren {\dfrac q {1 - p s} }^{n + j} }\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \dfrac {n^{\overline j} p^j} {q^j} \paren {\dfrac {\paren {n + j} p} q \paren {\dfrac q {1 - p s} }^{n + j + 1} }\)





First Derivative of PGF of Negative Binomial Distribution/First Form














\(\ds \)

\(=\)







\(\ds \dfrac {n^{\overline {j + 1} } p^{j + 1} } {q^{j + 1} } \paren {\dfrac q {1 - p s} }^{n + j + 1}\)





Simplification, and Definition of Rising Factorial




So $\map P j \implies \map P {j + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall k \in \N_{> 0}: \dfrac {\d^k} {\d s^k} \map {\Pi_X} s = \dfrac {n^{\overline k} p^k} {q^k} \paren {\dfrac q {1 - p s} }^{n + k}$
$\blacksquare$





