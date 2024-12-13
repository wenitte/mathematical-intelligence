# 

Source: https://proofwiki.org/wiki/Kleene_Closure_is_Free_Monoid



Theorem
Let $S$ be a set.
Let $S^*$ be its Kleene closure, and let $i: S \to S^*$ be the insertion of generators.

Then $\struct {S^*, i}$ is a free monoid over $S$.


Proof
By Kleene Closure is Monoid, $S^*$ is a monoid.
It remains to verify the universal property.


Existence
Let $\struct {N, \circ}$ be a monoid with identity $e_N$, and let $\card N$ be its underlying set.
Let $f: S \to \card N$ be a mapping.

Define $\bar f: S^* \to N$ by:

$\map {\bar f} - := e_N$
$\map {\bar f} {\sequence {s_1, \ldots, s_n} } := \map f {s_1} \circ \cdots \circ \map f {s_n}$
The first condition is precisely saying that $\bar f$ preserves identity elements, and by:














\(\ds \map {\bar f} {\sequence {s_1, \ldots, s_n} * \sequence {t_1, \ldots, t_m} }\)

\(=\)







\(\ds \map {\bar f} {\sequence {s_1, \ldots, s_n, t_1, \ldots t_m} }\)





Definition of Concatenation of Ordered Tuples














\(\ds \)

\(=\)







\(\ds \map f {s_1} \circ \cdots \circ \map f {s_n} \circ \map f {t_1} \cdots \circ \map f {t_m}\)





Definition of $\bar f$














\(\ds \)

\(=\)







\(\ds \paren {\map f {s_1} \circ \cdots \circ \map f {s_n} } \circ \paren {\map f {t_1} \circ \cdots \circ \map f {t_m} }\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds \map {\bar f} {\sequence {s_1 \ldots, s_n} } \circ \map {\bar f} {\sequence {t_1, \ldots, t_m} }\)





Definition of $\bar f$



it follows that $\bar f$ is a monoid homomorphism.
It also satisfies:

$\map {\bar f \circ i} s = \map {\bar f} {\sequence s} = \map f s$
and hence meets the set requirements.
$\Box$


Uniqueness
It remains to verify the uniqueness of $\bar f$.
So let $g: S^* \to N \in \mathbf{Mon}_1$ be a monoid homomorphism such that for all $s \in S$:
$\map {g \circ i} s = \map f s$

Then for any $\sequence {s_1, \ldots, s_n} \in S^*$, compute:














\(\ds \map g {\sequence {s_1, \ldots, s_n} }\)

\(=\)







\(\ds \map g {\sequence {s_1} * \cdots * \sequence {s_n} }\)





Definition of Concatenation of Ordered Tuples














\(\ds \)

\(=\)







\(\ds \map g {\sequence {s_1} } \circ \cdots \circ \map g {\sequence {s_n} }\)





$g$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \map f {s_1} \circ \cdots \circ \map f {s_n}\)





by assumption














\(\ds \)

\(=\)







\(\ds \map {\bar f} {\sequence {s_1, \ldots, s_n} }\)





Definition of $\bar f$



$\Box$

Hence $\struct {S^*, i}$ is a free monoid for $S$.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.7$: Proposition $1.9$




