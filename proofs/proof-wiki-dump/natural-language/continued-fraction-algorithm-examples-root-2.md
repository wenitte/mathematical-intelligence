# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Algorithm/Examples/Root_2

Example of Use of Continued Fraction Algorithm
The Continued Fraction Algorithm is a method for finding the continued fraction expansion for any irrational number to as many partial denominators as desired.

Let $x_0$ be the irrational number in question.
The steps are:




\(\text {(1)}: \quad\)









\(\ds k\)

\(=\)







\(\ds 0\)





initialise




\(\text {(2)}: \quad\)









\(\ds a_k\)

\(=\)







\(\ds \floor {x_k}\)





the $k$th partial denominator (that is, $a_k$) is the integer part of $x_k$




\(\text {(3)}: \quad\)









\(\ds x_{k + 1}\)

\(=\)







\(\ds \frac 1 {x_k - a_k}\)





the subsequent term is the reciprocal of the fractional part of $x_k$




\(\text {(4)}: \quad\)









\(\ds k\)

\(=\)







\(\ds k + 1\)





increase $k$ by $1$ then go to step $(2)$




Then $x_0 = \sqbrk {a_0, a_1, a_2, \ldots}$ is the required continued fraction expansion.


Example
Applying the Continued Fraction Algorithm to $\sqrt 2$:




\(\text {(1)}: \quad\)









\(\ds x_0\)

\(=\)







\(\ds \sqrt 2\)










\(\text {(2)}: \quad\)









\(\ds a_0\)

\(=\)







\(\ds \floor {x_0}\)

\(\ds = \floor {\sqrt 2}\)



step $(2)$




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds 1\)





integer part of $\sqrt 2$ is $1$




\(\text {(4)}: \quad\)









\(\ds x_{0 + 1}\)

\(=\)







\(\ds \frac 1 {x_0 - a_0}\)

\(\ds = \frac 1 {\sqrt 2 - 1}\)



step $(3)$




\(\text {(5)}: \quad\)









\(\ds x_1\)

\(=\)







\(\ds \frac 1 {\sqrt 2 - 1} \times \paren {\frac {\sqrt 2 + 1} {\sqrt 2 + 1} }\)





multiply by $1$




\(\text {(6)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sqrt 2 + 1\)










\(\text {(7)}: \quad\)









\(\ds a_1\)

\(=\)







\(\ds \floor {x_1}\)

\(\ds = \floor {\sqrt 2 + 1}\)



step $(2)$




\(\text {(8)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2\)





integer part of $\paren {\sqrt 2 + 1 }$ is $2$




\(\text {(9)}: \quad\)









\(\ds x_{1 + 1}\)

\(=\)







\(\ds \frac 1 {x_1 - a_1}\)

\(\ds = \frac 1 {\paren {\sqrt 2 + 1 } - 2}\)



step $(3)$




\(\text {(10)}: \quad\)









\(\ds x_2\)

\(=\)







\(\ds \frac 1 {\sqrt 2 - 1} \times \paren {\frac {\sqrt 2 + 1} {\sqrt 2 + 1} }\)





multiply by $1$




\(\text {(11)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sqrt 2 + 1\)





lines $7$ through $11$ repeat ad infinitum: $\sqrt 2 = \sqbrk {1, \sequence 2}$



$\blacksquare$


Also see
Continued Fraction Expansion of Irrational Square Root/Examples




