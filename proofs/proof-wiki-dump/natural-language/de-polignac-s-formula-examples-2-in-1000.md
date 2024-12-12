# 

Source: https://proofwiki.org/wiki/De_Polignac%27s_Formula/Examples/2_in_1000

Example of Use of De Polignac's Formula
The prime factor $2$ appears in $1000!$ to the power of $994$.
That is:

$2^{994} \divides 1000!$
but:

$2^{995} \nmid 1000!$


Proof
Let $\mu$ denote the power of $2$ which divides $1000!$














\(\ds \mu\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {1000} {2^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {1000} 2} + \floor {\frac {1000} 4} + \floor {\frac {1000} 8} + \floor {\frac {1000} {16} } + \floor {\frac {1000} {32} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \floor {\frac {1000} {64} } + \floor {\frac {1000} {128} } + \floor {\frac {1000} {256} } + \floor {\frac {1000} {512} }\)




















\(\ds \)

\(=\)







\(\ds 500 + 250 + 125 + 62 + 31 + 15 + 7 + 3 + 1\)




















\(\ds \)

\(=\)







\(\ds 994\)









$\blacksquare$





