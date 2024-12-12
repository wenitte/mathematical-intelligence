# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Kurtosis



Theorem
The following definitions of the concept of Kurtosis are equivalent:

Definition 1
The kurtosis of $X$ is the fourth standardized moment of $X$:

$\alpha_4 = \expect {\paren {\dfrac {X - \mu} \sigma}^4}$
where $\expect {\, \cdot \,}$ denotes expectation.

Definition 2
The kurtosis of $X$ is defined as:

$\alpha_4 = \dfrac {\mu_4} {\paren {\mu_2}^2}$
where $\mu_i$ denotes the $i$th central moment of $X$.


Proof













\(\ds \expect{\paren {\frac {X - \mu} \sigma}^4}\)

\(=\)







\(\ds \frac {\expect{\paren {X - \mu}^4} } {\sigma^4}\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \frac {\expect{\paren {X - \mu}^4} } {\paren {\var X}^2}\)





Definition of Standard Deviation














\(\ds \)

\(=\)







\(\ds \frac {\expect{\paren {X - \mu}^4} } {\paren {\expect{\paren {X - \expect X}^2} }^2}\)





Definition of Variance














\(\ds \)

\(=\)







\(\ds \frac {\expect{\paren {X - \mu}^4} } {\paren {\expect{\paren {X - \mu}^2} }^2}\)





Definition of Expectation














\(\ds \)

\(=\)







\(\ds \frac {\mu_4} {\paren {\mu_2}^2}\)





Definition of Central Moment



$\blacksquare$





