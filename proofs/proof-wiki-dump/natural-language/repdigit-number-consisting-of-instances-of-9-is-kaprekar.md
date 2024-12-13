# 

Source: https://proofwiki.org/wiki/Repdigit_Number_consisting_of_Instances_of_9_is_Kaprekar

Theorem
A repdigit number that consists entirely of the digit $9$ is a Kaprekar number.


Proof
We note as examples:














\(\ds 9^2\)

\(=\)







\(\ds 81\)




















\(\ds 8 + 1\)

\(=\)







\(\ds 9\)




















\(\ds 99^2\)

\(=\)







\(\ds 9801\)




















\(\ds 98 + 01\)

\(=\)







\(\ds 99\)




















\(\ds 999^2\)

\(=\)







\(\ds 998001\)




















\(\ds 998 + 001\)

\(=\)







\(\ds 999\)










Now we consider:














\(\ds \paren {\sum_{k \mathop = 0}^n 9 \times 10^k}^2\)

\(=\)







\(\ds \paren {10^{n + 1} - 1}^2\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds 10^{n + 1} \paren {10^{n + 1} - 2} + 1\)









So $\paren {10^{n + 1} - 1}^2$ can be split as:

$\paren {10^{n + 1} - 2} + 1 = 10^{n + 1} - 1 = \ds \sum_{k \mathop = 0}^n 9 \times 10^k$

Thus $\ds \sum_{k \mathop = 0}^n 9 \times 10^k$ is a Kaprekar number.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $99$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $999$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $99$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $999$




