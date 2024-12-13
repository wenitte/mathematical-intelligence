# 

Source: https://proofwiki.org/wiki/Power_of_Product_of_Commutative_Elements_in_Group



Theorem
Let $\struct {G, \circ}$ be a group.
Let $a, b \in G$.

Then:

$a \circ b = b \circ a \iff \forall n \in \Z: \paren {a \circ b}^n = a^n \circ b^n$

That is:

$a$ and $b$ commute
if and only if:

the product of their powers equals the power of their product:

This can be expressed in additive notation in the group $\struct {G, +}$ as:

$a + b = b + a \iff \forall n \in \Z: n \cdot \paren {a + b} = \paren {n \cdot a} + \paren {n \cdot b}$


Proof
Necessary Condition
Let $a \circ b = b \circ a$.
By definition, all elements of a group are invertible.
Therefore the results in Power of Product of Commutative Elements in Monoid can be applied directly.
$\Box$


Sufficient Condition
If $\paren {a \circ b}^n = a^n \circ b^n$ for all $n$, then it certainly holds for $n = 2$:














\(\ds \paren {a \circ b}^2\)

\(=\)







\(\ds a^2 \circ b^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b} \circ \paren {a \circ b}\)

\(=\)







\(\ds \paren {a \circ a} \circ \paren {b \circ b}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a^{-1} \circ a} \circ b \circ a \circ \paren {b \circ b^{-1} }\)

\(=\)







\(\ds \paren {a^{-1} \circ a} \circ a \circ b \circ \paren {b \circ b^{-1} }\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds e \circ b \circ a \circ e\)

\(=\)







\(\ds e \circ a \circ b \circ e\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds b \circ a\)

\(=\)







\(\ds a \circ b\)





Group Axiom $\text G 2$: Existence of Identity Element



$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(2)$ Groups of order $21$: Proposition $12.2$




