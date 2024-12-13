# 

Source: https://proofwiki.org/wiki/Reversal_of_Number_Multiplied_by_11



Theorem
Let $n \in \N$ be a number for which, when written in decimal notation, no two adjacent digits total to more than $9$.
Let $n'$ denote the reversal of $n$.
Then $n \times 11$ is the reversal of $n' \times 11$.


Proof
By Basis Representation Theorem, there exists one and only one sequence $\sequence {r_j}_{0 \mathop \le j \mathop \le t}$ such that:

$(1): \quad \ds n = \sum_{k \mathop = 0}^t r_k 10^k$
$(2): \quad \ds \forall k \in \closedint 0 t: r_k \in \N_{10}$
$(3): \quad r_t \ne 0$
Since no two adjacent digits of $n$ total to more than $9$, we have:

$\paren {r_i + r_{i - 1} } \in \N_{10}$ for $i = 1, 2, \dots, t$
Now:














\(\ds n \times 11\)

\(=\)







\(\ds 11 \sum_{k \mathop = 0}^t r_k 10^k\)




















\(\ds \)

\(=\)







\(\ds 10 \sum_{k \mathop = 0}^t r_k 10^k + \sum_{k \mathop = 0}^t r_k 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^t r_k 10^{k + 1} + \sum_{k \mathop = 0}^t r_k 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{t + 1} r_{k - 1} 10^k + \sum_{k \mathop = 0}^t r_k 10^k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds r_0 + \sum_{k \mathop = 1}^t \paren {r_k + r_{k - 1} } 10^k + r_t 10^{t + 1}\)









Since $r_0, r_t$ and each $r_k + r_{k - 1}$ is in $\N_{10}$, the above is the unique representation of $n \times 11$.

The reversal of $n$, $n'$, is given by:

$\ds n = \sum_{k \mathop = 0}^t r_{t - k} 10^k$
Hence:














\(\ds n' \times 11\)

\(=\)







\(\ds 11 \sum_{k \mathop = 0}^t r_{t - k} 10^k\)




















\(\ds \)

\(=\)







\(\ds 10 \sum_{k \mathop = 0}^t r_{t - k} 10^k + \sum_{k \mathop = 0}^t r_{t - k} 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^t r_{t - k} 10^{k + 1} + \sum_{k \mathop = 0}^t r_{t - k} 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{t + 1} r_{t - k + 1} 10^k + \sum_{k \mathop = 0}^t r_{t - k} 10^k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds r_t + \sum_{k \mathop = 1}^t \paren {r_{t - k} + r_{t - k + 1} } 10^k + r_0 10^{t + 1}\)









Since $r_t, r_0$ and each $r_{t - k} + r_{t - k + 1}$ is in $\N_{10}$, the above is the unique representation of $n' \times 11$.
Its reversal is given by:

$\ds r_0 + \paren {r_0 + r_1} 10^1 + \paren {r_1 + r_2} 10^2 + \dots + \paren {r_{t - 1} + r_t} 10^t + r_t 10^{t + 1}$
which is:

$\ds r_0 + \sum_{k \mathop = 1}^t \paren {r_{k - 1} + r_k} 10^k + r_t 10^{t + 1}$
which can be seen to be equal to $n \times 11$.
$\blacksquare$


Examples
Reversal of $2615$ Multipled by $11$
$11$ multiplied by the reversal of $2615$ equals the reversal of the product of $2615$ and $11$.


Reversal of $45 \, 173$ Multipled by $11$
$11$ multiplied by the reversal of $45 \, 173$ does not equal the reversal of the product of $45 \, 173$ and $11$.


Reversal of $2 \, 363 \, 511 \, 509$ Multipled by $11$
$11$ multiplied by the reversal of $2 \, 363 \, 511 \, 509$ equals the reversal of the product of $2 \, 363 \, 511 \, 509$ and $11$.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2615$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2615$




