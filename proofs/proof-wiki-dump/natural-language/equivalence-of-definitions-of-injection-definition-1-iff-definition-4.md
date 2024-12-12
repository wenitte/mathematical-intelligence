# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Injection/Definition_1_iff_Definition_4



Theorem
The following definitions of the concept of Injection are equivalent:

Definition 1
A mapping $f$ is an injection, or injective if and only if:

$\forall x_1, x_2 \in \Dom f: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$

That is, an injection is a mapping such that the output uniquely determines its input.

Definition 4
Let $f$ be a mapping.
$f$ is an injection if and only if:

$\forall y \in \Img f: \card {\map {f^{-1} } y} = \card {\set {f^{-1} \sqbrk {\set y} } } = 1$
where:

$\Img f$ denotes the image set of $f$
$\card {\, \cdot \,}$ denotes the cardinality of a set
$\map {f^{-1} } y$ is the preimage of $y$
$f^{-1} \sqbrk {\set y}$ is the preimage of the subset $\set y \subseteq \Img f$.


Proof
Let $f: S \to T$ be an injection by definition 1.
Thus:

$\forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$

Aiming for a contradiction, suppose $f^{-1} \sqbrk {\set y}$ has more than one element.
That is:

$\exists y \in T: x_1, x_2 \in \map {f^{-1} } y, x_1 \ne x_2$
Then we have:

$\map f {x_1} = \map f {x_2}$
but:

$x_1 \ne x_2$
This contradicts our initial hypothesis that $f$ is an injection by definition 1.
From this contradiction it follows that $f^{-1} \sqbrk {\set y}$ has no more than one element.
That is, $f$ is an injection by definition 4.
$\Box$

Let $f: S \to T$ be an injection by definition 4.
That is, let $\map {f^{-1} } y$ be a singleton for all $y \in T$.
Aiming for a contradiction, suppose it is not the case that:

$\forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
Then by definition:

$\exists x_1, x_2 \in S, x_1 \ne x_2: \map f {x_1} = \map f {x_2} = y$
By definition of preimage of $y \in T$:

$x_1 \in \map {f^{-1} } y, x_2 \in \map {f^{-1} } y$
and so:
$\set {x_1, x_2} \subseteq \map {f^{-1} } y$
Thus $\map {f^{-1} } y$ has more than one element for at least one $y \in T$.
This contradicts our initial hypothesis that $f$ is an injection by definition 4.
Thus:

$\forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
So $f$ is an injection by definition 1.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.5$: Identity, One-one, and Onto Functions: Proposition $\text{A}.5.1: 1 \ \text{(b)}$




