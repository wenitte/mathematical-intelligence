# 

Source: https://proofwiki.org/wiki/Amicable_Pair_with_Smallest_Common_Prime_Factor_5



Theorem
An amicable pair whose smallest common prime factor is greater than $3$ has the elements:

$m_1 = 5 \times 7^2 \times 11^2 \times 13 \times 17 \times 19^3 \times 23 \times 37 \times 181 \times 101 \times 8693 \times 19 \, 479 \, 382 \, 229$
and:

$m_2 = 5 \times 7^2 \times 11^2 \times 13 \times 17 \times 19^3 \times 23 \times 37 \times 181 \times 365 \, 147 \times 47 \, 307 \, 071 \, 129$

This was at one point the smallest known counterexample to the observation that:

most amicable pairs consist of even integers
most of the rest, whose elements are odd, have both elements divisible by $3$.


Proof
It is to be demonstrated that these numbers are amicable.
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where:

$\ds n = \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i} =  p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$
is the prime decomposition of $n$.

When $k_i = 1$ the individual factor becomes $\dfrac {p_i^2 - 1} {p_i - 1} = \dfrac {\paren {p_i + 1} \paren {p_i - 1} } {p_i - 1} = p_i + 1$.

We establish the contributions to the divisor sum values of $m_1$ and $m_2$ by taking the prime factors in turn, and extracting the prime factors of each result.
First, the elements common to both:














\(\ds \map {\sigma_1} 5\)

\(=\)







\(\ds 6\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 3\)
























\(\ds \map {\sigma_1} {7^2}\)

\(=\)







\(\ds \dfrac {7^3 - 1} {7 - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \dfrac {343 - 1} 6\)




















\(\ds \)

\(=\)







\(\ds 57\)




















\(\ds \)

\(=\)







\(\ds 3 \times 19\)
























\(\ds \map {\sigma_1} {11^2}\)

\(=\)







\(\ds \dfrac {11^3 - 1} {11 - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \dfrac {1331 - 1} {10}\)




















\(\ds \)

\(=\)







\(\ds 133\)




















\(\ds \)

\(=\)







\(\ds 7 \times 19\)
























\(\ds \map {\sigma_1} {13}\)

\(=\)







\(\ds 14\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 7\)
























\(\ds \map {\sigma_1} {17}\)

\(=\)







\(\ds 18\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 3^2\)
























\(\ds \map {\sigma_1} {19^3}\)

\(=\)







\(\ds \dfrac {19^4 - 1} {19 - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \dfrac {130 \, 321 - 1} {18}\)




















\(\ds \)

\(=\)







\(\ds 7240\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 5 \times 181\)
























\(\ds \map {\sigma_1} {23}\)

\(=\)







\(\ds 24\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^3 \times 3\)
























\(\ds \map {\sigma_1} {37}\)

\(=\)







\(\ds 38\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 19\)
























\(\ds \map {\sigma_1} {181}\)

\(=\)







\(\ds 182\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 7 \times 13\)










This gives a common factor of both $\sigma_1$ values of:














\(\ds \)

\(\)







\(\ds 6 \times 57 \times 133 \times 14 \times 18 \times 7240 \times 24 \times 38 \times 182\)




















\(\ds \)

\(=\)







\(\ds 2^{11} \times 3^5 \times 5 \times 7^3 \times 13 \times 19^3 \times 181\)










The remaining prime factors of $m_1$:














\(\ds \map {\sigma_1} {101 \times 8693 \times 19 \, 479 \, 382 \, 229}\)

\(=\)







\(\ds \paren {101 + 1} \paren {8693 + 1} \paren {19 \, 479 \, 382 \, 229 + 1}\)





Divisor Sum of Square-Free Integer














\(\ds \)

\(=\)







\(\ds \paren {2 \times 3 \times 17} \paren {2 \times 3^3 \times 7 \times 23} \paren {2 \times 3 \times 5 \times 7 \times 11^2 \times 37 \times 20 \, 719}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3^5 \times 5 \times 7^2 \times 11^2 \times 17 \times 23 \times 37 \times 20 \, 719\)










The remaining prime factors of $m_2$:














\(\ds \map {\sigma_1} {365 \, 147 \times 47 \, 307 \, 071 \, 129}\)

\(=\)







\(\ds \paren {365 \, 147 + 1} \paren {47 \, 307 \, 071 \, 129 + 1}\)





Divisor Sum of Square-Free Integer














\(\ds \)

\(=\)







\(\ds \paren {2^2 \times 3^4 \times 7^2 \times 23} \paren {2 \times 3 \times 5 \times 11^2 \times 17 \times 37 \times 20 \, 719}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3^5 \times 5 \times 7^2 \times 11^2 \times 17 \times 23 \times 37 \times 20 \, 719\)










and so:














\(\ds \map {\sigma_1} {m_1} = \map {\sigma_1} {m_2}\)

\(=\)







\(\ds \paren {2^{11} \times 3^5 \times 5 \times 7^3 \times 13 \times 19^3 \times 181} \paren {2^3 \times 3^5 \times 5 \times 7^2 \times 11^2 \times 17 \times 23 \times 37 \times 20 \, 719}\)




















\(\ds \)

\(=\)







\(\ds 2^{14} \times 3^{10} \times 5^2 \times 7^5 \times 11^2 \times 13 \times 17 \times 19^3 \times 23 \times 37 \times 181 \times 20 \, 719\)










It remains to be shown that:

$\map {\sigma_1} {m_1} = \map {\sigma_1} {m_2} = m_1 + m_2$
So:














\(\ds m_1 + m_2\)

\(=\)







\(\ds 5 \times 7^2 \times 11^2 \times 13 \times 17 \times 19^3 \times 23 \times 37 \times 181 \times \paren {101 \times 8693 \times 19 \, 479 \, 382 \, 229 + 365 \, 147 \times 47 \, 307 \, 071 \, 129}\)




















\(\ds \)

\(=\)







\(\ds 6921698310331805 \times \paren {17102761241386397 + 17274035101540963}\)




















\(\ds \)

\(=\)







\(\ds 6921698310331805 \times 34376796342927360\)




















\(\ds \)

\(=\)







\(\ds 237945813161460881075326612684800\)




















\(\ds \)

\(=\)







\(\ds 2^{14} \times 3^{10} \times 5^2 \times 7^5 \times 11^2 \times 13 \times 17 \times 19^3 \times 23 \times 37 \times 181 \times 20719\)









$\blacksquare$


Historical Note
In $1986$, David Wells reported in his Curious and Interesting Numbers of $1986$ that "numerous mathematicians" had conjectured that all amicable pairs both of whose elements are odd are multiples of $3$.
This amicable pair, a counterexample, was communicated by letter dated $15$th May $1987$ from Herman te Riele to Richard K. Guy.
The latter published it, with mistakes, in his Unsolved Problems in Number Theory, 2nd ed. of $1994$:

$5 \cdot 7^2 \cdot 11^2 \cdot 13 \cdot 17 \cdot 19^3 \cdot 23 \cdot 37 \cdot 181 \begin{cases} 101 \cdot 8643 \cdot 1947938229 \\ 365147 \cdot 47303071129 \end{cases}$

David Wells repeated the mistakes in his Curious and Interesting Numbers, 2nd ed. of $1997$.
Guy finally published the corrected version in his Unsolved Problems in Number Theory, 3rd ed. of $2004$.

It was for some time believed to be the smallest such amicable pair, but smaller ones have since been discovered.


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $220$




