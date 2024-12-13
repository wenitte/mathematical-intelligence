# 

Source: https://proofwiki.org/wiki/Norm_on_Bounded_Linear_Functional_is_Finite

Theorem
Let $V$ be a normed vector space.
Let $L$ be a bounded linear functional on $V$.
Let $\norm L$ denote the norm on $L$ defined as:

$\norm L = \inf \set {c > 0: \forall v \in V: \size {L v} \le c \norm v_V}$

Then:

$\norm L < \infty$


Proof
By definition of a bounded linear functional:

$\exists c \in \R_{> 0}: \forall v \in V: \size{L v} \le c \norm v_V$
Hence:

$\set {\lambda > 0: \forall v \in V: \size {L v} \le \lambda \norm v_V} \ne \O$

By definition:
$\set {\lambda > 0: \forall v \in V: \size {L v} \le \lambda \norm v_V}$ is bounded below by $0$.

From the Greatest Lower Bound Property:

$\norm L = \inf \set {\lambda > 0: \forall v \in V: \size {L v} \le \lambda \norm v_V}$ exists.

We have:














\(\ds \norm L\)

\(\le\)







\(\ds c\)





Definition of Infimum














\(\ds \)

\(<\)







\(\ds \infty\)





because $c \in \R_{>0}$



The result follows.
$\blacksquare$





