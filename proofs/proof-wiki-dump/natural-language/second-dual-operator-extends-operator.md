# 

Source: https://proofwiki.org/wiki/Second_Dual_Operator_Extends_Operator

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ be a bounded linear transformation.
Let $X^{\ast \ast}$ and $Y^{\ast \ast}$ be the second normed duals of $X$ and $Y$ respectively. 
Let $\iota_X : X \to X^{\ast \ast}$ be the evaluation linear transformation on $X$.
Let $\iota_Y : Y \to Y^{\ast \ast}$ be the evaluation linear transformation on $Y$.
Let $T^{\ast \ast} : X^{\ast \ast} \to Y^{\ast \ast}$ be the second dual operator of $T$.

Then $T^{\ast \ast}$ extends $T$ in the sense that: 

$\map {T^{\ast \ast} } {\iota_X x} = \map {\iota_Y} {T x}$


Proof
It is shown in Dual Operator is Weak-* to Weak-* Continuous that for each $x \in X$ we have: 

$x^\wedge \circ T^\ast = \paren {T x}^\wedge$
where $x^\wedge = \iota_X x$ and $\paren {T x}^\wedge = \map {\iota_Y} {T x}$. 
From the definition of the second dual operator and the evaluation linear transformations, this is precisely the claim: 

$\map {T^{\ast \ast} } {\iota_X x} = \map {\iota_Y} {T x}$
$\blacksquare$





