# 

Source: https://proofwiki.org/wiki/Image_of_Successor_Mapping_forms_Peano_Structure

Theorem
Let $\left({P, s, 0}\right)$ be a Peano structure.
Let $P'$ be the set $s \left[{P}\right]$, that is:

$P' = \left\{{s \left({n}\right): n \in P}\right\}$
Let $s'$ be the restriction of $s$ to $P'$.

Then $\left({P', s', s \left({0}\right)}\right)$ is also a Peano structure.


Proof
We need to check that all of Peano's axioms hold for $\left({P', s', s \left({0}\right)}\right)$.

Now from Restriction of Injection is Injection, because $s$ is an injection then so is $s'$.
So Axiom $(P3)$ holds.

Suppose that for some $n \in P'$, we would have:

$s' \left({n}\right) = s \left({0}\right)$
Then by definition of $s'$ as the restriction of $s$:

$s \left({n}\right) = s \left({0}\right)$
However, since $0 \notin P'$, it follows that $n \ne 0$.
This contradicts the fact that $s$ is an injection.
Hence for all $n \in P'$:

$s' \left({n}\right) \ne s \left({0}\right)$
So Axiom $(P4)$ holds as well.

Let $A \subseteq P'$ be such that $s \left({0}\right) \in A$ and:

$\forall z \in A: s' \left({z}\right) \in A$
Let $A_0$ be defined as:

$A_0 = A \cup \left\{{0}\right\}$
Then $0 \in A_0$, and since:

$\forall z \in A: s' \left({z}\right) \in A$
$s \left({0}\right) \in A$
it follows that:

$\forall z \in A_0: s \left({z}\right) \in A_0$
Therefore, since $\left({P, s, 0}\right)$ is a Peano structure:

$A_0 = P$
Therefore, since $s \left({n}\right) \ne 0$ for all $n \in P$:

$\forall n \in P: s \left({n}\right) \in A$
Hence, by definition of $P'$:

$P' \subseteq A$
By definition of set equality:

$A = P'$
meaning that Axiom $(P5)$ holds as well.

Having verified all axioms, it follows that $\left({P', s', s \left({0}\right)}\right)$ is a Peano structure.
$\blacksquare$





