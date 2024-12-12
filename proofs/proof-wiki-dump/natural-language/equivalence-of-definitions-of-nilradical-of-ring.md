# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Nilradical_of_Ring



Theorem
The following definitions of the concept of Nilradical of Ring are equivalent:

Let $A$ be a commutative ring.

Definition 1
The nilradical of $A$ is the subset consisting of all nilpotent elements of $A$.

Definition 2
Let $\Spec A$ denote the prime spectrum of $A$.

The nilradical of $A$ is:

$\ds \Nil A = \bigcap_{\mathfrak p \mathop \in \Spec A} \mathfrak p$
That is, it is the intersection of all prime ideals of $A$.


Proof
By Nilpotent Element is Contained in Prime Ideals, $\Nil A$ is contained in the intersection of all prime ideals.
It remains to prove the other inclusion.

Let $f \in A$ be not nilpotent.
Let $S$ be the set of ideals of $A$ that are disjoint from $\set {f^n: n \in \N}$.
By Zorn's Lemma, $S$ has a maximal element $P$.
In particular, $f \notin P$.
We want to show that $P$ is prime.
Let $a, b \in A$ with $a, b \notin P$.
Then the sums of ideals $\ideal a + P$ and $\ideal b + P$ contain $P$ strictly.
By the maximality of $P$, there exist $n, m \in \N$ with $f^n \in \ideal a + P$ and $f^m \in \ideal b + P$.
Then:

$f^{m + n} \in \ideal {a b} + P$
Thus:

$\ideal {a b} + P \notin S$
In particular:

$a b \notin P$
Thus $P$ is prime, and so:

$\ds f \notin \bigcap_{\mathfrak p \mathop \in \Spec A} \mathfrak p$
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1969: M.F. Atiyah and I.G. MacDonald: Introduction to Commutative Algebra: Chapter $1$: Rings and Ideals: $\S$ Nilradical and Jacobson Radical




