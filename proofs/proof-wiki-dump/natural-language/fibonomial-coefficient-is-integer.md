# 

Source: https://proofwiki.org/wiki/Fibonomial_Coefficient_is_Integer

Theorem
Let $\dbinom n k_\FF$ be a Fibonomial coefficient.

Then $\dbinom n k_\FF$ is an integer.


Proof
Recurrence Relation for Fibonomial Coefficients gives:

$\dbinom n k_\FF = F_{k - 1} \dbinom {n - 1} k_\FF + F_{n - k + 1} \dbinom {n - 1} {k - 1}_\FF$
where $F_{k - 1}$ etc. denote Fibonacci numbers.

It follows that each Fibonomial coefficient is the sum of integers, and so an integer.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $29 \ \text{(b)}$




