# 

Source: https://proofwiki.org/wiki/Product_of_Continuous_Functions_on_Topological_Ring_is_Continuous

Theorem
Let $X$ be a topological space. 
Let $R$ be a topological ring. 
Let $f, g : X \to R$ be continuous functions.

Then $f \cdot g : X \to R$ is continuous.


Proof
Equip the Cartesian product $R \times R$ with its product topology.
Define $h : X \to R \times R$ by: 

$\map h x = \tuple {\map f x, \map g x}$
for each $x \in X$ and $p : R \times R \to R$ by: 

$\map p {x, y} = x y$
for each $\tuple {x, y} \in R \times R$.
From Continuous Mapping to Product Space, $h$ is continuous.
From the definition of a topological ring, $p$ is continuous.
Then from Composite of Continuous Mappings is Continuous, $p \circ h : X \to R$ is continuous, while: 














\(\ds \map {\paren {p \circ h} } x\)

\(=\)







\(\ds \map p {\map f x, \map g x}\)




















\(\ds \)

\(=\)







\(\ds \map f x \map g x\)









for $x \in X$.
$\blacksquare$





