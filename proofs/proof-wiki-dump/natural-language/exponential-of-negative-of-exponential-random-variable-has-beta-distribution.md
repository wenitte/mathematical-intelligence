# 

Source: https://proofwiki.org/wiki/Exponential_of_Negative_of_Exponential_Random_Variable_has_Beta_Distribution

Theorem
Let $\beta$ be a positive real number.
Let $X \sim \Exponential \beta$ where $\Exponential \beta$ is the exponential distribution with parameter $\beta$. 

Then:

$e^{-X} \sim \BetaDist {\dfrac 1 \beta} 1$


Proof
Note that if:

$Y \sim \BetaDist {\dfrac 1 \beta} 1$
then the probability density function of $Y$, $f_Y$ is given by:














\(\ds \map {f_Y} y\)

\(=\)







\(\ds \frac {y^{\frac 1 \beta - 1} \paren {1 - y}^{1 - 1} } {\map \Beta {\frac 1 \beta, 1} }\)





Definition of Beta Distribution














\(\ds \)

\(=\)







\(\ds \frac {y^{\frac 1 \beta - 1} } {\frac {\map \Gamma {\frac 1 \beta} \map \Gamma 1} {\map \Gamma {\frac 1 \beta + 1} } }\)





Definition of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 {\frac {\map \Gamma {\frac 1 \beta} } {\frac 1 \beta \map \Gamma {\frac 1 \beta} } } y^{\frac 1 \beta}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac 1 \beta y^{\frac 1 \beta}\)









for each $y > 0$. 
Let:

$Z = e^{-X}$
It suffices to show that $Z$ has the same probability density function as $Y$.
We have: 














\(\ds \map \Pr {Z \le z}\)

\(=\)







\(\ds \map \Pr {e^{-X} \le z}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {-X \le \ln z}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {X \ge -\ln z}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {-\frac {-\ln z} {\beta} }\)





Definition of Exponential Distribution














\(\ds \)

\(=\)







\(\ds z^{\frac 1 \beta}\)









By Derivative of Power, the probability density function of $Z$, $f_Z$ is therefore given by: 

$\map {f_Z} z = \dfrac 1 \beta z^{\frac 1 \beta - 1}$
for each $z > 0$.
So:

$f_Y = f_Z$
$\blacksquare$





