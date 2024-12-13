# 

Source: https://proofwiki.org/wiki/Numbers_n_whose_Euler_Phi_value_Divides_n_%2B_1



Theorem
The following integers $n$ satisfy the equation:

$\exists k \in \Z: k \, \map \phi n = n + 1$
where $\phi$ denotes the Euler $\phi$ function:

$83 \, 623 \, 935, 83 \, 623 \, 935 \times 83 \, 623 \, 937$


Proof
From $\phi$ of $83 \, 623 \, 935$:

$\map \phi {83 \, 623 \, 935} = 41 \, 811 \, 968$
and then:














\(\ds 2 \times 41 \, 811 \, 968\)

\(=\)







\(\ds 83 \, 623 \, 936\)




















\(\ds \)

\(=\)







\(\ds 1 + 83 \, 623 \, 935\)









$\Box$

Then we have that $83 \, 623 \, 937$ is the $868 \, 421$st prime number.
From Euler Phi Function of Prime:

$\map \phi {83 \, 623 \, 937} = 83 \, 623 \, 936$















\(\ds \map \phi {83 \, 623 \, 935 \times 83 \, 623 \, 937}\)

\(=\)







\(\ds \map \phi {83 \, 623 \, 935} \times \map \phi {83 \, 623 \, 937}\)





Euler Phi Function is Multiplicative














\(\ds \)

\(=\)







\(\ds 41 \, 811 \, 968 \times 83 \, 623 \, 936\)





from above




Then we have that:














\(\ds 83 \, 623 \, 935 \times 83 \, 623 \, 937\)

\(=\)







\(\ds \paren {83 \, 623 \, 936 - 1} \times \paren {83 \, 623 \, 936 + 1}\)




















\(\ds \)

\(=\)







\(\ds 83 \, 623 \, 936^2 - 1^2\)





Difference of Two Squares




and so:














\(\ds 2 \times \map \phi {83 \, 623 \, 935 \times 83 \, 623 \, 937}\)

\(=\)







\(\ds 2 \times 41 \, 811 \, 968 \times 83 \, 623 \, 936\)




















\(\ds \)

\(=\)







\(\ds 83 \, 623 \, 936^2\)




















\(\ds \)

\(=\)







\(\ds 83 \, 623 \, 935 \times 83 \, 623 \, 937 + 1\)









$\blacksquare$


Historical Note
This result appears in an article from $1932$ by Derrick Henry Lehmer, where he performs a complete analysis of the situation where $k \map \phi n = n + 1$ where $n$ has fewer than $7$ distinct prime factors.
It appears that Victor Meally may have made the same observation, as Richard K. Guy attributes it to him (without providing a citation) in a note in his Unsolved Problems in Number Theory, 2nd ed. of $1994$.
Interestingly, while citing Lehmer's $1932$ article in the context of a conjecture about $k \map \phi n = n - 1$, Guy appears to completely fail to notice his analysis of $k \map \phi n = n + 1$.

In his Unsolved Problems in Number Theory, 3rd ed. of $2004$, he does now report on Lehmer's $1932$ article, but continues to credit Victor Meally with the observation that $83 \, 623 \, 935 \times 83 \, 623 \, 937 \times \paren {83 \, 623 \, 935 \times 83 \, 623 \, 937 + 2}$ would also be a solution if $83 \, 623 \, 935 \times 83 \, 623 \, 937 + 2$ were prime.
However, again, the latter result also appears in Lehmer's $1932$ article.

In Unsolved Problems in Number Theory, 3rd ed., Guy then reports that Peter Borwein established that $83 \, 623 \, 935 \times 83 \, 623 \, 937 + 2 = 6 \, 992 \, 962 \, 672 \, 132 \, 097$ is not prime, as it has $73$ as a prime factor.


Sources
1932: D.H. Lehmer: On Euler's Totient Function (Bull. Amer. Math. Soc. Vol. 38: pp. 745 – 751)
1994: Richard K. Guy: Unsolved Problems in Number Theory (2nd ed.): $\mathbf B$: Divisibility: $\mathbf {B 37}$: Does $\map \phi n$ properly divide $n - 1$?
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $83,623,935$
2004: Richard K. Guy: Unsolved Problems in Number Theory (3rd ed.): $\mathbf B$: Divisibility: $\mathbf {B 37}$: Does $\map \phi n$ properly divide $n - 1$?




