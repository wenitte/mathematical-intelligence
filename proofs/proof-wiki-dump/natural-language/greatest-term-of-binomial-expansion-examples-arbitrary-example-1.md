# 

Source: https://proofwiki.org/wiki/Greatest_Term_of_Binomial_Expansion/Examples/Arbitrary_Example_1

Theorem
Consider the expression:

$E = \paren {1 + 2 x}^{10 \frac 1 2}$
Let $x = \dfrac 3 7$.
Then the greatest term in the power series expansion of $E$ by means of the General Binomial Theorem is:

$\dfrac {21 \times 19 \times 17 \times 15 \times 13} {5!} \paren {\dfrac 3 7}^5$


Proof
Let us perform the expansion:

$\paren {1 + 2 x}^{\frac {21} 2} = 1 + \dfrac {21} 2 \paren {2 x} + \dfrac {\paren {\frac {21} 2} \paren {\frac {19} 2} } {2!} \paren {2 x}^2 + \dfrac {\paren {\frac {21} 2} \paren {\frac {19} 2} \paren {\frac {17} 2} } {3!} \paren {2 x}^3 + \cdots$
Consider the $\paren {r + 1}$th term:

$u_{r + 1} = \dfrac {\paren {\frac {21} 2} \paren {\frac {19} 2} \cdots \paren {\frac {23} 2 - r} } {r!} \paren {2 x}^r$
Hence $u_{r + 1} > u_r$ if:














\(\ds u_{r + 1}\)

\(>\)







\(\ds u_r\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\paren {\frac {21} 2} \paren {\frac {19} 2} \cdots \paren {\frac {23} 2 - r} } {r!} \paren {2 x}^r\)

\(>\)







\(\ds \dfrac {\paren {\frac {21} 2} \paren {\frac {19} 2} \cdots \paren {\frac {25} 2 - r} } {\paren {r - 1}!} \paren {2 x}^{r - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\paren {\frac {23} 2 - r} } r \paren {2 x}\)

\(>\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\paren {\frac {23} 2 - r} } r \paren {\dfrac 6 7}\)

\(>\)







\(\ds r\)





setting $x = \dfrac 3 7$








\(\ds \leadsto \ \ \)





\(\ds 69 - 6 r\)

\(>\)







\(\ds 7 r\)














\(\ds \leadsto \ \ \)





\(\ds 13 r\)

\(<\)







\(\ds 69\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(<\)







\(\ds 5 \tfrac 4 {13}\)









So:

if $r < 5 \tfrac 4 {13}$ then $u_{r + 1} > u_r$
but conversely:

if $r > 5 \tfrac 4 {13}$ then $u_{r + 1} < u_r$

Hence the greatest value of $r$ for which $u_{r + 1} > u_r$ is $5$.
Then we have that:

$u_6 > u_5$
but then:

$u_7 < u_6$

Hence the $6$th term is greatest:














\(\ds u_6\)

\(=\)







\(\ds \dfrac {\paren {\frac {21} 2} \paren {\frac {19} 2} \paren {\frac {17} 2} \paren {\frac {15} 2} \paren {\frac {13} 2} } {5!} \paren {2 x}^5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {21 \times 19 \times 17 \times 15 \times 13} {2^5 \times 5!} \paren {\dfrac 6 7}^5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {21 \times 19 \times 17 \times 15 \times 13} {5!} \paren {\dfrac 3 7}^5\)









$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Binomial Theorem: The greatest term




