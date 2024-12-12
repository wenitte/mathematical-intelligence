# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Schauder_Basis



Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\Bbb F$.
Let $\set {e_n : n \in \N}$ be a countable subset of $X$. 

The following definitions of the concept of Schauder Basis are equivalent: 

Definition 1
We say that $\set {e_n : n \in \N}$ is a Schauder basis for $X$ if and only if:

for each $x \in X$, there exists a unique sequence $\sequence {\map {\alpha_j} x}_{j \mathop \in \N}$ in $\Bbb F$ such that:
$\ds x = \sum_{j \mathop = 1}^\infty \map {\alpha_j} x e_j$
where convergence of the infinite series is understood in $\struct {X, \norm \cdot}$.

Definition 2
We say that $\set {e_n : n \in \N}$ is a Schauder basis for $X$ if and only if:

$(1): \quad$ for each $x \in X$, there exists a sequence $\sequence {\alpha_j}_{j \mathop \in \N}$ in $\Bbb F$ such that:
$\ds x = \sum_{j \mathop = 1}^\infty \alpha_j e_j$
$(2): \quad$ whenever $\sequence {\alpha_j}_{j \mathop \in \N}$ is a sequence in $\Bbb F$ such that:
$\ds \sum_{j \mathop = 1}^\infty \alpha_j e_j = 0$
we have $\alpha_j = 0$ for each $j \in \N$
where convergence of the infinite series is understood in $\struct {X, \norm \cdot}$.


Proof
Definition 1 implies Definition 2
Suppose that: 

for each $x \in X$, there exists a unique sequence $\sequence {\map {\alpha_j} x}_{j \mathop \in \N}$ in $\Bbb F$ such that:
$\ds x = \sum_{j \mathop = 1}^\infty \map {\alpha_j} x e_j$
Clearly $\set {e_n : n \in \N}$ then satisfies $(1)$ of Definition 2.
Suppose the sequence $\sequence {\alpha_j}_{j \mathop \in \N}$ is such that: 

$\ds 0 = \sum_{j \mathop = 1}^\infty \alpha_j e_j$
Note that: 

$\ds 0 = \sum_{j \mathop = 1}^\infty 0 e_j$
By hypothesis, this expansion is unique, so we have: 

$\alpha_j = 0$
for each $j \in \N$, as required. 
So $\set {e_n : n \in \N}$ also satisfies $(2)$ of Definition 2.
$\Box$


Definition 2 implies Definition 1
Suppose that:

$(1): \quad$ for each $x \in X$, there exists a sequence $\sequence {\alpha_j}_{j \mathop \in \N}$ in $\Bbb F$ such that:
$\ds x = \sum_{j \mathop = 1}^\infty \alpha_j e_j$
$(2): \quad$ whenever $\sequence {\alpha_j}_{j \mathop \in \N}$ is a sequence in $\Bbb F$ such that:
$\ds \sum_{j \mathop = 1}^\infty \alpha_j e_j = 0$
we have $\alpha_j = 0$ for each $j \in \N$
Let $x \in X$. 
From $(1)$, there exists a sequence $\sequence {\alpha_j}_{j \mathop \in \N}$ in $\Bbb F$ such that: 

$\ds x = \sum_{j \mathop = 1}^\infty \alpha_j e_j$
We show that this expansion is unique.
Let $\sequence {\beta_j}_{j \mathop \in \N}$ be another sequence in $\Bbb F$ such that: 

$\ds x = \sum_{j \mathop = 1}^\infty \beta_j e_j$
Subtracting, we obtain: 

$\ds 0 = \sum_{j \mathop = 1}^\infty \paren {\beta_j - \alpha_j} e_j$
Using $(2)$, we then have: 

$\beta_j - \alpha_j = 0$ for each $j \in \N$
That is: 

$\beta_j = \alpha_j$ for each $j \in \N$.
So the expansion is unique, and $\set {e_n : n \mathop \in \N}$ satisfies the requirement of Definition 1.
$\blacksquare$





