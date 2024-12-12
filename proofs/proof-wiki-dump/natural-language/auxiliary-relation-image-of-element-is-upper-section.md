# 

Source: https://proofwiki.org/wiki/Auxiliary_Relation_Image_of_Element_is_Upper_Section

Theorem
Let $L = \struct {S, \preceq}$ be an ordered set.
Let $R$ be an auxiliary relation on $S$.
Let $x \in S$.

Then $\map R x$ is an upper section
where $\map R x$ denotes the image of $x$ under $R$.


Proof
Let $a \in \map R x, b \in S$ such that

$a \preceq b$
By definition of $R$-image of element:

$\tuple {x, a} \in R$
By definition of reflexivity:

$x \preceq x$
By definition of auxiliary relation:

$\tuple {x, b} \in R$
Thus by definition of $R$-image of element:

$b \in \map R x$
$\blacksquare$


Sources
Mizar article WAYBEL_7:funcreg 3




