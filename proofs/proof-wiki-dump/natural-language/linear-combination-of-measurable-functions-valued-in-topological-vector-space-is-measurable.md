# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Measurable_Functions_valued_in_Topological_Vector_Space_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $K$ be a topological field.
Let $\struct {Y, \tau}$ be a topological vector space over $K$.
Let $\map \BB Y$ be the Borel $\sigma$-algebra of $\struct {Y, \tau}$.
Let $f : X \to Y$ and $g : X \to Y$ be $\map \BB X/\map \BB Y$-measurable mappings.
Let $\lambda \in K$.

Then $f + \lambda g : X \to Y$ is $\map \BB X/\map \BB Y$-measurable.


Proof
Define $m_\lambda : Y \to Y$ by:

$\map {m_\lambda} y = \lambda y$
for each $y \in Y$. 
By the definition of a topological vector space, $m_\lambda$ is continuous.
Hence from Continuous Mapping is Measurable, $m_\lambda$ is $\map \BB Y/\map \BB Y$-measurable.
Equip $Y^2$ with the product topology.
Define also $s : Y^2 \to Y$ by:

$\map s {x, y} = x + y$
for each $\tuple {x, y} \in Y^2$.
Again by the definition of a topological vector space, $s$ is continuous.
Hence from Continuous Mapping is Measurable, $m_\lambda$ is $\map \BB {Y^2}/\map \BB Y$-measurable.
Define $F : Y^2 \to Y$ by:

$\map F {x, y} = \tuple {x, \lambda y}$
for each $\tuple {x, y} \in Y^2$. 
Let $\pr_1: Y^2 \to Y$ and $\pr_2: Y^2 \to Y$ be the first and second projections, respectively.
Hence we have:

$\map {\pr_1 \circ F} {x, y} = x$
and:

$\map {\pr_2 \circ F} {x, y} = \lambda y = \map {m_\lambda} y$
From Identity Mapping is Continuous, Continuous Mapping is Measurable and Measurable Mappings from Product Measurable Space, we have that $\pr_1 \circ F$ is $\map \BB {Y^2}/\map \BB Y$-measurable.
Similarly from Measurable Mappings from Product Measurable Space we have that $\pr_2 \circ F$ is $\map \BB {Y^2}/\map \BB Y$-measurable.
Hence from Measurable Mappings to Product Measurable Space, we obtain that $F$ is $\map \BB {Y^2}/\map \BB {Y^2}$-measurable.
Hence from Composition of Measurable Mappings is Measurable, $s \circ F$ is $\map \BB {Y^2}/\map \BB Y$-measurable.
Finally, define $G : X \to Y^2$ by:

$\map G x = \tuple {\map f x, \map g x}$
for each $x \in X$.
Since $f$ and $g$ are $\map \BB X/\map \BB Y$-measurable mappings, we have that $G$ is $\map \BB X/\map \BB {Y^2}$-measurable from Measurable Mappings to Product Measurable Space.
Finally from Composition of Measurable Mappings is Measurable, $s \circ F \circ G$ is $\map \BB X/\map \BB Y$-measurable with:














\(\ds \map {\paren {s \circ F \circ G} } x\)

\(=\)







\(\ds \map {\paren {s \circ F} } {\map f x, \map g x}\)




















\(\ds \)

\(=\)







\(\ds \map s {\map f x, \lambda \map g x}\)




















\(\ds \)

\(=\)







\(\ds \map f x + \lambda \map g x\)









for each $x \in X$.
Hence $f + \lambda g : X \to Y$ is $\map \BB X/\map \BB Y$-measurable.
$\blacksquare$





