# 

Source: https://proofwiki.org/wiki/Alternating_Bilinear_Form_is_Reflexive

Theorem
Let $\mathbb K$ be a field.
Let $V$ be a vector space over $\mathbb K$.
Let $b$ be a bilinear form on $V$.
Let $b$ be alternating.

Then $b$ is reflexive.


Proof
Let $\tuple {v, w} \in V \times V$ with $\map b {v, w} = 0$.
We have:














\(\ds 0\)

\(=\)







\(\ds \map b {v + w, v + w}\)





$b$ is alternating














\(\ds \)

\(=\)







\(\ds \map b {v, v} + \map b {v, w} + \map b {w, v} + \map b {w, w}\)





Definition of Bilinear Form (Linear Algebra)














\(\ds \)

\(=\)







\(\ds \map b {v, w} + \map b {w, v}\)





$b$ is alternating














\(\ds \)

\(=\)







\(\ds \map b {w, v}\)





$\map b {v, w} = 0$



Because $\tuple {v, w}$ was arbitrary, $b$ is reflexive.
$\blacksquare$


Also see
Bilinear Form is Reflexive iff Symmetric or Alternating




