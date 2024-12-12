# 

Source: https://proofwiki.org/wiki/Existence_of_Distance_Functional/Proof_2

Theorem
Let $\mathbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a normed vector space over $\mathbb F$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $X$. 
Let $Y$ be a proper closed linear subspace of $X$. 
Let $x \in X \setminus Y$.
Let:

$d = \map {\operatorname {dist} } {x, Y}$
where $\map {\operatorname {dist} } {x, Y}$ denotes the distance between $x$ and $Y$.

Then there exists $f \in X^\ast$ such that:

$(1): \quad$ $\norm f_{X^\ast} = 1$
$(2): \quad$ $\map f y = 0$ for each $y \in Y$
$(3): \quad$ $\map f x = d$.
That is: 

there exists a distance functional for $x$.


Proof
Consider the normed quotient vector space $X/Y$ with quotient mapping $\pi$.
From Kernel of Quotient Mapping, we have $\map \pi x \ne 0$. 
So, from Existence of Support Functional, there exists $f \in \paren {X/Y}^\ast$ such that: 

$\norm f_{\paren {X/Y}^\ast} = 1$
and:

$\map f {\map \pi x} = \norm {\map \pi x}_{X/Y}$
From the definition of the quotient norm, we have: 

$\norm {\map \pi x}_{X/Y} = \map {\operatorname {dist} } {x, Y}$
From Normed Dual Space of Normed Quotient Vector Space is Isometrically Isomorphic to Annihilator, $g = f \circ \pi \in X^\ast$ and: 

$\norm g_{X^\ast} = \norm f_{\paren {X/Y}^\ast} = 1$
with: 

$\map g x = \map {\operatorname {dist} } {x, Y}$
So $g$ is a linear functional satisfying our requirements.
$\blacksquare$





