# 

Source: https://proofwiki.org/wiki/Form_of_Logit_for_Logistic_Curve

Theorem
Let $p$ denote the probability of the occurrence of an event.
Let $p$ satisfy a logistic relationship with an explanatory variable $x$ of the form:

$p = \dfrac 1 {1 + \map \exp {-\paren {\alpha + \beta x} } }$
Let $Y$ be the logit of $p$.

Then:

$Y = \alpha + \beta x$


Proof
By definition, the logit of $p$ is given by:

$Y = \map \ln {\dfrac p {1 - p} }$
In order to simplify the algebra, let $c = -\paren {\alpha + \beta x}$.
Then we have:














\(\ds Y\)

\(=\)







\(\ds \map \ln {\dfrac {\frac 1 {1 + \exp c} } {1 - \frac 1 {1 + \exp c} } }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac {\frac 1 {1 + \exp c} } {\frac {1 + \exp c - 1} {1 + \exp c} } }\)





putting everything in the lower fraction over a common denominator














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 {\exp c} }\)





simplification, and multiplying top and bottom by $1 + \exp c$














\(\ds \)

\(=\)







\(\ds -\map \ln {\exp c}\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds -c\)





Definition of Logarithm














\(\ds \)

\(=\)







\(\ds \alpha + \beta x\)





substituting for $c$ and simplifying



$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): logit
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): logit




