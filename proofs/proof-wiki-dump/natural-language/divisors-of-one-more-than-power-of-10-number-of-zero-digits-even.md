# 

Source: https://proofwiki.org/wiki/Divisors_of_One_More_than_Power_of_10/Number_of_Zero_Digits_Even



Theorem
Let $N$ be a natural number of the form:

$N = 1 \underbrace {000 \ldots 0}_{\text {$2 k$ $0$'s} } 1$
that is, where the number of zero digits between the two $1$ digits is even.
Then $N$ can be expressed as:

$N = 11 \times \underbrace {9090 \ldots 90}_{\text {$k - 1$ $90$'s} } 91$


Proof
By definition, $N$ can be expressed as:

$N = 10^{2 k + 1} + 1$
Then we have:














\(\ds N\)

\(=\)







\(\ds 10^{2 k + 1} + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {10 + 1} \sum_{j \mathop = 0}^{2 k} \paren {-1}^j 10^{2 k - j}\)





Sum of Two Odd Powers








\(\ds \leadsto \ \ \)





\(\ds \dfrac N {11}\)

\(=\)







\(\ds \sum_{j \mathop = 0}^{2 k} \paren {-1}^j 10^{2 k - j}\)




















\(\ds \)

\(=\)







\(\ds 10^{2 k} - 10^{2 k - 1} + 10^{2 k - 2} - 10^{2 k - 3} + \cdots + 10^2 - 10^1 + 10^0\)




















\(\ds \)

\(=\)







\(\ds 10^{2 k - 1} \paren {10 - 1} + 10^{2 k - 3} \paren {10 - 1} + \cdots + 10 \paren {10 - 1} + 1\)




















\(\ds \)

\(=\)







\(\ds 90 \paren {10^{2 k - 2} + 10^{2 k - 4} + \cdots + 10^0} + 1\)




















\(\ds \)

\(=\)







\(\ds 90 \sum_{j \mathop = 0}^k \paren {10^{2 j} } + 1\)




















\(\ds \)

\(=\)







\(\ds \underbrace {9090 \ldots 90}_{\text {$k$ $90$'s} } + 1\)




















\(\ds \)

\(=\)







\(\ds \underbrace {9090 \ldots 90}_{\text {$k - 1$ $90$'s} } 91\)









$\blacksquare$


Examples













\(\ds 11\)

\(=\)







\(\ds 11\)




















\(\ds 1001\)

\(=\)







\(\ds 11 \times 91\)




















\(\ds \)

\(=\)







\(\ds 7 \times 11 \times 13\)




















\(\ds 100 \, 001\)

\(=\)







\(\ds 11 \times 9091\)




















\(\ds 10 \, 000 \, 001\)

\(=\)







\(\ds 11 \times 909 \, 091\)




















\(\ds 1 \, 000 \, 000 \, 001\)

\(=\)







\(\ds 11 \times 90 \, 909 \, 091\)




















\(\ds \)

\(=\)







\(\ds 7 \times 11 \times 13 \times 19 \times 52 \, 579\)




















\(\ds 100 \, 000 \, 000 \, 001\)

\(=\)







\(\ds 11 \times 9 \, 090 \, 909 \, 091\)




















\(\ds \)

\(=\)







\(\ds 11^2 \times 23 \times 4093 \times 8779\)











Also see
Henry Ernest Dudeney: Modern Puzzles: $62$ -- Factorizing


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $62$. -- Factorizing
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $113$. Factorizing




