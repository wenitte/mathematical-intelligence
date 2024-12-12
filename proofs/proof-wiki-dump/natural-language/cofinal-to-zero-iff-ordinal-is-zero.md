# 

Source: https://proofwiki.org/wiki/Cofinal_to_Zero_iff_Ordinal_is_Zero



Theorem
Let $x$ be an ordinal.
Let $\operatorname{cof}$ denote the cofinal relation.
Let $0$ denote the zero ordinal.

Then the following are equivalent:

$\map {\operatorname{cof} } {x, 0}$
$\map {\operatorname{cof} } {0, x}$
$x = 0$


Proof
$\map {\operatorname{cof} } {x, 0} \implies x = 0$
If $\map {\operatorname{cof} } {x, 0}$, then there is a function $f : x \to 0$.
If $x \ne 0$, then $x$ has an element $a$.
But then, $\map f a \in 0$, which contradicts the definition of the empty set.
Therefore, $x = 0$.
$\Box$


$x = 0 \implies \map {\operatorname{cof} } {0, x}$
Follows directly from Cofinal Ordinal Relation is Reflexive.
$\Box$


$\map {\operatorname{cof} } {0, x} \implies \map {\operatorname{cof} } {x, 0}$
If $\map {\operatorname{cof} } {0, x}$, then $x \le 0$ by the definition of cofinal.
By Subset of Empty Set, $x = 0$.

$\map {\operatorname{cof} } {x, 0}$ follows directly from Cofinal Ordinal Relation is Reflexive.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.53 \ (1)$




