# 

Source: https://proofwiki.org/wiki/Number_of_form_4666...6669_is_Divisible_by_7

Theorem
Let $x$ be a natural number in the form:

$\sqbrk {4 \underbrace {666 \cdots 6}_n 9}_{10}$
Then $x$ is divisible by $7$.


Proof
We have:














\(\ds \sqbrk {4 \underbrace {666 \cdots 6}_n 9}_{10}\)

\(=\)







\(\ds 4 \times 10^{n + 1} + 6 \times 10^n + \cdots + 6 \times 10^1 + 9\)




















\(\ds \)

\(=\)







\(\ds 4 \times 10^{n + 1} + \dfrac {6 \times \paren {10^n - 1} } {\paren {10 - 1} } \times 10 + 9\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds 4 \times 10^{n + 1} \times \dfrac 3 3 + \dfrac {6 \times \paren {10^n - 1} } 9 \times 10 + 9 \times \dfrac 3 3\)





multiplying by 1 to obtain Common Denominator














\(\ds \)

\(=\)







\(\ds \dfrac {12 \times 10^{n + 1} } 3 + \dfrac {2 \times \paren {10^{n + 1} - 10} } 3 + \dfrac {27} 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac {14 \times 10^{n + 1} + 7} 3\)










The sum of the digits in $14 \times 10^{n + 1} + 7$ is in fact $12 = 1 + 4 + 7$ which is a multiple of $3$.
Hence, by Divisibility by $3$, $\dfrac {14 \times 10^{n + 1} + 7} 3$ is indeed an integer.

Then:














\(\ds (14 \times 10^{n + 1} + 7) \div 3\)

\(\equiv\)







\(\ds (0 \times 3^{n + 1} + 0) \div 3\)

\(\ds \pmod 7\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds (0 + 0) \div 3\)

\(\ds \pmod 7\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 0 \div 3\)

\(\ds \pmod 7\)



Congruence of Quotient














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 7\)







$\blacksquare$





