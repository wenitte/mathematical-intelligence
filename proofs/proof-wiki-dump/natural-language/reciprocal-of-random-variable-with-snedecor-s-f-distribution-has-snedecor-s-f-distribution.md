# 

Source: https://proofwiki.org/wiki/Reciprocal_of_Random_Variable_with_Snedecor%27s_F-Distribution_has_Snedecor%27s_F-Distribution

Theorem
Let $n, m$ be strictly positive integers. 
Let $X \sim F_{n, m}$ where $F_{n, m}$ is the Snedecor's $F$-distribution with $\tuple {n, m}$ degrees of freedom.

Then: 

$\dfrac 1 X \sim F_{m, n}$


Proof
Let $Y \sim \chi^2_n$ where $\chi^2_n$ is the chi-squared distribution with $n$ degrees of freedom. 
Let $Z \sim \chi^2_m$ where $\chi^2_m$ is the chi-squared distribution with $m$ degrees of freedom.
Then, by Quotient of Independent Random Variables with Chi-Squared Distribution Divided by Degrees of Freedom has Snedecor's F-Distribution:

$X = \dfrac {Y / n} {Z / m} \sim F_{n, m}$
Applying Quotient of Independent Random Variables with Chi-Squared Distribution Divided by Degrees of Freedom has Snedecor's F-Distribution again, we have: 

$\dfrac 1 X = \dfrac {Z / m} {Y / n} \sim F_{m, n}$
$\blacksquare$





