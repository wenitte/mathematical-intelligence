# 

Source: https://proofwiki.org/wiki/Maximal_implies_Difference_equals_Intersection

Theorem
Let $\left({S, \preceq}\right)$ be an ordered set.
Let $x, y \in S$ such that

$x$ is maximal in $S \setminus y^\succeq$

Then $x^\succeq \setminus \left\{ {x}\right\} = x^\succeq \cap y^\succeq$


Proof
By definition of maximal:

$x \in S \setminus y^\succeq$
By definition of difference:

$x \notin y^\succeq$
By definition of upper closure of element:

$y \npreceq x$
We will prove that

$x^\succeq \setminus \left\{ {x}\right\} \subseteq x^\succeq \cap y^\succeq$
Let $a \in x^\succeq \setminus \left\{ {x}\right\}$
By definition of difference:

$a \in x^\succeq$ and $a \notin \left\{ {x}\right\}$
By definitions of upper closure of element and singleton:

$x \preceq a$ and $a \ne x$
By definition of strictly precede:

$x \prec a$
By definition of maximal:

$a \notin S \setminus y^\succeq$
By definition of difference:

$a \in y^\succeq$
Thus by definition of intersection:

$a \in x^\succeq \cap y^\succeq$
$\Box$
We will prove that

$x^\succeq \cap y^\succeq \subseteq x^\succeq \setminus \left\{ {x}\right\}$
Let $a \in x^\succeq \cap y^\succeq$
By definition of intersection:

$a \in x^\succeq$ and $a \in y^\succeq$
By definition of upper closure of element:

$y \preceq a$
Then

$a \ne x$
By definition of singleton:

$a \notin \left\{ {x}\right\}$
Thus by definition of difference:

$a \in x^\succeq \setminus \left\{ {x}\right\}$
$\Box$
Thus by definition of set equality:

$x^\succeq \setminus \left\{ {x}\right\} = x^\succeq \cap y^\succeq$
$\blacksquare$

Sources
Mizar article WAYBEL16:3




