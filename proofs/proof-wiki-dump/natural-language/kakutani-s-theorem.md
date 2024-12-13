# 

Source: https://proofwiki.org/wiki/Kakutani%27s_Theorem


The term Kakutani's Theorem as used here has been identified as being ambiguous.If you are familiar with this area of mathematics, you may be able to help improve $\mathsf{Pr} \infty \mathsf{fWiki}$ by determining the precise term which is to be used.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Disambiguate}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

It has been suggested that this page be renamed.In particular: He's got lots of theorems, this bloke, we're going to need to acknowledge that.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $X$ be a normed vector space.
Let $w$ be the weak topology on $X$. 
Let $B_X^-$ be the closed unit ball in $X$. 
Let $X^{\ast \ast}$ be the second normed dual of $X$.

Then $X$ is reflexive if and only if $\struct {B_X^-, w}$ is compact.


Proof
Let $B_{X^{\ast \ast} }^-$ be the closed unit ball in $X^{\ast \ast}$. 
Let $w^\ast$ be the weak-* topology on $X^{\ast \ast}$.
Let $\iota : X \to X^{\ast \ast}$ be the evaluation linear transformation. 

Necessary Condition
Suppose that $X$ is reflexive.
By Normed Vector Space is Reflexive iff Closed Unit Ball in Original Space is Mapped to Closed Unit Ball in Second Dual, $\iota B_X^- = B_{X^{\ast \ast} }^-$.
From Evaluation Linear Transformation on Normed Vector Space is Weak to Weak-* Homeomorphism onto Image, we have that: 

$\iota : \struct {X, w} \to \struct {\iota X, w^\ast}$ is a homeomorphism.
From Restriction of Homeomorphism is Homeomorphism, we have that: 

$\iota : \struct {B_X^-, w} \to \struct {\iota B_X^-, w^\ast} = \struct {B_{X^{\ast \ast} }^-, w^\ast}$ is a homeomorphism.
From the Banach-Alaoglu Theorem, $\struct {B_{X^{\ast \ast} }^-, w^\ast}$ is compact.
Since $\struct {B_X^-, w}$ is homeomorphic to $\struct {B_{X^{\ast \ast} }^-, w^\ast}$, we have that $\struct {B_X^-, w}$ is compact.
$\Box$


Sufficient Condition
Suppose that $\struct {B_X^-, w}$ is compact.
From Evaluation Linear Transformation on Normed Vector Space is Weak to Weak-* Continuous Embedding into Second Normed Dual, $\iota : \struct {X, w} \to \struct {X^{\ast \ast}, w^\ast}$ is continuous.
From Continuous Image of Compact Space is Compact, $\iota B_X^-$ is a compact subset of $\struct {X^{\ast \ast}, w^\ast}$.
In particular, $\iota B_X^-$ is closed in $\struct {X^{\ast \ast}, w^\ast}$.
So:

$\map {\cl_{w^\ast} } {\iota B_X^-} = \iota B_X^-$
from Set is Closed iff Equals Topological Closure.
From Goldstine's Theorem, we have that: 

$\map {\cl_{w^\ast} } {\iota B_X^-} = B_{X^{\ast \ast} }^-$
So, we have: 

$\iota B_X^- = B_{X^{\ast \ast} }^-$
From Normed Vector Space is Reflexive iff Closed Unit Ball in Original Space is Mapped to Closed Unit Ball in Second Dual, $X$ is reflexive.
$\blacksquare$


Source of Name
This entry was named for Shizuo Kakutani.





