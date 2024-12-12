# 

Source: https://proofwiki.org/wiki/Continuous_Real_Linear_Functional_on_Complex_Topological_Vector_Space_is_Real_Part_of_Continuous_Complex_Linear_Functional

Theorem
Let $\struct {X, \tau}$ be a topological vector space over $\C$. 
Let $g : X \to \R$ be a continuous continuous $\R$-linear functional.

Then there exists a unique continuous continuous $\C$-linear functional $f : X \to \C$ such that: 

$\map g x = \map \Re {\map f x}$
for each $x \in X$. 


Proof
From Real Linear Functional is Real Part of Unique Linear Functional, there exists a unique $\C$-linear functional $f : X \to \C$ such that: 

$\map g x = \map \Re {\map f x}$
for each $x \in X$, given by: 

$\map f x = \map g x - i \map g {i x}$
We need to show that $g$ is continuous.
From the definition of a topological vector space, the map $c : \C \times X \to X$ defined by: 

$\map c {\lambda, x} = \lambda x$
for each $\tuple {\lambda, x} \in \C \times X$ is continuous.
From Vertical Section of Continuous Function is Continuous, the map $c_i : X \to X$ defined by: 

$\map {c_i} x = i x$
for each $x \in X$ is continuous.
From Composite of Continuous Mappings is Continuous:

$x \mapsto \map g {i x}$ is continuous.
From Linear Combination of Continuous Functions valued in Topological Vector Space is Continuous, we have that $f$ is continuous.
$\blacksquare$





