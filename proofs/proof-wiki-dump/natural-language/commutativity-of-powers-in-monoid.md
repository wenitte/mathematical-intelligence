# 

Source: https://proofwiki.org/wiki/Commutativity_of_Powers_in_Monoid

Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $a, b \in S$ be invertible elements for $\circ$ that also commute.
Then:

$\forall m, n \in \Z: a^m \circ b^n = b^n \circ a^m$


Proof
By Powers of Commuting Elements of Semigroup Commute, if $m > 0$ and $n > 0$ then $a^m$ commutes with $b^n$.
By Commutation with Inverse in Monoid, again if $m > 0$ and $n > 0$ then $a^m$ commutes with $\paren {b^n}^{-1} = b^{-n}$.
Similarly $b^n$ commutes with $a^{-m}$.
But as $a^{-m}$ commutes with $b^n$, it also commutes with $\paren {b^n}^{-1} = b^{-n}$, again by Commutation with Inverse in Monoid.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.11 \ (5)$




