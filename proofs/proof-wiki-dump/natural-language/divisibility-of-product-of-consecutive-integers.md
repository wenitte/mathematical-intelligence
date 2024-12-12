# 

Source: https://proofwiki.org/wiki/Divisibility_of_Product_of_Consecutive_Integers



Theorem
The product of $n$ consecutive positive integers is divisible by the product of the first $n$ consecutive positive integers.
That is:

$\ds \forall m, n \in \Z_{>0}: \exists r \in \Z: \prod_{k \mathop = 1}^n \paren {m + k} = r \prod_{k \mathop = 1}^n k$


Proof













\(\ds \prod_{k \mathop = 1}^n \paren {m + k}\)

\(=\)







\(\ds \frac {\paren {m + n}!} {m!}\)




















\(\ds \)

\(=\)







\(\ds n! \frac {\paren {m + n}!} {m! \, n!}\)




















\(\ds \)

\(=\)







\(\ds n! \binom {m + n} m\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \binom {m + n} m \prod_{k \mathop = 1}^n k\)










Hence the result, and note that for a bonus we have identified exactly what the divisor is: 

$\dbinom {m + n} m$
$\blacksquare$


Examples
Product of $5$ to $8$













\(\ds 5 \times 6 \times 7 \times 8\)

\(=\)







\(\ds 1680\)




















\(\ds \)

\(=\)







\(\ds 70 \times 24\)




















\(\ds \)

\(=\)







\(\ds \binom 8 4 \times 1 \times 2 \times 3 \times 4\)











Product of $10$ to $13$













\(\ds 10 \times 11 \times 12 \times 13\)

\(=\)







\(\ds 17 \, 160\)




















\(\ds \)

\(=\)







\(\ds 715 \times 24\)




















\(\ds \)

\(=\)







\(\ds \binom {13} 4 \times 1 \times 2 \times 3 \times 4\)











Product of $4$ to $8$













\(\ds 4 \times 5 \times 6 \times 7 \times 8\)

\(=\)







\(\ds 6720\)




















\(\ds \)

\(=\)







\(\ds 56 \times 120\)




















\(\ds \)

\(=\)







\(\ds \binom 8 5 \times 1 \times 2 \times 3 \times 4 \times 5\)











Product of $11$ to $15$













\(\ds 11 \times 12 \times 13 \times 14 \times 15\)

\(=\)







\(\ds 360 \, 360\)




















\(\ds \)

\(=\)







\(\ds 3003 \times 120\)




















\(\ds \)

\(=\)







\(\ds \binom {15} 5 \times 11 \times 12 \times 13 \times 14 \times 15\)











Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Theorem $\text {3-3}$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $24$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $24$




