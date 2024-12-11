# 

Source: https://proofwiki.org/wiki/Abelian_Group_Factored_by_Prime

Theorem
Let $G$ be a finite abelian group.
Let $p$ be a prime.
Factor the order of $G$ as:

$\order G = m p^n$
such that $p$ does not divide $m$.
Then:

$G = H \times K$
where:

$H = \set {x \in G : x^{p^n} = e}$
and:

$K = \set {x \in G : x^m = e}$
Furthermore:

$\order H = p^n$


Corollary
A finite abelian group $G$ can be factored as follows:
Let $\order G = \ds \prod_{i \mathop = 1}^k p_i^{n_i}$ be the prime factorization of the order of $G$.
Then we have:

$G = \ds \prod_{i \mathop = 1}^k H_i$, where $H_i = \set {x \in G : x^{p_i^{n_i} } = e}$
This factorization is unique up to ordering of the factors.


Proof
From Subgroup of Elements whose Order Divides Integer, both $H$ and $K$ are subgroups of $G$.
Also, because $G$ is abelian, $H$ and $K$ are normal by Subgroup of Abelian Group is Normal.

In order to prove $G = H \times K$, by the Internal Direct Product Theorem it suffices to show that $G = H K$ and $H \cap K = \set e$.

Since we have $\gcd \set {m, p^n} = 1$, there are integers $s$ and $t$ such that $1 = s m + t p^n$ by Bézout's Identity. 
Let $s$ and $t$ be two such integers.
So:

$\forall x \in G: x = x^{s m + t p^n} = x^{s m} x^{t p^n}$

From Element to Power of Group Order is Identity:

$x^{\order G} = e$
Therefore:

$\paren {x^{s m} }^{p^n} = \paren {x^{p^n m} }^s = e^s = e$
and:

$\paren {x^{t p^n} }^m = \paren {x^{p^n m} }^t = e^t = e$
By definition, $x^{s m} \in H$ and $x^{t p^n} \in K$.

We conclude that $G = H K$.

Now suppose that some $x \in H \cap K$.
Then $x^{p^n} = e = x^m$, so from Element to Power of Multiple of Order is Identity $\order x$ divides both $p^n$ and $m$.
Since $p$ does not divide $m$, it follows that $\order x = 1$.
Therefore, by Identity is Only Group Element of Order 1:

$x = e$
Thus:

$H \cap K = \set e$

It follows that $G = H \times K$.

Suppose that $p \divides \order K$.
From Cauchy's Lemma (Group Theory), this implies that there is some element (call it $k$) of $K$ with order $p$.
But we also have $k^m = e$ from the definition of $K$, so by Element to Power of Multiple of Order is Identity we must have $p \divides m$, a contradiction.
We conclude that:

$p$ does not divide $\order K$
It follows that:

$p^n \divides \order H$

Aiming for a contradiction, suppose a prime $q$ (with $q \ne p$) divides $\order H$.
Again from Cauchy's Lemma (Group Theory), this implies that there is some element $h$ of $H$ with order $q$.
But since $h^{p^n} = e$ from the definition of $H$, Element to Power of Multiple of Order is Identity gives us $q \divides p^n$, a contradiction.
It follows by Proof by Contradiction that $q$ does not divide $\order H$.

We conclude $\order H = p^n$, as desired.
$\blacksquare$





