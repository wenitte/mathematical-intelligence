# 

Source: https://proofwiki.org/wiki/Embedding_Ring_into_Ring_Structure_Induced_by_Ring_Operations



Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $S$ be a non-empty set.
Let $\struct {R^S, +', \circ'}$ be the ring of mappings, where $+'$ and $\circ'$ are the pointwise operations induced on $R^S$ by $+$ and $\circ$.

For each $r \in R$, let $f_r: S \to R$ be the mapping defined by:

$\forall s \in S, \map {f_r} s = r$
That is, $f_r$ is the constant mapping from $S$ to $r$.
Let $\phi: R \to R^S$ be the mapping from the ring $R$ to the ring $R^S$ defined by:

$\forall r \in R: \map \phi r = f_r$

Then:

$\phi$ is a ring monomorphism.


Proof
By the definition of a ring monomorphism it is sufficient to prove for all $r, r' \in R$ that:

$\quad \map \phi {r + r'} = \map \phi r +' \map \phi {r'}$
$\quad \map \phi {r \circ r'} = \map \phi r \circ' \map \phi {r'}$
$\quad r \ne r' \implies \map \phi r \ne \map \phi {r'}$
That is, for all $r, r' \in R$ it needs to be shown that:

$(1): \quad f_{r + r' } = f_r +' f_{r'}$
$(2): \quad f_{r \circ r' } = f_r \circ' f_{r'}$
$(3): \quad r \ne r' \implies f_r \ne f_{r'}$


$(1): f_{r + r'} = f_r +' f_{r'}$
For all $s \in S$:














\(\ds \map {f_{r + r'} } s\)

\(=\)







\(\ds r + r'\)





Definition of $f_{r + r'}$














\(\ds \)

\(=\)







\(\ds \map {f_r} s + \map {f_{r'} } s\)





Definition of $f_r$ and $f_{r'}$














\(\ds \)

\(=\)







\(\ds \map {\paren {f_r +' f_{r'} } } s\)





Definition of Pointwise Operation $+'$



The result follows.
$\Box$


$(2): f_{r \circ r'} = f_r \circ' f_{r'}$
For all $s \in S$:














\(\ds \map {f_{r \circ r'} } s\)

\(=\)







\(\ds r \circ r'\)





Definition of $f_{r \circ r'}$














\(\ds \)

\(=\)







\(\ds \map {f_r} s \circ \map {f_{r'} } s\)





Definition of $f_r$ and $f_{r'}$














\(\ds \)

\(=\)







\(\ds \map {\paren {f_r \circ' f_{r' } } } s\)





Definition of Pointwise Operation $\circ'$



The result follows.
$\Box$


$(3): r \ne r' \implies f_r \ne f_{r'}$
Let $s \in S$, then:

$\map {f_r} s = r \ne r' = \map {f_{r'} } s$
So:

$f_r \ne f_{r'}$
and the proof is complete.
$\blacksquare$





