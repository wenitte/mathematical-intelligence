# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Infinite_Cyclic_Group



Theorem
The following definitions of the concept of Infinite Cyclic Group are equivalent:

Definition 1
An infinite cyclic group is a cyclic group $G$ such that:

$\forall n \in \Z_{> 0}: n > 0 \implies \nexists a \in G, a \ne e: a^n = e$
Definition 2
An infinite cyclic group is a cyclic group $G$ such that:

$\forall a \in G, a \ne e: \forall m, n \in \Z: m \ne n \implies a^m \ne a^n$
where $e$ is the identity element of $G$.
That is, such that all the powers of $a$ are distinct.


Proof
$(1)$ implies $(2)$
Let $G = \gen g$ be an infinite cyclic group by definition 1.
Then by definition:

$(1): \quad \forall n \in \Z_{> 0}: n > 0 \implies \nexists a \in G, a \ne e: a^n = e$

Aiming for a contradiction, suppose:

$\exists a \in G: \exists m, n \in \Z, m \ne n: a^m = a^n$
Then by Equal Powers of Finite Order Element:

$\exists k \in \Z_{> 0}: k \divides \paren {m - n}$
such that:

$a^k = e$
As $m \ne n$, we have that $k \ge 1$.
This contradicts the condition $(1)$ for $G$ to be an infinite cyclic group.

From this contradiction we deduce that:

$\forall a \in G: \forall m, n \in \Z: m \ne n \implies a^m \ne a^n$

Thus $G$ is an infinite cyclic group by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $G = \gen g$ be an infinite cyclic group by definition 2.
Then by definition:

$\forall a \in G: \forall m, n \in \Z: m \ne n \implies a^m \ne a^n$

Aiming for a contradiction, suppose:

$\exists a \in G, a \ne e: \exists n \in \Z: a^n = e$
Then:

$a^{2 n} = a^n \circ a^n = e^2 = e = a^n$
That is:

$\exists n, 2 n \in \Z: n \ne 2 n: a^n = a^{2 n}$
and so it is not the case that:

$\forall a \in G: \forall m, n \in \Z: m \ne n \implies a^m \ne a^n$

From this contradiction we deduce that:

$\forall n \in \Z_{> 0}: n > 0 \implies \nexists a \in G, a \ne e: a^n = e$

Thus $G$ is an infinite cyclic group by definition 1.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.7$: Theorem $8$




