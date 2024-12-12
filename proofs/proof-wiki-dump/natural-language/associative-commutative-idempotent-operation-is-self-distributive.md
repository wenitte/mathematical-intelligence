# 

Source: https://proofwiki.org/wiki/Associative_Commutative_Idempotent_Operation_is_Self-Distributive

Theorem
Let $\struct {S, \circ}$ be an algebraic structure, such that:

$(1): \quad \circ$ is associative
$(2): \quad \circ$ is commutative
$(3): \quad \circ$ is idempotent.
Then $\circ$ is self-distributive.

That is:

$\forall a, b, c \in S: \paren {a \circ b} \circ \paren {a \circ c} = a \circ b \circ c = \paren {a \circ c} \circ \paren {b \circ c}$


Proof













\(\ds \paren {a \circ b} \circ \paren {a \circ c}\)

\(=\)







\(\ds a \circ \paren {b \circ a} \circ c\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds a \circ \paren {a \circ b} \circ c\)





$\circ$ is commutative














\(\ds \)

\(=\)







\(\ds \paren {a \circ a} \circ b \circ c\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds a \circ b \circ c\)





$\circ$ is idempotent



$\Box$















\(\ds \paren {a \circ c} \circ \paren {b \circ c}\)

\(=\)







\(\ds a \circ \left({c \circ b}\right) \circ c\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds a \circ \paren {b \circ c} \circ c\)





$\circ$ is commutative














\(\ds \)

\(=\)







\(\ds a \circ b \circ \paren {c \circ c}\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds a \circ b \circ c\)





$\circ$ is idempotent



$\blacksquare$





