# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Injection/Definition_1_iff_Definition_2



Theorem
The following definitions of the concept of Injection are equivalent:

Definition 1
A mapping $f$ is an injection, or injective if and only if:

$\forall x_1, x_2 \in \Dom f: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$

That is, an injection is a mapping such that the output uniquely determines its input.

Definition 2
An injection is a relation which is both one-to-one and left-total.


Proof
Let $f: S \to T$ be an injection by definition 1.
Thus:

$(1): \quad \forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
Let $y \in T: y = \map f {x_1} = \map f {x_2}$.
Thus $(1)$ can be rewritten in the language of relations as:

$\forall x_1, x_2 \in S: \tuple {x_1, y} \in f \land \tuple {x_2, y} \in f \implies x_1 = x_2$
So, by definition, $f$ is a one-to-many relation.

By definition, $f$ is also mapping.
So, by definition, $f$ is a relation which is both many-to-one and left-total.
A relation which is both many-to-one and one-to-many is by definition a one-to-one relation.
Thus $f$ is a relation which is one-to-one and left-total.
So $f$ is an injection by definition 2.
$\Box$

Let $f: S \to T$ be an injection by definition 2.
That is, $f$ is a relation which is one-to-one and left-total.
A one-to-one relation is a relation which is both many-to-one and one-to-many.
So $f$ is a relation which is both many-to-one and left-total.
Thus $f$ is a mapping which is one-to-many:

$\forall x_1, x_2 \in S: \tuple {x_1, y} \in f \land \tuple {x_2, y} \in f \implies x_1 = x_2$
Setting $y = \map f {x_1} = \map f {x_2}$:

$\forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
So $f$ is an injection by definition 1.
$\blacksquare$





