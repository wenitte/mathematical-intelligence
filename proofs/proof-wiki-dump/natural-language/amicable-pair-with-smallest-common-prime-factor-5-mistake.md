# 

Source: https://proofwiki.org/wiki/Amicable_Pair_with_Smallest_Common_Prime_Factor_5/Mistake



Source Work
1997: David Wells: Curious and Interesting Numbers (2nd ed.):

The Dictionary
$220$


Mistake
Most known amicable pairs have both numbers in the pair divisible by $3$. However, this is not a general rule: this counterexample by te Riele may be the smallest such: $5 \times 7^2 \times 11^2 \times 13 \times 17 \times 19^3 \times 23 \times 37 \times 181$ multiplied by either $101 \times 8643 \times 1 \, 947 \, 938 \, 229$ or by $365 \, 147 \times 47 \, 303 \, 071 \, 129$.


Correction
Those numbers are incorrect.
This should read:

... multiplied by either $101 \times 8693 \times 19 \, 479 \, 382 \, 229$ or by $365 \, 147 \times 47 \, 307 \, 071 \, 129$.

Analysing the divisor sum values of the numbers given reveals the incorrectitude.

Let:

$m_1 = 5 \times 7^2 \times 11^2 \times 13 \times 17 \times 19^3 \times 23 \times 37 \times 181 \times 101 \times 8643 \times 1 \, 947 \, 938 \, 229$
and:

$m_2 = 5 \times 7^2 \times 11^2 \times 13 \times 17 \times 19^3 \times 23 \times 37 \times 181 \times 365 \, 147 \times 47 \, 303 \, 071 \, 129$

From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where:

$\ds n = \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i} =  p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$
is the prime decomposition of $n$.

When $k_i = 1$ the individual factor becomes $\dfrac {p_i^2 - 1} {p_i - 1} = \dfrac {\paren {p_i + 1} \paren {p_i - 1} } {p_i - 1} = p_i + 1$.

First we make sure we have all the prime factors:














\(\ds 8643\)

\(=\)







\(\ds 3 \times 43 \times 67\)




















\(\ds 1 \, 947 \, 938 \, 229\)

\(=\)







\(\ds 3^2 \times 739 \times 292 \, 879\)




















\(\ds 47 \, 303 \, 071 \, 129\)

\(=\)







\(\ds 67 \times 127 \times 5 \, 559 \, 181\)










All other factors given are indeed prime.

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







\(\ds 2^{11} \times 3^5 \times 5 \times 7^3 \times 13 \times 19^3\)










The remaining prime factors of $m_1$:














\(\ds 101 \times 8643 \times 1 \, 947 \, 938 \, 229\)

\(=\)







\(\ds 101 \times \paren {3 \times 43 \times 67} \times \paren {3^2 \times 739 \times 292 \, 879}\)




















\(\ds \)

\(=\)







\(\ds 3^3 \times 43 \times 67 \times 101 \times 739 \times 292 \, 879\)










Thus:














\(\ds \map {\sigma_1} {3^3}\)

\(=\)







\(\ds \dfrac {3^4 - 1} {3 - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \dfrac {81 - 1} 2\)




















\(\ds \)

\(=\)







\(\ds 40\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 5\)
























\(\ds \map {\sigma_1} {43}\)

\(=\)







\(\ds 44\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 11\)
























\(\ds \map {\sigma_1} {67}\)

\(=\)







\(\ds 68\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 17\)
























\(\ds \map {\sigma_1} {101}\)

\(=\)







\(\ds 102\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 3 \times 17\)
























\(\ds \map {\sigma_1} {739}\)

\(=\)







\(\ds 740\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 5 \times 37\)
























\(\ds \map {\sigma_1} {292 \, 879}\)

\(=\)







\(\ds 292 \, 880\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^4 \times 5 \times 7 \times 523\)










This gives us the prime decomposition of the rest of $\map {\sigma_1} {m_1}$:














\(\ds \)

\(\)







\(\ds 40 \times 44 \times 68 \times 102 \times 740 \times 292 \, 880\)




















\(\ds \)

\(=\)







\(\ds \paren {2^3 \times 5} \times \paren {2^2 \times 11} \times \paren {2^2 \times 17} \times \paren {2 \times 3 \times 17} \times \paren {2^2 \times 5 \times 37} \times \paren {2^4 \times 5 \times 7 \times 523}\)




















\(\ds \)

\(=\)







\(\ds 2^{14} \times 3 \times 5^3 \times 7 \times 11 \times 17^2 \times 37 \times 523\)










The remaining prime factors of $m_2$:














\(\ds 365 \, 147 \times 47 \, 303 \, 071 \, 129\)

\(=\)







\(\ds 67 \times 127 \times 365 \, 147 \times 5 \, 559 \, 181\)










Thus:














\(\ds \map {\sigma_1} {67}\)

\(=\)







\(\ds 68\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 17\)
























\(\ds \map {\sigma_1} {127}\)

\(=\)







\(\ds 128\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^7\)
























\(\ds \map {\sigma_1} {365 \, 147}\)

\(=\)







\(\ds 365 \, 148\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 3^4 \times 7^2 \times 23\)
























\(\ds \map {\sigma_1} {5 \, 559 \, 181}\)

\(=\)







\(\ds 5 \, 559 \, 182\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 173 \times 16 \, 067\)










This gives us the prime decomposition of the rest of $\map {\sigma_1} {m_2}$:














\(\ds \)

\(\)







\(\ds 68 \times 128 \times 365 \, 148 \times 292 \, 5 \, 559 \, 182\)




















\(\ds \)

\(=\)







\(\ds \paren {2^2 \times 17} \times 2^7 \times \paren {2^2 \times 3^4 \times 7^2 \times 23} \times \paren {2 \times 173 \times 16 \, 067}\)




















\(\ds \)

\(=\)







\(\ds 2^{12} \times 3^4 \times 7^2 \times 17 \times 23 \times 173 \times 16 \, 067\)










Thus it is seen that $\map {\sigma_1} {m_1} \ne \map {\sigma_1} {m_2}$, and so $m_1$ and $m_2$ are not amicable.
$\blacksquare$

The error originates in 1994: Richard K. Guy: Unsolved Problems in Number Theory (2nd ed.).
He corrects this mistake in 2004: Richard K. Guy: Unsolved Problems in Number Theory (3rd ed.):

In an $87-05-15$ letter te Riele announced a $33$-digit specimen (misquoted in UPINT2)
$5 \cdot 7^2 \cdot 11^2 \cdot 13 \cdot 17 \cdot 19^3 \cdot 23 \cdot 37 \cdot 181 \begin{cases} 101 \cdot 8693 \cdot 19479382229 \\ 365147 \cdot 47307071129 \end{cases}$

Smaller counterexamples have since been found.


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $220$




