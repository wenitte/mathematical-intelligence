# 

Source: https://proofwiki.org/wiki/Ring_is_Module_over_Itself



Theorem
Let $\struct {R, +, \circ}$ be a ring.
Then $\struct {R, +, \circ}_R$ is an $R$-module. 


Ring with Unity
Let $\struct {R, +, \circ}$ be a ring with unity $1_R$.
Then $\struct {R, +, \circ}_R$ is a unitary $R$-module. 


Proof 1
Note that:
$\struct {R, +, \circ}$ is a ring by assumption.
$\struct {R, +}$ is an abelian group by the definition of a ring.

Let us verify the module axioms:




\((1)\)  

$:$  





  \(\ds \forall x, y, z \in R:\)

\(\ds x \circ \paren {y + z} = \paren {x \circ y} + \paren {x \circ z} \)   







  


\((2)\)  

$:$  





  \(\ds \forall x, y, z \in R:\)

\(\ds \paren {x + y} \circ z = \paren {x \circ z} + \paren {y \circ z} \)   







  


\((3)\)  

$:$  





  \(\ds \forall x, y, z \in R:\)

\(\ds \paren {x \circ y} \circ z = x \circ \paren {y \circ z} \)   







  

Axiom $(1)$ and $(2)$ follow from distributivity of $\circ$.
Axiom $(3)$ follows from associativity of $\circ$. 
$\blacksquare$


Proof 2
This is a special case of Module on Cartesian Product is Module:

$\struct {R^n, +, \circ}_R$ is an $R$-module
where $n = 1$.
$\blacksquare$





