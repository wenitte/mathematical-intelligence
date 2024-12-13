# 

Source: https://proofwiki.org/wiki/Natural_Numbers_are_Infinite

Theorem
The set $\N$ of natural numbers is infinite.


Proof
Let the mapping $s: \N \to \N$ be defined as:

$\forall n \in \N: \map s n = n + 1$
$s$ is clearly an injection.
Aiming for a contradiction, suppose $\N$ were finite.
By Equivalence of Mappings between Finite Sets of Same Cardinality it follows that $s$ is a surjection.
But:

$\forall n \in \N: \map s n \ge 0 + 1 > 0$
So:

$0 \notin \Img s$
and $s$ is not a surjection.
From this contradiction it is seen that $\N$ cannot be finite.
So, by definition, $\N$ is infinite.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.4$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.8$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): infinite set
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): infinite set
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 1$ What is infinity?
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 6$: Finite Sets: Corollary $6.4$




