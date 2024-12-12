# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_with_Prime_Index_2n%2B1_is_Congruent_to_5%5En_Modulo_p

Theorem
Let $p = 2 n + 1$ be an odd prime.

Then:

$F_p \equiv 5^n \pmod p$


Proof
From Fibonacci Number by Power of 2:

$2^p F_p = 2 \ds \sum_{k \mathop \in \Z} \dbinom p {2 k + 1} 5^k$
From Binomial Coefficient of Prime:

$\forall k \in \Z: 0 < k < p: \dbinom p k \equiv 0 \pmod p$
and from Fermat's Little Theorem: Corollary 1:

$2^p \equiv 2 \pmod p$
Hence:














\(\ds 2^p F_p\)

\(\equiv\)







\(\ds 2 F_p\)

\(\ds \pmod p\)












\(\ds \leadsto \ \ \)





\(\ds 2 \sum_{k \mathop \in \Z} \dbinom p {2 k + 1} 5^k\)

\(\equiv\)







\(\ds 2 \times 5^n\)





as all $\dbinom p k \equiv 0 \pmod p$ except $\dbinom p p$








\(\ds \leadsto \ \ \)





\(\ds 2^p F_p\)

\(\equiv\)







\(\ds 2 \times 5^n\)

\(\ds \pmod p\)












\(\ds \leadsto \ \ \)





\(\ds F_p\)

\(\equiv\)







\(\ds 5^n\)

\(\ds \pmod p\)



because $p \perp 2$



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $26$




