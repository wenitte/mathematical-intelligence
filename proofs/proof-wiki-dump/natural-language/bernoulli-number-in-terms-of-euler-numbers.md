# 

Source: https://proofwiki.org/wiki/Bernoulli_Number_in_terms_of_Euler_Numbers

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:














\(\ds B_{2 n}\)

\(=\)







\(\ds \frac {2 n} {2^{2 n} \paren {2^{2 n} - 1} } \paren {\sum_{k \mathop = 0}^{n - 1} \dbinom {2 n - 2} {2 k} E_{2 k} E_{2 n - 2 k - 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 n} {2^{2 n} \paren {2^{2 n} - 1} } \paren {\binom {2 n - 2} 0 E_0 E_{2 n - 2} + \binom {2 n - 2} 2 E_2 E_{2 n - 4} + \binom {2 n - 2} 4 E_4 E_{2 n - 6} + \cdots + \binom {2 n - 2} {2 n - 2} E_{2 n - 2} E_0}\)









where:

$B_n$ denotes the $n$th Bernoulli number
$E_n$ denotes the $n$th Euler number.


Proof













\(\ds \tan x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)





Power Series Expansion for Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\tan x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, \paren {2 n - 1} x^{2 n - 2} } {\paren {2 n}!}\)





Derivative of Power














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 2} } {2 n \paren {2 n - 2}!}\)










The coefficient $a_n$ of $x^{2 n - 2}$ is:

$\ds a_n = \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} } {2 n \paren {2 n - 2}!} $
From Derivative of Tangent Function, we have:

$\map {\dfrac \d {\d x} } {\tan x} = \sec^2 x$















\(\ds \sec x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {E_{2 n} x^{2 n} } {\paren {2 n}!}\)





Power Series Expansion for Secant Function








\(\ds \leadsto \ \ \)





\(\ds \sec^2 x\)

\(=\)







\(\ds \paren {\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {E_{2 n} x^{2 n} } {\paren {2 n}!} }^2\)





squaring both sides














\(\ds \)

\(=\)







\(\ds \paren {1 - \frac {E_2 x^2} {2!} + \frac {E_4 x^4} {4!} - \frac {E_6 x^6} {6!} + \cdots}  \times \paren {1 - \frac {E_2 x^2} {2!} + \frac {E_4 x^4} {4!} - \frac {E_6 x^6} {6!} + \cdots }\)




















\(\ds \)

\(=\)







\(\ds 1 - x^2 \paren {\frac {E_2} {2!} + \frac {E_2} {2!} } + x^4 \paren {\frac {E_4} {4!} + \frac {E_2 \times E_2} {2! \times 2!} + \frac {E_4} {4!} } - x^6 \paren {\frac {E_6} {6!} + \frac {E_2 \times E_4} {2! \times 4!} + \frac {E_4 \times E_2} {4! \times 2!} + \frac {E_6} {6!} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\sum_{k \mathop = 0}^{n - 1} \frac {\paren {-1}^{n - 1} } {\paren {2 k}! \paren {2 n - 2 k - 2}!} E_{2 k} E_{2 n - 2 k - 2} } x^{2 n - 2}\)










The coefficient $a_n$ of $x^{2 n - 2}$ above is:

$\ds a_n = \sum_{k \mathop = 0}^{n - 1} \frac 1 {\paren {2 k}! \paren {2 n - 2 k - 2}!} E_{2 k} E_{2 n - 2 k - 2}$
Equating coefficients gives us:














\(\ds \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} } {2 n \paren {2 n - 2}!}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \frac {\paren {-1}^{n - 1} } {\paren {2 k}! \paren {2 n - 2 k - 2}!} E_{2 k} E_{2 n - 2 k - 2}\)














\(\ds \leadsto \ \ \)





\(\ds B_{2 n}\)

\(=\)







\(\ds \frac {2 n} {2^{2 n} \paren {2^{2 n} - 1} } \paren {\sum_{k \mathop = 0}^{n - 1} \frac {\paren {2 n - 2}! } {\paren {2 k}! \paren {2 n - 2 k - 2}!} E_{2 k} E_{2 n - 2 k - 2} }\)





rearranging terms














\(\ds \)

\(=\)







\(\ds \frac {2 n} {2^{2 n} \paren {2^{2 n} - 1} } \paren {\sum_{k \mathop = 0}^{n - 1} \dbinom {2 n - 2} {2 k } E_{2 k} E_{2 n - 2 k - 2} }\)





Definition of Binomial Coefficient



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 21$: Relationships of Bernoulli and Euler Numbers: $21.7$
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $5$. Bernoulli Numbers and the Riemann Zeta-Function




