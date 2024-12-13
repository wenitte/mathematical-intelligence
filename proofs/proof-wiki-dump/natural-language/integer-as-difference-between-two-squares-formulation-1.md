# 

Source: https://proofwiki.org/wiki/Integer_as_Difference_between_Two_Squares/Formulation_1

Theorem
Let $n$ be a positive integer.
Then $n$ can be expressed as:

$n = a^2 - b^2$
if and only if $n$ has at least two distinct divisors of the same parity that multiply to $n$.


Proof













\(\ds n\)

\(=\)







\(\ds a^2 - b^2\)




















\(\ds \)

\(=\)







\(\ds \paren {a + b} \paren {a - b}\)





Difference of Two Squares




Thus $n = p q$ where:




\(\text {(1)}: \quad\)









\(\ds p\)

\(=\)







\(\ds \paren {a + b}\)










\(\text {(2)}: \quad\)









\(\ds q\)

\(=\)







\(\ds \paren {a - b}\)














\(\ds \leadsto \ \ \)





\(\ds p + q\)

\(=\)







\(\ds 2 a\)





$(1) + (2)$














\(\ds p - q\)

\(=\)







\(\ds 2 b\)





$(1) - (2)$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds \dfrac {p + q} 2\)




















\(\ds b\)

\(=\)







\(\ds \dfrac {p - q} 2\)










Thus for $a$ and $b$ to be integers, both $p$ and $q$ must be:

distinct, otherwise $p = q$ and so $b = 0$
either both even or both odd, otherwise both $p + q$ and $p - q$ will be odd, and so neither $\dfrac {p + q} 2$ nor $\dfrac {p - q} 2$ are defined in $\Z$.

Hence the result.
$\blacksquare$





