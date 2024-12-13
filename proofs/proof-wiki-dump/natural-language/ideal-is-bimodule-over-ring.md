# 

Source: https://proofwiki.org/wiki/Ideal_is_Bimodule_over_Ring



Theorem
Let $\struct {R, +, \times}$ be a ring.
Let $J \subseteq R$ be an ideal of $R$.
Let $\circ_l : R \times J \to J$ be the restriction of $\times$ to $R \times J$.
Let $\circ_r : J \times R \to J$ be the restriction of $\times$ to $J \times R$.

Then $\struct {J, +, \circ_l, \circ_r}$ is a bimodule over $\struct {R, +, \times}$.


Corollary
Let $\struct {R, +, \times}$ be a ring.

Then $\struct {R, +, \times, \times}$ is a bimodule over $\struct {R, +, \times}$.


Proof
By definition of an ideal, $J$ is both a left ideal and a right ideal.
From Left Ideal is Left Module over Ring then $\struct {J, +, \circ_l}$ is a left module.
From Right Ideal is Right Module over Ring then $\struct {J, +, \circ_r}$ is a right module.
Then:










\(\ds \forall x, y \in R: \forall j \in J: \, \)



\(\ds \paren {x \circ_l j} \circ_r y\)

\(=\)







\(\ds \paren {x \times j} \times y\)





Definition of $\circ_l$ and $\circ_r$














\(\ds \)

\(=\)







\(\ds x \times \paren {j \times y}\)





Ring Axiom $\text M1$: Associativity of Product














\(\ds \)

\(=\)







\(\ds x \circ_l \paren {j \circ_r y}\)





Definition of $\circ_l$ and $\circ_r$




Hence $\struct {J, +, \circ_l, \circ_r}$ is a bimodule over $\struct {R, +, \times}$ by definition.
$\blacksquare$


Also see
Ring is Bimodule over Ring


Sources
2003: P.M. Cohn: Basic Algebra: Groups, Rings and Fields ... (previous) ... (next): Chapter $4$: Rings and Modules: $\S 4.1$: The Definitions Recalled




