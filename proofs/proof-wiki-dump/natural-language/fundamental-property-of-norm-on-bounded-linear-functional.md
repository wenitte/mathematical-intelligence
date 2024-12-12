# 

Source: https://proofwiki.org/wiki/Fundamental_Property_of_Norm_on_Bounded_Linear_Functional

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a normed vector space over $\Bbb F$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual of $\struct {X, \norm \cdot_X}$. 

Then for all $x \in X$ and $f \in X^\ast$:

$\cmod {\map f x} \le \norm f_{X^\ast} \norm x_X$


Proof
Let $x \in X$ and $f \in X^\ast$.
If $x = 0$, the claim is trivial, since by the linearity of $f$:

$\cmod {\map f x} = \cmod {\map f 0} = 0$

Let $x \ne 0$.
Recall by Definition 3 of Norm of Bounded Linear Functional:

$\norm f_{X^\ast} = \sup \set {\dfrac {\cmod {\map f x} } {\norm x_X} : \forall x \in X, x \ne 0}$
Thus, by $\paren 1$ of Definition of Supremum:

$\cmod {\map f x} = \dfrac {\cmod {\map f x} }{\norm x_X} {\norm x_X} \le \norm f_{X^\ast} \norm x_X$
$\blacksquare$





