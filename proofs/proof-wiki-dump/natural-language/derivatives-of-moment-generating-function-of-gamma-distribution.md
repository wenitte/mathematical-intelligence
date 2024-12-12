# 

Source: https://proofwiki.org/wiki/Derivatives_of_Moment_Generating_Function_of_Gamma_Distribution



Theorem
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
Let $t < \beta$.
Let $M_X$ denote the moment generating function of $X$.

The $n$th derivative of $M_X$ is given by:

${M_X}^{\paren n} = \dfrac {\alpha^{\overline n} \beta^\alpha} {\paren {\beta - t}^{\alpha + n} }$
where $\alpha^{\overline n}$ denotes the $n$th rising factorial of $\alpha$.


Proof
The proof proceeds by induction on $n$.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

${M_X}^{\paren n} = \dfrac {\alpha^{\overline n} \beta^\alpha} {\paren {\beta - t}^{\alpha + n} }$


Basis for the Induction
$\map P 0$ is the case:














\(\ds {M_X}^{\paren 0}\)

\(=\)







\(\ds M_X\)





Definition of Higher Derivative














\(\ds \)

\(=\)







\(\ds \paren {1 - \dfrac t \beta}^{-\alpha}\)





Moment Generating Function of Gamma Distribution














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\beta - t} \beta}^{-\alpha}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\beta^\alpha} {\paren {\beta - t}^\alpha}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\alpha^{\overline 0} \beta^\alpha} {\paren {\beta - t}^{\alpha + 0} }\)





Number to Power of Zero Rising is One




Thus $\map P 0$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

${M_X}^{\paren k} = \dfrac {\alpha^{\overline k} \beta^\alpha} {\paren {\beta - t}^{\alpha + k} }$

from which it is to be shown that:

${M_X}^{\paren {k + 1} } = \dfrac {\alpha^{\overline {k + 1} } \beta^\alpha} {\paren {\beta - t}^{\alpha + k + 1} }$


Induction Step
This is the induction step:














\(\ds {M_X}^{\paren {k + 1} }\)

\(=\)







\(\ds \dfrac \d {\d t} {M_X}^{\paren k}\)





Definition of Higher Derivative














\(\ds \)

\(=\)







\(\ds \dfrac \d {\d t} \dfrac {\alpha^{\overline k} \beta^\alpha} {\paren {\beta - t}^{\alpha + k} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \alpha^{\overline k} \beta^\alpha \dfrac \d {\d t} \paren {\beta - t}^{-\alpha - k}\)




















\(\ds \)

\(=\)







\(\ds \alpha^{\overline k} \beta^\alpha \paren {-1} \paren {-\alpha - k} \paren {\beta - t}^{-\alpha - k - 1}\)





Power Rule for Derivatives, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \alpha^{\overline k} \beta^\alpha \paren {\alpha + k} \dfrac 1 {\paren {\beta - t}^{\alpha + k + 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\alpha^{\overline {k + 1} } \beta^\alpha} {\paren {\beta - t}^{\alpha + k + 1} }\)





Definition of Rising Factorial



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: {M_X}^{\paren n} = \dfrac {\alpha^{\overline n} \beta^\alpha} {\paren {\beta - t}^{\alpha + n} }$
$\blacksquare$





