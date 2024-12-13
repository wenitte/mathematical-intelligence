# 

Source: https://proofwiki.org/wiki/Intersection_of_Primitive_Recursive_Sets

Theorem
Let $A, B \subseteq \N$ be subsets of the set of natural numbers $\N$.
Let $A$ and $B$ both be primitive recursive.

Then $A \cap B$, the intersection of $A$ and $B$, is primitive recursive.


Proof
$A$ and $B$ are primitive recursive, therefore so are their [Definition:Characteristic Function of Set|characteristic functions]] $\chi_A$ and $\chi_B$.
Let $n \in \N$ be a natural number.
From Characteristic Function of Intersection: Variant 1:

$\chi_{A \cap B} \left({n}\right) = \chi_A \left({n}\right) \times \chi_B \left({n}\right)$
So:

$\chi_{A \cap B} \left({n}\right) = \operatorname{mult} \left({\chi_A \left({n}\right), \chi_B \left({n}\right)}\right)$

Thus $A \cap B$ is defined by substitution from the primitive recursive functions $\operatorname{mult}$, $\chi_A$ and $\chi_B$.
Hence the result.
$\blacksquare$





