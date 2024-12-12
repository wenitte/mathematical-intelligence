# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient/Examples/Number_of_Bridge_Hands/Prime_Factors

Example of Factorial
The prime decomposition of the number of bridge hands is given as:

$\dbinom {52} {13} = 2^4 \times 5^2 \times 7^2 \times 17 \times 23 \times 41 \times 43 \times 47$


Proof
We have by definition of binomial coefficient:

$\dbinom {52} {13} = \dfrac {52!} {13! \, 39!}$
Thus it is necessary to determine the prime factors of each of the contributing factorials here.

From Prime Factors of $52!$:

$52! = 2^{49} \times 3^{23} \times 5^{12} \times 7^8 \times 11^4 \times 13^4 \times 17^3 \times 19^2 \times 23^2 \times 29 \times 31 \times 37 \times 41 \times 43 \times 47$

From Prime Factors of $39!$:

$39! = 2^{35} \times 3^{18} \times 5^8 \times 7^5 \times 11^3 \times 13^3 \times 17^2 \times 19^2 \times 23 \times 29 \times 31 \times 37$

From Prime Factors of $13!$:

$13! = 2^{10} \times 3^5 \times 5^2 \times 7 \times 11 \times 13$

For each prime factor $p$ of $\dbinom {52} {13}$, let $a_p$ be the integer such that:

$p^{a_p} \divides \dbinom {52} {13}$
$p^{a_p + 1} \nmid \dbinom {52} {13}$

Taking the prime factors in turn:














\(\ds a_2\)

\(=\)







\(\ds 49 - 35 - 10\)




















\(\ds \)

\(=\)







\(\ds 4\)






















\(\ds a_3\)

\(=\)







\(\ds 23 - 18 - 5\)




















\(\ds \)

\(=\)







\(\ds 0\)






















\(\ds a_5\)

\(=\)







\(\ds 12 - 8 - 2\)




















\(\ds \)

\(=\)







\(\ds 2\)






















\(\ds a_7\)

\(=\)







\(\ds 8 - 5 - 1\)




















\(\ds \)

\(=\)







\(\ds 2\)






















\(\ds a_{11}\)

\(=\)







\(\ds 4 - 3 - 1\)




















\(\ds \)

\(=\)







\(\ds 0\)






















\(\ds a_{13}\)

\(=\)







\(\ds 4 - 3 - 1\)




















\(\ds \)

\(=\)







\(\ds 0\)






















\(\ds a_{17}\)

\(=\)







\(\ds 3 - 2\)




















\(\ds \)

\(=\)







\(\ds 1\)






















\(\ds a_{19}\)

\(=\)







\(\ds 2 - 2\)




















\(\ds \)

\(=\)







\(\ds 0\)






















\(\ds a_{23}\)

\(=\)







\(\ds 2 - 1\)




















\(\ds \)

\(=\)







\(\ds 1\)






















\(\ds a_{29}\)

\(=\)







\(\ds 1 - 1\)




















\(\ds \)

\(=\)







\(\ds 0\)






















\(\ds a_{31}\)

\(=\)







\(\ds 1 - 1\)




















\(\ds \)

\(=\)







\(\ds 0\)






















\(\ds a_{37}\)

\(=\)







\(\ds 1 - 1\)




















\(\ds \)

\(=\)







\(\ds 0\)









Finally:

$a_{41} = a_{43} = a_{47} = 1$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $4$




