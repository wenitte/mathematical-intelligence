# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Theorem_for_Continuous_Linear_Functional_on_Locally_Convex_Space

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \PP}$ be a locally convex space over $\GF$ with its standard topology.
Let $X_0$ be a linear subspace of $X$. 
Let $f_0 : X_0 \to \GF$ be a continuous linear functional.

Then there exists a continuous linear functional $f : X \to \GF$ such that $f$ extends $f_0$. 


Proof
By Normed Vector Space is Locally Convex Space and Norm on Vector Space is Seminorm, we can view the normed vector space $\struct {\GF, \cmod {\, \cdot \,} }$ as the locally convex space $\struct {\GF, \set {\cmod {\, \cdot \,} } }$.
From Characterization of Continuous Linear Transformations between Locally Convex Spaces, there exists $C > 0$, $n \in \N$ and $p_1, \ldots, p_n \in \PP$ such that: 

$\ds \cmod {\map {f_0} x} \le C \max_{1 \le i \le n} \map {p_i} x$
for each $x \in X_0$.
Define $p : X \to \R_{\ge 0}$ by: 

$\ds \map p x = C \max_{1 \le i \le n} \map {p_i} x$
for each $x \in X$. 
From Pointwise Maximum of Finite Family of Seminorms is Seminorm and Non-Negative Scalar Multiple of Seminorm on Vector Space is Seminorm, we have that $p$ is a seminorm.
So we have: 

$\cmod {\map {f_0} x} \le \map p x$
for each $x \in X_0$.
From:

the Hahn-Banach Theorem: Real Vector Space: Corollary 1 if $\GF = \R$
the Hahn-Banach Theorem: Complex Vector Space: Corollary if $\GF = \C$
there exists a linear functional $f$ extending $f_0$ such that: 

$\ds \cmod {\map f x} \le \map p x =  C \max_{1 \le i \le n} \map {p_i} x$
for each $x \in X_0$. 
From Characterization of Continuous Linear Transformations between Locally Convex Spaces, $f$ is continuous.
So $f$ is a continuous linear functional satisfying the demand.
$\blacksquare$





