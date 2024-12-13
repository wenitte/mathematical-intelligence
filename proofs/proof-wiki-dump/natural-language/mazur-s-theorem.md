# 

Source: https://proofwiki.org/wiki/Mazur%27s_Theorem

Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \norm {\, \cdot \,} } $ be a normed vector space over $\GF$ with weak topology $w$. 
Let $C \subseteq X$ be a convex subset of $X$. 

Then: 

$\map {\cl_w} C = \map \cl C$
where $\cl_w$ denotes the weak closure. 


Corollary
$C$ is weakly closed if and only if it is $\norm {\, \cdot \,}$-closed.


Proof
From Topological Closure in Coarser Topology is Larger: 

$\map \cl C \subseteq \map {\cl_w} C$
Now let $x \not \in \map \cl C$. 
From Finite Topological Space is Compact, $\set x$ is compact. 
Applying: 

Hahn-Banach Separation Theorem: Compact Convex Set and Closed Convex Set (Real Case) if $\GF = \R$
Hahn-Banach Separation Theorem: Compact Convex Set and Closed Convex Set (Complex Case) if $\GF = \C$
for $A = \set x$ and $B = \map \cl C$, there exists a bounded linear functional $f : X \to \GF$ such that: 

$\ds \map \Re {\map f x} < \inf_{y \in \map \cl C} \map \Re {\map f y}$
Now let $\alpha \in \R$ be such that: 

$\ds \map \Re {\map f x} < \alpha < \inf_{y \in \map \cl C} \map \Re {\map f y}$
Consider: 

$E = \set {x \in X : \map \Re {\map f x} \ge \alpha}$
We know that $C \subseteq E$. 
From Characterization of Continuity of Linear Functional in Weak Topology, $f : \struct {X, w} \to \GF$ is continuous.
So, by Real and Imaginary Part Projections are Continuous and Composite of Continuous Mappings is Continuous, $\map \Re f : \struct {X, w} \to \R$ is continuous.
From Continuity Defined from Closed Sets, $E$ is then weakly closed.
From Topological Closure of Subset is Subset of Topological Closure, $\map {\cl_w} C \subseteq \map {\cl_w} E$.
From Set is Closed iff Equals Topological Closure, we have $\map {\cl_w} E = E$.
So: 

$\map {\cl_w} C \subseteq E = \set {x \in X : \map \Re {\map f x} \ge \alpha}$
Since $\map \Re {\map f x} < \alpha$, we have $x \in X \setminus \map {\cl_w} C$. 
So we obtain: 

$\map {\cl_w} C \subseteq \map \cl C$
and so: 

$\map {\cl_w} C = \map \cl C$
$\blacksquare$


This article, or a section of it, needs explaining.In particular: need to identify which Mazur this is. Probably Stan.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.




