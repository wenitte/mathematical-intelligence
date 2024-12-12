# 

Source: https://proofwiki.org/wiki/Derivatives_of_PGF_of_Shifted_Geometric_Distribution

Theorem
Let $X$ be a discrete random variable with the shifted geometric distribution with parameter $p$.

Then the derivatives of the PGF of $X$ with respect to $s$ are:

$\map {\dfrac {\d^n} {\d s^n} } {\map {\Pi_X} s} = \dfrac {p q^{n - 1} \paren {n - 1}!} {\paren {1 - q s}^{n + 1} }$
where $q = 1 - p$.


Proof
The Probability Generating Function of Shifted Geometric Distribution is:

$\map {\Pi_X} s = \dfrac {p s} {1 - q s}$
where $q = 1 - p$.
First we need to obtain the first derivative:














\(\ds \map {\Pi'_X} s\)

\(=\)







\(\ds \map {\frac \d {\d s} } {\frac {p s} {1 - q s} }\)




















\(\ds \)

\(=\)







\(\ds p s \map {\frac \d {\d s} } {\frac 1 {1 - q s} } + \frac 1 {1 - q s} \map {\frac \d {\d s} } {p s}\)





Sum Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {p q s} {\paren {1 - q s}^2} + \frac p {1 - q s}\)





left hand side is first derivative of PGF of Geometric Distribution














\(\ds \)

\(=\)







\(\ds \frac {p q s + p \paren {1 - q s} } {\paren {1 - q s}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac p {\paren {1 - q s}^2}\)





after some algebra




From Derivatives of Function of $a x + b$:

$\map {\dfrac {\d^n} {\d s^n} } {\map f {1 - q s} } = \paren {-q}^n \map {\dfrac {\d^n} {\d z^n} } {\map f z}$
where $z = 1 - q s$.
Here we have that:

$\map f z = p \dfrac 1 {z^2}$

From Nth Derivative of Reciprocal of Mth Power:

$\dfrac {\d^{n - 1} } {\d z^{n - 1} } \dfrac 1 {z^2} = \dfrac {\paren {-1}^{n - 1} 2^{\overline {n - 1} } } {z^{\paren {n - 1} + 2} }$
where $\overline {n - 1}$ denotes the rising factorial.
Note that we consider the $n-1$th derivative because we have already taken the first one.
Also note that $2^{\overline {n - 1} } = 1^{\overline {n - 1} } = \paren {n - 1}!$

So putting it together:

$\dfrac {\d^n} {\d s^n} \map {\Pi_X} s = p \paren {-q}^{n - 1} \dfrac {\paren {-1}^{n - 1} \paren {n - 1}!} {\paren {1 - q s}^{n + 1} }$
whence (after algebra):

$\dfrac {\d^n} {\d s^n} \map {\Pi_X} s = \dfrac {p q^{n - 1} \paren {n - 1}!} {\paren {1 - q s}^{n + 1} }$
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




