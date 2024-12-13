# 

Source: https://proofwiki.org/wiki/Prime_Factors_of_13_Factorial

Example of Factorial
The prime decomposition of $13!$ is given as:

$13! = 2^{10} \times 3^5 \times 5^2 \times 7 \times 11 \times 13$


Proof
For each prime factor $p$ of $13!$, let $a_p$ be the integer such that:

$p^{a_p} \divides 13!$
$p^{a_p + 1} \nmid 13!$

Taking the prime factors in turn:














\(\ds a_2\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {13} {2^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {13} 2} + \floor {\frac {13} 4} + \floor {\frac {13} 8}\)




















\(\ds \)

\(=\)







\(\ds 6 + 3 + 1\)




















\(\ds \)

\(=\)







\(\ds 10\)
























\(\ds a_3\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {13} {3^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {13} 3} + \floor {\frac {13} 9}\)




















\(\ds \)

\(=\)







\(\ds 4 + 1\)




















\(\ds \)

\(=\)







\(\ds 5\)
























\(\ds a_5\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {13} {5^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {13} 5}\)




















\(\ds \)

\(=\)







\(\ds 2\)
























\(\ds a_7\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {13} {7^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {13} 7}\)




















\(\ds \)

\(=\)







\(\ds 1\)










Similarly:

$a_{11} = 1$
$a_{13} = 1$
Hence the result.
$\blacksquare$





