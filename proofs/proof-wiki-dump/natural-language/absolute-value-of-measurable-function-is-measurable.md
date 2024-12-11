# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Measurable_Function_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space. 
Let $f : X \to \overline \R$ be a $\Sigma$-measurable function.

Then: 

$\size f$ is a $\Sigma$-measurable function.


Proof
From Characterization of Measurable Functions, it suffices to show that for each real number $t \in \R$, we have: 

$\set {x \in X : \size {\map f x} \le t} \in \Sigma$

If $t < 0$, we have: 

$\set {x \in X : \size {\map f x} \le t} = \O$
So, from Properties of Algebras of Sets, we have: 

$\set {x \in X : \size {\map f x} \le t} \in \Sigma$
if $t < 0$. 

If $t \ge 0$, we can write: 














\(\ds \set {x \in X : \size {\map f x} \le t}\)

\(=\)







\(\ds \set {x \in X : -t \le \map f x \le t}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in X : -t \le \map f x} \cap \set {x \in X : \map f x \le t}\)









Since $f$ is $\Sigma$-measurable, we have that both: 

$\set {x \in X : -t \le \map f x} \in \Sigma$
and:

$\set {x \in X : \map f x \le t} \in \Sigma$
from Characterization of Measurable Functions.
From Properties of Algebras of Sets, the intersection of any two sets in $\Sigma$ is contained in $\Sigma$. 
So:

$\set {x \in X : -t \le \map f x} \cap \set {x \in X : \map f x \le t} \in \Sigma$
if $t \ge 0$. 
That is: 

$\set {x \in X : \size {\map f x} \le t} \in \Sigma$
if $t \ge 0$.

So:

$\set {x \in X : \size {\map f x} \le t} \in \Sigma$
for all $t \in \R$.
$\blacksquare$





