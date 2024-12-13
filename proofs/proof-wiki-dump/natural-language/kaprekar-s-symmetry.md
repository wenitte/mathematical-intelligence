# 

Source: https://proofwiki.org/wiki/Kaprekar%27s_Symmetry



Theorem
Let $n$ be a Kaprekar number with $D$ digits.
Then $10^D - n$ is also a Kaprekar number.


Examples













\(\ds 1 + 9\)

\(=\)







\(\ds 10\)





$1$st and $2$nd Kaprekar numbers














\(\ds 45 + 55\)

\(=\)







\(\ds 100\)





$3$rd and $4$th Kaprekar numbers














\(\ds 297 + 703\)

\(=\)







\(\ds 1000\)





$6$th and $7$th Kaprekar numbers














\(\ds 2223 + 7777\)

\(=\)







\(\ds 10 \, 000\)





$9$th and $16$th Kaprekar numbers














\(\ds 2728 + 7272\)

\(=\)







\(\ds 10 \, 000\)





$10$th and $15$th Kaprekar numbers














\(\ds 04879 + 95 \, 121\)

\(=\)







\(\ds 100 \, 000\)





$11$th and $23$rd Kaprekar numbers














\(\ds 4950 + 5050\)

\(=\)







\(\ds 10 \, 000\)





$12$th and $13$th Kaprekar numbers





Proof
Since $n$ is a Kaprekar number of $D$ digits:

$\begin {cases} n^2 = a \times 10^D + b \\ n = a + b \end {cases}$
for some positive integers $a$ and $b$, $b < 10^D$.

Hence:














\(\ds \paren {10^D - n}^2\)

\(=\)







\(\ds 10^{2 D} - 2 n \times 10^D + n^2\)




















\(\ds \)

\(=\)







\(\ds 10^{2 D} - 2 \paren {a + b} 10^D + a \times 10^D + b\)




















\(\ds \)

\(=\)







\(\ds 10^D \paren {10^D - a - 2 b} + b\)









and we have:

$\paren {10^D - a - 2 b} + b = 10^D - a - b = 10^D - n$

Finally we check that $10^D - a - 2 b \ge 0$:
Aiming for a contradiction, suppose $10^D - a - 2 b \le -1$.
Then:














\(\ds \paren {10^D - n}^2\)

\(=\)







\(\ds 10^D \paren {10^D - a - 2 b} + b\)




















\(\ds \)

\(\le\)







\(\ds -10^D + b\)




















\(\ds \)

\(<\)







\(\ds 0\)









but squares are positive, a contradiction.

Hence $10^D - n$ is also a Kaprekar number of $D$ digits.
$\blacksquare$


Source of Name
This entry was named for Dattathreya Ramchandra Kaprekar.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $297$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $297$




