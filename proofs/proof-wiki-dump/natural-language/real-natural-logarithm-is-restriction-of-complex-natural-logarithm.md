# 

Source: https://proofwiki.org/wiki/Real_Natural_Logarithm_is_Restriction_of_Complex_Natural_Logarithm

Theorem
Let $\ln: \C_{\ne 0} \to \C$ be the complex natural logarithm.
Let $\ln': \R_{>0} \to \R$ be the real natural logarithm.

Then:

$\ln' = \ln \restriction_{\R_{>0} \times \R}$
That is, the real natural logarithm is the restriction of the complex natural logarithm.


Proof
From Domain of Real Natural Logarithm:

$\operatorname{Dom} \left({\ln'}\right) = \R_{>0}$
From Image of Real Natural Logarithm:

$\operatorname{Im} \left({\ln'}\right) = \R$

Let $z \in \C$ such that $z = x + i y$.
Let $z$ be expressed in exponential form as $z = r e^{i \theta}$.
Let $x > 0$ and $y = 0$.
Thus $z \in \R_{>0}$.
Then:














\(\ds \ln z\)

\(=\)







\(\ds \left\{ {\ln' r + i \theta + 2 \pi k i}\right\}\)




















\(\ds \)

\(=\)







\(\ds \left\{ {\ln' x + 2 \pi k i}\right\}\)





as $r = x$ and $\theta = 0$



In order for $\ln z \in \R$ it is necessary that $k = 0$.
Thus $\ln z = \ln' x$.
Hence the result.
$\blacksquare$





