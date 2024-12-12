# 

Source: https://proofwiki.org/wiki/Element_has_Idempotent_Power_in_Finite_Semigroup

Theorem
Let $\struct {S, \circ}$ be a finite semigroup.
For every element in $\struct {S, \circ}$, there is a power of that element which is idempotent.

That is:

$\forall x \in S: \exists i \in \N: x^i = x^i \circ x^i$


Proof
From Finite Semigroup Equal Elements for Different Powers, we have:

$\forall x \in S: \exists m, n \in \N: m \ne n: x^m = x^n$

Let $m > n$.
Let $n = k, m = k + l$.
Then:

$\forall x \in S: \exists k, l \in \N: x^k = x^{k + l}$

Now we show that:

$x^k = x^{k + l} \implies x^{k l} = x^{k l} \circ x^{k l}$
That is, that $x^{k l}$ is idempotent.
First:














\(\ds x^k\)

\(=\)







\(\ds x^{k + l}\)














\(\ds \leadsto \ \ \)





\(\ds x^k \circ x^l\)

\(=\)







\(\ds x^{k + l} \circ x^l\)





both sides ${} \circ x^l$








\(\ds \leadsto \ \ \)





\(\ds x^{k + l}\)

\(=\)







\(\ds x^{k + 2 l}\)





Index Laws for Semigroup: Sum of Indices‎








\(\ds \leadsto \ \ \)





\(\ds x^k\)

\(=\)







\(\ds x^{k + 2 l}\)





as $x^k = x^{k + l}$




From here we can easily prove by induction that:

$\forall n \in \N: x^k = x^{k + n l}$

In particular:

$x^k = x^{k + k l} = x^{k \paren {l + 1} }$

There are two cases to consider:

$(1): \quad$ If $l = 1$, then $x^k = x^{k \paren {l + 1} } = x^{2 k} = x^k \circ x^k$, and $x^{k l} = x^k$ is idempotent.
$(2): \quad$ If $l > 1$, then:













\(\ds x^k\)

\(=\)







\(\ds x^{k + k l}\)




















\(\ds \)

\(=\)







\(\ds x^{k \paren {l + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds x^k \circ x^{k \paren {l - 1} }\)

\(=\)







\(\ds x^{k \paren {l + 1} } \circ x^{k \paren {l - 1} }\)





both sides ${} \circ x^{k \paren {l - 1} }$








\(\ds \leadsto \ \ \)





\(\ds x^{k + k l - k}\)

\(=\)







\(\ds x^{kl + k + k l - k}\)





Index Laws for Semigroup: Sum of Indices








\(\ds \leadsto \ \ \)





\(\ds x^{k l}\)

\(=\)







\(\ds x^{k l + k l}\)




















\(\ds \)

\(=\)







\(\ds x^{k l} \circ x^{k l}\)









and again, $x^{k l}$ is idempotent.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Semigroups: Exercise $4$




