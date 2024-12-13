# 

Source: https://proofwiki.org/wiki/Naturally_Ordered_Semigroup_Axioms_imply_Commutativity

Theorem
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







  


Axioms $\text {NO} 1$, $\text {NO} 2$ and $\text {NO} 3$ together imply the commutativity of the naturally ordered semigroup $\struct {S, \circ, \preceq}$.


Proof
From Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered, $\struct {S, \circ, \preceq}$ has a smallest element.
This is identified as zero: $0$.
From Zero is Identity in Naturally Ordered Semigroup, $0$ is the identity element of $\struct {S, \circ, \preceq}$,

It may be the case that $S$ is a singleton such that $S = \set 0$ .
Then $\struct {S, \circ}$ degenerates to the trivial group.
From Trivial Group is Abelian, it follows that $\circ$ is commutative.

Let $S^* := S \setminus \set 0$ denote the complement of $\set 0$ in $S$.
From Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered, $S^*$ also has a smallest element.
This we will call $1$.
It will be shown that $1$ commutes with every element of $S$.

Let $T \subseteq S$ be the set of element of $S$ which commute with $1$.
We have a priori that $0$ is the identity element of $\struct {S, \circ, \preceq}$.
Hence:

$1 \circ 0 = 1 = 0 \circ 1$
and it is seen that $0 \in T$.
Now suppose $n \in T$.
That is:

$1 \circ n = n \circ 1$
We have:














\(\ds 1 \circ \paren {n \circ 1}\)

\(=\)







\(\ds \paren {1 \circ n} \circ 1\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {n \circ 1} \circ 1\)





by hypothesis



So

$n \in T \implies n \circ 1 \in T$.
It follows from Principle of Mathematical Induction for Naturally Ordered Semigroup that:

$T = S$
That is, all the  element of $S$ commute with $1$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.5$




