# 

Source: https://proofwiki.org/wiki/Axiom_of_Choice_Implies_Axiom_of_Dependent_Choice


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.
Theorem
The axiom of choice implies the axiom of dependent choice.


Proof
Let $\RR$ be a binary endorelation on a non-empty set $S$ such that:

$\forall a \in S: \exists b \in S: a \mathrel \RR b$
For an element $x \in S$, define:

$\map R x = \set {y \in S: x \mathrel \RR y}$
By assumption, $\map R x$ is non-empty for all $x \in S$.
Now, consider the indexed family of sets:

$\family {\map R x}_{x \mathop \in S}$
Using the axiom of choice, there exists a mapping $f: S \to S$ such that:

$\forall x \in S: \map f x \in \map R x$
That is:

$x \mathrel \RR \map f x$
So, for any $x \in S$, the sequence:

$\sequence {x_n}_{n \mathop \in \N} = \sequence {\map {f^n} x}_{n \mathop \in \N}$
where $f^n$ denotes the composition of $f$ with itself $n$ times, is a sequence such that:

$x_n \mathrel \RR x_{n + 1}$
for all $n \in \N$, as desired.
$\blacksquare$


Also see
Axiom of Dependent Choice Implies Axiom of Countable Choice




