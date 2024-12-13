# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Theorem/Real_Vector_Space/Corollary_2

Corollary
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\R$.
Let $X_0$ be a linear subspace of $X$. 
Let $f_0 : X_0 \to \R$ be a bounded linear functional.

Then $f_0$ can be extended to a bounded linear functional $f : X \to \R$ with: 

$\norm f_{X^\ast} = \norm {f_0}_{\paren {X_0}^\ast}$
where $\norm \cdot_{X^\ast}$ and $\norm \cdot_{\paren {X_0}^\ast}$ are the norms of the normed dual spaces $X^\ast$ and $\paren {X_0}^\ast$.


Proof
First suppose that: 

$\norm {f_0}_{\paren {X_0}^\ast} = 0$
Then, from positive definiteness of $\norm \cdot_{\paren {X_0}^\ast}$, we have: 

$f_0 = 0$
That is: 

$\map {f_0} x = 0$
for each $x \in X_0$.
Then the bounded linear functional $f : X \to \R$ with: 

$\map f x = 0$
for all $x \in X$ clearly extends $f_0$ with: 

$\norm f_{X^\ast} = 0 = \norm {f_0}_{\paren {X_0}^\ast}$.

Now take: 

$\norm {f_0}_{\paren {X_0}^\ast} \ne 0$
From Fundamental Property of Norm on Bounded Linear Functionals, we have: 

$\size {\map {f_0} x} \le \norm {f_0}_{\paren {X_0}^\ast} \norm x$
for each $x \in X_0$. 
Now define $p : X \to \R$ by: 

$\map p x = \norm {f_0}_{\paren {X_0}^\ast} \norm x$
for each $x \in X$, so that: 

$\size {\map {f_0} x} \le \map p x$
for each $x \in X_0$. 
From Positive Scalar Multiple of Norm on Vector Space is Norm, we have: 

$p$ is a norm.
In particular, from Norm on Vector Space is Seminorm, we have: 

$p$ is a seminorm.
So, applying Hahn-Banach Theorem for Real Vector Spaces: Corollary 1, we have that: 

there exists an extension $f : X \to \R$ of $f_0$ such that:
$\size {\map f x} \le \map p x$ for each $x \in X$.

We now only need to check that: 

$\norm f_{X^\ast} = \norm {f_0}_{\paren {X_0}^\ast}$
Since: 

$\size {\map f x} \le \norm {f_0}_{\paren {X_0}^\ast} \norm x$
From the definition of the norm on bounded linear functionals, we then have: 

$\norm f_{X^\ast} \le \norm {f_0}_{\paren {X_0}^\ast}$
We have: 

$\set {C > 0 : \size {\map f x} \le C \norm x \text { for all } x \in X} \subseteq \set {C > 0 : \size {\map f x} \le C \norm x \text { for all } x \in X_0}$
Since $f$ extends $f_0$ we have: 

$\set {C > 0 : \size {\map f x} \le C \norm x \text { for all } x \in X_0} = \set {C > 0 : \size {\map {f_0} x} \le C \norm x \text { for all } x \in X_0}$
So, from Infimum of Subset, we have: 

$\inf \set {C > 0 : \size {\map {f_0} x} \le C \norm x \text { for all } x \in X_0} \le \inf \set {C > 0 : \size {\map f x} \le C \norm x \text { for all } x \in X}$
From the definition of the norm on bounded linear functionals, we then have: 

$\norm {f_0}_{\paren {X_0}^\ast} \le \norm f_{X^\ast}$
So we obtain the desired: 

$\norm f_{X^\ast} = \norm {f_0}_{\paren {X_0}^\ast}$
$\blacksquare$





