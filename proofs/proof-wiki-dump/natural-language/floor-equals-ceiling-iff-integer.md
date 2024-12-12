# 

Source: https://proofwiki.org/wiki/Floor_equals_Ceiling_iff_Integer

Theorem
Let $x \in \R$ be a real number.
Let $\floor x$ denote the floor of $x$, and $\ceiling x$ denote the ceiling of $x$.

Then:

$\floor x = \begin {cases}
\ceiling x & : x \in \Z \\
\ceiling x - 1 & : x \notin \Z \\
\end {cases}$
or equivalently:

$\ceiling x = \begin {cases}
\floor x & : x \in \Z \\
\floor x + 1 & : x \notin \Z \\
\end {cases}$
where $\Z$ is the set of integers.


Proof
From Real Number is Integer iff equals Floor:

$x \in \Z \implies x = \floor x$
From Real Number is Integer iff equals Ceiling:

$x \in \Z \implies x = \ceiling x$
So:

$x \in \Z \implies \floor x = \ceiling x$

Now let $x \notin \Z$.
From the definition of the floor function:

$\floor x = \map \sup {\set {m \in \Z: m \le x} }$
From the definition of the ceiling function:

$\ceiling x = \map \inf {\set {m \in \Z: m \ge x} }$

Thus:

$\floor x < x < \ceiling x$
Hence the result, from the definition of $\inf$ and $\sup$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): integer part
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): integer part




