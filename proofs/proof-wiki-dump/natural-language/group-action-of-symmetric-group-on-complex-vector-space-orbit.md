# 

Source: https://proofwiki.org/wiki/Group_Action_of_Symmetric_Group_on_Complex_Vector_Space/Orbit



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $S_n$ denote the symmetric group on $n$ letters.
Let $V$ denote a vector space over the complex numbers $\C$.
Let $V$ have a basis:

$\BB := \set {v_1, v_2, \ldots, v_n}$

Let $*: S_n \times V \to V$ be a group action of $S_n$ on $V$ defined as:

$\forall \tuple {\rho, v} \in S_n \times V: \rho * v := \lambda_1 v_{\map \rho 1} + \lambda_2 v_{\map \rho 2} + \dotsb + \lambda_n v_{\map \rho n}$
where:

$v = \lambda_1 v_1 + \lambda_2 v_2 + \dotsb + \lambda_n v_n$

The orbit of an element $v \in V$ is:

$\ds \Orb v = \set {w \in V: \exists \rho \in S_n: w = \sum_{k \mathop = 1}^n \lambda_k v_{\map \rho k} }$


Proof
By definition:














\(\ds \Orb v\)

\(=\)







\(\ds \set {w \in V: \exists \rho \in S_n: w = \rho * v}\)





Definition of Orbit














\(\ds \)

\(=\)







\(\ds \set {w \in V: \exists \rho \in S_n: w = \rho * \sum_{k \mathop = 1}^n \lambda_k v_k}\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \set {w \in V: \exists \rho \in S_n: w = \sum_{k \mathop = 1}^n \lambda_k v_{\map \rho k} }\)





Definition of $*$



$\blacksquare$


Examples
Example 1
Let $n = 4$.
Let $v = v_1 + v_2 + v_3 + v_4$.
The orbit of $v$ is:

$\Orb v = \set v$


Example 2
Let $n = 4$.
Let $v = v_1 + v_3$.
The orbit of $v$ is:

$\Orb v = \set {v_1 + v_2, v_1 + v_3, v_1 + v_4, v_2 + v_3, v_2 + v_4, v_3 + v_4}$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Exercise $1$




