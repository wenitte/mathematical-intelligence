# 

Source: https://proofwiki.org/wiki/Relative_Homotopy_is_Equivalence_Relation



Theorem
Let $X$ and $Y$ be topological spaces.
Let $K \subseteq X$ be a (possibly empty) subset of $X$.
Let $\map \CC {X, Y}$ be the set of all continuous mappings from $X$ to $Y$.
Define a relation $\sim$ on $\map \CC {X, Y}$ as:

$f \sim g$ if and only if $f$ and $g$ are homotopic relative to $K$.

Then $\sim$ is an equivalence relation.


Proof
We examine each condition for equivalence.


Reflexivity
For any function $f: X \to Y$, define $H: X \times \closedint 0 1 \to Y$ by $\map H {x, t} := \map f x$.
This yields a homotopy between $f$ and itself.
Also, trivially, if $x \in K$ and $t \in \closedint 0 1$, then:

$\map f x = H \left({x, t}\right)$
so that $H$ is a homotopy relative to $K$.
Thus $\sim$ is a reflexive relation.
$\Box$


Symmetry
Given a $K$-relative homotopy:

$H: X \times \closedint 0 1 \to Y$
from $\map f x = \map H {x, 0}$ to $\map g x = \map H {x, 1}$, the function:

$\map G {x, t} = \map H {x, 1 - t}$
is a $K$-relative homotopy from $g$ to $f$.
Thus $\sim$ is a symmetric relation.
$\Box$


Transitivity
Suppose that $f \sim g$ and $g \sim h$.
Let $F, G: X \times \closedint 0 1 \to Y$ be $K$-relative homotopies between $f$ and $g$, $g$ and $h$, respectively.
Define $H: X \times \closedint 0 1 \to Y$ by:

$\map H {x, t} := \begin {cases}
\map F {x, 2 t} & : 0 \le t \le \dfrac 1 2 \\
\map G {x, 2 t - 1} & : \dfrac 1 2 \le t \le 1
\end{cases}$
By Continuous Mapping on Finite Union of Closed Sets, $H$ is a $K$-relative homotopy between $f$ and $h$.
Thus $\sim$ is a transitive relation.
$\Box$

Having verified all three conditions, it follows that $\sim$ is an equivalence relation.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): homotopy group
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): homotopy group




