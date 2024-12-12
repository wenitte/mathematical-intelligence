# 

Source: https://proofwiki.org/wiki/Additive_Inverse_in_Ring_of_Continuous_Mappings


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\struct {R, +, *, \tau_{_R} }$ be a topological ring with zero $0_R$.
Let $\struct{\map C {S, R}, +, *}$ be the ring of continuous mappings from $S$ to $R$.
Let $f \in \map C {S, R}$.

Then:

the additive inverse of $f$ is the pointwise negation $-f$ defined by:
$\forall s \in S : \map {\paren{-f}} s = - \map f s$


Proof
Let $\struct {R^S, +, *}$ be the ring of mappings from $S$ to $R$.
From Ring of Continuous Mappings is Subring of All Mappings:

$\struct{\map C {S, R}, +, *}$ is a subring of $\struct {R^S, +, *}$
From Structure Induced by Ring Operations is Ring:

$\forall f \in R^S :$ the additive inverse of $f$ is the pointwise negation $-f$, defined by:
$\forall s \in S: \map {\paren {-f} } s := - \map f s$
The result follows.
$\blacksquare$


Also see
Ring of Continuous Mappings is Subring of All Mappings
Zero of Ring of Continuous Mappings
Unity of Ring of Continuous Mappings
Commutativity of Ring of Continuous Mappings




