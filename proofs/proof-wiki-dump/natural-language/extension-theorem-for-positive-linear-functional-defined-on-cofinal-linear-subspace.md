# 

Source: https://proofwiki.org/wiki/Extension_Theorem_for_Positive_Linear_Functional_defined_on_Cofinal_Linear_Subspace



Theorem
Let $\struct {X, \succeq}$ be a preordered vector space over $\R$.
Let $Y$ be a linear subspace of $X$ that is cofinal in $\struct {X, \succeq}$.
Let $f_0 : Y \to \R$ be a positive linear functional.

Then there exists a positive linear functional $f : X \to \R$ such that:

$\map f y = \map {f_0} y$ for each $y \in Y$.


Proof
Let:

$P = \set {x \in X : x \succeq {\mathbf 0}_X}$
Let:

$Z = Y + P - P = \set {y + z - w : y \in Y, \, z, w \in P}$
be the Minkowski sum of $Y$, $P$ and $-P$.

Lemma 1
$Z$ is a linear subspace of $X$.
$\Box$

We first show that there exists a positive linear functional $g : Z \to \R$ extending $f_0$.
We establish that:

$Z = Y - P$
where $Y - P$ is again a Minkowski sums.
Let $x \in Z$ so that there exists $y \in Y$ and $z, w \in P$ such that:

$x = y + z - w$
Since $Y$ is cofinal there exists $y' \in Y$ such that:

$y' \succeq z$
Then we can write:

$z = y' - \paren {y' - z}$
By the definition of $P$ and an preordered vector space, we have $y' - z \in P$. 
Since $y' \in Y$, we have $z \in Y - P$.
Hence we have:

$Z \subseteq Y - P$
We have ${\mathbf 0}_X \succeq {\mathbf 0}_X$ be the definition of a preordering.
Hence ${\mathbf 0}_X \in P$.
With this, we have:

$Y - P \subseteq Y + P - P = Z$
So we conclude:

$Z = Y - P$

Hence if $x \in Z$, there exists $z \in Y$ and $p \in P$ such that:

$x = z - p$
Hence:

$z - x = p \succeq {\mathbf 0}_X$
so:

$z \succeq x$
We now deduce that if $x \in Z$, there exists $z \in Y$ such that $z \succeq x$. 
In particular, the set:

$\set {\map {f_0} y : y \in Y \text { and } y \succeq x}$
is non-empty for each $x \in Z$.
Now define $q : Z \to \R$ by:

$\map q x = \inf \set {\map {f_0} y : y \in Y \text { and } y \succeq x}$
for each $x \in Z$.

Lemma 2
$q$ is a sublinear functional.
$\Box$

Now take $y \in Y$. 
Let $y' \in Y$ be such that $y' \succeq y$. 
Then $y' - y \succeq {\mathbf 0}_X$. 
So from the definition of a positive linear functional, we have $\map {f_0} {y' - y} \ge 0$.
So from linearity, we have $\map {f_0} {y'} \ge \map {f_0} y$. 
By taking infimums, we obtain: 

$\map {f_0} y \le \map q y$ for each $y \in Y$.
By Hahn-Banach Theorem: Real Vector Space, there exists a linear functional $g : Z \to \R$ extending $f_0$ such that:

$\map g y \le \map q y$ for each $y \in Y$.
We show that $g$ is positive.
Let $x \succeq {\mathbf 0}_X$.
Then we have ${\mathbf 0}_X \succeq -x$.
Since $Y$ is a linear subspace, we have ${\mathbf 0}_X \in Y$. 
Hence we have:

$0 \in \set {\map {f_0} y : y \in Y \text { and } y \succeq x}$
so:

$\map q {-x} \le 0$
Now we have:

$-\map g x = \map g {-x} \le \map q {-x} \le 0$
That is, $\map g x \ge 0$
So $g$ is positive.
It remains to extend $g$ to a positive linear functional $f : X \to \R$. 
Let $\set {e_i : i \in I}$ be a basis for $Z$. 
From Linearly Independent Set is Contained in some Basis, there exists a set $\set {e_i : i \in J}$ with $I \subseteq J$ forming a basis for $X$. 
Define $f : X \to \R$ by taking:

$\map f {e_i} = \map g {e_i}$ for each $i \in I$
and:

$\map f {e_i} = 0$ for each $i \in J \setminus I$
then extending linearly. 
For $x \succeq {\mathbf 0}_X$, we have $x \in Z$ and $\map f x = \map g x \ge 0$. 
So $f$ is positive.
Further for $y \in Y$ we have $\map f y = \map g y = \map {f_0} y$, so $f$ is our desired map.
$\blacksquare$





