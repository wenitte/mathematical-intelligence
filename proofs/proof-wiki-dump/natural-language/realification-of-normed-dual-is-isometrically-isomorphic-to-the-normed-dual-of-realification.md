# 

Source: https://proofwiki.org/wiki/Realification_of_Normed_Dual_is_Isometrically_Isomorphic_to_the_Normed_Dual_of_Realification

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\C$. 
Let $\struct {X_\R, \norm {\, \cdot \,} }$ be the realification of $\struct {X, \norm {\, \cdot \,} }$.
Let $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }$ be the normed dual of $\struct {X, \norm {\, \cdot \,} }$.
Let $\struct {X^\ast_\R, \norm {\, \cdot \,}_{X^\ast_\R} }$ be the normed dual of $\struct {X_\R, \norm {\, \cdot \,} }$.
Let $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }_\R$ be the realification of $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }$.

Then $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }_\R$ and $\struct {X^\ast_\R, \norm {\, \cdot \,}_{X^\ast} }$ are isometrically isomorphic.
Further $T : \struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }_\R \to \struct {X^\ast_\R, \norm {\, \cdot \,}_{X^\ast} }$ defined by: 

$T f = \map \Re f$
is an isometric isomorphism. 


Proof
We first need to show that if $f \in X^\ast$, then $T f = \map \Re f \in X^\ast_\R$.
From Real Part of Linear Functional is Linear Functional, we have that $\map \Re f : X \to \R$ is $\R$-linear.
We just need to show that $\map \Re f$ is bounded. 
We have for each $x \in X$:














\(\ds \cmod {\map \Re {\map f x} }\)

\(=\)







\(\ds \sqrt {\paren {\map \Re {\map f x} }^2}\)




















\(\ds \)

\(\le\)







\(\ds \sqrt {\paren {\map \Re {\map f x} }^2 + \paren {\map \Im {\map f x} }^2}\)




















\(\ds \)

\(=\)







\(\ds \cmod {\map f x}\)




















\(\ds \)

\(\le\)







\(\ds \norm f_{X^\ast} \norm x\)





Fundamental Property of Norm on Bounded Linear Functional



So we have that: 

$\map \Re f$ is bounded
with: 

$\norm {\map \Re f}_{X^\ast_\R} \le \norm f_{X^\ast}$
We want to show that: 

$\norm {\map \Re f}_{X^\ast_\R} = \norm f_{X^\ast}$
for each $f \in X^\ast$. 
Let $f \in X^\ast$.
Let $\sequence {u_n}_{n \in \N}$ be a sequence with $\norm {u_n} = 1$ and:

$\ds \norm f_{X^\ast} - \frac 1 n \le \cmod {\map f {u_n} } \le \norm f_{X^\ast}$
so that $\cmod {\map f {u_n} } \to \norm f_{X^\ast}$.
Pick $\alpha_n \in \C$ with $\cmod {\alpha_n} = 1$ such that $\cmod {\map f {u_n} } = \alpha_n \map f {u_n}$.
Since $f : X \to \C$ is $\C$-linear, we have $\alpha_n \map f {u_n} = \map f {\alpha_n u_n}$. 
So we have $\map \Re {\map f {\alpha_n u_n} } = \cmod {\map f {u_n} }$.
Then: 

$\map \Re {\map f {\alpha_n u_n} } \to \norm f_{X^\ast}$
while: 

$\norm {\alpha_n u_n} = 1$ for each $n \in \N$.
This gives: 

$\norm f_{X^\ast} \le \norm {\map \Re f}_{X^\ast_\R}$
so that: 

$\norm {\map \Re f}_{X^\ast_\R} = \norm f_{X^\ast}$
Finally, we show that $T$ is surjective.
This is given by Bounded Real-Valued Linear Functional is Real Part of Unique Bounded Complex-Valued Linear Functional. 
$\blacksquare$





