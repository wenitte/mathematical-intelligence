# 

Source: https://proofwiki.org/wiki/Partition_of_Indexing_Set_induces_Bijection_on_Family_of_Sets/Lemma

Theorem
Let $I$ be an indexing set.
Let $\family {S_\alpha}_{\alpha \mathop \in I}$ be a family of sets indexed by $I$.
Let $I = I_1 \cup I_2$ such that $I_1 \cap I_2 = \O$.

Then there exists a bijection:

$\ds \psi: \paren {\prod_{\alpha \mathop \in I_1} S_\alpha} \times \paren {\prod_{\alpha \mathop \in I_2} S_\alpha} \to \prod_{\alpha \mathop \in I} S_\alpha$


Proof
Let us define the mapping:

$\ds \psi: \paren {\prod_{\alpha \mathop \in I_1} S_\alpha} \times \paren {\prod_{\alpha \mathop \in I_2} S_\alpha} \to \prod_{\alpha \mathop \in I} S_\alpha$
$\psi$ can be injective if and only if:

$\map \psi a = \map \psi {a'} \implies a = a'$
where $\ds a, a' \in \paren {\prod_{\alpha \mathop \in I_1} S_\alpha} \times \paren {\prod_{\alpha \mathop \in I_2} S_\alpha}$

We can define a projection $\pr_1$:

$\ds \pr_1: \paren {\prod_{\alpha \mathop \in I_1} S_\alpha} \times \paren {\prod_{\alpha \mathop \in I_2} S_\alpha} \to \prod_{\alpha \mathop \in I_1} S_\alpha$
so that for $\ds X \in \paren {\prod_{\alpha \mathop \in I_1} S_\alpha} \times \paren {\prod_{\alpha \mathop \in I_2} S_\alpha}, X = \tuple {X_1, X_2}$:

$\map {\pr_1} X = X_1$
and similarly a projection $\pr_2$:

$\ds \pr_2: \paren {\prod_{\alpha \mathop \in I_1} S_\alpha} \times \paren {\prod_{\alpha \mathop \in I_2} S_\alpha} \to \prod_{\alpha \mathop \in I_2} S_\alpha$
so that for $\ds X \in \paren {\prod_{\alpha \mathop \in I_1} S_\alpha} \times \paren {\prod_{\alpha \mathop \in I_2} S_\alpha}, X = \tuple {X_1, X_2}$:

$\map {\pr_2} X = X_2$
From these we can build $\psi$ so that for $I_1 = \set {\alpha: \alpha \in I_1}$ and $I_2 = \set {\alpha: \alpha \in I_2}$:

$\ds \map \psi {\mathbf x} = \paren {\prod_{\alpha \mathop \in I_1} \map {\psi_\alpha} {x_\alpha} } \times \paren {\prod_{\alpha \mathop \in I_2} \map {\psi_\alpha} {x_\alpha} }$
as $\psi$ uniquely sets all components of $\map {\pr_1} X$ and $\map {\pr_2} X$.
These in turn uniquely set the $2$ components of $X$.
That is:

$\map f X = \map f {X'} \implies X = X'$
Surjection follows trivially.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 10$: Arbitrary Products: Exercise $3$




