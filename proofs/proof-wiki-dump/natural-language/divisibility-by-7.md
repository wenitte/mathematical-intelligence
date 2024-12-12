# 

Source: https://proofwiki.org/wiki/Divisibility_by_7

Theorem
An integer $X$ with $n$ digits ($X_0$ in the ones place, $X_1$ in the tens place, and so on) is divisible by $7$ if and only if:

$\ds \sum_{i \mathop = 0}^{n - 1} \paren {3^i X_i}$ is divisible by $7$.


Proof













\(\ds X\)

\(=\)







\(\ds 10^0 X_0 + 10^1 X_1 + \cdots + 10^{n - 1} X_{n-1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{n - 1} 10^i X_i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{n - 1} \paren {10^i - 3^i + 3^i} X_i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{n - 1} \paren {\paren {10^i - 3^i} X_i} + \sum_{i \mathop = 0}^{n - 1} \paren {3^i X_i}\)









From Difference of Two Powers, $10^i - 3^i$ always produces a number divisible by $7$.
Thus the first addend is always divisible by $7$.  
So $X$ will be divisible by $7$ if and only if the second addend is divisible by $7$.
Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $7$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $7$




