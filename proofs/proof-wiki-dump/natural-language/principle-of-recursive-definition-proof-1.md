# 

Source: https://proofwiki.org/wiki/Principle_of_Recursive_Definition/Proof_1

Theorem
Let $\N$ be the natural numbers.
Let $T$ be a class (which may be a set).
Let $a \in T$.
Let $g: T \to T$ be a mapping.

Then there exists exactly one mapping $f: \N \to T$ such that:

$\forall x \in \N: \map f x = \begin{cases}
a & : x = 0 \\
\map g {\map f n} & : x = n + 1
\end{cases}$


Proof
Consider $\N$ defined as a Peano structure $\struct {P, 0, s}$.
The result follows from Principle of Recursive Definition for Peano Structure.
$\blacksquare$





