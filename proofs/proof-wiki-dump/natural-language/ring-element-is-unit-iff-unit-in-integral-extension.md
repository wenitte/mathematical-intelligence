# 

Source: https://proofwiki.org/wiki/Ring_Element_is_Unit_iff_Unit_in_Integral_Extension



Theorem
let $A$ be a commutative ring with unity.
Let $a \in A$.
Let $B$ be an integral ring extension of $A$.

The following statements are equivalent:

$(1): \quad a$ is a unit of $A$
$(2): \quad a$ is a unit of $B$


Proof
1 implies 2
Follows from Ring Homomorphism Preserves Units.
$\Box$


2 implies 1
Let $a$ be a unit of $B$.
Let $P \in A \sqbrk x$ be a monic polynomial with $\map P {1 / a} = 0$.
Let $n$ be its degree and $\map P x = x^n + \map Q x$.
Then $1 + a^n \map Q {1 / a} = 0$.
Note that $a^{n - 1} \map Q {1 / a} \in A$.
Thus $a$ is a unit of $A$, with inverse $-a^{n - 1} \map Q {1 / a}$.
$\blacksquare$





