# 

Source: https://proofwiki.org/wiki/Positive_Rational_Numbers_under_Addition_fulfil_Naturally_Ordered_Semigroup_Axioms_2_to_4



Theorem
Let $\Q_{\ge 0}$ denote the set of positive rational numbers.
Consider the naturally ordered semigroup axioms:
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







  


The algebraic structure:

$\struct {\Q_{\ge 0}, +, \le}$
is an ordered semigroup which fulfils the axioms:

Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
but:

does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
$\struct {\Q_{\ge 0}, +}$is not isomorphic to $\struct {\N, +}$.


Proof
First we note that from Positive Rational Numbers under Addition form Ordered Semigroup:

$\struct {\Q_{\ge 0}, +, \le}$ is an ordered semigroup.


Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
From Rational Numbers under Addition form Infinite Abelian Group, $\struct {\Q, +}$ is a group.
By the Cancellation Laws, all elements of $\struct {\Q, +}$ are cancellable.
From Cancellable Element is Cancellable in Subset, it follows that all elements of $\struct {\Q_{\ge 0}, +}$ are likewise cancellable.
Hence Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability holds.
$\Box$


Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
Let $a, b \in \Q_{\ge 0}$ such that $a \le b$.
Then as $\struct {\Q, +}$ is a group it follows that:

$\exists c \in \Q: a + c = b$
and so:

$c = b + \paren {-a}$
But as $a \le b$ it follows that $c \ge 0$.
That is:

$\exists c \in \Q_{\ge 0}: a + c = b$
Hence Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product holds.
$\Box$


Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
We have that:

$0 \in \Q_{\ge 0}$
and:

$1 \in \Q_{\ge 0}$
and trivially Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements holds.
$\Box$


Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
We consider the subset $S$ of $\struct {\Q_{\ge 0}, +, \le}$ defined as:

$S = \set {x \in \Q_{\ge 0}: x > 0}$
From Smallest Strictly Positive Rational Number does not Exist:

there exists no smallest element of $S$.
Hence by definition $\struct {\Q_{\ge 0}, +, \le}$ is not well-ordered by $\le$.
That is, $\struct {\Q_{\ge 0}, +, \le}$ does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered.
$\Box$

From Positive Rational Numbers under Addition not Isomorphic to Natural Numbers:

$\struct {\Q_{\ge 0}, +}$is not isomorphic to $\struct {\N, +}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.1$




