# 

Source: https://proofwiki.org/wiki/Linear_Functional_on_Complex_Vector_Space_is_Uniquely_Determined_by_Real_Part

Theorem
Let $X$ be a vector space over $\C$.
Let $f : X \to \C$ be a linear functional.
Define a function $g : X \to \R$: 

$\map g x = \map \Re {\map f x}$
for each $x \in X$. 

Then: 

$\map f x = \map g x - i \map g {i x}$
for each $x \in X$. 


Proof
For brevity, define a function $h : X \to \R$ by: 

$\map h x = \map \Im {\map f x}$
for each $x \in X$. 
Note that: 

$\map f x = \map \Re {\map f x} + i \map \Im {\map f x} = \map g x + i \map h x$
so that:

$\map f {i x} = \map g {i x} + i \map h {i x}$
for each $x \in X$.
On the other hand, by the linearity of $f$, we have: 














\(\ds \map f {i x}\)

\(=\)







\(\ds i \map f x\)




















\(\ds \)

\(=\)







\(\ds i \paren {\map g x + i \map h x}\)




















\(\ds \)

\(=\)







\(\ds i \map g x - \map h x\)









for each $x \in X$.
Comparing real parts, we have: 

$-\map h x = \map g {i x}$
so $\map h x = -\map g {i x}$. 
So we have: 

$\map f x = \map g x - i \map g {i x}$
for each $x \in X$.
$\blacksquare$





