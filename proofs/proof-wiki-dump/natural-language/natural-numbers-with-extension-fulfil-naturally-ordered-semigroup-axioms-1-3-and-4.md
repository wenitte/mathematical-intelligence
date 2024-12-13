# 

Source: https://proofwiki.org/wiki/Natural_Numbers_with_Extension_fulfil_Naturally_Ordered_Semigroup_Axioms_1,_3_and_4



Theorem
Construction
Let $\N$ denote the set of natural numbers.
Let $\beta$ be an object such that $\beta \notin \N$
Let $M = \N \cup \set \beta$.
Let us extend the operation of natural number addition from $\N$ to $M$ by defining:














\(\ds 0 + \beta\)

\(=\)







\(\ds \beta + 0 = \beta\)




















\(\ds \beta + \beta\)

\(=\)







\(\ds \beta\)




















\(\ds n + \beta\)

\(=\)







\(\ds \beta + n = n\)










There exists a unique total ordering $\le$ on $M$ such that:

the restriction of $\le$ to $\N$ is the given total ordering $\le$ on $\N$
$0 < \beta < 1$
such that the algebraic structure:

$\struct {M, +, \le}$
is an ordered semigroup which fulfils the axioms:

Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
but:

does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
$\struct {M, +}$ is not isomorphic to $\struct {\N, +}$.


Proof
Recall the axioms:
A naturally ordered semigroup is a (totally) ordered commutative semigroup $\struct {S, \circ, \preceq}$ satisfying:




\((\text {NO} 1)\)  

$:$  



$S$ is well-ordered by $\preceq$   

  \(\ds \forall T \subseteq S:\)

\(\ds T = \O \lor \exists m \in T: \forall n \in T: m \preceq n \)   







  


\((\text {NO} 2)\)  

$:$  



$\circ$ is cancellable in $S$   

  \(\ds \forall m, n, p \in S:\)

\(\ds m \circ p = n \circ p \implies m = n \)   







  












\(\ds p \circ m = p \circ n \implies m = n \)   







  


\((\text {NO} 3)\)  

$:$  



Existence of product   

  \(\ds \forall m, n \in S:\)

\(\ds m \preceq n \implies \exists p \in S: m \circ p = n \)   







  


\((\text {NO} 4)\)  

$:$  



$S$ has at least two distinct elements   

  \(\ds \exists m, n \in S:\)

\(\ds m \ne n \)   







  


Some lemmata:

Lemma 1
The algebraic structure:

$\struct {M, +}$
is a commutative monoid such that $0$ is the identity.


Lemma 2
There exists a unique total ordering $\preccurlyeq$ on $M$ such that:

the restriction of $\preccurlyeq$ to $\N$ is the given total ordering $\le$ on $\N$
$0 \prec \beta \prec 1$
This total ordering we will rename $\le$ to overload the notation for $\N$.


Lemma 3
The algebraic structure:

$\struct {M, +}$
is not isomorphic to $\struct {\N, +}$.


Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
Let $S \subseteq M$ such that $\beta \notin S$.
Then:

$S \subseteq \N$

By the Well-Ordering Principle, $\struct {\N, \le}$ is a well-ordered set.
Hence $S$ is well-ordered.
Hence by definition, $S$ has a smallest element

Let $T \subseteq M$ such that $\beta \in T$.

Case $1$
$0 \in T$
Then as $0 < \beta$ we have that:

$\forall x \in T: 0 \le x$
and so $T$ has a smallest element, that is, $0$.

Case $2$
$0 \notin T$
From Lemma $2$ we have that $\le$ is a total ordering such that:

$\forall x \in T: \beta \le x$
and so $T$ has a smallest element, that is, $\beta$.

Hence it has been shown that every subset of $M$ has a smallest element.
That is, $\struct {M, \le}$ is a well-ordered set.
Hence Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered holds.
$\Box$


Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
By the construction of the natural numbers, $\struct {\N, +, \le}$ is a naturally ordered semigroup.
Hence Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product holds for $\N$:

$\forall m, n \in \N: m \le n \implies \exists p \in \N: m + p = n$
Hence:

$\forall m, n \in M \setminus \set \beta: m \le n \implies \exists p \in \N: m + p = n$
Now consider $\beta \in M$.

Case 1

Let $m \in M: m \le \beta$.
Then either:

$m = \beta$
in which case:

$\exists \beta \in M: m + \beta = \beta$
or:

$m = 0$
in which case also:

$\exists \beta \in M: m + \beta = \beta$
Case 2

Let $n \in M: \beta \le n$.
Then:

$\exists n \in \N: n + \beta = n$
and it is seen that Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product holds.
$\Box$


Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
We have that:

$0 \in M$
and:

$1 \in M$
and trivially Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements holds.
$\Box$


Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
We have that:

$\forall n \in M \setminus \set 0: n + 0 = n + \beta = n$
but it is not the case that $0 = \beta$.

That is, $\struct {M, +, \le}$ does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability.
$\Box$

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.2 \ \text{(c)}$




