# 

Source: https://proofwiki.org/wiki/Order_Generating_iff_Every_Element_is_Infimum



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $X$ be a subset of $S$.

Then

$X$ is order generating
if and only if

$\forall x \in S: \exists Y \subseteq X: x = \inf Y$


Proof
Sufficient Condition
Let $X$ be order generating.
Let $x \in S$.
By definition of order generating:

$x = \map \inf {x^\succeq \cap X}$
Thus

$\exists Y \subseteq X: x = \inf Y$
$\Box$


Necessary Condition
Let:

$\forall x \in S: \exists Y \subseteq X: x = \inf Y$
Let $x \in S$.
By assumption:

$\exists Y \subseteq X: x = \inf Y$
Define $Z := x^\succeq \cap X$.
We will prove that

$\forall b \in S: b$ is lower bound for $Z \implies b \preceq x$
Let $b \in S$ such that

$b$ is lower bound for $Z$.
Let $c \in Y$.
By definition of infimum:

$x$ is lower bound for $Y$.
By definition of lower bound:

$x \preceq c$
By definition of upper closure of element:

$c \in x^\succeq$
By definition of subset:

$c \in X$
By definition of intersection:

$c \in Z$
Thus by definition of lower bound:

$b \preceq c$
By definition of lower bound:

$b$ is lower bound for $Y$
Thus by definition of infimum:

$b \preceq x$
$\Box$

We will prove that

$x$ is lower bound for $Z$
Let $a \in Z$
By definition of intersection:

$a \in x^\succeq$
Thus by definition of upper closure of element:

$x \preceq a$
$\Box$

Thus by definitions of complete lattice and infimum:

$x^\succeq \cap X$ admits an infimum and $x = \map \inf {x^\succeq \cap X}$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:15




