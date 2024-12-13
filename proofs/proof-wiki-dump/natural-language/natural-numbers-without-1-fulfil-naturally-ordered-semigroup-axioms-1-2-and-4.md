# 

Source: https://proofwiki.org/wiki/Natural_Numbers_without_1_fulfil_Naturally_Ordered_Semigroup_Axioms_1,_2_and_4



Theorem
Let $S \subseteq \N$ be the subset of the natural numbers defined as:

$S = \N \setminus \set 1 = \set {0, 2, 3, 4, \ldots}$
Then the algebraic structure:

$\struct {S, +, \le}$
is an ordered semigroup which fulfils the axioms:

Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
but:

does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
$\struct {S, +}$ is not isomorphic to $\struct {\N, +}$.


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







  



Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
By the Well-Ordering Principle, $\struct {\N, \le}$ is a well-ordered set.
We have that $S \subseteq \N$.
By definition of well-ordered set, $S$ itself is well-ordered.
Hence Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered holds.
$\Box$


Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
By the construction of the natural numbers, $\struct {\N, +, \le}$ is a naturally ordered semigroup.
Hence Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability holds for $\struct {\N, +, \le}$.
By Cancellable Element is Cancellable in Subset:

Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability holds also for $\struct {S, +, \le}$.
$\Box$


Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
We have that:

$0 \in M$
and:

$2 \in M$
and trivially Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements holds.
$\Box$


Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
We have that:
Consider $2, 3 \in \N$.
We have that:

$2 \le 3$
and:

$3 = 2 + 1$
But $1 \ne S$.
Hence:

$\exists 2, 3 \in S: \nexists p \in S: 2 + p = 3$
That is, $\struct {M, +, \le}$ does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product.
$\Box$


Lack of Isomorphism
It remains to demonstrate that $S$ and $\N$ are not isomorphic.
Aiming for a contradiction, suppose there exists a (semigroup) isomorphism $\phi$ from $\struct {\N, +}$ to $\struct {S, +}$.
By definition of isomorphism:

$\phi$ is a homomorphism
$\phi$ is a bijection.

We have that:










\(\ds \exists m \in S: \, \)



\(\ds m\)

\(=\)







\(\ds \map \phi 1\)





where $m \in \N: m \ne 1$








\(\ds \leadsto \ \ \)





\(\ds n \cdot m\)

\(=\)







\(\ds n \cdot \map \phi 1\)
















\(\ds \forall n \in \N: \, \)



\(\ds \map \phi n\)

\(=\)







\(\ds m \cdot n\)





Homomorphism of Powers: $n \cdot \map \phi 1 = \map \phi n$



That is:

$\forall n \in \N: \map \phi n = m n$
But let $p \in S: p = n + 1$.
Then:

$\nexists r \in \N: \map \phi r = p$
and so $\phi$ is not a surjection.
Hence, by definition, $\phi$ is not a bijection.
This contradicts our assertion that $\phi$ is an isomorphism.
Hence there can be no such semigroup isomorphism between $\struct {S, +}$ and $\struct {\N, +}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.3$




