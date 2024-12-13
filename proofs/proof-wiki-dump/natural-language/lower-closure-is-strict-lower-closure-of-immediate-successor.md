# 

Source: https://proofwiki.org/wiki/Lower_Closure_is_Strict_Lower_Closure_of_Immediate_Successor

Theorem
Let $\struct {S, \preccurlyeq}$ be a totally ordered set.
Let $b$ be the immediate successor element of $a$:

Then:

$a^\preccurlyeq = b^\prec$
where:

$a^\preccurlyeq$ is the lower closure of $a$
$b^\prec$ is the strict lower closure of $b$.


Proof
Let:

$x \in b^\prec$
By the definition of strict upper closure:

$x \prec b$
By the definition of total ordering:

$a \prec x$ or $x \preccurlyeq a$
If $a \prec x$ then $a \prec x \prec b$, contradicting the premise.
Thus:

$x \preccurlyeq a$
and so:

$x \in a^\preccurlyeq$
By definition of subset:

$b^\prec \subseteq a^\preccurlyeq$

Let:

$x \in a^\preccurlyeq$
By the definition of upper closure:

$x \preccurlyeq a$
Since $a \prec b$, Extended Transitivity shows that $x \prec b$.
Thus:

$x \in b^\prec$

By definition of subset:

$a^\preccurlyeq \subseteq b^\prec$

Therefore by definition of set equality:

$a^\succ = b^\succcurlyeq$
$\blacksquare$





