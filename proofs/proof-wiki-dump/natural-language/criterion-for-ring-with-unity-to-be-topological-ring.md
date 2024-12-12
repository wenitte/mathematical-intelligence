# 

Source: https://proofwiki.org/wiki/Criterion_for_Ring_with_Unity_to_be_Topological_Ring


This article needs to be linked to other articles.In particular: categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\struct {R, +, \circ}$ be a ring with unity.
Let $\tau$ be a topology over $R$.
Suppose that $+$ and $\circ$ are $\tau$-continuous mappings.

Then $\struct {R, +, \circ, \tau}$ is a topological ring.


Proof
As we presume $\circ$ to be continuous, we need only prove that $\struct {R, +, \tau}$ is a topological group.
As we presume $+$ to be continuous, we need only show that negation is continuous.

As $\struct {R, \circ}$ is a semigroup and $\circ$ is continuous:

$\struct{R, \circ, \tau}$ is a topological semigroup.
From Identity Mapping is Homeomorphism, the identity mapping $I_R : \struct {R, \tau} \to \struct {R, \tau}$ is continuous.
From Multiple Rule for Continuous Mappings to Topological Semigroup, the mapping $\paren{- 1_R} \circ I_R : R \to R$ defined by:

$\forall b \in R : \map {\paren {\paren {-1_R} \circ I_R} } b = \paren {-1_R} \circ b$
is continuous.
From Product with Ring Negative, for each $b \in R : -b = \paren {-1_R} \circ b$.
Hence negation is continuous.
$\blacksquare$





