# 

Source: https://proofwiki.org/wiki/Composite_of_Continuous_Mappings_is_Continuous/Point

Theorem
Let $T_1, T_2, T_3$ be topological spaces.
Let the mapping $f : T_1 \to T_2$ be continuous at $x$.
Let the mapping $g : T_2 \to T_3$ be continuous at $\map f x$.
Then the composite mapping $g \circ f : T_1 \to T_3$ is continuous at $x$.


Proof
Let $N$ be any neighborhood of $\map {\paren {g \circ f} } x$.
By the definition of continuity at a point:

there exists a neighborhood $L$ of $\map f x$ such that $g \sqbrk L \subseteq N$
and

there exists a neighborhood $M$ of $x$ such that $f \sqbrk M \subseteq L$.
Thus $\paren {g \circ f} \sqbrk M \subseteq g \sqbrk L \subseteq N$, as desired.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): composite function (function of a function)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): composite function (function of a function)




