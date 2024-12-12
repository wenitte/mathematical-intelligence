# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Injection/Definition_1_iff_Definition_5



Theorem
The following definitions of the concept of Injection are equivalent:

Definition 1
A mapping $f$ is an injection, or injective if and only if:

$\forall x_1, x_2 \in \Dom f: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$

That is, an injection is a mapping such that the output uniquely determines its input.

Definition 5
Let $f: S \to T$ be a mapping where $S \ne \O$.
Then $f$ is an injection if and only if:

$\exists g: T \to S: g \circ f = I_S$
where $g$ is a mapping.

That is, if and only if $f$ has a left inverse.


Proof
This is demonstrated in Injection iff Left Inverse.
$\blacksquare$





