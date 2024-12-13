# 

Source: https://proofwiki.org/wiki/Rescaling_is_Linear_Transformation

Theorem
Let $\struct {R, +, \cdot}$ be a commutative ring.
Let $\struct {V, +, \circ}_R$ be an $R$-module.

Then for any $r \in R$, the rescaling:

$m_r: V \to V, v \mapsto r \circ v$
is a linear transformation.


Proof
Let $v \in V$ and $s \in R$.
Then:














\(\ds \map {m_r} {s \circ v}\)

\(=\)







\(\ds r \circ \paren {s \circ v}\)





Definition of Rescaling














\(\ds \)

\(=\)







\(\ds \paren {r \cdot s} \circ v\)





$V$ is an $R$-module














\(\ds \)

\(=\)







\(\ds \paren {s \cdot r} \circ v\)





$R$ is a commutative ring














\(\ds \)

\(=\)







\(\ds s \circ \paren {r \circ v}\)





$V$ is an $R$-module














\(\ds \)

\(=\)







\(\ds s \circ \map {m_r} v\)





Definition of Rescaling




Next, for $v, w \in V$:














\(\ds m_r \paren {v + w}\)

\(=\)







\(\ds r \circ \paren {v + w}\)





Definition of Rescaling














\(\ds \)

\(=\)







\(\ds r \circ v + r \circ w\)





$V$ is an $R$-module














\(\ds \)

\(=\)







\(\ds \map {m_r} v + \map {m_r} w\)





Definition of Rescaling




It follows that $m_r$ is a linear transformation.
$\blacksquare$





