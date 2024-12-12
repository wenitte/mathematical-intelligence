# 

Source: https://proofwiki.org/wiki/Floor_of_Negative_equals_Negative_of_Ceiling



Theorem
Let $x \in \R$ be a real number.
Let $\floor x$ be the floor of $x$, and $\ceiling x$ be the ceiling of $x$.
Then:

$\floor {-x} = -\ceiling x$


Proof
From Integer equals Ceiling iff between Number and One More we have:

$x \le \ceiling x < x + 1$
and so, by multiplying by -1:

$-x \ge -\ceiling x > -x - 1$
From Integer equals Floor iff between Number and One Less we have:

$\floor x = n \iff x - 1 < n \le x$
Hence:

$-x - 1 < -\ceiling x \le -x \implies \floor {-x} = -\ceiling x$
$\blacksquare$


Also see
Ceiling of Negative equals Negative of Floor


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $4$




