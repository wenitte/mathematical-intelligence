# 

Source: https://proofwiki.org/wiki/Partition_of_Indexing_Set_induces_Bijection_on_Family_of_Sets

Theorem
Let $I$ be an indexing set.
Let $\family {S_\alpha}_{\alpha \mathop \in I}$ be a family of sets indexed by $I$.
Let $\family {I_\gamma}_{\gamma \mathop \in J}$ be a partitioning of $I$.

Then there exists a bijection:

$\ds \phi: \prod_{\gamma \mathop \in J} \paren {\prod_{\alpha \mathop \in I_\gamma} S_\alpha} \to \prod_{\alpha \mathop \in I} S_\alpha$


Proof
First a lemma:
Let $I$ be an indexing set.
Let $\family {S_\alpha}_{\alpha \mathop \in I}$ be a family of sets indexed by $I$.
Let $I = I_1 \cup I_2$ such that $I_1 \cap I_2 = \O$.

Then there exists a bijection:

$\ds \psi: \paren {\prod_{\alpha \mathop \in I_1} S_\alpha} \times \paren {\prod_{\alpha \mathop \in I_2} S_\alpha} \to \prod_{\alpha \mathop \in I} S_\alpha$
$\Box$

We can define a projection $\pr_\gamma$:

$\ds \pr_\gamma: \prod_{\gamma \mathop \in J} \paren {\prod_{\alpha \mathop \in I_\gamma} S_\alpha} \to \prod_{\alpha \mathop \in I_\gamma} S_\alpha$
so that for $\ds X \in \prod_{\gamma \mathop \in J} \paren {\prod_{\alpha \mathop \in I_\gamma} S_\alpha}, X = \family {X_\gamma}_{\gamma \mathop \in J}$:

$\map {\pr_\gamma} X = X_\gamma$

From the lemma we can build $\phi$ so that for $I_\gamma = \set {\alpha: \alpha \in I_\gamma}$:

$\ds \map \phi {\mathbf x} = \prod_{\gamma \mathop \in J} \paren {\prod_{\alpha \mathop \in I_\gamma} \map {\psi_\alpha} {x_\alpha} }$
as $\phi$ uniquely sets all components of $\map {\pr_\gamma} X$ for all $\gamma$.
The result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 10$: Arbitrary Products: Exercise $3$




