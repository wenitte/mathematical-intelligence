# 

Source: https://proofwiki.org/wiki/Dual_Operator_is_Weak-*_to_Weak-*_Continuous

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ be a bounded linear transformation.
Let $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }$ and $\struct {Y^\ast, \norm {\, \cdot \,}_{Y^\ast} }$ be the normed duals of $X$ and $Y$ respectively.
Let $T^\ast : Y^\ast \to X^\ast$ be the dual operator of $T$.

Then $T^\ast$ is $\struct {w^\ast, w^\ast}$-continuous.


Proof
From Continuity in Initial Topology, it is enough to show that for each $\Phi \in \struct {X^\ast, w^\ast}^\ast$, we have: 

$\Phi \circ T^\ast : \struct {Y^\ast, w^\ast} \to \GF$ is Continuous.
From Characterization of Continuity of Linear Functional in Weak-* Topology‎, we have $\Phi = x^\wedge$ for some $x \in X$, where $x^\wedge$ is the evaluation linear transformation evaluated at $x$.
For $f \in Y^\ast$, we have: 














\(\ds \map {\paren {x^\wedge \circ T^\ast} } f\)

\(=\)







\(\ds \map {x^\wedge} {T^\ast f}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {T^\ast f} } x\)





Definition of Evaluation Linear Transformation on Normed Vector Space














\(\ds \)

\(=\)







\(\ds \map {\paren {f \circ T} } x\)




















\(\ds \)

\(=\)







\(\ds \map f {T x}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {T x}^\wedge} f\)





Definition of Evaluation Linear Transformation on Normed Vector Space



So we have: 

$x^\wedge \circ T^\ast = \paren {T x}^\wedge$
with $T x \in Y$. 
From Characterization of Continuity of Linear Functional in Weak-* Topology ‎, $\paren {T x}^\ast : \struct {Y^\ast, w^\ast} \to \GF$ is continuous.
So $x^\wedge \circ T^\ast : \struct {Y^\ast, w^\ast} \to \GF$ is continuous for each $x \in X$.
So from Continuity in Initial Topology, $T^\ast$ is $\struct {w^\ast, w^\ast}$-continuous.
$\blacksquare$





