# 

Source: https://proofwiki.org/wiki/Ring_of_Bounded_Continuous_Functions_is_Subring_of_Continuous_Real-Valued_Functions


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $\R$ denote the real number line.
Let $\struct {\map C {S, \R}, +, *}$ be the ring of continuous real-valued functions from $S$.
Let $\struct {\map {C^*} {S, \R}, +, *}$ be the ring of bounded continuous real-valued functions from $S$.

Then:

$\struct {\map {C^*} {S, \R}, +, *}$ is a subring of $\struct {\map C {S, \R}, +, *}$


Proof
From Ring of Continuous Real-Valued Functions is Ring:

$\struct {\map C {S, \R}, +, *}$ is a ring.

From Additive Inverse in Ring of Continuous Real-Valued Functions:

$\forall f \in R^S :$ the additive inverse of $f$ is the pointwise negation $-f$, defined by:
$\forall s \in S: \map {\paren {-f} } s := - \map f s$

From the Subring Test:

$\struct {\map {C^*} {S, \R}, +, *}$ is a subring of $\struct {\map C {S, \R}, +, *}$
if and only if

$(1) \quad \map {C^*} {S, R} \ne \O$
$(2) \quad \forall f, g \in \map {C^*} {S, R} : f + \paren{-g} \in  \map {C^*} {S, R}$
$(3) \quad \forall f, g \in \map {C^*} {S, R} : f * g \in  \map {C^*} {S, R}$


$(1) \quad \map {C^*} {S, \R} \ne \O$
Let $0_{\R^S}: S \to \R$ denote the constant mapping defined by:

$\forall s \in S : \map {0_{\R^S}} s = 0$
From Constant Mapping is Continuous and Constant Real-Valued Function is Bounded:

$0_{\R^S} \in \map {C^*} {S, \R}$
It follows that:

$\map {C^*} {S, \R} \ne \O$
$\Box$


$(2) \quad \forall f, g \in \map {C^*} {S, \R} : f + \paren{-g} \in  \map {C^*} {S, \R}$
Let $f, g \in \map {C^*} {S, \R}$.

From Negation Rule for Bounded Continuous Real-Valued Function:

$-g \in \map {C^*} {S, \R}$
From Sum Rule for Bounded Continuous Real-Valued Functions:

$f + \paren{-g} \in \map {C^*} {S, \R}$

It follows that:

$\forall f, g \in \map {C^*} {S, \R} : f + \paren{-g} \in  \map C {S, R}$
$\Box$


$(3) \quad \forall f, g \in \map {C^*} {S, \R} : f * g \in  \map {C^*} {S, \R}$
Let $f, g \in \map {C^*} {S, \R}$.

From Product Rule for Bounded Continuous Real-Valued Functions:

$f * g \in \map {C^*} {S, \R}$

It follows that:

$\forall f, g \in \map {C^*} {S, \R} : f * g \in  \map {C^*} {S, \R}$
$\Box$

From Subring Test:

$\struct{\map {C^*} {S, \R}, +, *}$ is a subring of $\struct {\map C {S, \R}, +, *}$.
$\blacksquare$


Also see
Zero of Ring of Bounded Continuous Real-Valued Functions
Additive Inverse in Ring of Bounded Continuous Real-Valued Functions
Unity of Ring of Bounded Continuous Real-Valued Functions
Ring of Bounded Continuous Real-Valued Functions is Commutative


Sources
1960: Leonard Gillman and Meyer Jerison: Rings of Continuous Functions: Chapter $1$: Functions on a Topological Space, $\S 1.4$





