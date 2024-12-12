# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Poisson_Distribution

Theorem
Let $X$ be a discrete random variable with a Poisson distribution with parameter $\lambda$.
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = \dfrac 1 \lambda$


Proof
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Poisson Distribution, we have: 

$\mu = \lambda$
By Variance of Poisson Distribution, we have: 

$\sigma = \sqrt {\lambda}$
So: 














\(\ds \gamma_2\)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3\)





Kurtosis in terms of Non-Central Moments














\(\ds \)

\(=\)







\(\ds \frac {\expect {X^4} - 4 \lambda \paren {\lambda^3 + 3 \lambda^2 + \lambda} + 6 \lambda^2 \paren {\lambda^2 + \lambda} - 3 \lambda^4} {\lambda^2} - 3\)





Skewness of Poisson Distribution, Variance of Poisson Distribution: Proof 1




To calculate $\gamma_2$, we must calculate $\expect {X^4}$.
We find this using the moment generating function of $X$, $M_X$. 
By Moment Generating Function of Poisson Distribution, this is given by: 

$\ds \map {M_X} t = e^{\lambda \paren {e^t - 1} }$
From Moment in terms of Moment Generating Function:

$\expect {X^4} = \map {M_X'} 0$
In Skewness of Poisson Distribution, it is shown that:














\(\ds \map {M_X} t\)

\(=\)







\(\ds \lambda^2 e^{\lambda \paren {e^t - 1} + 2t} + \lambda \paren {\lambda e^t + 1}^2 e^{\lambda \paren {e^t - 1} + t}\)




















\(\ds \)

\(=\)







\(\ds \lambda^3 e^{\lambda \paren {e^t - 1} + 3t} + 3 \lambda^2 e^{\lambda \paren {e^t - 1} + 2t} + \lambda e^{\lambda \paren {e^t - 1} + t}\)





expanding



So:














\(\ds \map {M_X'} t\)

\(=\)







\(\ds \lambda^3 \paren {\lambda e^t + 3} e^{\lambda \paren {e^t - 1} + 3t} + 3 \lambda^2 \paren {\lambda e^t + 2} e^{\lambda \paren {e^t - 1} + 2t} + \lambda \paren {\lambda e^t + 1} e^{\lambda \paren {e^t - 1} + t}\)





Chain Rule for Derivatives, Derivative of Exponential Function, Derivative of Power














\(\ds \)

\(=\)







\(\ds \lambda^4 e^{\lambda \paren {e^t - 1} + 4t} + 6 \lambda^3 e^{\lambda \paren {e^t - 1} + 3t} + 7 \lambda^2 e^{\lambda \paren {e^t - 1} + 2t} + \lambda e^{\lambda \paren {e^t - 1} + t}\)





Exponential of Sum



Setting $t = 0$:














\(\ds \expect {X^4}\)

\(=\)







\(\ds \lambda^4 e^{\lambda \paren {e^0 - 1} + 0} + 6 \lambda^3 e^{\lambda \paren {e^0 - 1} + 0} + 7 \lambda^2 e^{\lambda \paren {e^0 - 1} + 0} + \lambda e^{\lambda \paren {e^0 - 1} + 0}\)




















\(\ds \)

\(=\)







\(\ds \lambda^4 + 6 \lambda^3 + 7 \lambda^2 + \lambda\)





Exponential of Zero



Plugging this result back into our equation above:















\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\expect {X^4} - 4 \lambda \paren {\lambda^3 + 3 \lambda^2 + \lambda} + 6 \lambda^2 \paren {\lambda^2 + \lambda} - 3 \lambda^4} {\lambda^2} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\lambda^4 + 6 \lambda^3 + 7 \lambda^2 + \lambda} - 4 \lambda \paren {\lambda^3 + 3 \lambda^2 + \lambda} + 6 \lambda^2 \paren {\lambda^2 + \lambda} - 3 \lambda^4} {\lambda^2} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - 4 + 6 - 3 } \lambda^4 + \paren {6 - 12 + 6 } \lambda^3 + \paren {7 - 4 } \lambda^2 + \lambda } {\lambda^2} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {3 \lambda^2 + \lambda } {\lambda^2} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \lambda\)









$\blacksquare$





