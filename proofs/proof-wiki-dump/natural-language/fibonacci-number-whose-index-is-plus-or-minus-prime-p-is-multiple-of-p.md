# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_whose_Index_is_Plus_or_Minus_Prime_p_is_Multiple_of_p

Theorem
Let $p$ be a prime number distinct from $5$.
Let $F_n$ denote the $n$th Fibonacci number.

Then either $F_{p - 1}$ or $F_{p + 1}$ (but not both) is a multiple of $p$.


Proof
First we consider the edge cases:
For $p = 2$ we have that:

$F_{2 + 1} = F_3 = 2$ which is a multiple of $2$.
$F_{2 - 1} = F_1 = 1$ which is not a multiple of $2$.
For $p = 3$ we have that:

$F_{3 + 1} = F_4 = 3$ which is a multiple of $3$.
$F_{3 - 1} = F_2 = 1$ which is not a multiple of $3$.

Let $p$ be an odd prime.
From Cassini's Identity:

$(1): \quad F_{p - 1} F_{p + 1} - {F_p}^2 = \left({-1}\right)^p = -1$

Then:














\(\ds F_p\)

\(\equiv\)







\(\ds 5^{\left({p - 1}\right) / 2}\)

\(\ds \pmod p\)



Fibonacci Number with Prime Index 2n+1 is Congruent to 5^n Modulo p








\(\ds \leadsto \ \ \)





\(\ds {F_p}^2\)

\(\equiv\)







\(\ds 5^{p - 1}\)

\(\ds \pmod p\)












\(\ds \leadsto \ \ \)





\(\ds {F_p}^2\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod p\)



Fermat's Little Theorem, as long as $p \ne 5$








\(\ds \leadsto \ \ \)





\(\ds F_{p - 1} F_{p + 1}\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)



from $(1)$ above



Hence either $F_{p - 1}$ or $F_{p + 1}$ is a multiple of $p$.
But as $F_{p + 1} = F_p + F_{p - 1}$, only one of them can be.

Finally, note that if $p = 5$:

$F_{5 + 1} = F_6 = 8$ which is not a multiple of $5$.
$F_{5 - 1} = F_4 = 3$ which is not a multiple of $5$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $27$




