# 

Source: https://proofwiki.org/wiki/Prime_Factors_of_39_Factorial

Example of Factorial
The prime decomposition of $39!$ is given as:

$39! = 2^{35} \times 3^{18} \times 5^8 \times 7^5 \times 11^3 \times 13^3 \times 17^2 \times 19^2 \times 23 \times 29 \times 31 \times 37$


Proof
For each prime factor $p$ of $39!$, let $a_p$ be the integer such that:

$p^{a_p} \divides 39!$
$p^{a_p + 1} \nmid 39!$

Taking the prime factors in turn:














\(\ds a_2\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {39} {2^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {39} 2} + \floor {\frac {39} 4} + \floor {\frac {39} 8 } + \floor {\frac {39} {16} } + \floor {\frac {39} {32} }\)




















\(\ds \)

\(=\)







\(\ds 19 + 9 + 4 + 2 + 1\)




















\(\ds \)

\(=\)







\(\ds 35\)
























\(\ds a_3\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {39} {3^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {39} 3} + \floor {\frac {39} 9} + \floor {\frac {39} {27} }\)




















\(\ds \)

\(=\)







\(\ds 13 + 4 + 1\)




















\(\ds \)

\(=\)







\(\ds 18\)
























\(\ds a_5\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {39} {5^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {39} 5} + \floor {\frac {39} {25} }\)




















\(\ds \)

\(=\)







\(\ds 7 + 1\)




















\(\ds \)

\(=\)







\(\ds 8\)
























\(\ds a_7\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {39} {7^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {39} 7}\)




















\(\ds \)

\(=\)







\(\ds 5\)
























\(\ds a_{11}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {39} {11^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {39} {11} }\)




















\(\ds \)

\(=\)







\(\ds 3\)
























\(\ds a_{13}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {39} {13^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {39} {13} }\)




















\(\ds \)

\(=\)







\(\ds 3\)
























\(\ds a_{17}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {39} {17^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {39} {17} }\)




















\(\ds \)

\(=\)







\(\ds 2\)
























\(\ds a_{19}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {39} {19^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {39} {19} }\)




















\(\ds \)

\(=\)







\(\ds 2\)










Similarly:

$a_{23} = 1$
$a_{29} = 1$
$a_{31} = 1$
$a_{37} = 1$
Hence the result.
$\blacksquare$





