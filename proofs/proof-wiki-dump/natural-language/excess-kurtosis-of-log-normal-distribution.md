# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Log_Normal_Distribution

Theorem
Let $X$ be a continuous random variable with the Log Normal distribution with $\mu \in \R, \sigma \in \R_{> 0}$.
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = \map \exp {4 \sigma^2} + 2 \map \exp {3 \sigma^2} + 3 \map \exp {2 \sigma^2} - 6$


Proof
From Kurtosis in terms of Non-Central Moments, we have: 

$\gamma_2 = \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Log Normal Distribution we have: 

$\mu = \map \exp {\mu + \dfrac {\sigma^2} 2}$
By Variance of Log Normal Distribution we have: 

$\sigma = \map \exp {\mu + \dfrac {\sigma^2} 2} \sqrt {\paren {\map \exp {\sigma^2} - 1} }$
From Raw Moment of Log Normal Distribution, we have:

$\expect {X^n} = \map \exp {n \mu + \dfrac {n^2 \sigma^2} 2}$
Hence:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\map \exp {4 \mu + \dfrac {16 \sigma^2} 2} - 4 \map \exp {\mu + \dfrac {\sigma^2} 2} \paren {\map \exp {3 \mu + \dfrac {9 \sigma^2} 2} }
           + 6 \paren {\map \exp {\mu + \dfrac {\sigma^2 } 2} }^2 \paren {\map \exp {2 \mu + \dfrac { 4 \sigma^2} 2} } 
           - 3 \paren {\map \exp {\mu + \dfrac {\sigma^2 } 2} }^4}
           {\paren {\map \exp {\mu + \dfrac {\sigma^2} 2} \sqrt {\paren {\map \exp {\sigma^2} - 1} } }^4} - 3\)





















\(\ds \)

\(=\)







\(\ds \frac {\map \exp {4 \mu + 8 \sigma^2} - 4 \map \exp {4 \mu + 5 \sigma^2}
           + 6 \map \exp {2 \mu + \sigma^2} \map \exp {2 \mu + 2 \sigma^2} - 3 \map \exp {4 \mu + 2 \sigma^2} }
           {\map \exp {4 \mu + 2 \sigma^2} \paren {\map \exp {\sigma^2} - 1}^2} - 3\)






Power of Power and Product of Powers














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {4 \mu + 8 \sigma^2} - 4 \map \exp {4 \mu + 5 \sigma^2} + 6 \map \exp {4 \mu + 3 \sigma^2} - 3 \map \exp {4 \mu + 2 \sigma^2} }
           {\map \exp {4 \mu + 2 \sigma^2} \paren {\map \exp {\sigma^2} - 1}^2} - 3\)






Product of Powers














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {4 \mu + 2 \sigma^2} \paren {\map \exp {6 \sigma^2} - 4 \map \exp {3 \sigma^2} + 6 \map \exp {\sigma^2} - 3} }
           {\map \exp {4 \mu + 2 \sigma^2} \paren {\map \exp {\sigma^2} - 1}^2} - 3\)






factoring out $\map \exp {4 \mu + 2 \sigma^2}$














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {6 \sigma^2} - 4 \map \exp {3 \sigma^2} + 6 \map \exp {\sigma^2} - 3}
           {\paren {\map \exp {\sigma^2} - 1}^2} - 3\)






canceling the $\map \exp {4 \mu + 2 \sigma^2}$














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {6 \sigma^2} - 4 \map \exp {3 \sigma^2} + 3 \map \exp {2 \sigma^2} - 3 \map \exp {2 \sigma^2} + 6 \map \exp {\sigma^2} - 3}
           {\paren {\map \exp {\sigma^2} - 1}^2} - 3\)






adding and subtracting $3 \map \exp {2 \sigma^2}$














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {6 \sigma^2} - 4 \map \exp {3 \sigma^2} + 3 \map \exp {2 \sigma^2} - 3 \paren {\map \exp {\sigma^2} - 1}^2}
           {\paren {\map \exp {\sigma^2} - 1}^2} - 3\)






Square of Sum














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {6 \sigma^2} - 4 \map \exp {3 \sigma^2} + 3 \map \exp {2 \sigma^2} }
           {\paren {\map \exp {\sigma^2} - 1}^2} - 6\)





















\(\ds \)

\(=\)







\(\ds \frac {\paren {\map \exp {2 \sigma^2} - 2 \map \exp {\sigma^2} + 1}
           \paren {\map \exp {4 \sigma^2}  + 2 \map \exp {3 \sigma^2} + 3 \map \exp {2 \sigma^2} } }
           {\paren {\map \exp {\sigma^2} - 1}^2} - 6\)






rewriting














\(\ds \)

\(=\)







\(\ds \map \exp {4 \sigma^2} + 2 \map \exp {3 \sigma^2} + 3 \map \exp {2 \sigma^2} - 6\)





canceling $\paren {\map \exp {\sigma^2} - 1}^2$



$\blacksquare$





