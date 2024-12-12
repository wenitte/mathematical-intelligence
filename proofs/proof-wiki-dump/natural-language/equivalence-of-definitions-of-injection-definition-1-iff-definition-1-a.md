# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Injection/Definition_1_iff_Definition_1_a



Theorem
The following definitions of the concept of Injection are equivalent:

Definition 1
A mapping $f$ is an injection, or injective if and only if:

$\forall x_1, x_2 \in \Dom f: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$

That is, an injection is a mapping such that the output uniquely determines its input.

Definition 1 a
$\forall x_1, x_2 \in \Dom f: x_1 \ne x_2 \implies \map f {x_1} \ne \map f {x_2}$


Proof
Let $f: S \to T$ be an injection by definition 1.
Thus:

$\forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
Let $x_1 \ne x_2$.
Aiming for a contradiction, suppose that:

$\map f {x_1} = \map f {x_2}$
Then by definition 1:

$x_1 = x_2$
This contradicts the assumption that $x_1 \ne x_2$.
Thus by Proof by Contradiction:

$\forall x_1, x_2 \in S: x_1 \ne x_2 \implies \map f {x_1} \ne \map f {x_2}$
Thus $f$ is an injection by definition 1 a.
$\Box$

Let $f: S \to T$ be an injection by definition 1 a.
Thus:

$\forall x_1, x_2 \in S: x_1 \ne x_2 \implies \map f {x_1} \ne \map f {x_2}$
Let $\map f {x_1} = \map f {x_2}$.
Aiming for a contradiction, suppose that:

$x_1 \ne x_2$
Then by definition 1 a:

$\map f {x_1} \ne \map f {x_2}$
This contradicts the assumption that $\map f {x_1} = \map f {x_2}$.
Thus by Proof by Contradiction:

$\forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
Thus $f$ is an injection by definition 1.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.4$: Functions
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 22$: Injections; bijections; inverse of a bijection
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Definition $2.2$




