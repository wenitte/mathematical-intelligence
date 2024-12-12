# 

Source: https://proofwiki.org/wiki/Coset_Product_is_Well-Defined



Theorem
Let $\struct {G, \circ}$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $a, b \in G$.

Then the coset product:

$\paren {a \circ N} \circ \paren {b \circ N} = \paren {a \circ b} \circ N$
is well-defined.


Proof 1
Let $N \lhd G$ where $G$ is a group.
Let $a, a', b, b' \in G$ such that:

$a \circ N = a' \circ N$
and:

$b \circ N = b' \circ N$
To show that the coset product is well-defined, we need to demonstrate that:

$\paren {a \circ b} \circ N = \paren {a' \circ b'} \circ N$
So:














\(\ds a \circ N\)

\(=\)







\(\ds a' \circ N\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds a^{-1} \circ a'\)

\(\in\)







\(\ds N\)





Cosets are Equal iff Product with Inverse in Subgroup








\(\ds \leadsto \ \ \)





\(\ds b^{-1} \circ a^{-1} \circ a'\)

\(\in\)







\(\ds b^{-1} \circ N\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds b^{-1} \circ a^{-1} \circ a'\)

\(\in\)







\(\ds N \circ b^{-1}\)





$N$ is a normal subgroup








\(\ds \leadsto \ \ \)

\(\ds \exists n \in N: \, \)



\(\ds b^{-1} \circ a^{-1} \circ a'\)

\(=\)







\(\ds n \circ b^{-1}\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds \paren{b^{-1} \circ a^{-1} \circ a' } \circ b'\)

\(=\)







\(\ds \paren{n \circ b^{-1} } \circ b'\)





Group Axiom $\text G 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds \paren{b^{-1} \circ a^{-1} } \circ \paren {a' \circ b'}\)

\(=\)







\(\ds \paren{n \circ b^{-1} } \circ b'\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b}^{-1} \circ \paren {a' \circ b'}\)

\(=\)







\(\ds \paren{n \circ b^{-1} } \circ b'\)





Inverse of Group Product








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b}^{-1} \circ \paren {a' \circ b'}\)

\(=\)







\(\ds n \circ \paren{ b^{-1} \circ b' }\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b}^{-1} \circ \paren {a' \circ b'}\)

\(\in\)







\(\ds N\)





Definition of Subset Product




By Cosets are Equal iff Product with Inverse in Subgroup:

$\paren {a \circ b}^{-1} \circ \paren {a' \circ b'} \in N \implies \paren {a \circ b} \circ N = \paren {a' \circ b'} \circ N$
and the proof is complete.
$\blacksquare$


Proof 2
Let $N \lhd G$ where $G$ is a group.

Consider $\paren {a \circ N} \circ \paren {b \circ N}$ as a subset product:

$\paren {a \circ N} \circ \paren {b \circ N} = \set {a \circ n_1 \circ b \circ n_2: n_1, n_2 \in N}$
This is justified by Coset Product of Normal Subgroup is Consistent with Subset Product Definition.

Since $N$ is normal, each conjugate $b^{-1} \circ N \circ b$ is contained in $N$.
So for each $n_1 \in N$ there is some $n_3 \in N$ such that $b^{-1} \circ n_1 \circ b = n_3$.
So, if $a \circ n_1 \circ b \circ n_2 \in \paren {a \circ N} \circ \paren {b \circ N}$, it follows that:














\(\ds a \circ n_1 \circ b \circ n_2\)

\(=\)







\(\ds a \circ b \circ b^{-1} \circ n_1 \circ b \circ n_2\)




















\(\ds \)

\(=\)







\(\ds a \circ b \circ n_3 \circ n_2\)




















\(\ds \)

\(\in\)







\(\ds \paren {a \circ b} \circ N\)





Definition of Subset Product














\(\ds \)

\(\in\)







\(\ds N \circ b^{-1}\)





Definition of Normal Subgroup



That is:

$\paren {a \circ N} \circ \paren {b \circ N} \subseteq \paren {a \circ b} \circ N$

Let $n \in N$ be arbitrary.
Then:














\(\ds \paren {a \circ b} \circ n\)

\(\in\)







\(\ds \paren {a \circ b} \circ N\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ e \circ b} \circ n\)

\(\in\)







\(\ds \paren {a \circ b} \circ N\)





Group Axiom $\text G 2$: Existence of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ e} \circ \paren {b \circ n}\)

\(\in\)







\(\ds \paren {a \circ b} \circ N\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ e} \circ \paren {b \circ n}\)

\(\in\)







\(\ds \paren {a \circ N} \circ \paren {b \circ N}\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds a \circ  \paren {b \circ n}\)

\(\in\)







\(\ds \paren {a \circ N} \circ \paren {b \circ N}\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds a \circ \paren {b \circ N}\)

\(\subseteq\)







\(\ds \paren {a \circ N} \circ \paren {b \circ N}\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b} \circ N\)

\(\subseteq\)







\(\ds \paren {a \circ N} \circ \paren {b \circ N}\)





Subset Product within Semigroup is Associative: Corollary




So:

$\paren {a \circ N} \circ \paren {b \circ N} \subseteq \paren {a \circ b} \circ N$
and

$\paren {a \circ b} \circ N \subseteq \paren {a \circ N} \circ \paren {b \circ N}$
The result follows by definition of set equality.
$\blacksquare$


Proof 3
Let $N \lhd G$ where $G$ is a group.

Let $a, a', b, b' \in G$ such that:

$N \circ a = N \circ a'$
and:

$N \circ b = N \circ b'$
We need to show that:

$N \circ \paren {a \circ b} = N \circ \paren {a' \circ b'}$

So:














\(\ds N \circ \paren {a \circ b}\)

\(=\)







\(\ds \paren {N \circ a} \circ b\)





Subset Product within Semigroup is Associative: Corollary














\(\ds \)

\(=\)







\(\ds \paren {N \circ a'} \circ b\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a' \circ N} \circ b\)





Definition of Normal Subgroup














\(\ds \)

\(=\)







\(\ds a' \circ \paren {N \circ b}\)





Subset Product within Semigroup is Associative: Corollary














\(\ds \)

\(=\)







\(\ds a' \circ \paren {N \circ b'}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a' \circ N} \circ b'\)





Subset Product within Semigroup is Associative: Corollary














\(\ds \)

\(=\)







\(\ds \paren {N \circ a'} \circ b'\)





Definition of Normal Subgroup














\(\ds \)

\(=\)







\(\ds N \circ \paren {a' \circ b'}\)





Subset Product within Semigroup is Associative: Corollary



$\blacksquare$


Proof 4
Let $N \lhd G$ where $G$ is a group.
Let $a, b \in G$.
We have:














\(\ds \paren {a \circ N} \circ \paren {b \circ N}\)

\(=\)







\(\ds a \circ N \circ b \circ N\)





Subset Product within Semigroup is Associative














\(\ds \)

\(=\)







\(\ds a \circ b \circ N \circ N\)





Definition of Normal Subgroup














\(\ds \)

\(=\)







\(\ds \paren {a \circ b} \circ N\)





Product of Subgroup with Itself



$\blacksquare$


Proof 5
Let $N \lhd G$ where $G$ is a group.
Let $a, a', b, b' \in G$ such that:

$a \circ N = a' \circ N$
and:

$b \circ N = b' \circ N$
To show that the coset product is well-defined, we need to demonstrate that:

$\paren {a \circ b} \circ N = \paren {a' \circ b'} \circ N$
So:














\(\ds a \circ N\)

\(=\)







\(\ds a' \circ N\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\in\)







\(\ds a' \circ N\)





Definition of Left Coset








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds a' \circ n_1\)





for some $n_1 \in N$




Similarly, $b' = b \circ n_2$ for some $n_2 \in N$.






\(\ds \leadsto \ \ \)





\(\ds a' \circ b'\)

\(=\)







\(\ds a \circ n_1 \circ b \circ n_2\)










But $N \circ b = b \circ N$, as $N$ is normal, and so:






\(\ds \leadsto \ \ \)





\(\ds a' \circ b'\)

\(=\)







\(\ds a \circ b \circ n_3 \circ n_2\)





as $n_1 \circ b = b \circ n_3$ for some $n_3 \in N$








\(\ds \leadsto \ \ \)





\(\ds a' \circ b'\)

\(\in\)







\(\ds \paren{ a \circ b } \circ N\)





as $n_3 \circ n_2 \in N$








\(\ds \leadsto \ \ \)





\(\ds \paren{ a' \circ b' } \circ N\)

\(=\)







\(\ds \paren{ a \circ b }\circ N\)





Definition of Left Coset



$\blacksquare$


Also see
Coset Product of Normal Subgroup is Consistent with Subset Product Definition‎
Congruence Modulo Normal Subgroup is Congruence Relation‎


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): normal subgroup
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): normal subgroup




