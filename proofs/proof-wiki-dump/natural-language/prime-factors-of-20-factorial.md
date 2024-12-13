# 

Source: https://proofwiki.org/wiki/Prime_Factors_of_20_Factorial

Example of Factorial
The prime decomposition of $20!$ is given as:

$20! = 2^{18} \times 3^8 \times 5^4 \times 7^2 \times 11 \times 13 \times 17 \times 19$


Proof
For each prime factor $p$ of $20!$, let $a_p$ be the integer such that:

$p^{a_p} \divides 20!$
$p^{a_p + 1} \nmid 20!$

Taking the prime factors in turn:














\(\ds a_2\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {20} {2^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {20} 2} + \floor {\frac {20} 4} + \floor {\frac {20} 8 } + \floor {\frac {20} {16} }\)




















\(\ds \)

\(=\)







\(\ds 10 + 5 + 2 + 1\)




















\(\ds \)

\(=\)







\(\ds 18\)
























\(\ds a_3\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {20} {3^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {20} 3}  + \floor {\frac {20} 9}\)




















\(\ds \)

\(=\)







\(\ds 6 + 2\)




















\(\ds \)

\(=\)







\(\ds 8\)
























\(\ds a_5\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {20} {5^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {20} 5}\)




















\(\ds \)

\(=\)







\(\ds 4\)
























\(\ds a_7\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {20} {7^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {20} 7}\)




















\(\ds \)

\(=\)







\(\ds 2\)









Similarly:

$a_{11} = 1$
$a_{13} = 1$
$a_{17} = 1$
$a_{19} = 1$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $6$




