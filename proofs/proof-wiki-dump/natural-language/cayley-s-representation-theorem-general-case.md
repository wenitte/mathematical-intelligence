# 

Source: https://proofwiki.org/wiki/Cayley%27s_Representation_Theorem/General_Case



Theorem
Let $\struct {G, \cdot}$ be a group.

Then there exists a permutation group $P$ on some set $S$ such that:

$G \cong P$
That is, such that $G$ is isomorphic to $P$.


Proof
Let $G$ be a group and let $a \in G$.
Consider the left regular representation $\lambda_a: G \to G$ defined as:

$\map {\lambda_a} x = a \cdot x$
From Regular Representations in Group are Permutations we have that $\lambda_a$ is a permutation.
Now let $b \in G$ and consider $\lambda_b: G \to G$ defined as:

$\map {\lambda_b} x = b \cdot x$
From the Cancellation Laws it follows that $\lambda_a \ne \lambda_b \iff a \ne b$.

Let $H = \set {\lambda_x: x \in G}$.
Consider the mapping $\Phi: G \to H$ defined as:

$\forall a \in G: \map \Phi a = \lambda_a$
From the above we have that $\Phi$ is a bijection.

Let $a, b \in G$.
From Composition of Regular Representations we have that:

$\lambda_a \circ \lambda_b = \lambda_{a \cdot b}$
where $\circ$ denotes composition of mappings.
That is, $\Phi$ has the morphism property.
Thus $\Phi$ is seen to be a group isomorphism.

We also have that:

$\paren {\lambda_a}^{-1} = \lambda_\paren {a^{-1} }$
because:

$\lambda_a \circ \paren {\lambda_a}^{-1} = \lambda_\paren {a \cdot a^{-1} }$

Hence the set of left regular representations $\set {\lambda_x: x \in G}$ is a group which is isomorphic to $G$.
$\blacksquare$


Also known as
Cayley's Representation Theorem is also known as the Representation Theorem for Groups.
Some present it as the Cayley Representation Theorem.
Some sources refer to it as just Cayley's Theorem, but as there is more than one result so named, it is better to use the more specific form.


Source of Name
This entry was named for Arthur Cayley.


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.6$: Theorem $1.6$
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.5$: Theorem




