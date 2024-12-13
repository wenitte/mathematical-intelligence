# 

Source: https://proofwiki.org/wiki/Logarithm_Base_10_of_2_is_Irrational



Theorem
The common logarithm of $2$:

$\log_{10} 2 \approx 0.30102 \, 99956 \, 63981 \, 19521 \, 37389 \ldots$
is irrational.


Proof 1
Aiming for a contradiction, suppose $\log_{10} 2$ is rational.
Then:














\(\ds \log_{10} 2\)

\(=\)







\(\ds \frac p q\)





for some $p, q \in \Z_{\ne 0}$








\(\ds \leadsto \ \ \)





\(\ds 2\)

\(=\)







\(\ds 10^{p / q}\)





Definition of General Logarithm








\(\ds \leadsto \ \ \)





\(\ds 2^q\)

\(=\)







\(\ds 10^p\)





raising both sides to the power of $q$



Both $10^p$ and $2^q$ are integers, by construction.
But $10^p$ is divisible by $5$, while $2^p$, which has only $2$ as a prime factor, is not.
So $10^p \ne 2^q$.
So, by Proof by Contradiction, it follows that $\log_{10} 2$ is irrational.
$\blacksquare$


Proof 2
Because $5$ is a divisor of $10$ but not $2$, it cannot be the case that $2^a = 10^b$ for $a, b \in \Z_{>0}$.
Hence this is a special case of Irrationality of Logarithm.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms: Exercise $10$




