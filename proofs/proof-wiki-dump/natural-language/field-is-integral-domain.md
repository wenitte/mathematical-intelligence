# 

Source: https://proofwiki.org/wiki/Field_is_Integral_Domain


It has been suggested that this page or section be merged into Equivalence of Definitions of Field (Abstract Algebra).To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Every field is an integral domain.


Proof 1
Let $\struct {F, +, \circ}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Suppose $\exists x, y \in F: x \circ y = 0_F$.
Suppose $x \ne 0_F$.
Then, by the definition of a field, $x^{-1}$ exists in $F$ and:

$y = 1_F \circ y = x^{-1} \circ x \circ y = x^{-1} \circ 0_F = 0_F$.

Otherwise $x = 0_F$.
So if $x \circ y = 0_F$, either $x = 0_F$ or $y = 0_F$ as we were to show.
$\blacksquare$


Proof 2
This result follows directly from:

Field has no Proper Zero Divisors
By definition, that a field is a commutative ring.
$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): integral domain




