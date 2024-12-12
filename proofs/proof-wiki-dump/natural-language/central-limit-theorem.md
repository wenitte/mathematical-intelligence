# 

Source: https://proofwiki.org/wiki/Central_Limit_Theorem



Theorem
Let $X_1, X_2, \ldots$ be a sequence of independent and identically distributed real-valued random variables with:

expectation $\expect {X_i} = \mu \in \R$
variance $\var {X_i} = \sigma^2 > 0$
Let:

$\ds S_n = \sum_{i \mathop = 1}^n X_i$
Then:

$\dfrac {S_n - n \mu} {\sqrt {n \sigma^2} } \xrightarrow D \Gaussian 0 1$ as $n \to \infty$
that is, converges in distribution to a standard normal distribution.


Conditions
The Central Limit Theorem holds under the following conditions:

The variance of any one of the contributory random variables does not dominate.
The samples are not from the Cauchy distribution, as from Cauchy Distribution has no Finite Moments, the Cauchy distribution has no expectation.


Proof
Let $Y_i = \dfrac {X_i - \mu} \sigma$.
We have that:

$\expect {Y_i} = 0$
and:

$\expect {Y_i^2} = 1$

Then by Taylor's Theorem the characteristic function can be written:

$\map {\phi_{Y_i} } t = 1 - \dfrac {t^2} 2 + \map o {t^2}$

Now let:














\(\ds U_n\)

\(=\)







\(\ds \frac {S_n - n \mu} {\sqrt {n \sigma^2} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \frac {X_i - \mu} {\sqrt {n \sigma^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt n} \sum_{i \mathop = 1}^n \paren {\frac {X_i - \mu} \sigma}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt n} \sum_{i \mathop = 1}^n Y_i\)










Then its characteristic function is given by:














\(\ds \map {\phi_{U_n} } t\)

\(=\)







\(\ds \expect {e^{i t U_n} }\)




















\(\ds \)

\(=\)







\(\ds \expect {\map \exp {\frac {i t} {\sqrt n} \sum_{i \mathop = 1}^n Y_i} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \expect {\map \exp {\frac{i t} {\sqrt n} Y_i} }\)





since $Y_i$ are independent and identically distributed














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \map {\phi_{Y_i} } {\frac t {\sqrt n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\map {\phi_{Y_i} } {\frac t {\sqrt n} } }^n\)





since $Y_i$ are independent and identically distributed














\(\ds \)

\(=\)







\(\ds \paren {1 - \frac {t^2} {2 n} + \map o {t^2} }^n\)









Recall that the Characteristic Function of Normal Distribution is given by:














\(\ds \map \phi t\)

\(=\)







\(\ds e^{i t \mu - \frac 1 2 t^2 \sigma^2}\)




















\(\ds \)

\(=\)







\(\ds e^{i t \paren 0 - \frac 1 2 t^2 \paren 1^2}\)




















\(\ds \)

\(=\)







\(\ds e^{-\frac 1 2 t^2}\)










Indeed, the characteristic function of $S_n$ converges to the Characteristic Function of Normal Distribution:

$\paren {1 - \dfrac {t^2} {2 n} + \map o {t^2} }^n \to e^{-\frac 1 2 t^2}$ as $n \to \infty$
Then Lévy's Continuity Theorem applies.
In particular, the convergence in distribution of the $U_n$ to some random variable with standard normal distribution is equivalent to continuity of the limiting characteristic equation at $t = 0$.
But $e^{-\frac 1 2 t^2}$ is clearly continuous at $0$.
So we have that $\dfrac {S_n - n \mu} {\sqrt {n \sigma^2} }$ converges in distribution to a standard normal random variable.
$\blacksquare$


Historical Note
The Central Limit Theorem was the result of work by Pierre-Simon de Laplace in $1818$ and Aleksandr Mikhailovich Lyapunov in $1901$.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): asymptotic distribution
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): central limit theorem
2001: Geoffrey Grimmett and David Stirzaker: Probability and Random Processes (3rd ed.)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): asymptotic distribution
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): central limit theorem




