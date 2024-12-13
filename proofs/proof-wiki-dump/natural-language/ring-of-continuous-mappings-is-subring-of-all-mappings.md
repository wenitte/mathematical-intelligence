# 

Source: https://proofwiki.org/wiki/Ring_of_Continuous_Mappings_is_Subring_of_All_Mappings


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\struct {R, +, *, \tau_{_R} }$ be a topological ring.
Let $\struct {R^S, +, *}$ be the ring of mappings from $S$ to $R$.
Let $\struct{\map C {S, R}, +, *}$ be the ring of continuous mappings from $S$ to $R$.

Then:

$\struct{\map C {S, R}, +, *}$ is a subring of $\struct {R^S, +, *}$


Proof
From Structure Induced by Ring Operations is Ring:

$\struct {R^S, +, *}$ is a ring.

From Structure Induced by Ring Operations is Ring:

$\forall f \in R^S :$ the additive inverse of $f$ is the pointwise negation $-f$, defined by:
$\forall s \in S: \map {\paren {-f} } s := - \map f s$

From the Subring Test:

$\struct{\map C {S, R}, +, *}$ is a subring of $\struct {R^S, +, *}$
if and only if

$(1) \quad \map C {S, R} \ne \O$
$(2) \quad \forall f, g \in \map C {S, R} : f + \paren{-g} \in  \map C {S, R}$
$(3) \quad \forall f, g \in \map C {S, R} : f * g \in  \map C {S, R}$


$(1) \quad \map C {S, R} \ne \O$
Let $0_R$ denote the zero of $\struct {R, +, *, \tau_{_R} }$.

Let $0_{R^S}: S \to R$ denote the constant mapping defined by:

$\forall s \in S : \map {0_{R^S}} s = 0_R$
From Constant Mapping is Continuous:

$0_{R^S} \in \map C {S, R}$
It follows that:

$\map C {S, R} \ne \O$
$\Box$


$(2) \quad \forall f, g \in \map C {S, R} : f + \paren{-g} \in  \map C {S, R}$
Let $f, g \in \map C {S, R}$.

From Negation Rule for Continuous Mappings to Topological Ring:

$-g \in \map C {S, R}$
From Sum Rule for Continuous Mappings into Topological Ring:

$f + \paren{-g} \in \map C {S, R}$

It follows that:

$\forall f, g \in \map C {S, R} : f + \paren{-g} \in  \map C {S, R}$
$\Box$


$(3) \quad \forall f, g \in \map C {S, R} : f * g \in  \map C {S, R}$
Let $f, g \in \map C {S, R}$.

From Product Rule for Continuous Mappings to Topological Ring:

$f * g \in \map C {S, R}$

It follows that:

$\forall f, g \in \map C {S, R} : f * g \in  \map C {S, R}$
$\Box$

From Subring Test:

$\struct{\map C {S, R}, +, *}$ is a subring of $\struct {R^S, +, *}$.
$\blacksquare$


Also see
Zero of Ring of Continuous Mappings
Additive Inverse in Ring of Continuous Mappings
Unity of Ring of Continuous Mappings
Commutativity of Ring of Continuous Mappings




