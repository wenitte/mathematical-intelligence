# 

Source: https://proofwiki.org/wiki/Functionally_Complete_Logical_Connectives/Negation,_Conjunction,_Disjunction_and_Conditional



Theorem
The set of logical connectives:

$\set {\neg, \land, \lor, \implies}$: Not, And, Or and Implies
is functionally complete.


Proof
From Functional Completeness over Finite Number of Arguments, it suffices to consider binary truth functions.

From Count of Truth Functions, there are $16$ of these.
These are enumerated in Binary Truth Functions, and are analysed in turn as follows.


Constant Functions
There are two constant functions:














\(\ds \map {f_\F} {p, q}\)

\(=\)







\(\ds \F\)




















\(\ds \map {f_\T} {p, q}\)

\(=\)







\(\ds \T\)










From Biconditional Properties and Exclusive Or Properties:














\(\ds p \iff p\)

\(\dashv \vdash\)







\(\ds \top \dashv \vdash \map {f_\T} {p, q}\)




















\(\ds p \oplus p\)

\(\dashv \vdash\)







\(\ds \bot \dashv \vdash \map {f_\F} {p, q}\)









where $\oplus$ and $\iff$ denote exclusive or and biconditional respectively.

So both of the constant functions can be expressed in terms of $\oplus$ and $\iff$.
$\Box$


Equivalence and Non-Equivalence
By definition of exclusive or:

$p \oplus q \dashv \vdash \map \neg {p \iff q}$.
Thus $\oplus$ can be expressed in terms of $\neg$ and $\iff$.

By definition of biconditional:

$p \iff q \dashv \vdash \paren {p \implies q} \land \paren {q \implies p}$
Thus $\iff$ can be expressed in terms of $\implies$ and $\land$.
$\Box$


Projections and Negated Projections
There are two projections:

$\map {\pr_1} {p, q} = p$
$\map {\pr_2} {p, q} = q$
We note that:

$p \land p \dashv \vdash p \dashv \vdash \map {\pr_1} {p, q}$
$p \lor p \dashv \vdash p \dashv \vdash \map {\pr_1} {p, q}$
and similarly for $\map {\pr_2} {p, q}$.
So the projections can be expressed in terms of either $\land$ or $\lor$.

There are two negated projections:

$\map {\overline {\pr_1} } {p, q} = \neg p$
$\map {\overline {\pr_2} } {p, q} = \neg q$
It immediately follows from the above that these can be expressed in terms of either:

$\neg$ and $\land$
or:

$\neg$ and $\lor$
$\Box$


NAND and NOR
There are the NAND and NOR operators:

$p \uparrow q$
$p \downarrow q$
By definition of NAND:

$p \uparrow q \dashv \vdash \map \neg {p \land q}$
By definition of NOR:

$p \downarrow q \dashv \vdash \map \neg {p \lor q}$
So:

$\uparrow$ can be expressed in terms of $\neg$ and $\land$
$\downarrow$ can be expressed in terms of $\neg$ and $\lor$
$\Box$


Conjunction, Disjunction, Conditional
There are the conjunction and disjunction operators:

$p \land q$
$p \lor q$
There are two conditionals:

$p \implies q$
$q \implies p$
There are two  negated conditionals:

$\map \neg {p \implies q}$
$\map \neg {q \implies p}$
All of the above are already expressed in terms of $\neg, \land, \lor, \implies$.
$\Box$

Thus all sixteen of the Binary Truth Functions can be expressed in terms of:

$\neg, \land, \lor, \implies$

That is:

$\set {\neg, \land, \lor, \implies}$
is functionally complete.
$\blacksquare$





