# 

Source: https://proofwiki.org/wiki/Expectation_of_Power_of_Gamma_Distribution

Theorem
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.

Then:

$\expect {X^n} = \dfrac {\alpha^{\overline n} } {\beta^n}$
where:

$\expect {X^n}$ denotes the expectation of $X^n$
$\alpha^{\overline n}$ denotes the $n$th rising factorial of $\alpha$.


Proof
From Moment in terms of Moment Generating Function:

$\expect {X^n} = \map { {M_X}^{\paren n} } 0$
where ${M_X}^{\paren n}$ denotes the $n$th derivative of $M_X$.

Then:














\(\ds \expect {X^n}\)

\(=\)







\(\ds \map { {M_X}^{\paren n} } 0\)




















\(\ds \)

\(=\)







\(\ds \valueat {\dfrac {\alpha^{\overline n} \beta^\alpha} {\paren {\beta - t}^{\alpha + n} } } {t \mathop = 0}\)





Derivatives of Moment Generating Function of Gamma Distribution where $t < \beta$














\(\ds \)

\(=\)







\(\ds \dfrac {\alpha^{\overline n} \beta^\alpha} {\beta^{\alpha + n} }\)





setting $t = 0$














\(\ds \)

\(=\)







\(\ds \dfrac {\alpha^{\overline n} } {\beta^n}\)





dividing top and bottom by $\beta^\alpha$



$\blacksquare$





