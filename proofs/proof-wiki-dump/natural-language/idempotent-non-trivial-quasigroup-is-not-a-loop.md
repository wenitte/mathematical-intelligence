# 

Source: https://proofwiki.org/wiki/Idempotent_Non-Trivial_Quasigroup_is_Not_a_Loop

Theorem
Let $\left({S, \circ}\right)$ be an idempotent quasigroup whose underlying set $S$ comprises more than one element.

Then $\left({S, \circ}\right)$ is not an algebra loop, that is, it has no identity element.


Proof
Aiming for a contradiction, suppose $\left({S, \circ}\right)$ has an identity element $e$.
Then by Identity Element is Idempotent:

$e \circ e = e$

Consider $e' \in S$ where $e' \ne e$.
Since $e$ is an identity element:

$e' \circ e = e'$
Also, by assumption, $\circ$ is idempotent, so:

$e' \circ e' = e'$

Then by the definition of a quasigroup, the left regular representation:

$\lambda_{e'}: S \to S, x \mapsto e' \circ x$
is a permutation, and in particular, an injection.

Hence $e' = e$, which contradicts our assumption that $e' \ne e$.
So $\left({S, \circ}\right)$ has no identity element and is not an algebra loop.
$\blacksquare$





