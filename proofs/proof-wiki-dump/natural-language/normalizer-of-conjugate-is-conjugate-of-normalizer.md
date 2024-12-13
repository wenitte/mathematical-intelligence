# 

Source: https://proofwiki.org/wiki/Normalizer_of_Conjugate_is_Conjugate_of_Normalizer

Theorem
Let $G$ be a group.
Let $a \mathop \in G$.
Let $S$ be a subset of $G$.
Let $S^a$ denote the conjugate of $S$ by $a$.
Let $\map {N_G} S$ denote the normalizer of $S$ in $G$.

Then:

$\map {N_G} {S^a} = \paren {\map {N_G} S}^a$

That is, the normalizer of a conjugate is the conjugate of the normalizer:


Proof
From the definition of conjugate:

$S^a = \set {y \in G: \exists x \in S: y = a x a^{-1} } = a S a^{-1}$
From the definition of normalizer:

$\map {N_G} S = \set {x \in G: S^x = S}$
Thus:














\(\ds \map {N_G} {S^a}\)

\(=\)







\(\ds \set {x \in G: \paren {S^a}^x = S^a}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in G: x a S a^{-1} x^{-1} = a S a^{-1} }\)
























\(\ds \paren {\map {N_G} S}^a\)

\(=\)







\(\ds \set {x \in G: S^x = S}^a\)




















\(\ds \)

\(=\)







\(\ds \set {x \in G: x S x^{-1} = S}^a\)




















\(\ds \)

\(=\)







\(\ds \set {y \in G: \exists z \in \set {x \in G: x S x^{-1} = S}: y = a z a^{-1} }\)










Suppose that $x \in \map {N_G} S$.
It is to be shown that:

$a x a^{-1} \in \map {N_G} {S^a} = \map {N_G} {a S a^{-1} }$
To this end, compute:














\(\ds \paren {a x a^{-1} } a S a^{-1} \paren {a x a^{-1} }^{-1}\)

\(=\)







\(\ds \paren {a x a^{-1} } a S a^{-1} \paren {a x^{-1} a^{-1} }\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds a x S x^{-1} a^{-1}\)




















\(\ds \)

\(=\)







\(\ds a S a^{-1}\)





as $x \in \map {N_G} S$



Hence $a x a^{-1} \in \map {N_G} {S^a}$, and it follows that:

$z \in \paren {\map {N_G} S}^a \implies z \in \map {N_G} {S^a}$

Conversely, let $x \in \map {N_G} {S^a}$.
That is, let $x \in G$ such that $x a S a^{-1} x^{-1} = a S a^{-1}$.
Now if we can show that $a^{-1} x a \in \map {N_G} S$, then:

$x = a \left({a^{-1} x a}\right) a^{-1} \in \paren {\map {N_G} S}^a$
establishing the remaining inclusion.

Thus, we compute:














\(\ds \paren {a^{-1} x a} S \paren {a^{-1} x a}^{-1}\)

\(=\)







\(\ds a^{-1} x a S a^{-1} x^{-1} a\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds a^{-1} a S a^{-1} a\)





as $x \in \map {N_G} {S^a}$














\(\ds \)

\(=\)







\(\ds S\)









Combined with the above observation, this establishes that:

$z \in \map {N_G} {S^a} \implies z \in \paren {\map {N_G} S}^a$

Hence the result, by definition of set equality.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 48 \gamma$




