# 

Source: https://proofwiki.org/wiki/Poisson_Distribution_Approximated_by_Hat-Check_Distribution/Examples/N_equals_8

Example of Poisson Distribution Approximated by Hat-Check Distribution
Let $X$ be a discrete random variable which has the hat-check distribution with parameter $n = 8$.
Then $X$ can be approximated by a Poisson distribution with parameter $\lambda = 1$.


Proof
From Definition of Hat-Check Triangle, we have:

$\begin{array}{r|cccccccccc}
k &  0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8  \\
\hline
!k \dbinom n k & 1 & 0 & 28 & 112 & 630 & 2464 & 7420 & 14832 & 14833 \\
\hline
\dfrac {!k \dbinom n k} {8!} & \dfrac 1 {40320} & \dfrac 0 {40320} & \dfrac {28} {40320} & \dfrac {112} {40320} & \dfrac {630} {40320} & \dfrac {2464} {40320} & \dfrac {7420} {40320} & \dfrac {14832} {40320} & \dfrac {14833} {40320} \\
\hline
\dfrac {!k \dbinom n k} {8!} & 0.0000 & 0.0000 & 0.0007 & 0.0028 & 0.0156 & 0.0611 & 0.1840 & 0.3679 & 0.3679 \\
\hline
\end{array}$

If we let $k = n - k$ and compare the hat-check probabilities from the table above to the probabilities from a Poisson distribution where $\lambda = 1$, we get:

$\begin{array}{r|cccccccccc}
k &  0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8  \\
\hline
\text {Hat-Check} & 0.3679 & 0.3679 & 0.1840 & 0.0611 & 0.0156 & 0.0028 & 0.0007 & 0.0000 & 0.0000 \\
\hline
\text {Poisson} & 0.3679 & 0.3679 & 0.1839 & 0.0613 & 0.0153 & 0.0031 & 0.0005 & 0.0000 & 0.0000 \\
\hline
\end{array}$
$\blacksquare$





