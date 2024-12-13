# 

Source: https://proofwiki.org/wiki/Lower_Closure_is_Closure_Operator



Theorem
Let $\struct {S, \preceq}$ be an ordered set.

Then

lower closure of set is a closure operator.


Proof
Inflationary
Let $X$ be a subset of $S$.
Let $x \in X$.
By definition of reflexivity:

$x \preceq x$
Thus by definition of lower closure of set:

$x \in X^\preceq$
Thus by definition of subset:

$X \subseteq X^\preceq$
$\Box$


Increasing
Let $X, Y$ be subsets of $S$ such that

$X \subseteq Y$
Let $x \in X^\preceq$.
By definition of lower closure of set:

$\exists y \in X: x \preceq y$
By definition of subset:

$y \in Y$
Thus by definition of lower closure of set:

$x \in Y^\preceq$
Thus by definition of subset:

$X^\preceq \subseteq Y^\preceq$
$\Box$


Idempotent
Let $X$ be a subset of $S$.
Let $x \in \paren {X^\preceq}^\preceq$.
By definition of lower closure of set:

$\exists y \in X^\preceq: x \preceq y$
By definition of lower closure of set:

$\exists z \in X: y \preceq z$
By definition of transitivity:

$x \preceq z$
Thus by definition of lower closure of set:

$x \in X^\preceq$
Thus by definition of subset:

$\paren {X^\preceq}^\preceq \subseteq X^\preceq$
By definition of inflationary:

$X \subseteq X^\preceq$
By definition of increasing:

$X^\preceq \subseteq \paren {X^\preceq}^\preceq$
Thus definition of set equality;

$\paren {X^\preceq}^\preceq = X^\preceq$
$\Box$

Thus by definition:

lower closure of set is a closure operator.
$\blacksquare$





