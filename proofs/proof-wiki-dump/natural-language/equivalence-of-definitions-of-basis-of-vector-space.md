# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Basis_of_Vector_Space



Theorem
Let $K$ be a division ring.
Let $\struct {G, +_G, \circ}_K$ be an vector space over $K$.

The following definitions of the concept of Basis of Vector Space are equivalent:

Definition 1
A basis of $G$ is a linearly independent subset of $G$ which is a generator for $G$.

Definition 2
A basis is a maximal linearly independent subset of $G$.


Proof
Definition 1 implies Definition 2
Let $\BB$ be a linearly independent subset of $G$ which is a generator for $G$.
Suppose $\BB \subseteq \BB'$ is a linearly independent subset of $G$.
We aim to show that $\BB = \BB'$, proving maximality. 
Suppose that $\BB \ne \BB'$. 
Let $x \in \BB' \setminus \BB$. 
Since $G$ is a generator for $G$, there exists $x_1, \ldots, x_n \in \BB \subseteq \BB'$ and $\alpha_1, \ldots, \alpha_n \in K$ such that: 

$\ds x = \sum_{i \mathop = 1}^n \alpha_i x_i$
so that: 

$\ds \sum_{i \mathop = 1}^n \alpha_i x_i - x = 0$
Since $K$ is a field, we have that $-1 \ne 0$. 
This shows that $\set {x_1, \ldots, x_n, x}$ and hence $\BB'$ is linearly dependent. 
This is a contradiction, so we must have $\BB = \BB'$. 
$\Box$ 

Definition 2 implies Definition 1
Suppose $\BB$ is a maximal linearly independent subset of $G$.
Let: 

$G = \map \span \BB \subseteq E$
Suppose that $E \ne F$. 
Suppose that $G \ne E$.
Let $x \in E \setminus G$.
Then from Vector not contained in Linear Span of Linearly Independent Set is Linearly Independent of Set, $\BB \cup \set x$ is linearly independent, contradicting the maximality of $\BB$. 
So there exists no such $x \in E \setminus G$, and we have $G = E$.
So $\BB$ is a linearly independent subset of $G$ which is a generator for $G$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): Appendix $\text{A}$ Preliminaries: $\S 1.$ Linear Algebra: Proposition $1.1$




