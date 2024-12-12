# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Pareto_Distribution



Theorem
Let $X$ be a continuous random variable with the Pareto distribution with $a, b \in \R_{> 0}$.
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = \begin {cases} \dfrac {6 \paren { a^3 + a^2 - 6 a - 2} } {a \paren {a - 3} \paren {a - 4} } & 4 < a \\ \text {does not exist} & 4 \ge a \end {cases}$


Lemma 1
$\paren {a - 1}^4 \paren {a - 2}^2 \paren {a - 3} = a^7 - 11 a^6 + 50 a^5 - 122 a^4 + 173 a^3 - 143 a^2 + 64 a - 12$


Lemma 2
$4 a \paren {a - 1}^3 \paren {a - 2}^2 \paren {a - 4} = 4 a^7 - 44 a^6 + 188 a^5 - 404 a^4 + 464 a^3 - 272 a^2 + 64 a$


Lemma 3
$6 a^2 \paren {a - 1}^2 \paren {a - 2} \paren {a - 3} \paren {a - 4} = 6 a^7 - 66 a^6 + 270 a^5 - 510 a^4 + 444 a^3 - 144 a^2$


Lemma 4
$3 a^3 \paren {a - 2}^2 \paren {a - 3} \paren {a - 4} = 3 a^7 - 33 a^6 + 132 a^5 - 228 a^4 + 144 a^3$


Proof
From Kurtosis in terms of Non-Central Moments, we have: 

$\gamma_2 = \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Pareto Distribution we have: 

$\mu = \dfrac {a b } {\paren {a - 1} }$
By Variance of Pareto Distribution we have: 

$\sigma = \dfrac {\sqrt a b } {\sqrt {\paren {a - 2} } \paren {a - 1} }$
From Raw Moment of Pareto Distribution, we have:

$\ds \expect {X^n} = \begin {cases} \dfrac {a b^n} {a - n} & n < a \\ \text {does not exist} & n \ge a \end {cases}$

Hence:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\paren {\dfrac {a b^4} {a - 4} } - 4 \paren {\dfrac {a b } {\paren {a - 1} } } \paren {\dfrac {a b^3} {a - 3} }  + 6 \paren {\dfrac {a b } {\paren {a - 1} } }^2 \paren {\dfrac {a b^2} {a - 2} } - 3 \paren {\dfrac {a b } {\paren {a - 1} } }^4} {\paren {\dfrac {\sqrt a b } {\sqrt {\paren {a - 2} } \paren {a - 1} } }^4 } - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\dfrac {a b^4} {a - 4} } - 4 \paren {\dfrac {a^2 b^4} {\paren {a - 1} \paren {a - 3} } }  + 6 \paren {\dfrac {a^3 b^4} {\paren {a - 1}^2 \paren {a - 2} } } - 3 \paren {\dfrac {a^4 b^4 } {\paren {a - 1}^4 } } } {\dfrac {a^2 b^4 } {\paren {a - 2}^2 \paren {a - 1}^4 } } - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\dfrac 1 {a - 4} } - 4 \paren {\dfrac a {\paren {a - 1} \paren {a - 3} } }  + 6 \paren {\dfrac {a^2} {\paren {a - 1}^2 \paren {a - 2} } } - 3 \paren {\dfrac {a^3 } {\paren {a - 1}^4 } } } {\dfrac a {\paren {a - 2}^2 \paren {a - 1}^4 } } - 3\)





factoring out $a b^4$














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\paren {a - 1}^4 \paren {a - 2}^2 \paren {a - 3} - 4 a \paren {a - 1}^3 \paren {a - 2}^2 \paren {a - 4} + 6 a^2 \paren {a - 1}^2 \paren {a - 2} \paren {a - 3} \paren {a - 4} - 3 a^3 \paren {a - 2}^2 \paren {a - 3} \paren {a - 4} } {a \paren {a - 3} \paren {a - 4} } } - 3\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\paren {1 - 4 + 6 - 3} a^7 + \paren {-11 + 44 - 66 + 33} a^6 + \paren {50 - 188 + 270 - 132} a^5 + \paren {-122 + 404 - 510 + 228} a^4 } {a \paren {a - 3} \paren {a - 4} } }\)





Lemma 1, Lemma 2, Lemma 3 and Lemma 4














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\dfrac {\paren {173 - 464 + 444 - 144} a^3 + \paren {-143 + 272 - 144} a^2 + \paren {64 - 64} a - 12 } {a \paren {a - 3} \paren {a - 4} } } - 3\)





Lemma 1, Lemma 2, Lemma 3 and Lemma 4














\(\ds \)

\(=\)







\(\ds \dfrac { 9 a^3 - 15 a^2 - 12 } {a \paren {a - 3} \paren {a - 4} } - 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac { 9 a^3 - 15 a^2 - 12 } {a \paren {a - 3} \paren {a - 4} } - \dfrac {3 a \paren {a - 3} \paren {a - 4}  } {a \paren {a - 3} \paren {a - 4} }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac { \paren {9 a^3 - 15 a^2 - 12} - \paren {3 a^3 - 21 a^2 + 36 a} } {a \paren {a - 3} \paren {a - 4} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {6 \paren { a^3 + a^2 - 6 a - 2} } {a \paren {a - 3} \paren {a - 4} }\)





simplifying



$\blacksquare$





