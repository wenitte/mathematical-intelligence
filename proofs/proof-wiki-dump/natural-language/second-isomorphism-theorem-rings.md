# 

Source: https://proofwiki.org/wiki/Second_Isomorphism_Theorem/Rings



Theorem
Let $R$ be a ring, and let:

$S$ be a subring of $R$
$J$ be an ideal of $R$.

Then:

$(1): \quad S + J$ is a subring of $R$
$(2): \quad J$ is an ideal of $S + J$
$(3): \quad S \cap J$ is an ideal of $S$
$(4): \quad \dfrac S {S \cap J} \cong \dfrac {S + J} J$
where $\cong$ denotes group isomorphism.


Proof
The relations being defined can be illustrated by this commutative diagram:



$(1): \quad S + J$ is a subring of $R$
From Sum of All Ring Products is Additive Subgroup, $S + J$ is an additive subgroup of $R$.
Suppose $s, s' \in S, j, j' \in J$.
Then:

$\paren {s + j} \paren {s' + j'}$













\(\ds \paren {s + j} \paren {s' + j'}\)

\(=\)







\(\ds s s' + b{s j' + s' j + j j'}\)




















\(\ds \)

\(\in\)







\(\ds S + J\)





as $J$ is an ideal of $R$



so by the Subring Test $S + J$ is a subring of $R$.
$\Box$

$(2): \quad J$ is an ideal of $S + J$
Let $s + j \in S + J$ and let $j \in J$.
Then:














\(\ds \paren {s + j} j'\)

\(=\)







\(\ds s j + s j'\)




















\(\ds \)

\(\in\)







\(\ds J\)





as $s j, s j' \in J$ as $J$ is an ideal of $R$



So $J$ is an ideal of $S + J$.
$\Box$

$(3): \quad S \cap J$ is an ideal of $S$
Let $\nu: R \to R / J$ be the quotient epimorphism.
Let $\nu'$ be the restriction of $\nu$ to $S$.
Then $\nu': S \to R / J$ is a homomorphism.
The image of $\nu'$ is the set of all cosets $s + J$ for $s \in S$:

$\image {\nu'} = \dfrac {S + J} J$

Now, the kernel of $\nu'$ is the set of all elements of $S$ which are sent to $0_{S/J}$ by $\nu$.
That is, all the elements of $S$ which are also in $J$ itself, which is how the quotient ring behaves.
That is:

$\ker \paren {\nu'} = S \cap J$
and so from Kernel of Ring Homomorphism is Ideal, $S \cap J$ is an ideal of $S$.

$(4): \quad \dfrac S {S \cap J} \cong \dfrac {S + J} J$
This follows directly from the First Ring Isomorphism Theorem.
$\blacksquare$


Also known as
The Second Ring Isomorphism Theorem is also referred to by some sources as the First Ring Isomorphism Theorem.
There is little consistency in the literature.
It can also be called the Second Isomorphism Theorem for Rings.

Because of the shape of its commutative diagram, this theorem is sometimes known as the Parallelogram Law.
However, that name is usually applied to a result in vector algebra, so use in this context is not recommended.


Also see
Isomorphism Theorems


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms: Theorem $2.10$




