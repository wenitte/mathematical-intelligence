# 

Source: https://proofwiki.org/wiki/Limit_Inferior_of_Repetition_Net

Theorem
Let $L = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $N = \struct {\N, \le}$ be a directed ordered set.
Let $a, b \in S$.
Let $f = \sequence {c_i}_{i \mathop \in \N} = \tuple {a, b, a, b, \dots}: \N \to S$ be a net.

Then $\liminf \sequence {c_i}_{i \mathop \in \N} = a \wedge b$


Proof

This page has been identified as a candidate for refactoring of basic complexity.In particular: Make this a lemma pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
We will prove that

(lemma): $\forall j \in \N: f \sqbrk {\le \paren j} = \set {a, b}$
Let $j \in \N$.
Let $x \in S$.
Assume:

$x \in f \sqbrk {\le \paren j}$
By definition of image of set:

$\exists i \in \le \paren j: x = \map f i$
By definition of $f$:

$x = a$ or $x = b$
Thus by definition of unordered tuple:

$x \in \set {a, b}$
$\Box$

Assume:

$x \in \set {a, b}$
We have:

$j \le j$ and $j \le j+1$
By definition of image of element:

$j, j + 1 \in \le \paren j$
By definition of $f$:

$\set {\map f j, \map f {j + 1} } = \set {a, b}$
By definition of image of set:

$\map f j, \map f {j + 1} \in f \sqbrk {\le \paren j}$
Thus by definition of unordered tuple:
$x \in f \sqbrk {\le \paren j}$
$\Box$
Thus by definition of set equality:

$f \sqbrk {\le \paren j} = \set {a, b}$
$\Box$

Thus:














\(\ds \liminf \sequence {c_i}_{i \mathop \in \N}\)

\(=\)







\(\ds \sup \set {\map \inf {f \sqbrk {\mathord \le \paren j} }: j \in \N}\)





Definition of Limit Inferior of Net














\(\ds \)

\(=\)







\(\ds \sup \set {\inf \set {a, b}: j \in \N}\)





(lemma)














\(\ds \)

\(=\)







\(\ds \sup \set {a \wedge b: j \in \N}\)





Definition of meet














\(\ds \)

\(=\)







\(\ds a \wedge b\)





Supremum of Singleton



$\blacksquare$


Sources
Mizar article WAYBEL17:7




