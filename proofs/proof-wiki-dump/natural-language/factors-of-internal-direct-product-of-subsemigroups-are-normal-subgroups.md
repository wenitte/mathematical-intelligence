# 

Source: https://proofwiki.org/wiki/Factors_of_Internal_Direct_Product_of_Subsemigroups_are_Normal_Subgroups

Theorem
Let $\struct {G, \odot}$ be a group.
Let $\struct {H, \odot_H}$ and $\struct {K, \odot_K}$ be subsemigroups of $\struct {G, \odot}$.
Let $\struct {G, \odot}$ be the internal direct product of $\struct {H, \odot_H}$ and $\struct {K, \odot_K}$.

Then $\struct {H, \odot_H}$ and $\struct {K, \odot_K}$ are normal subgroups of $\struct {G, \odot}$.


Proof
Let $\struct {G, \odot}$ be the internal direct product of $\struct {H, \odot_H}$ and $\struct {K, \odot_K}$.
Let $e$ denote the identity element of $\struct {G, \odot}$.

By definition of internal direct product, the mapping $\phi: H \times K \to G$ defined as:

$\forall h \in H, k \in K: \map \phi {h, k} = h \odot k$
is an isomorphism from the (external) direct product $\struct {H, \odot {\restriction_H} } \times \struct {K, \odot {\restriction_K} }$ onto $\struct {G, \odot}$.
Let the symbol $\odot$ also be used for the operation induced on $H \times K$ by $\odot {\restriction_H}$ and $\odot {\restriction_K}$.

From Condition for Mapping between Structure and Cartesian Product of Substructures to be Bijection:

every element of $G$ can be expressed uniquely as a product of the form $h \odot k$ such that $\tuple{h, k} \in H \times K$.
Hence:

$G = \set {h \odot k: h \in H, k \in K}$
and so by definition of subset product:

$G = H \odot K$
$\Box$

Suppose $x \in H \cap K$.
We have:














\(\ds x = x \odot e\)

\(:\)







\(\ds x \in H, e \in K\)




















\(\ds x = e \odot x\)

\(:\)







\(\ds e \in H, x \in K\)










Thus we see that:














\(\ds \map \phi {x, e}\)

\(=\)







\(\ds \map \phi {e, x}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, e}\)

\(=\)







\(\ds \tuple {e, x}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds e\)










Thus:

$H \cap K = \set e$
$\Box$

In the following, the term unique representation of $x \in G$ will be used specifically to mean:

the a priori unique representation $x = a \odot b$ where $a \in H$ and $b \in K$.
First we note that:

$e \odot e = e$
is the unique representation of $e \in G$.

Let $h \in H$ be arbitrary.
Now consider $h^{-1} \in G$.
Let its unique representation be $x \odot y$.
Then we have:














\(\ds h\)

\(\in\)







\(\ds H\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds h \odot e\)

\(=\)







\(\ds h\)





is the unique representation of $h \in G$, as $e \in K$














\(\ds e\)

\(=\)







\(\ds \paren {h \odot e} \odot \paren {x \odot y}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {h \odot x} \odot y\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \paren {h \odot x}\)

\(=\)







\(\ds e\)





a priori: $e \odot e$ is the unique representation of $e$








\(\ds \land \ \ \)





\(\ds y\)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds h^{-1}\)




















\(\ds \)

\(\in\)







\(\ds H\)









Thus we see that:

$h \in H \implies h^{-1} \in H$

Similarly, let $k \in K$ be arbitrary.
Now consider $k^{-1} \in G$.
Let its unique representation be $x \odot y$.
Then we have:














\(\ds k\)

\(\in\)







\(\ds K\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds e \odot k\)

\(=\)







\(\ds k\)





is the unique representation of $k \in G$, as $e \in K$














\(\ds e\)

\(=\)







\(\ds \paren {x \odot y} \odot \paren {e \odot k}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds x \odot \paren {y \odot k}\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \paren {y \odot k}\)

\(=\)







\(\ds e\)





a priori: $e \odot e$ is the unique representation of $e$








\(\ds \land \ \ \)





\(\ds x\)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds k^{-1}\)




















\(\ds \)

\(\in\)







\(\ds K\)









Thus we see that:

$k \in K \implies k^{-1} \in K$

Now suppose $a, b \in H$.
We have:














\(\ds a \odot b\)

\(=\)







\(\ds \paren {a \odot e} \odot \paren {b \odot e}\)





where $a \odot e$ and $b \odot e$ are the unique representations of $a$ and $b$














\(\ds \)

\(=\)







\(\ds \paren {a \odot \paren {e \odot b} } \odot e\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {a \odot b} \odot e\)





Group Axiom $\text G 2$: Existence of Identity Element



Hence $\paren {a \odot b} \odot e$ is the unique representation of $a \odot b \in G$.
It follows that $a \odot b \in H$.
Hence:

$a, b \in H \implies a \odot b \in H$
and $H$ is a subgroup of $G$ by the Two-Step Subgroup Test.
$\Box$

Now suppose $c, d \in K$.
We have:














\(\ds c \odot d\)

\(=\)







\(\ds \paren {e \odot c} \odot \paren {e \odot d}\)





where $e \odot c$ and $e \odot d$ are the unique representations of $c$ and $d$














\(\ds \)

\(=\)







\(\ds e \odot \paren {\paren {c \odot e} \odot d}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e \odot \paren {c \odot d}\)





Group Axiom $\text G 2$: Existence of Identity Element



Hence $e \odot \paren {c \odot d}$ is the unique representation of $c \odot d \in G$.
It follows that $c \odot d \in K$.
Hence:

$c, d \in K \implies c \odot d \in K$
and $K$ is a subgroup of $G$ by the Two-Step Subgroup Test.
$\Box$

Consolidating our gains, we have that:

$(1): \quad \struct {H, \odot {\restriction_H} }$ and $\struct {K, \odot {\restriction_K} }$ are subgroups of the group $\struct {G, \odot}$
$(2): \quad$ The mapping $\phi: H \times K \to G$ defined as:
$\forall h \in H, k \in K: \map \phi {h, k} = h \odot k$
is an isomorphism from the (external) direct product $\struct {H, \odot {\restriction_H} } \times \struct {K, \odot {\restriction_K} }$ onto $\struct {G, \odot}$.

It follows from the Internal Direct Product Theorem that:

$(1): \quad \struct {H, \circ {\restriction_H} }$ and $\struct {K, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$
$(2): \quad G$ is the subset product of $H$ and $K$, that is: $G = H \circ K$
$(3): \quad$ $H \cap K = \set e$ where $e$ is the identity element of $G$.
and the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.6$




