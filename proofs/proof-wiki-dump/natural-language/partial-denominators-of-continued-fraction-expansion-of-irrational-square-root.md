# 

Source: https://proofwiki.org/wiki/Partial_Denominators_of_Continued_Fraction_Expansion_of_Irrational_Square_Root



Theorem
Let $n \in \Z$ such that $n$ is not a square.
Let the continued fraction expansion of $\sqrt n$ be expressed as:

$\sqbrk {a_0, a_1, a_2, \ldots}$

Then the partial denominators of this continued fraction expansion can be calculated as:

$a_r = \floor {\dfrac {\floor {\sqrt n} + P_r} {Q_r} }$
where:

$P_r = \begin{cases} 0 & : r = 0 \\
a_{r - 1} Q_{r - 1} - P_{r - 1} & : r > 0 \\
\end{cases}$


$Q_r = \begin{cases} 1 & : r = 0 \\
\dfrac {n - {P_r}^2} {Q_{r - 1} } & : r > 0 \\
\end{cases}$


Proof
The proof proceeds by strong induction.
For all $r \in \Z_{\ge 0}$, let $\map P r$ be the proposition:

$a_r = \floor {\dfrac {\floor {\sqrt n} + P_r} {Q_r} }$
where:

$P_r = \begin{cases} 0 & : r = 0 \\
a_{r - 1} Q_{r - 1} - P_{r - 1} & : r > 0 \\
\end{cases}$


$Q_r = \begin{cases} 1 & : r = 0 \\
\dfrac {n - {P_r}^2} {Q_{r - 1} } & : r > 0 \\
\end{cases}$


Edge Cases
By definition of the structure of a continued fraction:

$\sqrt n = a_0 + \dfrac 1 {x_1}$
for some $a_0 \in \Z$ and $x_1 \in \R_{>0}$.
Thus:














\(\ds a_0\)

\(=\)







\(\ds \floor {\sqrt n}\)





Definition of Floor Function














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {\sqrt n + 0} 1}\)




















\(\ds \)

\(=\)







\(\ds \floor {\dfrac {\sqrt n + P_0} {Q_0} }\)





Definition of $P_0$ and $Q_0$














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {\floor {\sqrt n} + P_0} {Q_0} }\)





Floor of $\dfrac {x + m} n$



Thus $\map P 0$ is seen to hold.

We have that:

$\sqrt n = a_0 + \dfrac 1 {x_1}$
Then:














\(\ds \dfrac 1 {x_1}\)

\(=\)







\(\ds \sqrt n - a_0\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds \dfrac 1 {n - a_0}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + a_0} {\paren {\sqrt n - a_0} \paren {\sqrt n + a_0} }\)





multiplying top and bottom by $\sqrt n + a_0$














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + P_1} {Q_1}\)





Definition of $P_1$ and $Q_1$




By definition of the structure of a continued fraction:

$x_1 = a_1 + \dfrac 1 {x_2}$
for some $a_1 \in \Z$ and $x_2 \in \R_{>0}$.
Hence:














\(\ds a_1\)

\(=\)







\(\ds \floor {\dfrac {\sqrt n + P_1} {Q_1} }\)





Definition of Floor Function














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {\floor {\sqrt n} + P_1} {Q_1} }\)





Floor of $\dfrac {x + m} n$



Thus $\map P 1$ is seen to hold.


Basis for the Induction
We have that:

$x_1 = a_1 + \dfrac 1 {x_2}$
Then:














\(\ds \dfrac 1 {x_2}\)

\(=\)







\(\ds x_1 - a_1\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + P_1} {Q_1} - a_1\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + P_1 - a_1 Q_1} {Q_1}\)














\(\ds \leadsto \ \ \)





\(\ds x_2\)

\(=\)







\(\ds \dfrac {Q_1} {\sqrt n - \paren {a_1 Q_1 - P_1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {Q_1} {\sqrt n - P_2}\)





Definition of $P_2$














\(\ds \)

\(=\)







\(\ds \dfrac {Q_1 \paren {\sqrt n + P_2} } {\paren {\sqrt n - P_2} \paren {\sqrt n + P_2} }\)





multiplying top and bottom by $\sqrt n + P_2$














\(\ds \)

\(=\)







\(\ds \dfrac {Q_1 \paren {\sqrt n + P_2} } {n - {P_2}^2}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + P_2} {\paren {n - {P_2}^2} / Q_1}\)





By Expansion of Associated Reduced Quadratic Irrational, $\paren {n - {P_2}^2} / Q_1$ is an integer














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + P_2} {Q_2}\)





Definition of $Q_2$




By definition of the structure of a continued fraction:

$x_2 = a_2 + \dfrac 1 {x_3}$
for some $a_2 \in \Z$ and $x_3 \in \R_{>0}$.

Thus:














\(\ds a_2\)

\(=\)







\(\ds \floor {\dfrac {\sqrt n + P_2} {Q_2} }\)





Definition of Floor Function














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {\floor {\sqrt n} + P_2} {Q_2} }\)





Floor of $\dfrac {x + m} n$




This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P {k - 1}$ and $\map P k$ are true, for all $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

This is the induction hypothesis:

$a_k = \floor {\dfrac {a_0 + P_k} {Q_k} }$
where:

$P_k = a_{k - 1} Q_{k - 1} - P_{k - 1}$
$Q_k = \dfrac {n - {P_k}^2} {Q_{k - 1} }$
and:

$x_k = \dfrac{\sqrt n + P_k} {Q_k}$

from which it is to be shown that:

$a_{k + 1} = \floor {\dfrac{a_0 + P_{k + 1} } {Q_{k + 1} } }$
where:

$P_{k + 1} = a_k Q_k - P_k$
$Q_{k + 1} = \dfrac {n - {P_{k + 1} }^2} {Q_k}$
and:

$x_{k + 1} = \dfrac{\sqrt n + P_{k + 1} } {Q_{k + 1} }$


Induction Step
This is the induction step:
By definition of the structure of a continued fraction:

$x_k = a_k + \dfrac 1 {x_{k+1} }$
where:

$x_{k+1} \in \R_{>0}$
$a_k = \floor {\dfrac{a_0 + P_k} {Q_k} }$
by the induction hypothesis.
Then:














\(\ds \dfrac 1 {x_{k+1} }\)

\(=\)







\(\ds x_k - a_k\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + P_k} {Q_k} - a_k\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + P_k - a_k Q_k} {Q_k}\)














\(\ds \leadsto \ \ \)





\(\ds x_2\)

\(=\)







\(\ds \dfrac {Q_k} {\sqrt n - \paren {a_k Q_k - P_k} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {Q_k} {\sqrt n - P_{k + 1} }\)





Definition of $P_{k + 1}$














\(\ds \)

\(=\)







\(\ds \dfrac {Q_k \paren {\sqrt n + P_{k + 1} } } {\paren {\sqrt n - P_{k + 1} } \paren {\sqrt n + P_{k + 1} } }\)





multiplying top and bottom by $\sqrt n + P_{k + 1}$














\(\ds \)

\(=\)







\(\ds \dfrac {Q_k \paren {\sqrt n + P_{k + 1} } } {n - {P_{k + 1} }^2}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + P_{k + 1} } {\paren {n - {P_{k + 1} }^2} / Q_k}\)





By Expansion of Associated Reduced Quadratic Irrational, $\paren {n - {P_{k + 1} }^2} / Q_k$ is an integer














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt n + P_{k + 1} } {Q_{k + 1} }\)





Definition of $Q_{k + 1}$




By definition of the structure of a continued fraction:

$x_{k + 1} = a_{k + 1} + \dfrac 1 {x_{k + 2} }$
for some $a_{k + 1} \in \Z$ and $x_{k + 2} \in \R_{>0}$.

Thus:














\(\ds a_{k + 1}\)

\(=\)







\(\ds \floor {\dfrac {\sqrt n + P_{k + 1} } {Q_{k + 1} } }\)





Definition of Floor Function














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {\floor {\sqrt n} + P_{k + 1} } {Q_{k + 1} } }\)





Floor of $\dfrac {x + m} n$




So $\map P k \implies P \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Hence the result.
$\blacksquare$


Sources
Weisstein, Eric W. "Pell Equation." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/PellEquation.html




