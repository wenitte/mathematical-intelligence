# 

Source: https://proofwiki.org/wiki/Characterization_of_Prime_Ideal_by_Finite_Infima


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $L = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $I$ be an ideal in $L$.
Then

$I$ is a prime ideal
if and only if

for all non-empty finite subset $A$ of $S: \paren {\inf A \in I \implies \exists a \in A: a \in I}$


Proof
Sufficient Condition
Let $I$ be a prime ideal.
Define:

$\map P X: \equiv X \ne \O \land \inf X \in I \implies \exists x \in X: x \in I$
where $X$ is subset of $S$.
Let $A$ be a non-empty finite subset of $S$.
By definition of empty set:

$\map P \O$
We will prove that:

$\forall x \in A, B \subseteq A: \map P B \implies \map P {B \cup \set x}$
Let $x \in A, B \subseteq A$ such that:

$\map P B$
This will be used as an induction hypothesis.
Assume that:

$B \cup \set x \ne \O$ and $\map \inf {B \cup \set x} \in I$


Case $B = \O$
By Union with Empty Set:

$B \cup \set x = \set x$
By Infimum of Singleton:

$\inf \set x = x$
By definition of singleton:

$x \in \set x$
Thus

$\exists a \in B \cup \set x: a \in I$
$\Box$


Case $B \ne \O$
By Subset of Finite Set is Finite:

$B$ is finite.
By Existence of Non-Empty Finite Infima in Meet Semilattice:

$B$ admits an infimum.
By Infimum of Singleton:

$\set x$ admits an infimum.













\(\ds \map \inf {B \cup \set x}\)

\(=\)







\(\ds \map \inf {\bigcup \set {B, \set x} }\)





Definition of Set Union














\(\ds \)

\(=\)







\(\ds \inf \set {\inf B, x}\)





Infimum of Infima














\(\ds \)

\(=\)







\(\ds \paren {\inf B} \wedge x\)





Definition of Meet



By Characterization of Prime Ideal:

$\inf B \in I$ or $x \in I$


Case $\inf B \in I$
By the induction hypothesis:

$\exists a \in B: a \in I$
By definition of union:

$a \in B \cup \set x$
Thus:

$\exists a \in B \cup \set x: a \in I$
$\Box$


Case $x \in I$

By definition of union:

$x \in B \cup \set x$
Thus

$\exists a \in B \cup \set x: a \in I$
$\Box$

By Induction of Finite Set:

$\map P A$
Thus the result.
$\Box$


Necessary Condition
Suppose that:

for all non-empty finite subset $A$ of $S: \paren {\inf A \in I \implies \exists a \in A: a \in I}$
Let $x, y \in S$ such that:

$x \wedge y \in I$
By Unordered Pair is Finite:

$\set {x, y}$ is a finite set.
By definition of unordered tuple:

$x \in \set {x, y}$
By definition of non-empty set:

$\set {x, y}$ is a non-empty set.
By definition of meet:

$\inf \set {x, y} = x \wedge y$
By assumption:

$\exists a \in \set {x, y}: a \in I$
Thus by definition of unordered tuple:

$x \in I$ or $y \in I$
Hence by Characterization of Prime Ideal:

$I$ is prime ideal.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:12




