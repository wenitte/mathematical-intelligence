# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Integral_Element_of_Algebra



Theorem
The following definitions of the concept of Integral Element of Algebra are equivalent:
Let $A$ be a commutative ring with unity.
Let $f : A \to B$ be a commutative $A$-algebra.
Let $b\in B$.


Definition 1
The element $b$ is integral over $A$ if and only if it is a root of a monic polynomial in $A \sqbrk x$.

Definition 2
The element $b$ is integral over $A$ if and only if the generated subalgebra $A \sqbrk b$ is a finitely generated module over $A$.

Definition 3
The element $b$ is integral over $A$ if and only if the generated subalgebra $A \sqbrk b$ is contained in a subalgebra $C \le B$ which is a finitely generated module over $A$.

Definition 4
The element $b$ is integral over $A$ if and only if there exists a faithful $A \sqbrk b$-module whose restriction of scalars to $A$ is finitely generated.


Proof
Definition 1 implies Definition 2
Assume $b$ is a root of a monic polynomial in $A \sqbrk x$.
That is, there are $n \in \N_{>0}$ and $a_1, \ldots , a_{n-1} \in A$ be such that:

$b^n + a_{n - 1} b^{n-1} + \cdots + a_1 b + a_0 = 0$
That is:

$b^n = - a_0 - a_1 b - \cdots - a_{n-1} b^{n-1}$
Therefore $\set {1, b, \ldots , b^{n-1} }$ generates $A \sqbrk b$.
$\Box$

Definition 2 implies Definition 3
Choose $C = A \sqbrk b$.
$\Box$

Definition 3 implies Definition 4
Let $C$ be a finitely generated $A$-module such that:

$A \sqbrk b \subseteq C$
Then $C$ is also $A \sqbrk b$-module.
Clearly, $C$ is faithful over $A \sqbrk b$, since:

$1 \in A \sqbrk b \subseteq C$.
$\Box$

Definition 4 implies Definition 1
Let $M$ be a faithful $A \sqbrk b$-module whose restriction of scalars to $A$ is finitely generated.
Define an $A$-module endomorphism $\phi : M \to M$ by:

$ \map \phi m := b m$
Let $\mathfrak a := A$.
Then:

$\phi \sqbrk M \subseteq M = {\mathfrak a} M$
By Cayley-Hamilton Theorem for Finitely Generated Modules:

$\phi^n + a_{n - 1} \phi^{n-1} + \cdots + a_1 \phi + a_0 = 0$
for some $a_i \in {\mathfrak a} = A$.
That is, for all $m \in M$:














\(\ds \paren {b^n + a_{n - 1} b^{n-1} + \cdots + a_1 b + a_0} m\)

\(=\)







\(\ds \map {\phi^n} m + a_{n - 1} \map {\phi^{n-1} } m + \cdots + a_1 \map \phi m + a_0\)




















\(\ds \)

\(=\)







\(\ds 0\)









as $\map {\phi^i} m = b^i m$.
As $M$ is faithful as an $A \sqbrk b$-module, we have:

$b^n + a_{n - 1} b^{n-1} + \cdots + a_1 b + a_0 = 0$
$\blacksquare$





