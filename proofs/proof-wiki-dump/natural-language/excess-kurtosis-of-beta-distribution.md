# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Beta_Distribution



Theorem
Let $X \sim \BetaDist \alpha \beta$ for some $\alpha, \beta > 0$, where $\operatorname{Beta}$ is the Beta distribution. 
Then the excess kurtosis $\gamma_2$ of $X$ is given by:

$\gamma_2 = \dfrac {6 \paren {\paren {\alpha - \beta}^2 \paren {\alpha + \beta + 1} - \alpha \beta \paren {\alpha + \beta + 2} } } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }$


Lemma 1













\(\ds \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} \paren {\alpha + \beta}^3 \paren {\alpha + \beta + 1}\)

\(=\)







\(\ds \alpha^7 + \paren {4 \beta + 7} \alpha^6 + \paren {6 \beta^2 + 27 \beta + 17} \alpha^5 + \paren {4 \beta^3 + 39 \beta^2 + 62 \beta + 17} \alpha^4 + \paren {\beta^4 + 25 \beta^3 + 84 \beta^2 + 57 \beta + 6} \alpha^3\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {6 \beta^4 + 50 \beta^3 + 69 \beta^2 + 18 \beta} \alpha^2 + \paren {11 \beta^4 + 35 \beta^3 + 18 \beta^2} \alpha + 6 \beta^4 + 6 \beta^3\)











Lemma 2













\(\ds 4 \alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + \beta}^2 \paren {\alpha + \beta + 3} \paren {\alpha + \beta + 1}\)

\(=\)







\(\ds 4 \alpha^7 + \paren {16 \beta + 28} \alpha^6 + \paren {24 \beta^2 + 96 \beta + 68 } \alpha^5 + \paren {16 \beta^3 + 120 \beta^2 + 200 \beta + 68} \alpha^4\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {4 \beta^4 + 64 \beta^3 + 204 \beta^2 + 168 \beta + 24} \alpha^3 + \paren {12 \beta^4 + 80 \beta^3 + 132 \beta^2 + 48 \beta} \alpha^2 + \paren {8 \beta^4 + 32 \beta^3 + 24 \beta^2 } \alpha\)











Lemma 3













\(\ds 6 \alpha^2 \paren {\alpha + 1} \paren {\alpha + \beta} \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} \paren {\alpha + \beta + 1}\)

\(=\)







\(\ds 6 \alpha^7 + \paren {24 \beta + 42} \alpha^6 + \paren {36 \beta^2 + 132 \beta + 102 } \alpha^5 + \paren {24 \beta^3 + 144 \beta^2 + 240 \beta + 102} \alpha^4\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {6 \beta^4 + 60 \beta^3 + 174 \beta^2 + 168 \beta + 36} \alpha^3 + \paren {6 \beta^4 + 36 \beta^3 + 66 \beta^2 + 36 \beta} \alpha^2\)











Lemma 4













\(\ds 3 \alpha^3 \paren {\alpha + \beta + 1}^2 \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3}\)

\(=\)







\(\ds 3 \alpha^7 + \paren {12 \beta + 21} \alpha^6 + \paren {18 \beta^2 + 63 \beta + 51} \alpha^5 + \paren {12 \beta^3 + 63 \beta^2 + 102 \beta + 51} \alpha^4 + \paren {3 \beta^4 + 21 \beta^3 + 51 \beta^2 + 51 \beta + 18} \alpha^3\)











Proof
From Kurtosis in terms of Non-Central Moments, we have: 

$\gamma_2 = \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
We have, by Expectation of Beta Distribution:

$\expect X = \dfrac {\alpha} {\alpha + \beta}$
By Variance of Beta Distribution:

$\var X = \sigma^2 = \dfrac {\alpha \beta} {\paren {\alpha + \beta}^2 \paren {\alpha + \beta + 1} }$
so:

$\sigma = \dfrac {\sqrt {\alpha \beta} } {\paren {\alpha + \beta} \paren {\sqrt {\alpha + \beta + 1 } } }$

From Raw Moment of Beta Distribution, we have:














\(\ds \expect {X^4}\)

\(=\)







\(\ds \prod_{r \mathop = 0}^3 \frac {\alpha + r} {\alpha + \beta + r}\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\alpha} {\alpha + \beta} } \paren {\dfrac {\alpha + 1} {\alpha + \beta + 1} } \paren {\dfrac {\alpha + 2} {\alpha + \beta + 2} } \paren {\dfrac {\alpha + 3} {\alpha + \beta + 3} }\)









Hence:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\paren {\dfrac {\alpha} {\alpha + \beta} } \paren {\dfrac {\alpha + 1} {\alpha + \beta + 1} } \paren {\dfrac {\alpha + 2} {\alpha + \beta + 2} } \paren {\dfrac {\alpha + 3} {\alpha + \beta + 3} } - 4 \paren {\dfrac {\alpha} {\alpha + \beta} } \paren {\dfrac {\alpha} {\alpha + \beta} } \paren {\dfrac {\alpha + 1} {\alpha + \beta + 1} } \paren {\dfrac {\alpha + 2} {\alpha + \beta + 2} }  + 6 \paren {\dfrac {\alpha} {\alpha + \beta} }^2 \paren {\dfrac {\alpha} {\alpha + \beta} } \paren {\dfrac {\alpha + 1} {\alpha + \beta + 1} } - 3 \paren {\dfrac {\alpha} {\alpha + \beta} }^4} {\paren {\dfrac {\sqrt {\alpha \beta} } {\paren {\alpha + \beta} \paren {\sqrt {\alpha + \beta + 1 } } } }^4 } - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\dfrac {\alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} \paren {\alpha + \beta}^3 - 4 \alpha^2 \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + \beta}^2 \paren {\alpha + \beta + 3} + 6 \alpha^3 \paren {\alpha + 1} \paren {\alpha + \beta} \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} - 3 \alpha^4 \paren {\alpha + \beta + 1} \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } {\paren {\alpha + \beta}^4 \paren {\alpha + \beta + 1} \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } } } {\dfrac {\alpha^2 \beta^2} {\paren {\alpha + \beta}^4 \paren {\alpha + \beta + 1}^2 } } - 3\)





Expanding terms. Addition of Fractions














\(\ds \)

\(=\)







\(\ds \frac {\paren {\dfrac {\paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} \paren {\alpha + \beta}^3 - 4 \alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + \beta}^2 \paren {\alpha + \beta + 3} + 6 \alpha^2 \paren {\alpha + 1} \paren {\alpha + \beta} \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} - 3 \alpha^3 \paren {\alpha + \beta + 1} \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } {\paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } } } {\dfrac {\alpha \beta^2} {\paren {\alpha + \beta + 1} } } - 3\)





Canceling $\alpha$, $\paren {\alpha + \beta}^4$ and $\paren {\alpha + \beta + 1}$ from numerator and denominator














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} \paren {\alpha + \beta}^3 - 4 \alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + \beta}^2 \paren {\alpha + \beta + 3} + 6 \alpha^2 \paren {\alpha + 1} \paren {\alpha + \beta} \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} - 3 \alpha^3 \paren {\alpha + \beta + 1} \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } \paren {\alpha + \beta + 1} } {\alpha \beta^2 \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } - 3\)





Rewriting



Relying upon Lemma 1, Lemma 2, Lemma 3 and Lemma 4 to simplify the $80$ terms in the numerator, we obtain:














\(\ds \)

\(=\)







\(\ds \paren {1 - 4 + 6 - 3} \alpha^7 + \paren {\paren {4 \beta + 7 } - \paren {16 \beta + 28 } + \paren {24 \beta + 42 } - \paren {12 \beta + 21 } } \alpha^6 + \paren {\paren {6 \beta^2 + 27 \beta + 17 } - \paren {24 \beta^2 + 96 \beta + 68 } + \paren {36 \beta^2 + 132 \beta + 102 } - \paren {18 \beta^2 + 63 \beta + 51 } } \alpha^5\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\paren {4 \beta ^3 + 39 \beta^2 + 62 \beta + 17 } - \paren {16 \beta^3 + 120 \beta^2 + 200 \beta + 68 } + \paren {24 \beta^3 + 144 \beta^2 + 240 \beta + 102 } - \paren {12 \beta^3 + 63 \beta^2 + 102 \beta + 51 } } \alpha^4\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\paren {\beta^4 + 25 \beta ^3 + 84 \beta^2 + 57 \beta + 6 } - \paren {4 \beta^4 + 64 \beta^3 + 204 \beta^2 + 168 \beta + 24 } + \paren {6 \beta^4 + 60 \beta^3 + 174 \beta^2 + 168 \beta + 36 } - \paren {3 \beta^4 + 21 \beta^3 + 51 \beta^2 + 51 \beta + 18 } } \alpha^3\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\paren {6 \beta^4 + 50 \beta ^3 + 69 \beta^2 + 18 \beta } - \paren {12 \beta^4 + 80 \beta^3 + 132 \beta^2 + 48 \beta } + \paren {6 \beta^4 + 36 \beta^3 + 66 \beta^2 + 36 \beta } } \alpha^2 + \paren {\paren {11 \beta^4 + 35 \beta^3 + 18 \beta^2 } - \paren {8 \beta^4 + 32 \beta^3 + 24 \beta^2 } } \alpha + 6 \beta^4 + 6 \beta^3\)




















\(\ds \)

\(=\)







\(\ds \paren {0} \alpha^7 + \paren {0 } \alpha^6 + \paren {0 } \alpha^5 + \paren {0 } \alpha^4 + \paren {3 \beta^2 + 6 \beta} \alpha^3 + \paren {6 \beta^3 + 3 \beta^2 + 6 \beta} \alpha^2 + \paren {3 \beta^4 + 3 \beta^3 - 6 \beta^2} \alpha + 6 \beta^4 + 6 \beta^3\)









Putting our simplified numerator back in, we obtain:














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 \beta^2 + 6 \beta} \alpha^3 + \paren {6 \beta^3 + 3 \beta^2 + 6 \beta} \alpha^2 + \paren {3 \beta^4 + 3 \beta^3 - 6 \beta^2} \alpha + 6 \beta^4 + 6 \beta^3} {\alpha \beta^2 \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } - 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 \beta + 6 } \alpha^3 + \paren {6 \beta^2 + 3 \beta + 6 } \alpha^2 + \paren {3 \beta^3 + 3 \beta^2 - 6 \beta} \alpha + 6 \beta^3 + 6 \beta^2 } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } - 3\)





Canceling $\beta$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 \beta + 6 } \alpha^3 + \paren {6 \beta^2 + 3 \beta + 6 } \alpha^2 + \paren {3 \beta^3 + 3 \beta^2 - 6 \beta} \alpha + 6 \beta^3 + 6 \beta^2 } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } - \dfrac {3 \alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 \beta + 6 } \alpha^3 + \paren {6 \beta^2 + 3 \beta + 6 } \alpha^2 + \paren {3 \beta^3 + 3 \beta^2 - 6 \beta} \alpha + 6 \beta^3 + 6 \beta^2 - 3 \alpha \beta \paren {\paren {\alpha + \beta}^2 + 5 \paren {\alpha + \beta } + 6 } } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 \beta + 6 } \alpha^3 + \paren {6 \beta^2 + 3 \beta + 6 } \alpha^2 + \paren {3 \beta^3 + 3 \beta^2 - 6 \beta} \alpha + 6 \beta^3 + 6 \beta^2 - 3 \alpha \beta \paren {\paren {\alpha^2 + 2 \alpha \beta + \beta^2} + 5 \paren {\alpha + \beta } + 6 } } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {6 \alpha^3 + \paren {-12 \beta + 6 } \alpha^2 + \paren {-12 \beta^2 - 24 \beta} \alpha + 6 \beta^3 + 6 \beta^2 } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {6 \paren {\alpha^3 + \paren {-2 \beta + 1 } \alpha^2 + \paren {-2 \beta^2 - 4 \beta} \alpha + \beta^3 + \beta^2 } } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }\)





Factoring out $6$














\(\ds \)

\(=\)







\(\ds \dfrac {6 \paren {\alpha^3 + \alpha^2 -2 \alpha^2 \beta - 2 \alpha \beta^2 - 4 \alpha \beta + \beta^3 + \beta^2 } } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }\)





Rewriting














\(\ds \)

\(=\)







\(\ds \dfrac {6 \paren {\alpha^3 + \alpha^2 \beta + \alpha^2 - 2 \alpha^2 \beta - 2 \alpha \beta^2 - 2 \alpha \beta + \alpha \beta^2 + \beta^3 + \beta^2 - \alpha^2 \beta - \alpha \beta^2 - 2 \alpha \beta } } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }\)





Adding $0$: $\paren {\alpha^2 \beta - \alpha^2 \beta}$ and $\paren {\alpha \beta^2 - \alpha \beta^2 }$














\(\ds \)

\(=\)







\(\ds \frac {6 \paren {\paren {\alpha^2 -2 \alpha \beta + \beta^2 } \paren {\alpha + \beta + 1} - \alpha \beta \paren {\alpha + \beta + 2} } } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {6 \paren {\paren {\alpha - \beta}^2 \paren {\alpha + \beta + 1} - \alpha \beta \paren {\alpha + \beta + 2} } } {\alpha \beta \paren {\alpha + \beta + 2} \paren {\alpha + \beta + 3} }\)





simplifying



$\blacksquare$





