# 

Source: https://proofwiki.org/wiki/Completely_Irreducible_Element_iff_Exists_Element_that_Strictly_Succeeds_First_Element



Theorem
Let $L = \struct {S, \preceq}$ be an ordered set.
Let $p \in S$.

Then $p$ is completely irreducible if and only if

$\exists q \in S: p \prec q \land \paren {\forall s \in S: p \prec s \implies q \preceq s} \land p^\succeq = \set p \cup q^\succeq$
where $p^\succeq$ denotes the upper closure of $p$.


Proof
Sufficient Condition
Assume that:

$p$ is completely irreducible.
By definition of completely irreducible:

$p^\succeq \setminus \set p$ admits a minimum.
By definitions of minimum and infimum:

$p^\succeq \setminus \set p$ admits an infimum.
Define $q = \map \inf {p^\succeq \setminus \set p}$
By definition of minimum:

$q \in p^\succeq \setminus \set p$
By definition of difference:

$q \in p^\succeq$
By definition of upper closure of element:

$p \preceq q$
By Completely Irreducible implies Infimum differs from Element:

$q \ne p$
Thus by definition of strictly precede:

$p \prec q$
We will prove that

$\set p \cup q^\succeq \subseteq p^\succeq$
Let $x \in \set p \cup q^\succeq$
By definition of union:

$x \in \set p$ or $x \in q^\succeq$
In the first case:

$x \in \set p$
By definition of singleton:

$x = p$
By definition of reflexivity:

$p \preceq x$
Thus by definition of upper closure of element:

$x \in p^\succeq$
$\Box$
In the second case:

$x \in q^\succeq$
By definition of upper closure of element:

$q \preceq x$
By definition of transitivity:

$p \preceq x$
Thus by definition of upper closure of element:

$x \in p^\succeq$
$\Box$
By definition of infimum:

$q$ is lower bound for $p^\succeq \setminus \set p$
We will prove that:

$\forall s \in S: p \prec s \implies q \preceq s$
Let $s \in S$ such that:

$p \prec s$
By definition of strictly precede:

$p \preceq s$ and $p \ne s$
By definition of upper closure of element:

$s \in p^\succeq$
By definition of singleton:

$s \notin \set p$
By definition of difference:

$s \in p^\succeq \setminus \set p$
Thus by definition of lower bound:

$q \preceq s$
$\Box$

We will prove that:

$p^\succeq \subseteq \set p \cup q^\succeq$
Let $x \in p^\succeq$.
By definition of singleton:

$x = p$ or $x \in p^\succeq$ and $x \notin \set p$
By definition of difference:

$x = p$ or $x \in p^\succeq \setminus \set p$
By definitions of infimum and lower bound:

$x = p$ or $q \preceq x$
By definitions of singleton and upper closure of element:

$x \in \set p$ or $x \in q^\succeq$
Thus by definition of union:

$x \in \set p \cup q^\succeq$
$\Box$
Thus by definition of set equality:

$p^\succeq = \set p \cup q^\succeq$
$\Box$


Necessary Condition
Assume that:

$\exists q \in S: p \prec q \land \paren {\forall s \in S: p \prec s \implies q \preceq s} \land p^\succeq = \set p \cup q^\succeq$
We will prove that:

$q$ is lower bound for $p^\succeq \setminus \set p$
Let $a \in p^\succeq \setminus \set p$.
By definition of difference:

$a \in p^\succeq$ and $a \notin \set p$
By definitions of upper closure of element and singleton:

$p \preceq a$ and $a \ne p$
By definition of strictly precede:

$p \prec a$
Thus by assumption:

$q \preceq a$
$\Box$

By definition of reflexivity:

$q \preceq q$
By definition of upper closure of element:

$q \in q^\succeq$
By definition of union:

$q \in \set p \cup q^\succeq$
By definition of strictly precede:

$p \ne q$
By definition of singleton:

$q \notin \set p$
By definition of difference:

$q \in p^\succeq \setminus \set p$
We will prove that:

$\forall b \in S: b$ is lower bound for $p^\succeq \setminus \set p \implies b \preceq q$
Let $b \in S$ such that:

$b$ is lower bound for $p^\succeq \setminus \set p$
Thus by definition of lower bound:

$b \preceq q$
$\Box$
By definition of infimum:

$q = \map \inf {p^\succeq \setminus \set p}$
By definition:

$p^\succeq \setminus \set p$ admits a minimum.
Thus by definition:

$p$ is completely irreducible.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL16:20




