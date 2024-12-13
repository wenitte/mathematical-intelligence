# 

Source: https://proofwiki.org/wiki/Prime_Factors_of_52_Factorial

Example of Factorial
The prime decomposition of $52!$ is given as:

$52! = 2^{49} \times 3^{23} \times 5^{12} \times 7^8 \times 11^4 \times 13^4 \times 17^3 \times 19^2 \times 23^2 \times 29 \times 31 \times 37 \times 41 \times 43 \times 47$


Proof
For each prime factor $p$ of $52!$, let $a_p$ be the integer such that:

$p^{a_p} \divides 52!$
$p^{a_p + 1} \nmid 52!$

Taking the prime factors in turn:














\(\ds a_2\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {52} {2^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {52} 2} + \floor {\frac {52} 4} + \floor {\frac {52} 8 } + \floor {\frac {52} {16} } + \floor {\frac {52} {32} }\)




















\(\ds \)

\(=\)







\(\ds 26 + 13 + 6 + 3 + 1\)




















\(\ds \)

\(=\)







\(\ds 49\)
























\(\ds a_3\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {52} {3^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {52} 3} + \floor {\frac {52} 9} + \floor {\frac {52} {27} }\)




















\(\ds \)

\(=\)







\(\ds 17 + 5 + 1\)




















\(\ds \)

\(=\)







\(\ds 23\)
























\(\ds a_5\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {52} {5^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {52} 5} + \floor {\frac {52} {25} }\)




















\(\ds \)

\(=\)







\(\ds 10 + 2\)




















\(\ds \)

\(=\)







\(\ds 12\)
























\(\ds a_7\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {52} {7^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {52} 7} + \floor {\frac {52} {49} }\)




















\(\ds \)

\(=\)







\(\ds 7 + 1\)




















\(\ds \)

\(=\)







\(\ds 8\)
























\(\ds a_{11}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {52} {11^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {52} {11} }\)




















\(\ds \)

\(=\)







\(\ds 4\)
























\(\ds a_{13}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {52} {13^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {52} {13} }\)




















\(\ds \)

\(=\)







\(\ds 4\)
























\(\ds a_{17}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {52} {17^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {52} {17} }\)




















\(\ds \)

\(=\)







\(\ds 3\)
























\(\ds a_{19}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {52} {19^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {52} {19} }\)




















\(\ds \)

\(=\)







\(\ds 2\)
























\(\ds a_{23}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {52} {23^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {52} {23} }\)




















\(\ds \)

\(=\)







\(\ds 2\)










Similarly:

$a_{29} = 1$
$a_{31} = 1$
$a_{37} = 1$
$a_{41} = 1$
$a_{43} = 1$
$a_{47} = 1$
Hence the result.
$\blacksquare$





