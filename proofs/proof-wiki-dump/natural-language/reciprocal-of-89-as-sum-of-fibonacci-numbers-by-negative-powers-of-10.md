# 

Source: https://proofwiki.org/wiki/Reciprocal_of_89_as_Sum_of_Fibonacci_Numbers_by_Negative_Powers_of_10

Theorem
$\ds \sum_{k \mathop \ge 0} \dfrac {F_k} {10^{k + 1} } = \dfrac 1 {89}$
where $F_k$ is the $k$th Fibonacci number:

$F_0 = 0, F_1 = 1, F_k = F_{k - 1} + F_{k - 2}$

That is:

1 / 89 = 0.0
       + 0.01
       + 0.001
       + 0.0002
       + 0.00003
       + 0.000005
       + 0.0000008
       + 0.00000013
       + 0.000000021
       + 0.0000000034
       + 0.00000000055
       + ..............

Proof
First we note that from Reciprocal of $89$:

$\dfrac 1 {89} = 0 \cdotp \dot 01123 \, 59550 \, 56179 \, 77528 \, 08988 \, 76404 \, 49438 \, 20224 \, 719 \dot 1$

We have that:

$89 = 10^2 - 10 - 1$
So:














\(\ds \sum_{k \mathop \ge 0} \dfrac {F_k} {10^{k + 1} }\)

\(=\)







\(\ds \dfrac 1 {10} \sum_{k \mathop \ge 0} F_k \paren {\dfrac 1 {10} }^k\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {10} \cdot \dfrac {\dfrac 1 {10} } {1 - \dfrac 1 {10} - \paren {\dfrac 1 {10} }^2 }\)





Generating Function for Fibonacci Numbers














\(\ds \)

\(=\)







\(\ds \dfrac 1 {10^2 - 10 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {89}\)









$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $89$




