# 

Source: https://proofwiki.org/wiki/De_Polignac%27s_Formula/Examples/3_in_1000

Example of Use of De Polignac's Formula
The prime factor $3$ appears in $1000!$ to the power of $498$.
That is:

$3^{498} \divides 1000!$
but:

$3^{499} \nmid 1000!$


Proof
Let $\mu$ denote the power of $3$ which divides $1000!$














\(\ds \mu\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {1000} {3^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {1000} 3} + \floor {\frac {1000} 9} + \floor {\frac {1000} {27} } + \floor {\frac {1000} {81} } + \floor {\frac {1000} {243} } + \floor {\frac {1000} {729} }\)




















\(\ds \)

\(=\)







\(\ds 333 + 111 + 37 + 12 + 4 + 1\)




















\(\ds \)

\(=\)







\(\ds 498\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials




