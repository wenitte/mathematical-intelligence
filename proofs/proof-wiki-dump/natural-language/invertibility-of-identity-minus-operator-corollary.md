# 

Source: https://proofwiki.org/wiki/Invertibility_of_Identity_Minus_Operator/Corollary

Corollary to Invertibility of Identity Minus Operator
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a Banach space over $\GF$. 
Let $T : X \to X$ be a invertible bounded linear operator. 
Let $S : X \to X$ be a bounded linear operator such that: 

$\norm S_{\map \BB X} \norm {T^{-1} }_{\map \BB X} < 1$

Then $T + S : X \to X$ is an invertible bounded linear operator.


Proof
We have: 

$\norm {-S T^{-1} }_{\map \BB X} \le \norm S_{\map \BB X} \norm {T^{-1} }_{\map \BB X} < 1$
from Norm Axiom $\text N 2$: Positive Homogeneity, Norm on Bounded Linear Transformation is Submultiplicative.
From Invertibility of Identity Minus Operator, we have: 

$I - \paren {-S T^{-1} } = I + S T^{-1}$ is an invertible bounded linear operator.
So from Composition of Bounded Linear Transformations is Bounded, we have that: 

$\paren {I + S T^{-1} } T = T + S$ is a invertible bounded linear operator.
$\blacksquare$





