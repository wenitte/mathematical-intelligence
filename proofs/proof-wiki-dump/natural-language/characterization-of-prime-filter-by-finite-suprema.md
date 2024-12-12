# 

Source: https://proofwiki.org/wiki/Characterization_of_Prime_Filter_by_Finite_Suprema



Theorem
Let $L = \struct {S, \vee, \preceq}$ be a join semilattice.
Let $F$ be a filter in $L$.

Then

$F$ is a prime filter
if and only if:

for all non-empty finite subset $A$ of $S: \paren {\sup A \in F \implies \exists a \in A: a \in F}$


Proof
Sufficient Condition
Let $F$ be a prime ideal.
Define $\map \PP X: \equiv X \ne \O \land \sup X \in F \implies \exists x \in X: x \in F$
where $X$ is subset of $S$.
Let $A$ be a non-empty finite subset of $S$.
By definition of empty set:

$\map \PP \O$
We will prove that:

$\forall x \in A, B \subseteq A: \map \PP B \implies \map \PP {B \cup \set x}$
Let $x \in A, B \subseteq A$ such that:

$\map \PP B$ (Induction Hypothesis)
Assume that:

$B \cup \set x \ne \O$ and $\map \sup {B \cup \set x} \in F$
Case $B = \O$:
By Union with Empty Set:

$B \cup \set x = \set x$
By Supremum of Singleton:

$\sup \set x = x$
By definition of singleton:

$x \in \set x$
Thus

$\exists a \in B \cup \set x: a \in F$
$\Box$

Case $B \ne \O$:
By Subset of Finite Set is Finite:

$B$ is finite.
By Existence of Non-Empty Finite Suprema in Join Semilattice:

$B$ admits a supremum.
By Supremum of Singleton:

$\set x$ admits a supremum.













\(\ds \map \sup {B \cup \set x}\)

\(=\)







\(\ds \map \sup {\bigcup \set {B, \set x} }\)





Definition of Set Union














\(\ds \)

\(=\)







\(\ds \sup \set {\sup B, x}\)





Supremum of Suprema:














\(\ds \)

\(=\)







\(\ds \paren {\sup B} \vee x\)





Definition of Join (Order Theory)



By definition of prime filter:

$\sup B \in F$ or $x \in F$
Case $\sup B \in F$:
By Induction Hypothesis:

$\exists a \in B: a \in F$
By definition of union:

$a \in B \cup \set x$
Thus:

$\exists a \in B \cup \set x: a \in F$
$\Box$

Case $x \in F$:
By definition of union:

$x \in B \cup \set x$
Thus:

$\exists a \in B \cup \set x: a \in F$
$\Box$

By Induction of Finite Set:

$\map \PP A$
Thus the result.
$\Box$


Necessary Condition
Suppose that

for all non-empty finite subset $A$ of $S: \paren {\sup A \in F \implies \exists a \in A: a \in F}$
Let $x, y \in S$ such that

$x \vee y \in F$
By Unordered Pair is Finite:

$\set {x, y}$ is a finite set.
By definition of unordered tuple:

$x \in \set {x, y}$
By definition of non-empty set:

$\set {x, y}$ is a non-empty set.
By definition of join:

$\sup \set {x, y} = x \vee y$
By assumption:

$\exists a \in \set {x, y}: a \in F$
Thus by definition of unordered tuple:

$x \in F$ or $y \in F$
Hence $I$ is prime filter.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:14




