# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Injection/Definition_1_iff_Definition_6



Theorem
The following definitions of the concept of Injection are equivalent:

Definition 1
A mapping $f$ is an injection, or injective if and only if:

$\forall x_1, x_2 \in \Dom f: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$

That is, an injection is a mapping such that the output uniquely determines its input.

Definition 6
Let $f: S \to T$ be a mapping where $S \ne \O$.
Then $f$ is an injection if and only if $f$ is left cancellable:

$\forall X: \forall g_1, g_2: X \to S: f \circ g_1 = f \circ g_2 \implies g_1 = g_2$
where $g_1$ and $g_2$ are arbitrary mappings from an arbitrary set $X$ to the domain $S$ of $f$.


Proof
This is demonstrated in Injection iff Left Cancellable.
$\blacksquare$





