# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Supremum_of_Real-Valued_Function



Theorem
Let $S \subseteq \R$ be a subset of the real numbers.
Let $f: S \to \R$ be a real function on $S$.
The following definitions of the concept of Supremum of Real-Valued Function are equivalent:

Definition 1
The supremum of $f$ on $S$ is defined by:

$\ds \sup_{x \mathop \in S} \map f x := \sup f \sqbrk S$
where

$\sup f \sqbrk S$ is the supremum in $\R$ of the image of $S$ under $f$.
Definition 2
The supremum of $f$ on $S$ is defined as $\ds \sup_{x \mathop \in S} \map f x := K \in \R$ such that:

$(1): \quad \forall x \in S: \map f x \le K$
$(2): \quad \exists x \in S: \forall \epsilon \in \R_{>0}: \map f x > K - \epsilon$


Proof
Definition 1 implies Definition 2
Let $K \in \R$ be a supremum of $f$ by definition 1.
Then from the definition:

$\text{(a)}: \quad K$ is an upper bound of $\map f x$ in $\R$.
$\text{(b)}: \quad K \le M$ for all upper bounds $M$ of $f \sqbrk S$ in $\R$.
As $K$ is an upper bound it follows that:

$(1): \quad \forall x \in S: \map f x \le K$

Now let $\epsilon \in \R_{>0}$.
Aiming for a contradiction, suppose $(2)$ were false:

$\forall x \in S: \map f x \le K - \epsilon$

Then by definition, $K - \epsilon$ is an upper bound of $f$.
But by definition that means $K \le K + \epsilon$.
So by Real Plus Epsilon:

$K < K$
From this contradiction we conclude that:

$(2): \quad \exists x \in S: \forall \epsilon \in \R_{>0}: K - \epsilon < \map f x$
Thus $K$ is a supremum of $f$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $K$ be a supremum of $f$ by definition 2:

$(1) \quad \forall x \in S: \map f x \le K$
$(2) \quad \exists x \in S: \forall \epsilon \in \R_{>0}: K - \epsilon < \map f x$
From $(1)$ we have that $K$ is an upper bound of $f$.

Aiming for a contradiction, suppose that $K$ is not a supremum of $f$ by definition 1.
Then:

$\exists M \in \R, M < K: \forall x \in S: \map f x \le M$
Then:

$\exists \epsilon \in \R_{>0}: M = K - \epsilon$
Hence:

$\exists \epsilon \in \R_{>0}: \forall x \in S: \map f x \le K - \epsilon$
This contradicts $(2)$.
Thus $K$ is a supremum of $f$ by definition 1.
$\blacksquare$





