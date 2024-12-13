# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Continuous_Functions_valued_in_Topological_Vector_Space_is_Continuous



Theorem
Let $X$ be a topological space. 
Let $K$ be a topological field.
Let $Y$ be a topological vector space over $K$. 
Let $n \in \N$.
Let $f_1, \ldots, f_n : X \to Y$ be continuous functions. 
Let $\alpha_1, \ldots, \alpha_n \in K$. 

Then: 

$\ds \sum_{k \mathop = 1}^n \alpha_k f_k$ is a continuous function.


Proof
We do induction on the number of functions $n$:

Basis for the Induction
For each $\lambda \in K$, define $c_\lambda : Y \to Y$ by: 

$\map {c_\lambda} y = \lambda y$
for each $y \in Y$.
From Dilation Mapping on Topological Vector Space is Continuous, $c_\lambda$ is continuous for each $\lambda \in K$.
Then we have: 

$\alpha_1 f_1 = c_{\alpha_1} \circ f_1$
Since $f_1$ is continuous, $\alpha_1 f_1$ is continuous by Composite of Continuous Mappings is Continuous.
So shown for basis for the induction.


Induction Hypothesis
This is the induction hypothesis:

$\ds \sum_{k \mathop = 1}^n \alpha_k f_k$ is a continuous function.
Now we want to show that if $f_{n + 1} : X \to Y$ is another continuous function, we have: 

$\ds \sum_{k \mathop = 1}^{n + 1} \alpha_k f_k$ is continuous.


Induction Step
This is the induction step.
Write: 

$\ds s_n = \sum_{k \mathop = 1}^n \alpha_k f_k$
From the base case: 

$\alpha_{n + 1} f_{n + 1}$ is continuous.
Define $f : X \to Y \times Y$ by: 

$\map f x = \tuple {\map {s_n} x, \alpha_{n + 1} f_{n + 1} }$
for each $x \in X$.
From Continuous Mapping to Product Space, $f$ is continuous.
Define $g : Y \times Y \to Y$ by: 

$\map g {x, y} = x + y$
for each $x, y \in Y$.
Since $Y$ is a topological vector space, $g$ is continuous.
From Continuous Mapping to Product Space, $g \circ f$ is continuous.
We have: 

$\ds g \circ f = \sum_{k \mathop = 1}^n \alpha_k f_k + \alpha_{n + 1} f_{n + 1} = \sum_{k \mathop = 1}^{n + 1} \alpha_k f_k$
So: 

$\ds \sum_{k \mathop = 1}^{n + 1} \alpha_k f_k$ is continuous.
The result follows by induction.
$\blacksquare$





