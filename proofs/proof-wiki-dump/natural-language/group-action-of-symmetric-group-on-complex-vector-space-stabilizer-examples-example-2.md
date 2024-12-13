# 

Source: https://proofwiki.org/wiki/Group_Action_of_Symmetric_Group_on_Complex_Vector_Space/Stabilizer/Examples/Example_2

Example of Orbit of Group Action of Symmetric Group on Complex Vector Space
Let $S_n$ denote the symmetric group on $n$ letters.
Let $V$ denote a vector space over the complex numbers $\C$.

Let $V$ have a basis:

$\BB := \set {v_1, v_2, \ldots, v_n}$
Let $*: S_n \times V \to V$ be a group action of $S_n$ on $V$ defined as:

$\forall \tuple {\rho, v} \in S_n \times V: \rho * v := \lambda_1 v_{\map \rho 1} + \lambda_2 v_{\map \rho 2} + \dotsb + \lambda_n v_{\map \rho n}$
where:

$v = \lambda_1 v_1 + \lambda_2 v_2 + \dotsb + \lambda_n v_n$

Let $n = 4$.
Let $v = v_1 + v_3$.
The stabilizer of $v$ is:

$\Stab v = \set {e, \tuple {1 3}, \tuple {2 4}, \tuple {1 3} \tuple {2 4} }$


Proof













\(\ds \Stab v\)

\(=\)







\(\ds \set {\rho \in S_4: \rho * v = v}\)





Definition of Stabilizer














\(\ds \)

\(=\)







\(\ds \set {\rho \in S_4: \rho * \paren {v_1 + v_3} = v_1 + v_3}\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \set {\rho \in S_4: v_{\map \rho 1} + v_{\map \rho 3} = v_1 + v_3}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \set {\rho \in S_4: \set {\map \rho 1, \map \rho 3} = \set {1, 3} }\)





simplifying




Thus $\Stab v$ consists of all the permutations of $S_4$ which either:

fix $1$ and $3$
or:

transpose $1$ and $3$.

We have that:

$e$ and $\tuple {2 4}$ are the permutations which fix $1$ and $3$
$\tuple {1 3}$ and $\tuple {1 3} \tuple {2 4}$ are the permutations which transpose $1$ and $3$.
Hence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Exercise $1 \ \text {(b)}$




