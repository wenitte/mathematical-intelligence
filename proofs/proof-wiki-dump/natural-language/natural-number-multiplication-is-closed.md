# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Closed

Theorem
Let $m$ and $n$ be natural numbers.

Then:

$m \times n \in \N$
where $\times$ denotes natural number multiplication.


Proof
Let $g: \N \to \N$ be defined by:

$\map g n = m + n$
Applying the Principle of Recursive Definition to $0$ and $g$, we get the following function $f: \N \to \N$:

$\map f n = \begin{cases} 0 & : n = 0 \\ m + \map f k & : n = k + 1 \end{cases}$
which is seen to be equivalent to $m \times n$ for all $m,n \in \N$.
Hence $m \times n \in \N$.
$\blacksquare$


Sources
1937: Richard Courant: Differential and Integral Calculus: Volume $\text { I }$ (2nd ed.) ... (previous) ... (next): Chapter $\text I$: Introduction: $1$. The Continuum of Numbers: $1$. The System of Rational Numbers and the Need for its Extension
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.1$. Subsets closed to an operation: Example $88$
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.17$
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $1$: Numbers: Real Numbers: $1$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): Chapter $1$: Complex Numbers: The Real Number System: $1$




