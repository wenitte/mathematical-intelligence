# 

Source: https://proofwiki.org/wiki/Norm_on_Bounded_Linear_Transformation_is_Submultiplicative

Theorem
Let $\struct {X, \norm \cdot_X}$, $\struct {Y, \norm \cdot_Y}$ and $\struct {Z, \norm \cdot_Z}$ be normed vector spaces.
Let $A : X \to Y$ and $B : Y \to Z$ be bounded linear transformations. 
Let $\norm \cdot _{\map B {X,Y} }$ be the norm for bounded linear transformations $X \to Y$.
Let $\norm \cdot _{\map B {Y,Z} }$ be the norm for bounded linear transformations $Y \to Z$.
Let $\norm \cdot _{\map B {X,Z} }$ be the norm for bounded linear transformations $X \to Z$.

Then, we have that:

$B \circ A$ is a bounded linear transformation
with:

$\norm {B \circ A} _{\map B {X,Z} } \le \norm B _{\map B {Y,Z} } \norm A _{\map B {X,Y} }$
That is: 

$\norm \cdot$ is submultiplicative.

This article, or a section of it, needs explaining.In particular: Which norm is this $\norm \cdot$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
From Composition of Linear Transformations is Linear Transformation, we have: 

$B \circ A$ is a linear transformation
Let $x \in X$. 
Then, we have:














\(\ds \norm {\paren {B \circ A} x}_Z\)

\(\le\)







\(\ds \norm B \norm {A x}_Y\)





Fundamental Property of Norm on Bounded Linear Transformation














\(\ds \)

\(\le\)







\(\ds \norm B \norm A \norm x_X\)





Fundamental Property of Norm on Bounded Linear Transformation



We can therefore see that: 

$B \circ A$ is a bounded linear transformation.
So, if: 

$\norm x_X = 1$
we have: 

$\norm {\paren {B \circ A} x}_Z \le \norm B \norm A$
By the definition of supremum, we have: 

$\ds \sup_{\norm x_X = 1} \norm {\paren {B \circ A} x}_Z \le \norm B \norm A$
So by the definition of the norm on the space of bounded linear transformations, we have: 

$\norm {B \circ A} \le \norm B \norm A$
$\blacksquare$





