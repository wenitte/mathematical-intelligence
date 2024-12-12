# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Infimum_of_Real-Valued_Function



Theorem
Let $S \subseteq \R$ be a subset of the real numbers.
Let $f: S \to \R$ be a real function on $S$.
The following definitions of the concept of Infimum of Real-Valued Function are equivalent:

Definition 1
The infimum of $f$ on $S$ is defined by:

$\ds \inf_{x \mathop \in S} \map f x = \inf f \sqbrk S$
where

$\inf f \sqbrk S$ is the infimum in $\R$ of the image of $S$ under $f$.
Definition 2
The infimum of $f$ on $S$ is defined as $\ds \inf_{x \mathop \in S} \map f x := k \in \R$ such that:

$(1): \quad \forall x \in S: k \le \map f x$
$(2): \quad \forall \epsilon \in \R_{>0}: \exists x \in S: \map f x < k + \epsilon$


Proof

Work In ProgressIn particular: Use Characterizing Property of Infimum of Subset of Real NumbersYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Definition 1 implies Definition 2
Let $k \in \R$ be an infimum of $f$ by definition 1.
Then from the definition:

$\text{(a)}: \quad k$ is a lower bound of $\map f x$ in $\R$.
$\text{(b)}: \quad k \ge m$ for all lower bounds $m$ of $f \sqbrk S$ in $\R$.
As $k$ is a lower bound it follows that:

$(1): \quad \forall x \in S: k \le \map f x$

Now let $\epsilon \in \R_{>0}$.
Aiming for a contradiction, suppose $(2)$ were false:

$\forall x \in S: k + \epsilon \le \map f x$

Then by definition, $k + \epsilon$ is a lower bound of $f$.
But by definition that means $k \ge k + \epsilon$.
So by Real Plus Epsilon:

$k > k$
From this contradiction we conclude that:

$(2): \quad \exists x \in S: \forall \epsilon \in \R_{>0}: \map f x < k + \epsilon$
Thus $k$ is an infimum of $f$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $k$ be an infimum of $f$ by definition 2:

$(1): \quad \forall x \in S: k \le \map f x$
$(2): \quad \exists x \in S: \forall \epsilon \in \R_{>0}: \map f x < k + \epsilon$
From $(1)$ we have that $k$ is a lower bound of $f$.

Aiming for a contradiction, suppose that $k$ is not an infimum of $f$ by definition 1.
Then:

$\exists m \in \R, m > k: \forall x \in S: \map f x \ge m$
Then:

$\exists \epsilon \in \R_{>0}: m = k + \epsilon$
Hence:

$\exists \epsilon \in \R_{>0}: \forall x \in S: k + \epsilon \le \map f x$
This contradicts $(2)$.
Thus $k$ is an infimum of $f$ by definition 1.
$\blacksquare$





