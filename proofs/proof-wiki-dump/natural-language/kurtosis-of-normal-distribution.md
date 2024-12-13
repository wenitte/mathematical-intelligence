# 

Source: https://proofwiki.org/wiki/Kurtosis_of_Normal_Distribution



Theorem
Let $X$ be a continuous random variable with a normal distribution with parameters $\mu$ and $\sigma^2$ for some $\mu \in \R$ and $\sigma \in \R_{> 0}$:

$X \sim \Gaussian \mu {\sigma^2}$
Then the kurtosis $\alpha_4$ of $X$ is equal to $3$.

That is, $\Gaussian \mu {\sigma^2}$ is mesokurtic.


Proof
From the definition of kurtosis, we have: 

$\alpha_4 = \expect {\paren {\dfrac {X - \mu} \sigma}^4}$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Normal Distribution, we have: 

$\mu = \mu$
By Variance of Normal Distribution, we have: 

$\sigma = \sigma$
So: 














\(\ds \alpha_4\)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4}\)





Kurtosis in terms of Non-Central Moments














\(\ds \)

\(=\)







\(\ds \frac {\expect {X^4} - 4 \mu \paren {3 \mu \sigma^2 + \mu^3} + 6 \mu^2 \paren {\sigma^2 + \mu^2} - 3 \mu^4} {\sigma^4}\)





Skewness of Normal Distribution: Proof 2, Variance of Normal Distribution: Proof 2




To calculate $\alpha_4$, we must calculate $\expect {X^4}$.
We find this using the moment generating function of $X$, $M_X$. 
From Moment in terms of Moment Generating Function:

$\expect {X^4} = \map { {M_X}^{\paren 4} } 0$
From Moment Generating Function of Normal Distribution: Fourth Moment: 

$\map { {M_X}^{\paren 4} } t = \paren {3 \sigma^4 + 6 \sigma^2 \paren {\mu + \sigma^2 t}^2 + \paren {\mu + \sigma^2 t}^4} \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$
Setting $t = 0$ and from Exponential of Zero, we have:














\(\ds \expect {X^4}\)

\(=\)







\(\ds \paren {3 \sigma^4 + 6 \sigma^2 \paren {\mu + \sigma^2 0}^2 + \paren {\mu + \sigma^2 0}^4} \map \exp {\mu 0 + \dfrac 1 2 \sigma^2 0^2}\)




















\(\ds \)

\(=\)







\(\ds \mu^4 + 6 \mu^2 \sigma^2 + 3 \sigma^4\)





Exponential of Zero



Plugging this result back into our equation above:















\(\ds \alpha_4\)

\(=\)







\(\ds \frac {\expect {X^4} - 4 \mu \paren {3 \mu \sigma^2 + \mu^3} + 6 \mu^2 \paren {\sigma^2 + \mu^2} - 3 \mu^4} {\sigma^4}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\mu^4 + 6 \mu^2 \sigma^2 + 3 \sigma^4} - 4 \mu \paren {3 \mu \sigma^2 + \mu^3} + 6 \mu^2 \paren {\sigma^2 + \mu^2} - 3 \mu^4} {\sigma^4}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - 4 + 6 - 3 } \mu^4 + \paren {6 - 12 + 6 } \mu^2 \sigma^2 + 3 \sigma^4 } {\sigma^4}\)




















\(\ds \)

\(=\)







\(\ds \frac {3 \sigma^4 } {\sigma^4}\)




















\(\ds \)

\(=\)







\(\ds 3\)









$\blacksquare$


Also see
Definition:Mesokurtic: a random variable with a kurtosis equal to $3$


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): kurtosis
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): kurtosis
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): kurtosis
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): kurtosis
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): kurtosis




