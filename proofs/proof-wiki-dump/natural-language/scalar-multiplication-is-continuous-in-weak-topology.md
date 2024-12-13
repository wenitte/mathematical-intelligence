# 

Source: https://proofwiki.org/wiki/Scalar_Multiplication_is_Continuous_in_Weak_Topology

Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$ with weak topology $w$. 
Define $m : K \times \struct {X, w} \to \struct {X, w}$ by: 

$\map m {\lambda, x} = \lambda x$
for each $\lambda \in K$, $x \in X$. 

Then $m$ is continuous. 
That is, scalar multiplication remains continuous when restricting to the weak topology.


Proof
Let $X^\ast$ be the topological dual space of $X$.
From Continuity in Initial Topology, it suffices to show that for each $f \in X^\ast$ we have: 

$f \circ m : K \times \struct {X, w} \to K$ is continuous.
Define the projections $\pr_1 : K \times {X, w} \to \struct {X, w}$ and $\pr_2 : K \times {X, w} \to \struct {X, w}$ as the projection onto the first and second factors.
Then for each $\lambda \in K$ and $x \in X$ we have: 














\(\ds \map {\paren {f \circ m} } {\lambda, x}\)

\(=\)







\(\ds \map f {\lambda x}\)




















\(\ds \)

\(=\)







\(\ds \lambda \map f x\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \map {\pr_1} {\tuple {\lambda, x} } \map f {\map {\pr_2} {\tuple {\lambda, x} } }\)









That is: 

$f \circ m = \pr_1 \cdot \paren {f \circ \pr_2}$
From the definition of the product topology:

$\pr_1 : K \times \struct {X, w} \to K$
and:

$\pr_2 : K \times \struct {X, w} \to \struct {X, w}$
are continuous.
From the definition of the weak topology, $f : \struct {X, w} \to K$ is continuous.
From Composite of Continuous Mappings is Continuous, $f \circ \pr_2 : K \times \struct {X, w} \to K$ is continuous.
From Product of Continuous Functions on Topological Ring is Continuous, $\pr_1 \cdot \paren {f \circ \pr_2} : K \times \struct {X, w} \to K$ is continuous.
So we have that $f \circ m : K \times \struct {X, w} \to K$ is continuous for each $f \in X^\ast$.
So from Continuity in Initial Topology, $m : K \times \struct {X, w} \to \struct {X, w}$ is continuous in the weak topology. 
$\blacksquare$





