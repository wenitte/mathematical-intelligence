# 

Source: https://proofwiki.org/wiki/Inverse_of_Many-to-One_Relation_is_One-to-Many

Theorem
The inverse of a many-to-one relation is a one-to-many relation, and vice versa.


Proof
From the definition, a many-to-one relation $\RR \subseteq S \times T$ is such that:

$\RR \subseteq S \times T: \forall x \in \Dom \RR: \tuple {x, y_1} \in \RR \land \tuple {x, y_2} \in \RR \implies y_1 = y_2$

Also from the definition, a one-to-many relation $\RR \subseteq S \times T$ is such that:

$\RR \subseteq S \times T: \forall y \in \Img \RR: \tuple {x_1, y} \in \RR \land \tuple {x_2, y} \in \RR \implies x_1 = x_2$

The inverse of a relation $\RR$ is defined as:

$\RR^{-1} = \set {\tuple {t, s}: \tuple {s, t} \in \RR$

Also from the definition of inverse relation, we have that:

$\Dom \RR = \Rng {\RR^{-1} }$
$\Rng \RR = \Dom {\RR^{-1} }$

So, let $\RR$ be a many-to-one relation.
Putting the above all together, we have:

$\RR^{-1} \subseteq T \times S: \forall x \in \Img {\RR^{-1} }: \tuple {y_1, x} \in \RR^{-1} \land \tuple {y_2, x} \in \RR^{-1} \implies y_1 = y_2$
and it can be seen that $\RR^{-1}$ is one-to-many.

Similarly, let $\RR$ be a one-to-many relation.
This gives us:

$\RR^{-1} \subseteq T \times S: \forall y \in \Dom {\RR^{-1} }: \tuple {y, x_1} \in \RR^{-1} \land \tuple {y, x_2} \in \RR^{-1} \implies x_1 = x_2$
and it can be seen that $\RR^{-1}$ is many-to-one.
$\blacksquare$





