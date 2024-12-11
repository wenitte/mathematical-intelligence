# 

Source: https://proofwiki.org/wiki/132_is_Sum_of_all_2-Digit_Numbers_formed_from_its_Digits

Theorem
$132$ is the smallest sum of all the $2$-digit (positive) integers formed from its own digits.


Proof
It is necessary to postulate that such (positive) integers have $3$ digits or more, as the $2$ digit solution is trivial.
Let $n = \sqbrk {abc}$ be a $3$-digit number.

Let $\map s n$ denote the sum of all the $2$-digit (positive) integers formed from the digits of $n$.
Then:














\(\ds \map s n\)

\(=\)







\(\ds \sqbrk {ab} + \sqbrk {ac} + \sqbrk {bc} + \sqbrk {ba} + \sqbrk {ca} + \sqbrk {cb}\)




















\(\ds \)

\(=\)







\(\ds \paren {10 a + b} + \paren {10 a + c} + \paren {10 b + c} + \paren {10 b + a} + \paren {10 c + a} + \paren {10 c + b}\)




















\(\ds \)

\(=\)







\(\ds 2 \times \paren {10 a + a} + 2 \times \paren {10 b + b} + 2 \times \paren {10 c + c}\)




















\(\ds \)

\(=\)







\(\ds 22 \times \paren {a + b + c}\)










So for $n = \map s n$, $n = \sqbrk {abc}$ needs to be divisible by both $22$ and $a + b + c$.














\(\ds 22 \times 4\)

\(=\)







\(\ds 88\)





too small














\(\ds 22 \times 5\)

\(=\)







\(\ds 110\)





but $\map s {110} = 11 + 10 + 01 = 22$














\(\ds 22 \times 6\)

\(=\)







\(\ds 132\)





and $\map s {132} = 12 + 13 + 21 + 23 + 31 + 32 = 132$



and the result is apparent.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $132$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $132$




