# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Binomial_Distribution

Theorem
Let $X$ be a discrete random variable with a binomial distribution with parameters $n$ and $p$ for some $n \in \N$ and $0 \le p \le 1$:
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = \dfrac {1 - 6 p q} {n p q}$
where $q = 1 - p$.


Proof
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Binomial Distribution, we have: 

$\mu = n p$
By Variance of Binomial Distribution, we have: 

$\sigma = \sqrt {n p \paren {1 - p} }$
So: 














\(\ds \gamma_2\)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3\)





Kurtosis in terms of Non-Central Moments














\(\ds \)

\(=\)







\(\ds \frac {\expect {X^4} - 4 n p \paren {n p + 3 n^2 p^2 - 3 n p^2 + n^3 p^3 - 3 n^2 p^3 + 2 n p^3} + 6 n^2 p^2 \paren {n^2 p^2 + n p \paren {1 - p} } - 3 n^4 p^4} {n^2 p^2 \paren {1 - p}^2} - 3\)





Skewness of Binomial Distribution, Variance of Binomial Distribution




To calculate $\gamma_2$, we must calculate $\expect {X^4}$.
We find this using the moment generating function of $X$, $M_X$. 
By Moment Generating Function of Binomial Distribution, this is given by: 

$\map {M_X} t = \paren {1 - p + p e^t}^n$
From Moment in terms of Moment Generating Function:

$\expect {X^4} = \map {M_X'} 0$
So:














\(\ds \map {M_X'} t\)

\(=\)







\(\ds n p e^t \paren {1 - p + p e^t}^{n - 1}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \map {M_X} t\)

\(=\)







\(\ds n p e^t \paren {1 - p + p e^t}^{n - 1} + n \paren {n - 1} p^2 e^{2 t} \paren {1 - p + p e^t}^{n - 2}\)





Product Rule for Derivatives, Chain Rule for Derivatives, Derivative of Power














\(\ds \map {M_X} t\)

\(=\)







\(\ds \map {M_X} t + 2 n \paren {n - 1} p^2 e^{2 t} \paren {1 - p + p e^t}^{n - 2} + n \paren {n - 1} \paren {n - 2} p^3 e^{3 t} \paren {1 - p + p e^t}^{n - 3}\)





Product Rule for Derivatives, Chain Rule for Derivatives, Derivative of Power














\(\ds \map {M_X'} t\)

\(=\)







\(\ds \map {M_X} t + 4 n \paren {n - 1} p^2 e^{2 t} \paren {1 - p + p e^t}^{n - 2} + 2 n \paren {n - 1} \paren {n - 2} p^3 e^{3 t} \paren {1 - p + p e^t}^{n - 3}\)




















\(\ds \)

\(+\)







\(\ds 3 n \paren {n - 1} \paren {n - 2} p^3 e^{3 t} \paren {1 - p + p e^t}^{n - 3} + n \paren {n - 1} \paren {n - 2} \paren {n - 3} p^4 e^{4 t} \paren {1 - p + p e^t}^{n - 4}\)





Product Rule for Derivatives, Chain Rule for Derivatives, Derivative of Power



Setting $t = 0$:














\(\ds \expect {X^4}\)

\(=\)







\(\ds \map {M_X} 0 + 4 n \paren {n - 1} p^2 + 2 n \paren {n - 1} \paren {n - 2} p^3 + 3 n \paren {n - 1} \paren {n - 2} p^3 + n \paren {n - 1} \paren {n - 2} \paren {n - 3} p^4\)




















\(\ds \)

\(=\)







\(\ds n p + 3 n^2 p^2 - 3 n p^2 + n^3 p^3 - 3 n^2 p^3 + 2 n p^3 + 4 n^2 p^2 - 4 n p^2 + 5 n^3 p^3 - 15 n^2 p^3 + 10 n p^3 + n^4 p^4 - 6 n^3 p^4 + 11 n^2 p^4 - 6 n p^4\)





Skewness of Binomial Distribution



Plugging this result back into our equation above:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac 1 {n^2 p^2 \paren {1 - p}^2} \big (n p + 3 n^2 p^2 - 3 n p^2 + n^3 p^3 - 3 n^2 p^3 + 2 n p^3 + 4 n^2 p^2 - 4 n p^2 + 5 n^3 p^3 - 15 n^2 p^3 + 10 n p^3 + n^4 p^4 - 6 n^3 p^4 + 11 n^2 p^4 - 6 n p^4\)




















\(\ds \)

\(-\)







\(\ds 4 n p \paren {n p + 3 n^2 p^2 - 3 n p^2 + n^3 p^3 - 3 n^2 p^3 + 2 n p^3} + 6 n^2 p^2 \paren {n^2 p^2 + n p \paren {1 - p} } - 3 n^4 p^4 \big ) - 3\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {n^2 p^2 \paren {1 - p}^2} \big (n p + 3 n^2 p^2 - 3 n p^2 + n^3 p^3 - 3 n^2 p^3 + 2 n p^3 + 4 n^2 p^2 - 4 n p^2 + 5 n^3 p^3 - 15 n^2 p^3 + 10 n p^3 + n^4 p^4 - 6 n^3 p^4 + 11 n^2 p^4 - 6 n p^4\)




















\(\ds \)

\(-\)







\(\ds 4 n^2 p^2 - 12 n^3 p^3 + 12 n^2 p^3 - 4 n^4 p^4 + 12 n^3 p^4 - 8 n^2 p^4 + 6 n^4 p^4 + 6 n^3 p^3  - 6 n^3 p^4 - 3 n^4 p^4 - 3 n^2 p^2 + 6 n^2 p^3 - 3 n^2 p^4 \big )\)




















\(\ds \)

\(=\)







\(\ds \frac {n p - 7 n p^2 + 12 n p^3 - 6 n p^4} {n^2 p^2 \paren {1 - p}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {n p \paren {1 - p} \paren {6 p^2 - 6 p + 1} } {n^2 p^2 \paren {1 - p}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {1 + 6 p \paren {p - 1} } {n p \paren {1 - p} }\)




















\(\ds \)

\(=\)







\(\ds \frac {1 - 6 p q} {n p q}\)





$q = 1 - p$



$\blacksquare$





