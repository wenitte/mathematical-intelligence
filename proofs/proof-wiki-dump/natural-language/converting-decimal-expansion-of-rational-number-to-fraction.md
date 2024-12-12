# 

Source: https://proofwiki.org/wiki/Converting_Decimal_Expansion_of_Rational_Number_to_Fraction

  This article was Featured Proof between 10-Apr-2024 and 13-Nov-2024.




Theorem
Let $x \in \Q$ be a rational number.
Let the decimal expansion of $x$ be:

$0 \cdotp a_1 a_2 \ldots a_m \dot b_1 b_2 \ldots \dot b_n$
where $a_i: i \in \set {1, 2, \ldots, m}$ and $b_j: j \in \set {1, 2, \ldots, n}$ be the digits in the base $10$ expansion of $x$.
Then $x$ can be expressed as the following fraction:

$x = \dfrac {a_1 a_2 \ldots a_m b_1 b_2 \ldots b_n - a_1 a_2 \ldots a_m} {10^m \times \paren {10^n - 1} }$


Proof
First we note that:














\(\ds 0 \cdotp \dot b_1 b_2 \ldots \dot b_n \times 10^n\)

\(=\)







\(\ds b_1 b_2 \ldots b_n \cdotp \dot b_1 b_2 \ldots \dot b_n\)














\(\ds \leadsto \ \ \)





\(\ds 0 \cdotp \dot b_1 b_2 \ldots \dot b_n \times 10^n - 0 \cdotp \dot b_1 b_2 \ldots \dot b_n\)

\(=\)







\(\ds b_1 b_2 \ldots b_n \cdotp \dot b_1 b_2 \ldots \dot b_n - 0 \cdotp \dot b_1 b_2 \ldots \dot b_n\)





subtracting $0 \cdotp \dot b_1 b_2 \ldots \dot b_n$ from both sides








\(\ds \leadsto \ \ \)





\(\ds 0 \cdotp \dot b_1 b_2 \ldots \dot b_n \times \paren{10^n - 1}\)

\(=\)







\(\ds b_1 b_2 \ldots b_n\)














\(\ds \leadsto \ \ \)





\(\ds 0 \cdotp \dot b_1 b_2 \ldots \dot b_n\)

\(=\)







\(\ds \dfrac {b_1 b_2 \ldots b_n} {\paren {10^n - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds 0 \cdotp a_1 a_2 \ldots a_m \dot b_1 b_2 \ldots \dot b_n\)

\(=\)







\(\ds \dfrac {a_1 a_2 \ldots a_m} {10^m} + \dfrac 1 {10^m} \times \dfrac {b_1 b_2 \ldots b_n} {\paren {10^n - 1} }\)





Definition of Decimal Expansion














\(\ds \)

\(=\)







\(\ds \dfrac {a_1 a_2 \ldots a_m} {10^m} \times \dfrac {\paren {10^n - 1} } {\paren {10^n - 1} } + \dfrac 1 {10^m} \times \dfrac {b_1 b_2 \ldots b_n} {\paren {10^n - 1} }\)





multiplying top and bottom by $10^n - 1$














\(\ds \)

\(=\)







\(\ds \dfrac {a_1 a_2 \ldots a_m \overbrace{000 \ldots 000}^n - a_1 a_2 \ldots a_m } {10^m \paren {10^n - 1} } + \dfrac {b_1 b_2 \ldots b_n} {10^m \paren {10^n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a_1 a_2 \ldots a_m b_1 b_2 \ldots b_n - a_1 a_2 \ldots a_m }{10^m \times \paren {10^n - 1 } }\)









$\blacksquare$


Examples
Decimal Number $0 \cdotp 7 \dot 1 82 \dot 8$
The number:

$0. 7\dot 1 82 \dot 8$
can be expressed as a fraction as:














\(\ds 0. 7 \dot 1 82 \dot 8\)

\(=\)







\(\ds \dfrac {71828 - 7} {10^1 \paren {10^4 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {71821} {99990}\)











Decimal Number $0 \cdotp 14 \dot 1 \dot 6$
The number:

$0. 14 \dot 1 \dot 6$
can be expressed as a fraction as:














\(\ds 0. 14 \dot 1 \dot 6\)

\(=\)







\(\ds \dfrac {1416 - 14} {10^2 \paren {10^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1402} {9900}\)













