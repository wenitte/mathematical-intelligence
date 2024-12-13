# 

Source: https://proofwiki.org/wiki/Injection_from_Proper_Class_to_Class

Theorem
Let $A$ be a class.
Let $P$ be a proper class.
Let $f: P \to A$ be an injection.

Then $A$ is proper.


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

Aiming for a contradiction, suppose $A$ is not proper.
Then it must be a set.

By Injection to Image is Bijection, it follows that the restriction $f \restriction_{P \times f \sqbrk P}$ is a bijection.
By the corollary of Class is Proper iff Bijection from Class to Proper Class, $f \sqbrk P$ is proper.

But since $f \sqbrk P \subseteq A$, this contradicts Subclass of Set is Set.
And so by contradiction, $A$ cannot be a set.
Therefore $A$ is proper.
$\blacksquare$





