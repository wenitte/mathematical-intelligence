# 

Source: https://proofwiki.org/wiki/Normed_Dual_Space_is_Banach_Space

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ be a normed vector space over $\GF$. 
Let $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }$ be the normed dual of $\struct {X, \norm {\, \cdot \,}_X}$.

Then $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }$ is a Banach space. 


Proof
By definition, we have:

$X^\ast = \map B {X, \GF}$
and:

$\norm {\, \cdot \,}_{X^\ast} = \norm {\, \cdot \,}_{\map B {X, \GF} }$
From Real Number Line is Banach Space and Complex Plane is Banach Space, $\GF$ is a Banach space.
So from Space of Bounded Linear Transformations is Banach Space, $\struct {X, \norm {\, \cdot \,}_X}$ is a Banach space.
$\blacksquare$





