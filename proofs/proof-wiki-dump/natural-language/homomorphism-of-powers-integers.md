# 

Source: https://proofwiki.org/wiki/Homomorphism_of_Powers/Integers

Theorem
Let $\struct {T_1, \odot}$ and $\struct {T_2, \oplus}$ be monoids.
Let $\phi: \struct {T_1, \odot} \to \struct {T_2, \oplus}$ be a (semigroup) homomorphism.
Let $a$ be an invertible element of $T_1$.
Let $n \in \Z$.
Let $\odot^n$ and $\oplus^n$ be as defined as in Index Laws for Monoids.

Then:

$\forall n \in \Z: \map \phi {\map {\odot^n} a} = \map {\oplus^n} {\map \phi a}$


Proof
By Homomorphism of Powers: Natural Numbers, we need show this only for negative $n$, that is:

$\forall n \in \N^*: \map \phi {\map {\odot^{-n} } a} = \map {\oplus^{-n} } {\map \phi a}$
But by Homomorphism with Identity Preserves Inverses:

$\map \phi {a^{-1} } = \paren {\map \phi a}^{-1}$
Hence by Homomorphism of Powers: Natural Numbers:

$\map {\oplus^{-n} } {\map \phi a} = \map {\oplus^n} {\map \phi {a^{-1} } } = \map \phi {\map {\odot^n} {a^{-1} } } = \map \phi {\map {\odot^{-n} } a}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.13$




