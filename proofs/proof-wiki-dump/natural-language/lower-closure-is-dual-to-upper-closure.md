# 

Source: https://proofwiki.org/wiki/Lower_Closure_is_Dual_to_Upper_Closure



Theorem
Let $\left({S, \preccurlyeq}\right)$ be an ordered set.
Let $a, b \in S$.
Let $T \subseteq S$

The following are pairs of dual statements:

$b \in a^\preccurlyeq$, the lower closure of $a$
$b \in a^\succcurlyeq$, the upper closure of $a$
$b \in T^\preccurlyeq$, the lower closure of $T$
$b \in T^\succcurlyeq$, the upper closure of $T$


Proof
Elements
By definition of lower closure, $b \in a^\preccurlyeq$ if and only if:

$b \preccurlyeq a$
The dual of this statement is:

$a \preccurlyeq b$
by Dual Pairs (Order Theory).

By definition of upper closure, this means $b \in a^\succcurlyeq$.

The converse follows from Dual of Dual Statement (Order Theory).
$\Box$


Sets
By the definition of lower closure, $b \in T^\preccurlyeq$ if and only if:

$\exists a \in T: b \preccurlyeq a$
The dual of this statement is:

$\exists a \in T: a \preccurlyeq b$
by Dual Pairs (Order Theory).
By the definition of upper closure, this means $b \in T^\succcurlyeq$.
$\blacksquare$


Also see
Duality Principle (Order Theory)




