# 

Source: https://proofwiki.org/wiki/Divisors_of_One_More_than_Power_of_10/Number_of_Zero_Digits_Congruent_to_2_Modulo_3



Theorem
Let $N$ be a natural number of the form:

$N = 1000 \ldots 01$
where the number of zero digits between the two $1$ digits is of the form $3 k - 1$.
Then $N$ has divisors:

$1 \underbrace {00 \ldots 0}_{\text {$k - 1$ $0$'s} } 1$
where the number of zero digits between the two $1$ digits is $k - 1$
$\underbrace {99 \ldots 9}_{\text {$k$ $9$'s} } \underbrace {00 \ldots 0}_{\text {$k - 1$ $0$'s} }1$


Proof
By definition, $N$ can be expressed as:

$N = 10^{3 k} + 1$
Let $a := 10^k$.
Then we have:














\(\ds N\)

\(=\)







\(\ds a^3 + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {a + 1} \paren {a^2 - a + 1}\)





Sum of Two Cubes



where it is noted that:














\(\ds \underbrace {99 \ldots 9}_{\text {$k$ $9$'s} } \underbrace {00 \ldots 0}_{\text {$k - 1$ $0$'s} }1\)

\(=\)







\(\ds \underbrace {99 \ldots 9}_{\text {$k$ $9$'s} } \underbrace {00 \ldots 0}_{\text {$k$ $0$'s} } + 1\)




















\(\ds \)

\(=\)







\(\ds 10^k \paren {\underbrace {99 \ldots 9}_{\text {$k$ $9$'s} } } + 1\)




















\(\ds \)

\(=\)







\(\ds 10^k \paren {10^k - 1} + 1\)




















\(\ds \)

\(=\)







\(\ds a^2 - a + 1\)









Hence the result.
$\blacksquare$


Examples













\(\ds 1001\)

\(=\)







\(\ds 11 \times 91\)




















\(\ds 1 \, 000 \, 001\)

\(=\)







\(\ds 101 \times 9901\)




















\(\ds 1 \, 000 \, 000 \, 001\)

\(=\)







\(\ds 1001 \times 999 \, 001\)




















\(\ds \)

\(=\)







\(\ds 7 \times 11 \times 13 \times 19 \times 52 \, 579\)




















\(\ds 1 \, 000 \, 000 \, 000 \, 001\)

\(=\)







\(\ds 10 \, 001 \times 99 \, 990 \, 001\)




















\(\ds \)

\(=\)







\(\ds 73 \times 137 \times 99 \, 990 \, 001\)











Also see
Henry Ernest Dudeney: Modern Puzzles: $62$ -- Factorizing


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $62$. -- Factorizing
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $113$. Factorizing




