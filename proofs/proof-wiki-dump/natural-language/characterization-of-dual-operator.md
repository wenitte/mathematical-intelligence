# 

Source: https://proofwiki.org/wiki/Characterization_of_Dual_Operator



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be normed vector spaces over $\GF$.
Let $X^\ast$ and $Y^\ast$ be the normed dual spaces of $X$ and $Y$ respectively.
Let $X^{\ast \ast}$ and $Y^{\ast \ast}$ be the second normed duals of $X$ and $Y$ respectively. 
Let $T : Y^\ast \to X^\ast$ be a bounded linear transformation.
Let $\iota_X : X \to X^{\ast \ast}$ be the evaluation linear transformation for $X$. 
Let $\iota_Y : Y \to Y^{\ast \ast}$ be the evaluation linear transformation for $Y$.

The following statements are equivalent:

$(1) \quad$ $T$ is $\struct {w^\ast, w^\ast}$-continuous
$(2) \quad$ there exists a bounded linear transformation $S : X \to Y$ such that $S^\ast = T$, where $S^\ast$ denotes the dual operator of $S$
$(3) \quad$ $T^\ast \sqbrk {\iota_X X} \subseteq \iota_Y Y$


Proof
$(1)$ implies $(2)$
Suppose that $T$ is $\struct {w^\ast, w^\ast}$-continuous.
From Characterization of Continuity of Linear Functional in Weak-* Topology ‎, we have that: 

$x^\wedge : \struct {X^\ast, w^\ast} \to \GF$ is continuous.
From Composite of Continuous Mappings is Continuous:

$x^\wedge \circ T : \struct {Y^\ast, w^\ast} \to \GF$ is continuous.
Applying Characterization of Continuity of Linear Functional in Weak-* Topology , there exists $S x \in Y$ such that: 

$x^\wedge \circ T = \paren {S x}^\wedge$
We first show that $S : X \to Y$ is linear. 
We have:














\(\ds \paren {\map S {\alpha x + \beta y} }^\wedge\)

\(=\)







\(\ds \paren {\alpha x + \beta y}^\wedge \circ T\)




















\(\ds \)

\(=\)







\(\ds \alpha \paren {x^\wedge \circ T} + \beta \paren {y^\wedge \circ T}\)





Evaluation Linear Transformation on Normed Vector Space is Linear Transformation from Space to Second Normed Dual














\(\ds \)

\(=\)







\(\ds \alpha S x + \beta S y\)









We now show that $S$ is bounded. 
We have, for each $x \in X$: 














\(\ds \norm {S x}_Y\)

\(=\)







\(\ds \norm {\paren {S x}^\wedge}_{Y^{\ast \ast} }\)




















\(\ds \)

\(=\)







\(\ds \norm {x^\wedge \circ T}_{Y^{\ast \ast} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {x^\wedge}_{X^{\ast \ast} } \norm T_{\map B {Y^\ast, X^\ast} }\)





Norm on Bounded Linear Transformation is Submultiplicative














\(\ds \)

\(=\)







\(\ds \norm T_{\map B {Y^\ast, X^\ast} } \norm x_X\)





Evaluation Linear Transformation on Normed Vector Space is Linear Isometry



So $S$ is bounded. 
Finally, for $f \in Y^\ast$ and $x \in X$ we have: 














\(\ds \map f {S x}\)

\(=\)







\(\ds \map {\paren {S x}^\wedge} f\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {x^\wedge \circ T} } f\)




















\(\ds \)

\(=\)







\(\ds \map {x^\wedge} {T f}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {T f} } x\)





Definition of Evaluation Linear Transformation on Normed Vector Space



That is: 

$f \circ S = T f$
for each $f \in Y^\ast$. 
From the definition of the dual operator we have: 

$S^\ast f = T f$
for each $f \in Y^\ast$.
So $S^\ast = T$. 
$\Box$


$(2)$ implies $(3)$
Suppose that: 

there exists a bounded linear transformation $S : X \to Y$ such that $S^\ast = T$, where $S^\ast$ denotes the dual operator of $S$.
We have $S^{\ast \ast} = T^\ast$, where $S^{\ast \ast}$ denotes the second dual operator.
Let $x \in X$ and $f \in Y^\ast$. 
Then:














\(\ds \map {\map {T^\ast} {x^\wedge} } f\)

\(=\)







\(\ds \map {\map {S^{\ast \ast} } {x^\wedge} } f\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {x^\wedge \circ S^\ast} } f\)





Definition of Dual Operator














\(\ds \)

\(=\)







\(\ds \map {x^\wedge} {S^\ast f}\)




















\(\ds \)

\(=\)







\(\ds \map {x^\wedge} {f \circ S}\)





Definition of Dual Operator














\(\ds \)

\(=\)







\(\ds \map f {S x}\)





Definition of Evaluation Linear Transformation on Normed Vector Space














\(\ds \)

\(=\)







\(\ds \map {\paren {S x}^\wedge} f\)





Definition of Evaluation Linear Transformation on Normed Vector Space



That is: 

$\map {T^\ast} {\iota_X x} = \map {\iota_Y} {S x}$
$\Box$


$(3)$ implies $(1)$
Suppose that $T^\ast \sqbrk {\iota_X X} \subseteq \iota_Y Y$.
For each $x^\wedge \in \iota_X X$, we then have that: 

$\map {T^\ast} {x^\wedge} \in \iota_Y Y$
That is, there exists $y \in Y$ such that: 

$x^\wedge \circ T = y^\wedge$
From Characterization of Continuity of Linear Functional in Weak-* Topology, we then have: 

$x^\wedge \circ T : \struct {Y^\ast, w^\ast} \to \GF$ is continuous
for each $x \in X$. 
Conversely from  Characterization of Continuity of Linear Functional in Weak-* Topology, we have that every continuous linear functional $\Phi : \struct {Y^\ast, w^\ast} \to \GF$ has the form $\Phi = x^\wedge$. 
So from Continuity in Initial Topology, we have that: 

$T : \struct {Y^\ast, w^\ast} \to \struct {X^\ast, w^\ast}$ is continuous.
$\blacksquare$





