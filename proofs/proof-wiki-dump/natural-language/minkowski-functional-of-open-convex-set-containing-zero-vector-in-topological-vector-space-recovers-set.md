# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Convex_Set_containing_Zero_Vector_in_Topological_Vector_Space_recovers_Set

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \tau}$ be a topological vector space over $\GF$.
Let $C \subseteq X$ be an open convex set with ${\mathbf 0}_X \in C$. 
From Convex Subset of Topological Vector Space containing Zero Vector in Interior is Absorbing Set, $C$ is absorbing.
Let $\mu_C$ be the Minkowski functional of $C$. 

Then we have: 

$C = \set {x \in X : \map {\mu_C} x < 1}$



This article, or a section of it, needs explaining.In particular: add some explanation as to why this "recovers (the) set". What does "recovers" even mean in this context?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
From Convex Absorbing Set contained between Sets in terms of Minkowski Functional, we have: 

$\set {x \in X : \map {\mu_C} x < 1} \subseteq C$

Conversely, suppose that $x \in C$. 
From Multiple of Vector in Topological Vector Space Converges, we have: 

$\paren {1 + \dfrac 1 n} x \to x$
From the definition of a convergent sequence, we have: 

$\paren {1 + \dfrac 1 N} x \in C$
for some $N \in \N$. 
Then: 

$x \in \dfrac 1 {1 + \dfrac 1 N} C$
So, by the definition of the Minkowski functional, we have: 

$\map {\mu_A} x \le \dfrac 1 {1 + \dfrac 1 N} < 1$
$\blacksquare$





