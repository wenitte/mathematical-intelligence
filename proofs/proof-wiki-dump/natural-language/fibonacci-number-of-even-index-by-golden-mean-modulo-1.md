# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_of_Even_Index_by_Golden_Mean_Modulo_1

Theorem
Let $n \in \Z$ be an integer.

Then:

$F_{2 n} \phi \bmod 1 = 1 - \phi^{-2 n}$
$F_n$ denotes the $n$th Fibonacci number
$\phi$ is the golden mean: $\phi = \dfrac {1 + \sqrt 5} 2$


Proof
From definition of$\bmod 1$, the statement above is equivalent to the statement:

$F_{2 n} \phi - 1 + \phi^{-2 n}$ is an integer
We have:














\(\ds F_{2 n} \phi - 1 + \phi^{-2 n}\)

\(=\)







\(\ds -1 + F_{2 n + 1} - \hat \phi^{2 n} + \phi^{-2 n}\)





Fibonacci Number n+1 Minus Golden Mean by Fibonacci Number n














\(\ds \)

\(=\)







\(\ds -1 + F_{2 n + 1} - \paren {-1}^{2 n} \phi^{-2 n} + \phi^{-2 n}\)





Golden Mean by One Minus Golden Mean equals Minus 1














\(\ds \)

\(=\)







\(\ds -1 + F_{2 n + 1}\)









which is an integer.
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $31$




