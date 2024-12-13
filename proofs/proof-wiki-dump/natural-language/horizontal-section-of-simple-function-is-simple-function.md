# 

Source: https://proofwiki.org/wiki/Horizontal_Section_of_Simple_Function_is_Simple_Function

Theorem
Let $\struct {X, \Sigma_X}$ and $\struct {Y, \Sigma_Y}$ be measurable spaces.
Let $\struct {X \times Y, \Sigma_X \otimes \Sigma_Y}$ be the product measurable space of $\struct {X, \Sigma_X}$ and $\struct {Y, \Sigma_Y}$.
Let $f : X \times Y \to \R$ be a simple function.
Let $y \in Y$. 

Then $f^y : X \to \R$ is a simple function, where $f^y$ is the $y$-horizontal section of $f$. 


Proof
Write the standard representation of $f$ as: 

$\ds f = \sum_{k \mathop = 1}^n a_k \chi_{E_k}$
with:

$E_1, E_2, \ldots, E_n$ pairwise disjoint $\Sigma_X \otimes \Sigma_Y$-measurable sets
$a_1, a_2, \ldots, a_n$ real numbers.
We have: 














\(\ds f^y\)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n a_k \chi_{E_k} }^y\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_k \paren {\chi_{E_k} }^y\)





Horizontal Section of Linear Combination of Functions is Linear Combination of Horizontal Sections














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_k \chi_{\paren {E_k}^y}\)





Horizontal Section of Characteristic Function is Characteristic Function of Horizontal Section



From Intersection of Horizontal Sections is Horizontal Section of Intersection, we have that: 

$\paren {E_1}^y, \paren {E_2}^y, \ldots, \paren {E_n}^y$ are pairwise disjoint.
From Horizontal Section of Measurable Set is Measurable, we have that: 

$\paren {E_1}^y, \paren {E_2}^y, \ldots, \paren {E_n}^y$ are $\Sigma_X$-measurable.
So, we have: 

$\ds f^y = \sum_{k \mathop = 1}^n a_k \chi_{\paren {E_k}^y}$
with:

$\paren {E_1}^y, \paren {E_2}^y, \ldots, \paren {E_n}^y$ pairwise disjoint $\Sigma_X$-measurable sets
$a_1, a_2, \ldots, a_n$ real numbers.
So $f^y$ is a simple function.
$\blacksquare$





