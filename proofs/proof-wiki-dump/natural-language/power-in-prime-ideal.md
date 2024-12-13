# 

Source: https://proofwiki.org/wiki/Power_in_Prime_Ideal



Theorem
Let $A$ be a commutative ring with unity.
Let $\mathfrak p \subseteq A$ be a prime ideal.
Let $n > 0$ be a natural number.
Then for all elements $a \in A$, if $a^n \in \mathfrak p$ then $a \in \mathfrak p$.


Proof
Proof by induction:

Basis for the Induction
Let $n = 1$.
By definition of Power of Element of Ring:

$a^1 = a$.
Hence $a \in \mathfrak p$.
$\Box$

Induction Hypothesis
This is the induction hypothesis:
Let $n > 1$.
$\forall k = 1, \ldots, n - 1, a^k \in \mathfrak p \implies a \in \mathfrak p$

Induction Step
This is the induction step:
By definition of Power of Element of Ring:

$a^n = a^{n - 1} \cdot a$.
Hence $a^{n - 1} \cdot a \in \mathfrak p$.
By definition of prime ideal:

$a^{n - 1} \cdot a \in \mathfrak p \implies a^{n - 1} \in \mathfrak p$ or $a \in \mathfrak p$.
If $a \in \mathfrak{p}$ then our claim is satisfied.
Otherwise, suppose $a^{n - 1} \in \mathfrak p$.
Then by the induction hypothesis:

$a^{n - 1} \in \mathfrak p \implies a \in \mathfrak p$.
By the Principle of Mathematical Induction, the theorem holds for all $n$.
$\blacksquare$





