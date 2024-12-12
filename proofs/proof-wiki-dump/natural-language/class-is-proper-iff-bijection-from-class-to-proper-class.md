# 

Source: https://proofwiki.org/wiki/Class_is_Proper_iff_Bijection_from_Class_to_Proper_Class



Theorem
Let $A$ be a class.
Let $\mathrm P$ be a proper class.

Then $A$ is proper if and only if there exists a bijection from $A$ to $\mathrm P$.


Corollary
$A$ is proper if and only if there exists a bijection from $P$ to $A$.


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.


Necessary Condition
Suppose that $A$ is a proper class.

Then by the Axiom of Limitation of Size there exists a bijection $f: A \to \mathrm U$, where $\mathrm U$ is the universal class.
There also exists a bijection $g: \mathrm P \to \mathrm U$.
By Inverse of Bijection is Bijection, there exists a bijection $g^{-1}: \mathrm U \to \mathrm P$

From Composite of Bijections is Bijection, it follows that $f \circ g^{-1}: A \to \mathrm P$ is a bijection.
$\Box$


Sufficient Condition
Suppose that there exists a bijection $f: A \to \mathrm P$.
Because $\mathrm P$ is a proper class, it follows from the Axiom of Limitation of Size that there exists a bijection $g: \mathrm P \to \mathrm U$.

Then by Composite of Bijections is Bijection, $f \circ g: A \to \mathrm U$ is a bijection from $A$ to the universe.
And so by the Axiom of Limitation of Size, $A$ is proper.

Hence the result.
$\blacksquare$





