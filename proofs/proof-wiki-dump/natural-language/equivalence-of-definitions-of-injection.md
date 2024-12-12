# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Injection



Theorem
The following definitions of the concept of Injection are equivalent:

Definition 1
A mapping $f$ is an injection, or injective if and only if:

$\forall x_1, x_2 \in \Dom f: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$

That is, an injection is a mapping such that the output uniquely determines its input.

Definition 1 a
$\forall x_1, x_2 \in \Dom f: x_1 \ne x_2 \implies \map f {x_1} \ne \map f {x_2}$
Definition 2
An injection is a relation which is both one-to-one and left-total.

Definition 3
Let $f$ be a mapping.
Then $f$ is an injection if and only if:

$f^{-1} {\restriction_{\Img f} }: \Img f \to \Dom f$ is a mapping
where $f^{-1} {\restriction_{\Img f} }$ is the restriction of the inverse of $f$ to the image set of $f$.

Definition 4
Let $f$ be a mapping.
$f$ is an injection if and only if:

$\forall y \in \Img f: \card {\map {f^{-1} } y} = \card {\set {f^{-1} \sqbrk {\set y} } } = 1$
where:

$\Img f$ denotes the image set of $f$
$\card {\, \cdot \,}$ denotes the cardinality of a set
$\map {f^{-1} } y$ is the preimage of $y$
$f^{-1} \sqbrk {\set y}$ is the preimage of the subset $\set y \subseteq \Img f$.
Definition 5
Let $f: S \to T$ be a mapping where $S \ne \O$.
Then $f$ is an injection if and only if:

$\exists g: T \to S: g \circ f = I_S$
where $g$ is a mapping.

That is, if and only if $f$ has a left inverse.

Definition 6
Let $f: S \to T$ be a mapping where $S \ne \O$.
Then $f$ is an injection if and only if $f$ is left cancellable:

$\forall X: \forall g_1, g_2: X \to S: f \circ g_1 = f \circ g_2 \implies g_1 = g_2$
where $g_1$ and $g_2$ are arbitrary mappings from an arbitrary set $X$ to the domain $S$ of $f$.


Proof
Definition $1$ iff Definition $1 \ \text{a}$
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


Definition $1$ iff Definition $2$
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


Definition $1$ iff Definition $3$
Let $f: S \to T$ be an injection by definition 1.
Thus:

$\forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
First we note that: 

$t \in \Img f \implies \exists x \in \Dom f: \map f x = t$
thus fulfilling the condition for $f^{-1} {\restriction_{\Img f} }$ to be left-total.

Now let:

$t \in \Img f: \tuple {t, y}, \tuple {t, z} \in f^{-1}$
Thus:














\(\ds \tuple {t, y}, \tuple {t, z}\)

\(\in\)







\(\ds f^{-1} {\restriction_{\Img f} }\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {y, t}, \tuple {z, t}\)

\(\in\)







\(\ds f\)





Definition of Inverse of Mapping








\(\ds \leadsto \ \ \)





\(\ds \map f y = t\)

\(=\)







\(\ds \map f z\)





Equality of Elements in Range of Mapping








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds z\)





as $f$ is injective




So by the definition of mapping, $f^{-1} {\restriction_{\Img f} }$ is a mapping.
So $f$ is an injection by definition 3.
$\Box$

Let $f: S \to T$ be an injection by definition 3.
Then:

$f^{-1} {\restriction_{\Img f} }: \Img f \to \Dom f$ is a mapping
where $f^{-1} {\restriction_{\Img f} }$ is the restriction of the inverse of $f$ to the image set of $f$.

We need to show that:

$\forall x, z \in \Dom f: \map f x = \map f z \implies x = z$
So, pick any $x, z \in \Dom f$ such that:

$\map f x = \map f z$
Then:














\(\ds \map f x\)

\(=\)







\(\ds \map f z\)














\(\ds \leadsto \ \ \)

\(\ds \exists y \in \Dom f: \, \)



\(\ds \tuple {x, y}, \tuple {z, y}\)

\(\in\)







\(\ds f\)





Definition of Mapping








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}, \tuple {y, z}\)

\(\in\)







\(\ds f^{-1} {\restriction_{\Img f} }\)





Definition of Inverse of Mapping








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds z\)





as it is specified that $f^{-1} {\restriction_{\Img f} }$ is a mapping




So $f$ is an injection by definition 1.
$\blacksquare$


Definition $1$ iff Definition $4$
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


Definition $1$ iff Definition $5$
This is demonstrated in Injection iff Left Inverse.
$\blacksquare$


Definition $1$ iff Definition $6$
This is demonstrated in Injection iff Left Cancellable.
$\blacksquare$





