# 

Source: https://proofwiki.org/wiki/Ordinals_have_No_Zero_Divisors



Theorem
Let $x$ and $y$ be ordinals.

Then:

$\paren {x \cdot y} = 0 \iff \paren {x = 0 \lor y = 0}$


Proof
Necessary Condition
Suppose that $\paren {x \cdot y} = 0$ and that $x \ne 0$.
By Ordinal Multiplication by Zero:

$\paren {x \cdot 0} = 0$
Therefore:

$\paren {x \cdot y} = \paren {x \cdot 0}$

Thus, by Ordinal Multiplication is Left Cancellable, we have that $y = 0$.
$\Box$


Sufficient Condition
If $x = 0$, then by Leibniz's Rule:

$\paren {x \cdot y} = \paren {0 \cdot y}$
If $y = 0$, then also by Leibniz's Rule:

$\paren {x \cdot y} = \paren {x \cdot 0}$
By Ordinal Multiplication by Zero, both $\paren {0 \cdot y} = 0$ and $\paren {x \cdot 0} = 0$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.22$




