# 

Source: https://proofwiki.org/wiki/Integers_whose_Divisor_Sum_equals_Half_Phi_times_Divisor_Count



Theorem
The following positive integers $n$ have the property where:

$\map {\sigma_1} n = \dfrac {\map \phi n \times \map {\sigma_0} n} 2$
where:

$\map {\sigma_1} n$ denotes the divisor sum function: the sum of the divisors of $n$
$\map \phi n$ denotes the Euler $\phi$ function: the count of positive integers smaller than of $n$ which are coprime to $n$
$\map {\sigma_0} n$ denotes the divisor count function: the count of the divisors of $n$:

These positive integers are:

$35, 105, \ldots$


Proof
We have:














\(\ds \map \phi {35}\)

\(=\)







\(\ds 24\)





$\phi$ of $35$














\(\ds \map {\sigma_0} {35}\)

\(=\)







\(\ds 4\)





$\sigma_0$ of $35$








\(\ds \leadsto \ \ \)





\(\ds \map \phi {35} \times \map {\sigma_0} {35}\)

\(=\)







\(\ds \dfrac {24 \times 4} 2\)




















\(\ds \)

\(=\)







\(\ds 48\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma_1} {35}\)





$\sigma_1$ of $35$


















\(\ds \map \phi {105}\)

\(=\)







\(\ds 48\)





$\phi$ of $105$














\(\ds \map {\sigma_0} {105}\)

\(=\)







\(\ds 8\)





$\sigma_0$ of $105$








\(\ds \leadsto \ \ \)





\(\ds \map \phi {105} \times \map {\sigma_0} {105}\)

\(=\)







\(\ds \dfrac {48 \times 8} 2\)




















\(\ds \)

\(=\)







\(\ds 192\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma_1} {105}\)





$\sigma_1$ of $105$



$\blacksquare$


Also see
Integers whose Phi times Divisor Count equal Divisor Sum


Historical Note
The intent of this result is unclear. Its statement by David Wells in his Curious and Interesting Numbers, 2nd ed. of $1997$ was erroneous, but no indication was given as to where it originated.
The On-Line Encyclopedia of Integer Sequences suggests that this result may be intended as:

$\map {\sigma_1} n = \map \phi n \times \map j n$
where $\map j n$ is the count of $d \divides n$ such that $d \ge 3$ and $1 \le \dfrac n d \le d - 2$.
In such a case, the sequence begins:

$35, 105, 248, 418, 594, 744, 812, 1254, \ldots$

It is also possible that the result may also have been intended to be:

$\map {\sigma_1} n = \map \phi n \times \map k n$
where $\map k n$ is the count of $d \divides n$ such that $d < \sqrt n$.


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $105$




