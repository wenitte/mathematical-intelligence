# 

Source: https://proofwiki.org/wiki/Liouville%27s_Theorem_(Complex_Analysis)/Banach_Space

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a Banach space over $\C$.
Let $f : \C \to X$ be an analytic function that is bounded.

Then $f$ is constant. 


Proof
Take $M \ge 0$ such that: 

$\norm {\map f x} \le M$
for each $x \in X$. 
Let $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }$ be the normed dual space of $\struct {X, \norm {\, \cdot \,} }$.
From Banach Space Valued Function is Analytic iff Weakly Analytic, $f$ is weakly analytic. 
So for each $\phi \in X^\ast$, $\phi \circ f : \C \to \C$ is analytic.
Further, for each $z \in \C$ we have: 

$\cmod {\map \phi {\map f x} } \le \norm \phi_{X^\ast} \norm {\map f x} \le M \norm \phi_{X^\ast}$
So $\phi \circ f$ is bounded.
From Liouville's Theorem (Complex Analysis), it follows that $\phi \circ f$ is constant for each $\phi \in X^\ast$.
That is, for each $z, w \in \C$ we have: 

$\map \phi {\map f z} = \map \phi {\map f w}$
for each $\phi \in X^\ast$. 
That is, since $\phi$ is linear:

$\map \phi {\map f z - \map f w} = 0$
From Normed Dual Space Separates Points, we have: 

$\map f z = \map f w$
for each $z, w \in \C$.
So $f$ is constant.
$\blacksquare$


Sources
2011: Graham R. Allan and H. Garth Dales: Introduction to Banach Spaces and Algebras ... (previous) ... (next): $3.2$: Integration of continuous vector-valued functions




