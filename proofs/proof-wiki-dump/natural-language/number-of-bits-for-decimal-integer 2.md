# 

Source: https://proofwiki.org/wiki/Number_of_Bits_for_Decimal_Integer



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $n$ have $m$ digits when expressed in decimal notation.

Then $n$ may require as many as $\ceiling {\dfrac m {\log_{10} 2} }$ bits to represent it.


Proof
Let $d$ be the number of bits that may be needed to represent $n$.
Let $n$ have $m$ digits.
Then:

$n \le 10^m - 1$
and so:














\(\ds d\)

\(=\)







\(\ds \ceiling {\map {\log_2} {\paren {10^m - 1} + 1} }\)





Number of Digits to Represent Integer in Given Number Base














\(\ds \)

\(=\)







\(\ds \ceiling {\map {\log_2} {10^m} }\)




















\(\ds \)

\(=\)







\(\ds \ceiling {m \log_2 10}\)




















\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac m {\log_{10} 2} }\)





Reciprocal of Logarithm



$\blacksquare$


Examples
$14$ Digits
A positive integer $n \in \Z_{>0}$ which has $14$ digits when expressed in decimal notation may require $47$ bits to represent in binary.





